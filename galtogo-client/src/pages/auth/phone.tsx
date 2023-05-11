// import { useState } from "react";
// import { useRouter } from "next/router";
// import { auth } from "../../config/firebase-config";

// // const auth = app.auth();

// export default function PhoneAuth() {
//   const router = useRouter();
//   const [phoneNumber, setPhoneNumber] = useState("");

//   const handlePhoneNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     setPhoneNumber(e.target.value);
//   };

//   const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
//     e.preventDefault();

//     const phoneNumberRegex = /^\+[1-9]\d{1,14}$/;
//     if (!phoneNumberRegex.test(phoneNumber)) {
//       alert("Please enter a valid phone number with country code.");
//       return;
//     }

//     try {
//       // Check if the phone number already exists in the database
//       const res = await fetch(`/api/check-phone?phoneNumber=${phoneNumber}`);
//       const { exists } = await res.json();
//       if (exists) {
//         await auth.signInWithPhoneNumber(phoneNumber);
//         router.push("/account");
//       } else {
//         // Register a new user with the phone number
//         const result = await auth.createUserWithEmailAndPassword(
//           `${phoneNumber}@example.com`,
//           "password"
//         );
//         const id = result.user?.uid;
//         await fetch("/api/register-phone", {
//           method: "POST",
//           body: JSON.stringify({ id, phoneNumber }),
//         });
//         await auth.signInWithPhoneNumber(phoneNumber);
//         router.push("/account");
//       }
//     } catch (error) {
//       alert(error.message);
//     }
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <label>
//         Phone number:
//         <input
//           type="tel"
//           value={phoneNumber}
//           onChange={handlePhoneNumberChange}
//         />
//       </label>
//       <button type="submit">Submit</button>
//     </form>
//   );
// }
