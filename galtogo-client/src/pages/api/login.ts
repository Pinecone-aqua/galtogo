// // pages/api/login.ts
// import { NextApiHandler } from "next";
// import { MongoClient } from "mongodb";
// import { auth } from "../../firebase";

// const uri = process.env.MONGODB_URI || "";

// const client = new MongoClient(uri, {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// });

// const handler: NextApiHandler = async (req, res) => {
//   const { phoneNumber } = req.body;
//   if (!phoneNumber) {
//     res.status(400).json({ error: "Missing phone number." });
//     return;
//   }

//   try {
//     await client.connect();
//     const db = client.db("myapp");
//     const users = db.collection("users");

//     const user = await users.findOne({ phoneNumber: phoneNumber });
//     const exists = Boolean(user);

//     if (exists) {
//       // Phone number exists in database, authenticate with Firebase.
//       const verificationResult = await auth.signInWithPhoneNumber(phoneNumber);
//       res.json({ verificationId: verificationResult.verificationId });
//     } else {
//       // Phone number doesn't exist in database, register a new user.
//       const verificationResult = await auth.signInWithPhoneNumber(phoneNumber);
//       const { verificationId } = verificationResult;
//       const code = "123456"; // TODO: replace with actual code sent to phone number
//       const response = await fetch("/api/verify-otp", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({ verificationId, code, phoneNumber }),
//       });
//       const data = await response.json();
//       const { uid } = data;

//       // Save the new user to the database.
//       const newUser = { phoneNumber: phoneNumber, uid: uid };
//       await users.insertOne(newUser);

//       res.json({ verificationId: verificationResult.verificationId });
//     }
//   } catch (err) {
//     console.error(err);
//     res.status(500).json({ error: "Internal server error" });
//   } finally {
//     await client.close();
//   }
// };

// export default handler;
