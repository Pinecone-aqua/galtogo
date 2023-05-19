import Image from "next/image";

const contributors = [
  {
    imageUrl:
      "https://res.cloudinary.com/dfwhxsxqb/image/upload/v1684383224/Ramada-Logo_j9tpke.jpg",
    altText: "Ramada",
  },
  {
    imageUrl:
      "https://res.cloudinary.com/dfwhxsxqb/image/upload/v1684383942/SHANGRI_LA_HOTEL_zpowjc.webp",
    altText: "Shangri-La Hotel",
  },
  {
    imageUrl:
      "https://res.cloudinary.com/dfwhxsxqb/image/upload/v1684384126/Novotel_Logo_r2qs1l.png",
    altText: "Novotel",
  },
  {
    imageUrl:
      "https://res.cloudinary.com/dfwhxsxqb/image/upload/v1684383920/download_mgfzi8.png",
    altText: "BlueSky",
  },
  {
    imageUrl:
      "https://res.cloudinary.com/dfwhxsxqb/image/upload/v1684419400/naadam-club_gmmkg7.png",
    altText: "Naadam",
  },
  {
    imageUrl:
      "https://res.cloudinary.com/dfwhxsxqb/image/upload/v1684419523/central-tower-logo-kopyas%C4%B1_C%CC%A7al%C4%B1s%CC%A7ma-Yu%CC%88zeyi-1-kopya-300x212_auq3o8.png",
    altText: "Central",
  },
];

export default function Contributors(): JSX.Element {
  return (
    <div className="flex justify-around flex-wrap ml-20 mr-20 mb-10 mt-10">
      {contributors.map((contributor, index) => (
        <div key={index} className="flex justify-center items-center m-2">
          <Image
            src={contributor.imageUrl}
            width={200}
            height={100}
            quality={100}
            alt={contributor.altText}
            className="contributor-image"
          />
        </div>
      ))}
    </div>
  );
}
