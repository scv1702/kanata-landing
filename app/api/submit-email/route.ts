import { NextResponse } from "next/server"
import { google } from "googleapis"
import { sendToDiscord } from "@/app/api/submit-email/discord"

export async function POST(request: Request) {
  const { email, comment, campaign } = await request.json();

  if (!email || !email.includes("@")) {
    return NextResponse.json({ error: "Valid email is required" }, { status: 400 });
  }
  if (campaign && campaign !== "kanata-light" && campaign !== "kanata-heavy") {
    return NextResponse.json({ error: "Invalid campaign" }, { status: 400 });
  }

  console.log("Received submission:", { email, comment: comment || "(No comment)" });

  const SPREADSHEET_ID = process.env.GOOGLE_SHEET_ID;
  const CLIENT_EMAIL = process.env.GOOGLE_CLIENT_EMAIL;
  const PRIVATE_KEY = process.env.GOOGLE_PRIVATE_KEY;

  if (!SPREADSHEET_ID || !CLIENT_EMAIL || !PRIVATE_KEY) {
    console.error("Missing required environment variables");
    return NextResponse.json({ error: "Server configuration error" }, { status: 500 });
  }

  const auth = new google.auth.JWT({
    email: CLIENT_EMAIL,
    key: PRIVATE_KEY.replace(/\\n/g, "\n"),
    scopes: ["https://www.googleapis.com/auth/spreadsheets"],
  });
  const sheets = google.sheets({ version: "v4", auth });
  const SHEET_NAME = "Emails";

  try {
    await sheets.spreadsheets.values.append({
      spreadsheetId: SPREADSHEET_ID,
      range: `${SHEET_NAME}!A:D`,
      valueInputOption: "USER_ENTERED",
      requestBody: {
        values: [[
          email,
          comment || "",
          campaign || "",
          new Date().toLocaleString("ko-KR", { timeZone: "Asia/Seoul" })
        ]],
      },
    });

    const payload = {
      embeds: [
        {
          title: "📬 새로운 사전 예약이 접수되었습니다!",
          fields: [
            {
              name: "📧 이메일",
              value: email,
            },
            {
              name: "💬 의견",
              value: comment || "(의견 없음)",
            },
            {
              name: "🎯 캠페인",
              value: campaign || "(캠페인 없음)",
            },
          ],
        },
      ],
    };

    await sendToDiscord(payload);

    return NextResponse.json({
      success: true,
      message: "Submission successful",
    });
  } catch (error) {
    console.error("Error in submit-email API route:", error);

    const payload = {
      embeds: [
        {
          title: "⚠️ 오류가 발생했습니다.",
          fields: [
            {
              name: "📧 이메일",
              value: email,
            },
            {
              name: "💬 의견",
              value: comment || "(의견 없음)",
            },
            {
              name: "🎯 캠페인",
              value: campaign || "(캠페인 없음)",
            },
            {
              name: "⚠️ 오류 메시지",
              value: error instanceof Error ? error.message : String(error),
            },
          ],
        },
      ],
    };

    await sendToDiscord(payload);

    return NextResponse.json(
      {
        error: "Failed to submit",
        details: error instanceof Error ? error.message : String(error),
      },
      { status: 500 },
    );
  }
}