const nodemailer = require("nodemailer");

export default async function handler(req, res) {
  const { name, email, message } = req.body;

  // Create a Nodemailer transporter using your email service details
  const transporter = nodemailer.createTransport({
    service: "YourEmailService",
    auth: {
      user: "YourEmailAddress",
      pass: "YourEmailPassword",
    },
  });

  try {
    // Send the email
    await transporter.sendMail({
      from: "YourEmailAddress",
      to: "user@gmail.com",
      subject: "New Contact Form Submission",
      text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
    });

    // Return a success response
    res.status(200).json({ message: "Email sent successfully" });
  } catch (error) {
    // Return an error response
    console.error(error);
    res.status(500).json({ message: "Failed to send email" });
  }
}
