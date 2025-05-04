"use server"

import { google } from "googleapis"

// Google Sheets API configuration
const SCOPES = ["https://www.googleapis.com/auth/spreadsheets"]

export async function submitEmailToSheet(email: string) {
  try {
    if (!email || !email.includes("@")) {
      return {
        success: false,
        message: "Valid email is required",
      }
    }

    console.log("Attempting to submit email to Google Sheet:", email)

    // Get environment variables
    const SPREADSHEET_ID = process.env.GOOGLE_SHEET_ID
    const CLIENT_EMAIL = process.env.GOOGLE_CLIENT_EMAIL
    const PRIVATE_KEY = process.env.GOOGLE_PRIVATE_KEY

    // Check if environment variables are set
    if (!SPREADSHEET_ID || !CLIENT_EMAIL || !PRIVATE_KEY) {
      console.error("Missing required environment variables for Google Sheets API")
      return {
        success: false,
        message: "Server configuration error",
      }
    }

    // Format the private key correctly
    const formattedKey = PRIVATE_KEY.replace(/\\n/g, "\n")

    // Authenticate with Google
    const auth = new google.auth.GoogleAuth({
      credentials: {
        client_email: CLIENT_EMAIL,
        private_key: formattedKey,
      },
      scopes: SCOPES,
    })

    const sheets = google.sheets({ version: "v4", auth })

    // Prepare the data to append
    const values = [[email, new Date().toISOString()]]

    // Make sure the sheet exists
    const SHEET_NAME = "Emails"

    try {
      // Try to get the sheet to see if it exists
      await sheets.spreadsheets.values.get({
        spreadsheetId: SPREADSHEET_ID,
        range: `${SHEET_NAME}!A1:B1`,
      })
    } catch (error) {
      // If sheet doesn't exist, create it with headers
      try {
        await sheets.spreadsheets.batchUpdate({
          spreadsheetId: SPREADSHEET_ID,
          requestBody: {
            requests: [
              {
                addSheet: {
                  properties: {
                    title: SHEET_NAME,
                  },
                },
              },
            ],
          },
        })

        // Add headers
        await sheets.spreadsheets.values.update({
          spreadsheetId: SPREADSHEET_ID,
          range: `${SHEET_NAME}!A1:B1`,
          valueInputOption: "RAW",
          requestBody: {
            values: [["Email", "Timestamp"]],
          },
        })
      } catch (sheetError) {
        // Sheet might already exist, continue
        console.log("Sheet might already exist:", sheetError)
      }
    }

    // Append data to the spreadsheet
    console.log("Appending data to spreadsheet...")
    const response = await sheets.spreadsheets.values.append({
      spreadsheetId: SPREADSHEET_ID,
      range: `${SHEET_NAME}!A:B`,
      valueInputOption: "USER_ENTERED",
      requestBody: {
        values,
      },
    })

    console.log("Google Sheets API response:", response.data)

    return {
      success: true,
      message: "Email submitted successfully",
    }
  } catch (error) {
    console.error("Error submitting email:", error)
    return {
      success: false,
      message: "Failed to submit email. Please try again later.",
    }
  }
}

// Fallback function that just logs the email if Google Sheets fails
export async function logEmailSubmission(email: string) {
  console.log("Email submission (fallback):", email)
  return {
    success: true,
    message: "Email received",
  }
}
