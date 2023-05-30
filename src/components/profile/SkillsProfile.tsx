"use client";
import React from "react";
import Heading from "../ui/Heading";
import { Separator } from "../ui/Separator";
import { useLocalStorage } from "@/hooks/useLocalStorage";
import { LOCAL_STORAGE_KEYS } from "@/config/contants";
import skills from "@/config/soft-skills.json";

const skillsCopy = structuredClone(skills);

interface Skill {
  id: string;
  name: string;
}

export const SkillsProfile = () => {
  const [presentation] = useLocalStorage(LOCAL_STORAGE_KEYS.PRESENTATION);

  const slectedSkills = skillsCopy.filter((item) =>
    presentation.skills.includes(item.id)
  );

  return (
    <section>
      <div className="my-5">
        <Heading as="h4" size="medium" kind="black">
          Mis habilidades
        </Heading>

        <Separator size="md" />

        <div className="flex gap-8 w-full">
          {slectedSkills.map((skill: Skill) => {
            return (
              <div key={skill.id} className="w-full shadow-ij-s p-5 rounded grid place-content-center bg-white">
                <p className="font-regular">{skill.name}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
