import Image from "next/image";
export default function Contributors(): JSX.Element {
  return (
    <div className="flex justify-around flex-wrap">
      <Image
        className=""
        src={
          "https://res.cloudinary.com/dfwhxsxqb/image/upload/v1684383224/Ramada-Logo_j9tpke.jpg"
        }
        width={200}
        height={100}
        quality={100}
        alt="contributors"
      />
      <Image
        className=""
        src={
          "https://res.cloudinary.com/dfwhxsxqb/image/upload/v1684383942/SHANGRI_LA_HOTEL_zpowjc.webp"
        }
        width={200}
        height={100}
        quality={100}
        alt="contributors"
      />
      <Image
        className=""
        src={
          "https://res.cloudinary.com/dfwhxsxqb/image/upload/v1684384126/Novotel_Logo_r2qs1l.png"
        }
        width={200}
        height={100}
        quality={100}
        alt="contributors"
      />
      <Image
        className=""
        src={
          "https://res.cloudinary.com/dfwhxsxqb/image/upload/v1684383920/download_mgfzi8.png"
        }
        width={200}
        height={100}
        quality={100}
        alt="contributors"
      />
    </div>
  );
}
