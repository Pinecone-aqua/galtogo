// // pages/api/check-phone.ts
// import { NextApiHandler } from "next";
// import { MongoClient } from "mongodb";

// const uri = process.env.MONGODB_URI || "";

// const client = new MongoClient(uri, {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// });

// const handler: NextApiHandler = async (req, res) => {
//   const { phoneNumber } = req.query;
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

//     res.json({ exists });
//   } catch (error) {
//     res.status(500).json({ error: error.message });
//   } finally {
//     await client.close();
//   }
// };

// export default handler;
