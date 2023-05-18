export default function CountdownBanner() {
  return (
    <div>
      <video className="relative h-[720px] w-full object-cover"
        src="./promovideo.mp4" height={1920}
        autoPlay
        loop
        muted />
      <div className="absolute bg-black w-full h-full bottom-0 opacity-60" />
    </div>
  )
}