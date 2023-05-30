"use client";
import React from "react";
import Heading from "../ui/Heading";
import { Separator } from "../ui/Separator";
import { useLocalStorage } from "@/hooks/useLocalStorage";
import { LOCAL_STORAGE_KEYS } from "@/config/contants";


interface Skill {
  id: string;
  name: string;
}

export const LenguagesProfile = () => {
  const [lenguages] = useLocalStorage(LOCAL_STORAGE_KEYS.LANGUAGE);


  return (
    <section>
      <div className="my-5">
        <Heading as="h4" size="medium" kind="black">
          Idiomas
        </Heading>

        <Separator size="md" />

        <div className="flex gap-8 w-full">
          {lenguages.lenguages.map((lenguage: any) => {
            return (
              <div key={lenguage.id} className="w-full shadow-ij-s p-5 rounded grid place-content-center  text-center">
                <p className="font-regular text-lg">{lenguage.lenguage_name}</p>
                <p className="font-regular text-ij-gray text-md uppercase">{lenguage.level}</p>

              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};