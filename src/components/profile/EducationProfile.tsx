"use client";

import { LOCAL_STORAGE_KEYS } from "@/config/contants";
import { useLocalStorage } from "@/hooks/useLocalStorage";
import { Timeline } from "../ui/Timeline";
import Heading from "../ui/Heading";
import { Separator } from "../ui/Separator";

export const EducationProfile = () => {
  const [tools] = useLocalStorage(LOCAL_STORAGE_KEYS.TOOLS);

  return (
    <section>
      <div className="my-5">
        <Heading as="h3" size="large" kind="black" withDecoration>
          Formación
        </Heading>

        <Separator size="md" />

        <Timeline items={tools?.educations} />
      </div>
    </section>
  );
};
