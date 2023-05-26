"use client";

import { LOCAL_STORAGE_KEYS } from "@/config/contants";
import { LocationIcon } from "../icons/location";
import Heading from "../ui/Heading";
import Link from "next/link";

export const HomeSection = () => {
  // const [presentationValues] = useLocalStorage(LOCAL_STORAGE_KEYS.PRESENTATION)

  const data = window?.localStorage.getItem(LOCAL_STORAGE_KEYS.CONTACT);
  const dataParsed = JSON.parse(data || "{}");

  console.log({ dataParsed });

  if (!dataParsed) return <div>no hay data</div>;

  return (
    <div>
      <h1 className="font-[600] text-primary text-2xl">
        {dataParsed.name} {dataParsed.surname}
      </h1>

      <p className="uppercase font-[600]">{dataParsed.headline}</p>

      <div className="flex gap-1 items-center justify-start mt-4">
        <LocationIcon className="text-accent w-6 h-6" />
        <span>Valencia, Spain</span>
      </div>

      <div className="flex items-start justify-between mt-20">
        <section>
          <article className="mb-16">
            <Heading as="h3" kind="black" size="large">
              Presentación
            </Heading>
            <div>
              lorem ipsum dolor sit amet cons ectetur adipi scing elit.
              Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing
              elit. Quisquam, quos. Lore
            </div>
          </article>
          <article className="mb-16">
            <Heading as="h3" kind="black" size="large">
              Idiomas
            </Heading>
            <div>Español Valencià Inglés</div>
          </article>
        </section>

        <section>
          <article className="mb-16">
            <Heading as="h3" kind="black" size="large">
              Tecnologías y herramientas
            </Heading>
            <div className="mb-12">
              <h3 className="uppercase tracking-widest border-b border-ij-gray mb-5 pb-1 font-[600]">
                Controlo de
              </h3>
              Javascript Typescript React
            </div>
            <div className="mb-12">
              <h3 className="uppercase tracking-widest border-b border-ij-gray mb-5 pb-1 font-[600]">
                Quiero trabajar con
              </h3>
              Javascript Typescript React
            </div>

            <div className="mb-12">
              <h3 className="uppercase tracking-widest border-b border-ij-gray mb-5 pb-1 font-[600]">
                Prefiero no trabajar con
              </h3>
              PHP Wordpress jQuery
            </div>
          </article>
          <article className="mb-16">
            <Heading as="h3" kind="black" size="large">
              Mis habilidades
            </Heading>
          </article>
        </section>
      </div>

      <Heading as="h2" kind="black" size="xlarge">
        Hola
      </Heading>
      <Heading as="h3" kind="black" size="large">
        Hola
      </Heading>

      <Heading as="h2" kind="black" size="xlarge">
        Proyectos
      </Heading>

      <span>powered by</span>
      <Link href="https://www.infojobs.es">InfoJobs</Link>
    </div>
  );
};
