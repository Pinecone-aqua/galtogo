import { BranchItems, ILocation } from "@/utils/constants"
import { useState } from "react";
import { GoogleMap, MarkerF, useLoadScript } from "@react-google-maps/api";




export default function BranchSection() {
  const [listId, setListId] = useState<string | number>(0);
  const [currentLocation, setCurrentLocation] = useState<ILocation>({ lat: 47.903535, lng: 106.942957 })
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: `${process.env.NEXT_PUBLIC_GOOGLEMAP_API}`
  });





  return (
    <div>
      <div className="mx-auto ">
        <div className="flex justify-center my-10">
          <h1 className="font-extrabold w-full text-center text-[24px] sm:text-[32px] md:text-[40px]"><span className="bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent ">Yuna restaurant’s</span> branches & locations</h1>
        </div>
      </div>
      
      <div className="flex flex-col gap-4">
        <div className="flex flex-wrap justify-center gap-2">
          {BranchItems.map((item, index) =>
            listId == index ? (
              <div key={index} className="flex gap-2 items-center p-3 bg-white shadow-[0_2px_20px_rgb(0,0,0,0.05)] rounded-lg cursor-pointer font-medium" onClick={() => { setListId(item.id), setCurrentLocation(item.location) }}>
                <div className="text-[#7136ED]">{item.icon}</div>
                <div className="text-sm text-[#393939]">{item.branch}</div>
              </div>
            ) : (
              <div key={index} className="flex gap-2 items-center p-3 bg-white rounded-lg cursor-pointer" onClick={() => { setListId(item.id), setCurrentLocation(item.location) }}>
                <div className="text-slate-400">{item.icon}</div>
                <div className="text-sm text-slate-400">{item.branch}</div>
              </div>
            ))}
        </div>

        <div className="w-full h-[320px] rounded-lg overflow-auto">
          {!isLoaded ? (
            <h1>Loading...</h1>
          ) : (
            <GoogleMap
              mapContainerClassName="map-container"
              center={currentLocation}
              zoom={19}
            >

              <MarkerF
                position={currentLocation}

              />

            </GoogleMap>
          )}
        </div>
      </div>
    </div>
  )
}