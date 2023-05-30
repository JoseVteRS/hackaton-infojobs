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

export const ToolsProfile = () => {
  const [tools] = useLocalStorage(LOCAL_STORAGE_KEYS.TOOLS);

  const splitedToolsByComma = (toolsString:string)=> {
    return toolsString.split(',');
  }

  return (
    <section>
      <div className="my-5">
        <Heading as="h3" size="large" kind="black" withDecoration>
          Tecnologías y herramientas
        </Heading>

        <Separator size="md" />

        <div className="flex gap-8 w-full">
          {splitedToolsByComma(tools.tools).map((tool: any, id) => {
            return (
              <div
                key={id}
                className="w-full shadow-ij-s p-5 rounded grid place-content-center  text-center"
              >
                <p className="font-regular text-lg">{tool.tool_name}</p>
                <p className="font-regular text-ij-gray text-md uppercase">
                  {tool}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
