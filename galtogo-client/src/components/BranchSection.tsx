
import { BranchItems, ILocation } from "@/utils/constants"
import { useState } from "react";
import { GoogleMap, MarkerF, useLoadScript } from "@react-google-maps/api";




export default function BranchSection() {
  const [listId, setListId] = useState<string | number>(0);
  const [currentLocation, setCurrentLocation] = useState<ILocation>({ lat: 47.903535, lng: 106.942957 })
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: 'AIzaSyDa-pNru7NHz88HgPZlCrtqRnqOpm5LUNg',
  });

  console.log(currentLocation)



  return (
    <div>
      <div className="mx-auto flex flex-col justify-center w-[1364px]  py-20">
        <div className="flex justify-center text-[64px]">
          <h1 className="bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent font-extrabold px-2">Yuna restaurant’s</h1>
          <h1 className="px-2 font-extrabold">branches&</h1>
        </div>
        <h1 className="mx-auto text-[64px] font-extrabold px-2">locations</h1>
      </div>
      <div className="mx-auto flex gap-[16px] w-[1364px]">
        <div className="flex flex-col justify-center gap-3">
          {BranchItems.map((item, index) =>
            listId == index ? (
              <div key={index} className="flex gap-2 items-center bg-white shadow-[0_2px_20px_rgb(0,0,0,0.05)] p-5 w-[350px] rounded-lg cursor-pointer font-medium" onClick={() => { setListId(item.id), setCurrentLocation(item.location) }}>
                <div className="text-[#7136ED]">{item.icon}</div>
                <div className="text-lg text-[#393939]">{item.branch}</div>
              </div>
            ) : (
              <div key={index} className="flex gap-2 items-center bg-white  p-5 w-[350px] rounded-lg cursor-pointer" onClick={() => { setListId(item.id), setCurrentLocation(item.location) }}>
                <div className="text-slate-400">{item.icon}</div>
                <div className="text-lg text-slate-400">{item.branch}</div>
              </div>
            ))}
        </div>

        <div className="w-full rounded-lg overflow-hidden h-[520px]">
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