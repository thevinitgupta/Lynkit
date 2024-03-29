import React from "react";
import LynkCard from "./LynkCard";
import { LynkData, useFetchUserLynks } from "../utilities/lynks";



const LynkList = () => {
  const { data, isError, isLoading } = useFetchUserLynks();

  if(isLoading) {
    console.log("loading")
    return <div className={`h-[90%] w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-3`}
    >
      <div className={`text-4xl font-hero animate-pulse h-full flex justify-center items-center`}>{
        "Loading..."
      }</div>
    </div>
  }
  else if( isError || data.length===0){
    <div className={`h-[90%] w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-3`}
    >
      <div className={`text-4xl font-hero h-full flex justify-center items-center`}>{
        isError ? "Error Fetching Data! Try Again" : "You have not created any links yet!" 
      }</div>
    </div>
  }
  else 
  return (
    <div
      className={`h-[90%] w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-3`}
    >
      {data?.map((lynkObj : LynkData, index: number) => (
        <LynkCard
          key={index + lynkObj._id}
          shortId={lynkObj.shortId}
          url={lynkObj.originalLynk}
          clickCount={lynkObj.clickCount}
        />
      ))}
    </div>
  );
};

export default LynkList;
