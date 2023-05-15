import QRCode from "react-qr-code";

export default function QrCode(): JSX.Element {
  const value = "https://www.youtube.com/watch?v=i5mqA9EoCA8";
  return (
    <div
      style={{
        height: "auto",
        margin: "0 auto",
        maxWidth: 64,
        width: "100%",
      }}
    >
      <QRCode
        size={256}
        style={{ height: "auto", maxWidth: "100%", width: "100%" }}
        value={value}
        viewBox={`0 0 256 256`}
      />
    </div>
  );
}
