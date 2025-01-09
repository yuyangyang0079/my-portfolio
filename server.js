import express from 'express';
import nodemailer from 'nodemailer';
import cors from 'cors';
import bodyParser from 'body-parser';

// Initialize Express app
const app = express();

// Middleware
app.use(cors({
  origin: 'http://localhost:5173', // Frontend URL
  methods: 'POST',
  allowedHeaders: 'Content-Type',
}));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Set up the email transporter (Gmail in this example)
const transporter = nodemailer.createTransport({
  service: 'gmail',  // Gmail service
  auth: {
    user: 'yuyangyang0079@gmail.com',  // Your email address
    pass: 'znzqymrrscmgiltc',  // Your app-specific password
  },
});

// POST route to handle form submission
app.post('/api/send', (req, res) => {
  const { name, email, message } = req.body;  // Get the form data from the request body

  // Validate incoming data
  if (!name || !email || !message) {
    return res.status(400).json({ success: false, message: 'All fields are required.' });
  }

  const mailOptions = {
    from: email,  // Sender email address
    to: 'yuyangyang0079@gmail.com',  // Your email address where you want to receive the contact form submissions
    subject: `New message from ${name}`,  // Subject line
    text: `You have received a new message from ${name} (${email}):\n\n${message}`,  // Email body
  };

  // Send the email using Nodemailer
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error('Error occurred:', error);
      return res.status(500).json({ success: false, message: `Email not sent: ${error.message}` });
    } else {
      console.log('Email sent:', info.response);
      return res.status(200).json({ success: true, message: 'Email sent successfully!' });
    }
  });
});

// Start the server
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
