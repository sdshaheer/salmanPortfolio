// app/api/sendEmail/route.js
import nodemailer from 'nodemailer';

export async function POST(request) {
    // Parse the incoming request body
    const { name, email, message } = await request.json();

    // Create a nodemailer transporter
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.NEXT_PUBLIC_EMAIL_ID,
            pass: process.env.NEXT_PUBLIC_PASS_KEY,
        },
    });

    const mailOptions = {
        from: email,
        to: process.env.NEXT_PUBLIC_EMAIL_ID,
        replyTo: email,
        subject: `New message from ${name}`,
        text: message,
    };

    try {
        await transporter.sendMail(mailOptions);
        return new Response(JSON.stringify({ success: true }), { status: 200 });
    } catch (error) {
        console.error('Error sending email:', error);
        return new Response(JSON.stringify({ success: false, error: error.message }), { status: 500 });
    }
}
