"use client";

import { LOCAL_STORAGE_KEYS } from "@/config/contants";
import { LocationIcon } from "../icons/location";
import Heading from "../ui/Heading";
import Link from "next/link";
import { Bodoni_Moda } from "next/font/google";
import { InfoGeneral } from "./InfoGeneral";
import { Separator } from "../ui/Separator";

const bodoni = Bodoni_Moda({ subsets: ["latin"], style: ["normal", "italic"] });

export const HomeSection = () => {
  // const [presentationValues] = useLocalStorage(LOCAL_STORAGE_KEYS.PRESENTATION)

  const dataContact = window?.localStorage.getItem(LOCAL_STORAGE_KEYS.CONTACT);
  const dataContactParsed = JSON.parse(dataContact || "{}");

  const dataPresentation = window?.localStorage.getItem( LOCAL_STORAGE_KEYS.PRESENTATION);
  const dataPresentationParsed = JSON.parse(dataPresentation || "{}");

  console.log({ dataParsed: dataContactParsed });

  if (!dataContactParsed) return <div>no hay data</div>;

  
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
    </section>
  );
};