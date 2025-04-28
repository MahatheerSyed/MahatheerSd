// Force Node.js runtime instead of Edge to ensure dns.lookup is available
export const dynamic = "force-dynamic"

import { NextResponse } from "next/server"
import nodemailer from "nodemailer"

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { name, email, subject, message } = body

    // Validate request data
    if (!name || !email || !subject || !message) {
      return NextResponse.json({ success: false, error: "All fields are required" }, { status: 400 })
    }

    // Create transporter - now using full Node.js runtime with dns.lookup support
    const transporter = nodemailer.createTransport({
      host: process.env.EMAIL_HOST,
      port: Number(process.env.EMAIL_PORT || "587"),
      secure: process.env.EMAIL_SECURE === "true",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASSWORD,
      },
      // No need for TLS rejection override in full Node.js runtime
    })

    // Email content
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: "sdmahatheer123@gmail.com", // Hardcoded recipient
      replyTo: email,
      subject: `Portfolio Contact: ${subject}`,
      html: `
        <h1>New Contact Form Submission</h1>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Subject:</strong> ${subject}</p>
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, "<br>")}</p>
      `,
      text: `
        New Contact Form Submission
        
        Name: ${name}
        Email: ${email}
        Subject: ${subject}
        
        Message:
        ${message}
      `,
    }

    // Send email with proper Node.js runtime support
    const info = await transporter.sendMail(mailOptions)
    console.log("Email sent successfully:", info.messageId)

    return NextResponse.json({
      success: true,
      messageId: info.messageId,
    })
  } catch (error: any) {
    console.error("Contact API error:", error)
    return NextResponse.json(
      {
        success: false,
        error: "Failed to send email",
        details: error.message,
      },
      { status: 500 },
    )
  }
}
