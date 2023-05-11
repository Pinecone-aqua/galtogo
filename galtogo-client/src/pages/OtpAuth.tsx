// // pages/verify-otp.tsx
// import { useRouter } from "next/router";
// import { useState } from "react";

// export default function VerifyOtpPage() {
//   const router = useRouter();
//   const { phoneNumber, verificationId } = router.query;
//   const [code, setCode] = useState("");

//   async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
//     event.preventDefault();
//     const response = await fetch("/api/verify-otp", {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify({ phoneNumber, verificationId, code }),
//     });
//     const data = await response.json();
//     const { uid } = data;
//     router.push(`/account?uid=${uid}`);
//   }

//   return (
//     <form onSubmit={handleSubmit}>
//       <p>Enter the code sent to {phoneNumber}:</p>
//       <label>
//         Code:
//         <input
//           type="number"
//           value={code}
//           onChange={(event) => setCode(event.target.value)}
//           required
//         />
//       </label>
//       <button type="submit">Verify</button>
//     </form>
//   );
// }
