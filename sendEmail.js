const nodemailer = require("nodemailer");

export default async function handler(req, res) {
  const { name, email, message } = req.body;

  // Create a Nodemailer transporter using your email service details
  const transporter = nodemailer.createTransport({
    service: "Gmail",
    auth: {
      user: "shaurya220@gmail.com",
      pass: "bumble17",
    },
  });

  try {
    // Send the email
    await transporter.sendMail({
      from: "shaurya220@gmail.com",
      to: "shaurya5525@gmail.com",
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
