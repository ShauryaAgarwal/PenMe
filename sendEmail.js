const nodemailer = require("nodemailer");

async function sendEmail(req, res) {
  // Retrieve the form data from the request body
  const { name, email, message } = req.body;

  // Create a transporter using your email service credentials
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
      subject: "New Message from PenMe Contact Form",
      text: `
        Name: ${name}
        Email: ${email}
        Message: ${message}
      `,
    });

    // Email sent successfully
    res.status(200).json({ message: "Email sent successfully!" });
  } catch (error) {
    // An error occurred while sending the email
    console.error("Error sending email:", error);
    res.status(500).json({ message: "Failed to send email." });
  }
}

module.exports = sendEmail;
