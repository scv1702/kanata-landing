export const sendToDiscord = async (payload: any) => {
  const webhookUrl = process.env.DISCORD_WEBHOOK_URL;

  if (!webhookUrl) {
    console.error("Discord webhook URL is not set in environment variables");
    return ;
  }

  try {
    const response = await fetch(webhookUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });

    if (!response.ok) {
      console.error("Failed to send message to Discord:", response.statusText);
    } else {
      console.log("Message sent to Discord successfully");
    }
  } catch (error) {
    console.error("Error sending message to Discord:", error);
  }
};