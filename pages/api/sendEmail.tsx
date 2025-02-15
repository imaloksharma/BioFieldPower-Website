import nodemailer from "nodemailer";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method Not Allowed" });
  }

  const { fullName, email, phone, companyName, companyEmail, companyPhone, location, message } = req.body;

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: process.env.TO_EMAIL, // Your own email address
    subject: "New Contact Form Submission",
    text: `
      Name: ${fullName}
      Email: ${email}
      Phone: ${phone}
      Company Name: ${companyName}
      Company Email: ${companyEmail}
      Company Phone: ${companyPhone}
      Location: ${location}
      Message: ${message}
    `,
  };

  try {
    await transporter.sendMail(mailOptions);
    return res.status(200).json({ message: "Email sent successfully" });
  } catch (error) {
    return res.status(500).json({ message: "Error sending email", error });
  }
}
