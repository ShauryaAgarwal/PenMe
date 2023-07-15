const nodemailer = require('nodemailer');

export default async (req, res) => {
  // Get the form data from the request body
  const { name, email, message } = req.body;

  // Create a transporter with your email configuration
  const transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
      user: 'sunil@indecagroup.com', // Your Gmail address
      pass: 'Penme@19', // Your Gmail password or application-specific password
    },
  });

  // Create the email message
  const mailOptions = {
    from: 'sunil@indecagroup.com', // Sender email address (must be the same as the authenticated user)
    to: 'shaurya220@gmail.com', // Recipient email address
    subject: 'New Contact Form Submission',
    text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
  };

  try {
    // Send the email
    await transporter.sendMail(mailOptions);
    res.status(200).send('Email sent successfully');
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).send('An error occurred while sending the email');
  }
};
