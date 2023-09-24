import React from "react";

interface AvatarProps {
  url: string;
  borderClass: string;
}

const Avatar = ({
    url = "",
    borderClass = "border-teal-400"
} : AvatarProps) => {
  console.log(url,borderClass);
  
  return (
      <div
        className={`relative aspect-square min-w-[100px] max-w-[250px] md:max-w-none max-h-[100px] sm:max-h-none overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600 border-2 ${borderClass}`}
      >
        {url.length===0 ? <svg
          className={`absolute w-[120%] h-[120%] text-gray-400 -left-[8%]`}
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
            clip-rule="evenodd"
          ></path>
        </svg> : 
        <img loading="lazy" className="h-full" src={url} alt="profile"/>
        }
      </div>
  );
};

Avatar.propTypes = {};

export default Avatar;
