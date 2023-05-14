// // pages/api/verify-otp.ts
// import { NextApiHandler } from "next";
// import { auth } from "../../firebase";
// import { MongoClient } from "mongodb";
// import { v4 as uuidv4 } from "uuid";

// const uri = process.env.MONGODB_URI || "";

// const client = new MongoClient(uri, {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// });

// const handler: NextApiHandler = async (req, res) => {
//   const { verificationId, code, phoneNumber } = req.body;
//   if (!verificationId || !code || !phoneNumber) {
//     res.status(400).json({ error: "Missing required parameters." });
//     return;
//   }

//   try {
//     const credential = auth.PhoneAuthProvider.credential(verificationId, code);
//     const userCredential = await auth.signInWithCredential(credential);
//     const { uid } = userCredential.user;

//     await client.connect();
//     const db = client.db("myapp");
//     const users = db.collection("users");

//     const user = await users.findOne({ phoneNumber: phoneNumber });
//     if (!user) {
//       const newUser = {
//         _id: uuidv4(),
//         phoneNumber: phoneNumber,
//         uid: uid,
//       };
//       await users.insertOne(newUser);
//     }

//     res.json({ uid });
//   } catch (error) {
//     res.status(500).json({ error: error.message });
//   } finally {
//     await client.close();
//   }
// };

// export default handler;
