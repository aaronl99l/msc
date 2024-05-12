import sendgrid from "@sendgrid/mail";

sendgrid.setApiKey(process.env.SENDGRID_API_KEY);

async function sendEmail(req, res) {
  try {
    await sendgrid.send({
      to: "imataco487@gmail.com", // Your email where you'll receive emails
      from: "aaronleon38.99@gmail.com", // your website email address here
      subject: `[Lead from website] : ${req.body.subject}`,
      html: "<p>Ello!</p>",
    });
  } catch (error) {
    // console.log(error);
    return res.status(error.statusCode || 500).json({ error: error.message });
  }

  return res.status(200).json({ error: "" });
}
export default sendEmail;