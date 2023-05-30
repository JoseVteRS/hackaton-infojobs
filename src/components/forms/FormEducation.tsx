"use client";
import { LOCAL_STORAGE_KEYS } from "@/config/contants";
import { useLocalStorage } from "@/hooks/useLocalStorage";
import { Fragment, useState } from "react";
import { Separator } from "../ui/Separator";
import { Fieldset } from "./Fieldset";
import { InputText } from "./InputText";
import Modal from "../ui/Modal";
import months from "@/config/months.json";
import { v4 as generateUUID } from "uuid";

type FormValuesTools = {
  tools: string;
  educations: Education[]
};

type FormValuesEducation = {
  type: string;
  description: string;
  start_month: string;
  start_year: string;
  finish_month: string;
  finish_year: string;
  emisor: string;
};

interface Education {
  id: string;
  type: string;
  description: string;
  start_month: string;
  start_year: string;
  finish_month: string;
  finish_year: string;
  emisor: string;
}

export const FormEducation = () => {
  const [tools, setTools] = useLocalStorage(LOCAL_STORAGE_KEYS.TOOLS);

  const onSubmitTools = (values: FormValuesTools) => {
    const tools = values.tools.split(",").map((tool) => tool.trim());
    setTools({ tools });
  };

  const onSubmitEducation = (data: FormValuesEducation) => {
    setTools((oldData: FormValuesTools) => ({
      ...oldData,
      educations: [
        ...oldData?.educations,
        {
          id: generateUUID(),
          ...data,
        },
      ],
    }));
  };

  return (
    <Fragment>
      {tools?.educations && (
        <div className="my-5 flex items-start gap-5">
          {tools?.educations?.map((education: Education) => {
            return (
              <div key={education.id} className="shadow-ij-m p-3 rounded">
                <h3 className="text-lg font-semibold text-gray-900 ">
                  {education.type}
                </h3>
                <time className="block mb-2 text-sm font-normal leading-none text-gray-400 ">
                  {education.start_month} - {education.start_year}
                </time>
                <p className="text-base font-normal text-gray-500 ">
                  {education.description}.
                </p>
              </div>
            );
          })}
        </div>
      )}

      <Fieldset<FormValuesTools>
        onSubmit={onSubmitTools}
        title="Educación"
        localStorageKey={LOCAL_STORAGE_KEYS.TOOLS}
      >
        {({ register }) => (
          <>
            <div>
              <InputText
                label="Escribe separado por coma  ',' las herramientas / tecnologías con las que has trabajado "
                {...register("tools")}
              />
              <small>Por ejemplo: React,NextJS,PHP,jQuery,Photoshop,etc</small>
            </div>
          </>
        )}
      </Fieldset>

      <Separator size="lg" />

      <Modal title="Añade una educación">
        <Fieldset<FormValuesEducation>
          onSubmit={onSubmitEducation}
          title="Educación"
          localStorageKey={LOCAL_STORAGE_KEYS.TOOLS}
        >
          {({ register }) => (
            <>
              <div>
                <InputText isRequired label="Título" {...register("type")} />
              </div>

              <div>
                <label className="inline-block w-full">
                  <span className="block text-sm font-bold text-ij-black">
                    Descripción
                  </span>
                </label>
                <textarea
                  className="resize-y text-sm min-h-[150px] border-2 border-primary-l4 transition duration-300 rounded-md focus:shadow-md focus:shadow-primary hover:border-primary w-full p-2"
                  {...register("description")}
                ></textarea>
              </div>
              {/* Start Date */}
              <div className="flex items-center gap-2">
                <div className="flex items-center gap-2">
                  <select
                    className="border-2 border-primary-l4 transition duration-300 rounded-md focus:shadow-ij-focus focus:outline-none hover:border-primary w-[60%] h-16 p-5"
                    {...register("start_month")}
                  >
                    <option value="-">Selecciona uno</option>
                    {months.map((month) => (
                      <option
                        key={month.abbreviation}
                        value={month.abbreviation}
                      >
                        {month.name}
                      </option>
                    ))}
                  </select>
                  <input
                    className="text-sm border-2 border-primary-l4 transition duration-300 rounded-md focus:shadow-ij-focus focus:outline-none w-[40%] hover:border-primary  h-16 p-5"
                    type="number"
                    min={1950}
                    placeholder="ej. 1990"
                    {...register("start_year")}
                  />
                </div>

                <div className="flex items-center gap-2">
                  <select
                    className="border-2 border-primary-l4 transition duration-300 rounded-md focus:shadow-ij-focus focus:outline-none hover:border-primary w-[60%] h-16 p-5"
                    {...register("finish_month")}
                  >
                    <option value="-">Selecciona uno</option>
                    {months.map((month) => (
                      <option
                        key={month.abbreviation}
                        value={month.abbreviation}
                      >
                        {month.name}
                      </option>
                    ))}
                  </select>
                  <input
                    className="text-sm border-2 border-primary-l4 transition duration-300 rounded-md focus:shadow-ij-focus focus:outline-none w-[40%] hover:border-primary  h-16 p-5"
                    type="number"
                    min={1950}
                    placeholder="ej. 1990"
                    {...register("finish_year")}
                  />
                </div>
              </div>
              {/* Finish Date */}

              <div className="my-5">
                <InputText
                  isRequired
                  label="Organizacion emisora"
                  {...register("emisor")}
                />
              </div>
            </>
          )}
        </Fieldset>
      </Modal>
    </Fragment>
  );
};
