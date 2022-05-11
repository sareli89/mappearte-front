import React, { useState, useEffect } from "react";
import classNames from "classnames";
import Link from "next/link";
import { getArtist } from "../lib/api";

export default function GridAvatar() {
  const [artists, setArtist] = useState([]);

  useEffect(() => {
    getArtist().then((response) => {
      const countImages = response.artists.length;
      const imageInitial = countImages - 12;
      const avatars = response.artists.slice(imageInitial, countImages);
      setArtist(avatars);
    });
  }, []);

  return (
    <>
      <div
        className={classNames(
          "bg-backgroundP",
          "px-6 md:px-20",
          "py-6 md:py-10",
          "mx-2 my-2",
          "columns-3 md:columns-5"
        )}
      >
        {artists.map(({ imgArtist: avatar, _id: artistId }, index) => {
          const artistImage = avatar || "/icons/noavatar.png";
          return (
            <div
              className={classNames("flex flex-row justify-center ")}
              key={index}
            >
              <Link href={`/artist/${artistId}`}>
                <img
                  src={artistImage}
                  alt="artista"
                  className={classNames(
                    "object-cover cursor-pointer",
                    "rounded-full border-2 border-solid border-white",
                    "w-20 h-20 md:w-20 md:h-20 lg:w-40 lg:h-40 2xl:w-44 2xl:h-44",
                    "my-3 md:my-5 lg:my-8",
                    "mx-3 md:mx-5 lg:mx-8"
                  )}
                />
              </Link>
            </div>
          );
        })}
      </div>
    </>
  );
}
