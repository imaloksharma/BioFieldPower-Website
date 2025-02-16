import { NextApiRequest, NextApiResponse } from "next";
import nodemailer from "nodemailer";
// import nodemailer from "nodemailer";
// import type { Transporter } from "nodemailer";


export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method Not Allowed" });
  }

  try {
    const { fullName, email, phone, companyName, companyEmail, companyPhone, location, message } = req.body;

    const transporter = nodemailer.createTransport({
      host: process.env.EMAIL_HOST,
      port: Number(process.env.EMAIL_PORT),
      secure: false, // Use `true` for port 465, `false` for 587
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const mailOptions = {
      from: process.env.EMAIL_FROM,
      to: process.env.EMAIL_USER,
      subject: `New Request Form Submission from ${fullName}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <table border="1" cellpadding="10" cellspacing="0" style="border-collapse: collapse; width: 100%;">
          <tr><th style="background-color: #f4f4f4;">Field</th><th>Details</th></tr>
          <tr><td><strong>Full Name</strong></td><td>${fullName}</td></tr>
          <tr><td><strong>Email</strong></td><td>${email}</td></tr>
          <tr><td><strong>Phone</strong></td><td>${phone}</td></tr>
          <tr><td><strong>Company Name</strong></td><td>${companyName}</td></tr>
          <tr><td><strong>Company Email</strong></td><td>${companyEmail}</td></tr>
          <tr><td><strong>Company Phone</strong></td><td>${companyPhone}</td></tr>
          <tr><td><strong>Location</strong></td><td>${location}</td></tr>
          <tr><td><strong>Message</strong></td><td>${message}</td></tr>
        </table>
      `,
    };

    await transporter.sendMail(mailOptions);

    return res.status(200).json({ success: true, message: "Email sent successfully!" });
   } catch (error) {
    console.error("Email send error:", error);
  
    if (error instanceof Error) {
      return res.status(500).json({ success: false, error: error.message });
    } else {
      return res.status(500).json({ success: false, error: "An unknown error occurred." });
    }
  }
  
}
