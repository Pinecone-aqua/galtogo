import { BranchItems, ILocation } from "@/utils/constants";
import { useState } from "react";
import { GoogleMap, MarkerF, useLoadScript } from "@react-google-maps/api";
// import Image from "next/image";

export default function BranchSection() {
  const [listId, setListId] = useState<string | number>(0);
  const [currentLocation, setCurrentLocation] = useState<ILocation>({
    lat: 47.903535,
    lng: 106.942957,
  });
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: `${process.env.NEXT_PUBLIC_GOOGLEMAP_API}`,
  });

  return (
    <div>
      <div className="mx-auto">
        <div className="flex justify-center my-10 md:flex">
          <h1 className="font-extrabold mx-[12px] text-center text-[32px] sm:text-[40px] md:text-[64px]">
            <span className="bg-gradient-to-r from-[#0D5C63] to-[#13BCCB] bg-clip-text text-transparent ">
              Yuna restaurant’s
            </span>{" "}
            салбар байршил
          </h1>
        </div>
      </div>

      <div className="flex flex-col gap-8 md:flex md:flex-row md:items-center">
        <div className="flex overflow-x-auto no-scrollbar gap-3 md:flex md:flex-col md:w-[50%]">
          {BranchItems.map((item, index) =>
            listId == index ? (
              <div
                key={index}
                className="flex gap-2 items-center px-[20px] py-[32px] bg-white shadow-[0_2px_20px_rgb(0,0,0,0.05)] rounded-lg cursor-pointer font-medium"
                onClick={() => {
                  setListId(item.id), setCurrentLocation(item.location);
                }}
              >
                <div className="text-[#0D5C63] ">{item.icon}</div>
                <div className="text-[#393939] w-max">{item.branch}</div>
              </div>
            ) : (
              <div
                key={index}
                className="flex gap-2 items-center px-[20px] py-[32px] bg-white rounded-lg cursor-pointer md:w-[320px]"
                onClick={() => {
                  setListId(item.id), setCurrentLocation(item.location);
                }}
              >
                <div className="text-slate-400">{item.icon}</div>
                <div className="text-slate-400 w-max">{item.branch}</div>
              </div>
            )
          )}
        </div>

        <div className="w-full h-[250px] sm:h-[320px] md:rounded-lg md:h-[640px] overflow-auto">
          {!isLoaded ? (
            <h2>Loading...</h2>
          ) : (
            <GoogleMap
              mapContainerClassName="map-container"
              center={currentLocation}
              zoom={19}
            >
              <MarkerF position={currentLocation} />
            </GoogleMap>
          )}
        </div>
      </div>
    </div>
  );
}
