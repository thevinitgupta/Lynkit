import React from "react";
import LynkCard from "./LynkCard";

const LynkList = () => {
  return (
    <div
      className={`h-full w-full relative grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-3`}
    >
      {[
        { id: "sdg2354s", url: "http://hello.com", clicks: 40 },
        { id: "sdg2354s", url: "http://hello.com", clicks: 40 },
        { id: "sdg2354s", url: "http://hello.com", clicks: 40 },
        { id: "sdg2354s", url: "http://hello.com", clicks: 40 },
        { id: "sdg2354s", url: "http://hello.com", clicks: 40 },
        { id: "sdg2354s", url: "http://hello.com", clicks: 40 },
        { id: "sdg2354s", url: "http://hello.com", clicks: 40 },
        { id: "sdg2354s", url: "http://hello.com", clicks: 40 },
        { id: "sdg2354s", url: "http://hello.com", clicks: 40 },
        { id: "sdg2354s", url: "http://hello.com", clicks: 40 },
        { id: "sdg2354s", url: "http://hello.com", clicks: 40 },
      ].map((lynkObj, index) => (
        <LynkCard
          key={index + lynkObj.id}
          shortId={lynkObj.id}
          url={lynkObj.url}
          clickCount={lynkObj.clicks}
          index={index}
        />
      ))}
    </div>
  );
};

export default LynkList;
