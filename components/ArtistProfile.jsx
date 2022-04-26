import React, { useState, useEffect } from "react";
import classNames from "classnames";
import { useRouter } from "next/router";
import { useQRCode } from 'next-qrcode';

import { getUserById } from "../lib/api";
import { getArtistById } from "../lib/api";

import {
  Nav,
  OpacityCard,
  ButtonEdit,
  GridIndex,
  GridProfile,
  DarkBlueCard,
  Footer,
} from "."; 

export default function Profile () {
  const [role, setRole] = useState()
  const [artist, setArtist] = useState();
  const [isArtist, setIsArtist] = useState(false)
  const [user, setUser] = useState();
  const router = useRouter();
  const { Canvas } = useQRCode();

  useEffect( () => {
    const id = localStorage.getItem("id");
    const role = localStorage.getItem("role");
    const token = localStorage.getItem("token");

    if (!token) {
      router.push("/Login")
    } 
      setRole(role);
      if (role === 'artist') {
        getArtistById(id).then( ({artists}) => {
          setArtist(artists);
          setIsArtist(true); 
        }, {})
      } else if (role === "user"){
        getUserById(id).then( ({users})  =>{
          console.log('Antes del set: ',users);
        setUser(users);
        }, {})
      }
    }, []
  )
  const defaultImage = "/icons/noavatar.png";
  
  return (
    <>
      <Nav />
      <div
        className={classNames(
          "bg-artist bg-cover bg-center bg-no-repeat",
          "flex justify-center items-center",
          "h-96",
          "w-full",
          "px-6 md:px-20",
          "mt-24"
        )}
      >
        <OpacityCard
          className={classNames(
            "h-64 w-64 lg:h-72 lg:w-72",
            "justify-center",
            " absolute flex flex-col align-middle"
          )}
        >
          <div className="flex justify-center mt-3">
            <img
              src={ artist?.imgArtist || defaultImage}
              alt="Icono de perfil de usuario"
              className={classNames(
                "bg-backgroundP object-cover", 
                "rounded-full border-2 border-solid border-orangeP",
                "w-24 h-24 justify-center",
                "md:w-32 md:h-32",
                "lg:w-40 lg:h-40",
                "2xl:w-60 2xl:h-60"
              )}
            />
          </div>
          <div className="flex justify-center mt-2">
            <h3 className="font-bold text-lg mt-2 font-Mali">{ artist?.artist }</h3>
          </div>
          <div className="flex justify-end mt-1">
            <ButtonEdit
            route="/edit"
            />
          </div>  
        </OpacityCard>
        <div className={classNames("basis-5/12 mt-4")}>
          {/* <ButtonCamera
          onClick={editProfile}
          /> */}
        </div>
      </div>
        
      <DarkBlueCard 
        className="grid grid-cols-1 md:grid-cols-3 gap-4 place-items-stretch mt-20"
      >
        <div className="md:span-1 h-50 w-100 flex justify-center">
          <div className="h-25 w-25 flex place-content-center">
            <Canvas
              text={`http://localhost:3000/artist/${artist?._id}/next-qrcode`}
              options={{
                type: 'image/jpeg',
                quality: 0.3,
                level: 'M',
                margin: 3,
                scale: 4,
                width: 200,
                color: {
                  dark: '#04032E',
                  light: '#E7E3E3',
                },
              }}
            />
          </div>
        </div>
        <div className="w-100 md:col-span-2 align-center h-40"> 
          <h3 
            className="text-2xl text-center"
          >
            {artist?.resume}
          </h3>
        </div>
      </DarkBlueCard>

      <OpacityCard className="mt-16 px-6 md:px-20 py-6 md:py-10">
        <h3
          className={classNames(
            "font-Mochiy font-extrabold text-2xl",
            "ml-4 mb-16"
          )}
        >
          Mi portafolio
        </h3>
        <GridProfile className="" />
      </OpacityCard>

      <DarkBlueCard className="">
        <h3
          className={classNames(
            "font-Mochiy font-extrabold text-2xl",
            " mb-16"
          )}
        >
          Me han etiquetado
        </h3>
        <GridIndex />
      </DarkBlueCard>

      <Footer />
    </>
  );
}