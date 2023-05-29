"use client";
import Heading from "@/components/ui/Heading";
import { Separator } from "@/components/ui/Separator";
import { LOCAL_STORAGE_KEYS } from "@/config/contants";
import skills from "@/config/soft-skills.json";
import { Bodoni_Moda } from "next/font/google";
import { InfoGeneral } from "./InfoGeneral";

const bodoni = Bodoni_Moda({ subsets: ["latin"], style: ["normal", "italic"] });

export const HomeSection = () => {

  const dataContact = window?.localStorage.getItem(LOCAL_STORAGE_KEYS.CONTACT);
  const dataContactParsed = JSON.parse(dataContact || "{}");

  const dataPresentation = window?.localStorage.getItem(
    LOCAL_STORAGE_KEYS.PRESENTATION
  );
  const dataPresentationParsed = JSON.parse(dataPresentation || "{}");

  const findSkills = (value: Option[]) => {
    const skill = skills.find((skill) => skill.value === value);
    return skill?.label || "";
  };

  if (!dataContactParsed) return <div>No hay data</div>;

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
          {dataContactParsed.name} {dataContactParsed.surname}
        </Heading>

        <Heading
          as="h2"
          size="large"
          kind="black"
          className="my-6 font-normal text-3xl italic"
        >
          {dataPresentationParsed.headline}
        </Heading>

        <h2 className={`italic text-2xl my-5 ${bodoni.className} `}>
          En{" "}
          <strong className={`italic ${bodoni.className} text-2xl font-bold `}>
            {dataContactParsed.country}
          </strong>
        </h2>
      </div>

      <Separator size="lg" />

      <InfoGeneral introduction={splitSummaryByReturn} />

      {
        dataPresentationParsed.skills.map((skill) => (

          <div key={skill.value}>
            <Separator size="lg" />
            <Heading
              as="h3"
              size="large"
              kind="black"
              className="my-6 font-normal text-3xl italic"
            >
              {skill.label}
            </Heading>
          </div>

        ))
      }
    </section>
  );
};
