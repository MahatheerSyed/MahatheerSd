"use server"

export async function sendContactEmail(formData: FormData) {
  try {
    const name = formData.get("name") as string
    const email = formData.get("email") as string
    const subject = formData.get("subject") as string
    const message = formData.get("message") as string

    // Validate form data
    if (!name || !email || !subject || !message) {
      return {
        success: false,
        error: "All fields are required",
      }
    }

    // Use the API route which has proper Node.js runtime support
    try {
      // Call our API route which uses force-dynamic to ensure Node.js runtime
      const response = await fetch(`${process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000"}/api/contact`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          subject,
          message,
        }),
      })

      if (!response.ok) {
        throw new Error(`API responded with status: ${response.status}`)
      }

      const result = await response.json()

      if (result.success) {
        console.log("Email sent successfully via API route")
        return {
          success: true,
          messageId: result.messageId,
        }
      } else {
        throw new Error(result.error || "API route failed")
      }
    } catch (error: any) {
      console.error("Email sending failed:", error)

      // For development/preview environments, simulate success
      if (process.env.NODE_ENV !== "production") {
        console.log("Development mode - Email would be sent with:", {
          to: "sdmahatheer123@gmail.com",
          subject: `Portfolio Contact: ${subject}`,
          from: email,
          name,
          message: message.substring(0, 100) + (message.length > 100 ? "..." : ""),
        })

        return {
          success: true,
          development: true,
        }
      }

      throw error
    }
  } catch (error: any) {
    console.error("Error in contact form:", error)

    return {
      success: false,
      error: `Unable to send email. Please contact me directly at sdmahatheer123@gmail.com`,
    }
  }
}
