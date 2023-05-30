"use client";
import { LOCAL_STORAGE_KEYS } from "@/config/contants";
import months from "@/config/months.json";
import { useLocalStorage } from "@/hooks/useLocalStorage";
import { Fragment } from "react";
import { v4 as generateUUID } from "uuid";
import Modal from "../ui/Modal";
import { Separator } from "../ui/Separator";
import { Fieldset } from "./Fieldset";
import { InputText } from "./InputText";

type FormValuesTools = {
  tools: string;
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

type Educations = {
  educations: Education[];
}

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
  const [, setStoredTools] = useLocalStorage(LOCAL_STORAGE_KEYS.TOOLS, {});

  const [, setStoredEducation] = useLocalStorage(
    LOCAL_STORAGE_KEYS.EDUCATION,
    { educations: [] }
  );

  const localStorageEducation = localStorage.getItem(LOCAL_STORAGE_KEYS.EDUCATION);
  const localStorageEducationValue = localStorageEducation ? JSON.parse(localStorageEducation) : [];

  const onSubmitTools = (values: FormValuesTools) => {
    setStoredTools((oldData: FormValuesTools) => ({
      ...oldData,
      ...values,
    }));
  };

  const onSubmitEducation = (values: FormValuesEducation) => {

    setStoredEducation((oldData: Educations) => ({
      ...oldData,
      educations: [
        ...oldData.educations,
        {
          id: generateUUID(),
          ...values,
        },
      ],
    }));

  }

  return (
    <Fragment>
      <Fieldset<FormValuesTools>
        onSubmit={onSubmitTools}
        title="Educación"
        localStorage={LOCAL_STORAGE_KEYS.EDUCATION}
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
          localStorage={LOCAL_STORAGE_KEYS.EDUCATION}
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
