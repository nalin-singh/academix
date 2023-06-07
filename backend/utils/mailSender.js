const nodemailer = require("nodemailer");

const mailSender = async (email, title, body) => {
	try {
		const transporter = nodemailer.createTransport({
			host: process.env.MAIL_HOST,
			auth: { user: process.env.MAIL_USER, pass: process.env.MAIL_PASS },
		});

		const info = await transporter.sendMail({
			from: "Academix",
			to: `${email}`,
			subject: `${title}`,
			html: `${body}`,
		});
		console.log("\nEmail Transporter Service Successful\n\n" + info);
	} catch (error) {
		console.log("\nEmail Transporter Service Compromised\n\n" + error);
	}
};
