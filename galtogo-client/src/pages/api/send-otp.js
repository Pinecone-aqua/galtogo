// pages/api/send-otp.ts
// import { NextApiHandler } from "next";
// import { auth } from "../../firebase";

// const handler: NextApiHandler = async (req, res) => {
//   const { phoneNumber } = req.body;
//   if (!phoneNumber) {
//     res.status(400).json({ error: "Missing phone number." });
//     return;
//   }

//   try {
//     const verificationResult = await auth.signInWithPhoneNumber(phoneNumber);
//     res.json({ verificationId: verificationResult.verificationId });
//   } catch (error) {
//     res.status(500).json({ error: error.message });
//   }
// };

// export default handler;
