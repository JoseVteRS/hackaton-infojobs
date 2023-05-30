"use client";
import Heading from "@/components/ui/Heading";
import { Separator } from "@/components/ui/Separator";
import { LOCAL_STORAGE_KEYS } from "@/config/contants";
import { GeneralProfile } from "@/components/profile/GeneralProfile";
import { SkillsProfile } from "../profile/SkillsProfile";
import { LenguagesProfile } from "../profile/LenguagesProfile";
import { ToolsProfile } from "../profile/ToolsProfile";
import { EducationProfile } from "../profile/EducationProfile";
import { JobsProfile } from "../profile/JobsProfile";
import { useLocalStorage } from "@/hooks/useLocalStorage";



export const HomeSection = () => {

const [contact] = useLocalStorage(LOCAL_STORAGE_KEYS.CONTACT);


  const dataPresentation = window?.localStorage.getItem(
    LOCAL_STORAGE_KEYS.PRESENTATION
  );
  const dataPresentationParsed = JSON.parse(dataPresentation || "{}");

  if (!contact) return <div>No hay data</div>;

  const splitSummaryByReturn = dataPresentationParsed.summary.split("\n");

  return (
    <section>
      <div>
        <Heading
          as="h1"
          size="xlarge"
          kind="black"
          withDecoration
          className="text-6xl"
        >
          {contact.name} {contact.surname}
        </Heading>

        <Heading
          as="h2"
          size="large"
          kind="black"
          className="my-6 font-normal text-3xl italic"
        >
          {dataPresentationParsed.headline}
        </Heading>

        <h2 className={`italic text-2xl my-5 `}>
          En{" "}
          <strong className={`italic text-2xl font-bold `}>
            {contact.country}
          </strong>
        </h2>
      </div>

      <Separator size="xl" />

      <GeneralProfile introduction={splitSummaryByReturn} />

      <Separator size="lg" />

      <SkillsProfile />

      <Separator size="lg" />

      <LenguagesProfile />

      <Separator size="xl" />

      <ToolsProfile />

      <Separator size="xl" />

      <EducationProfile />

      <Separator size="xl" />

      <JobsProfile />
    </section>
  );
};
