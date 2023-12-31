const nodemailer = require('nodemailer');

export default async (req, res) => {
  try {
    console.log('Received request to send email');

    // Get the form data from the request body
    const { name, email, message } = req.body;
    console.log('Form data:', { name, email, message });

    // Create a transporter with your email configuration
    const transporter = nodemailer.createTransport({
      service: 'Gmail',
      auth: {
        user: process.env.EMAIL_USER, //Sender email address
        pass: process.env.EMAIL_PASSWORD, //Sender email password
      },
    });

    // Create the email message
    const mailOptions = {
      from: process.env.EMAIL_USER, // Sender email address (must be the same as the authenticated user)
      to: 'contact@penme.app', // Recipient email address
      subject: 'New Contact Form Submission',
      text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
    };

    // Send the email
    console.log('Sending email...');
    await transporter.sendMail(mailOptions);
    console.log('Email sent successfully');

    res.status(200).send('Email sent successfully');
  } catch (error) {
    console.log('Caught an error:', error);
    console.error('Error sending email:', error);
    res.status(500).send('An error occurred while sending the email');
  }
};
