import { NextResponse } from "next/server"
import nodemailer from "nodemailer"

export async function GET() {
  try {
    console.log("Testing email configuration...")

    // Create email transporter
    const transporter = nodemailer.createTransport({
      host: process.env.EMAIL_HOST,
      port: Number(process.env.EMAIL_PORT || "587"),
      secure: process.env.EMAIL_SECURE === "true",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASSWORD,
      },
    })

    // Verify transporter connection
    await transporter.verify()
    console.log("SMTP connection verified successfully")

    // Email content for test
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: "sdmahatheer123@gmail.com",
      subject: "Test Email from Portfolio",
      html: "<h1>Test Email</h1><p>This is a test email to verify the email configuration.</p>",
      text: "Test Email\n\nThis is a test email to verify the email configuration.",
    }

    // Send test email
    const info = await transporter.sendMail(mailOptions)
    console.log("Test email sent successfully! Message ID:", info.messageId)

    return NextResponse.json({
      success: true,
      message: "Email configuration is working correctly",
      messageId: info.messageId,
    })
  } catch (error: any) {
    console.error("Email test failed:", error)

    return NextResponse.json(
      {
        success: false,
        error: error.message,
        code: error.code,
        command: error.command,
      },
      { status: 500 },
    )
  }
}
