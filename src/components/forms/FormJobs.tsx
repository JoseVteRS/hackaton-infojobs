"use client";
import { LOCAL_STORAGE_KEYS } from "@/config/contants";
import months from "@/config/months.json";
import { useLocalStorage } from "@/hooks/useLocalStorage";
import { Fragment } from "react";
import { v4 as generateUUID } from "uuid";
import { TrashIcon } from "../icons/trash-icon";
import Modal from "../ui/Modal";
import { Separator } from "../ui/Separator";
import { Fieldset } from "./Fieldset";
import { InputText } from "./InputText";
import { SelectBasic } from "./SelectBasic";

export type FormValueYear = {
  years: string;
};

export type FormValuesJobs = {
  isCurrent: boolean;
  description: string;
  start_month: string;
  start_year: string;
  finish_month: string;
  finish_year: string;
  organization: string;
};

export type Jobs = {
  jobs: Job[];
};

export interface Job {
  id: string;
  isCurrent: boolean;
  description: string;
  start_month: string;
  start_year: string;
  finish_month: string;
  finish_year: string;
  organization: string;
}

export const FormJobs = () => {
  const [_, setJobs] = useLocalStorage(LOCAL_STORAGE_KEYS.JOBS);



  const onSubmitYear = (data: FormValueYear) => {
    setJobs((oldData: Jobs) => ({
      ...oldData,
      years: data.years,
      jobs:[]
    }));
  };

  const onSubmitJobs = (data: FormValuesJobs) => {
    setJobs((oldData: Jobs) => ({
      ...oldData,
      jobs: [
        ...oldData.jobs,
        {
          id: generateUUID(),
          isCurrent: data.isCurrent,
          description: data.description,
          start_month: data.start_month,
          start_year: data.start_year,
          finish_month: data.finish_month,
          finish_year: data.finish_year,
          organization: data.organization,
        },
      ],
    }));
  };

  return (
    <Fragment>
      <Fieldset<FormValueYear>
        onSubmit={onSubmitYear}
        title="Años de experiencia"
        localStorageKey={LOCAL_STORAGE_KEYS.JOBS}
      >
        {({ register }) => {
          return (
            <>
              <div>
                <SelectBasic
                  options={[
                    { id: "1", name: "Menos de 2 años" },
                    { id: "2", name: "2-5 años" },
                    { id: "3", name: "5-10 años" },
                    { id: "4", name: "Más de 10 años" },
                  ]}
                  label="Años de experiencia relevates en el sector"
                  {...register("years")}
                />
              </div>
            </>
          );
        }}
      </Fieldset>

      <Separator size="lg" />

      <Modal title="Añade una trabajo">
        <Fieldset<FormValuesJobs>
          onSubmit={onSubmitJobs}
          title="Trabajos"
          localStorageKey={LOCAL_STORAGE_KEYS.JOBS}
        >
          {({ register, watch }) => {
            const isCurrent = watch("isCurrent");

            console.log(isCurrent);

            return (
              <>
                <div>
                  <InputText
                    isRequired
                    label="Puesto"
                    {...register("description")}
                  />
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

                <div className="my-5 flex items-center gap-2">
                  <input
                    className="p-3 w-5 h-5 border-2 border-ij-primary-l4"
                    type="checkbox"
                    {...register("isCurrent")}
                  />
                  <label htmlFor="isCurrent">
                    Estoy trabajando actualmente aquí
                  </label>
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
                      disabled={isCurrent}
                      className="disabled:opacity-30 disabled:pointer-events-none border-2 border-primary-l4 transition duration-300 rounded-md focus:shadow-ij-focus focus:outline-none hover:border-primary w-[60%] h-16 p-5"
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
                      disabled={isCurrent}
                      className="disabled:opacity-30 disabled:pointer-events-none text-sm border-2 border-primary-l4 transition duration-300 rounded-md focus:shadow-ij-focus focus:outline-none w-[40%] hover:border-primary  h-16 p-5"
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
                    {...register("organization")}
                  />
                </div>
              </>
            );
          }}
        </Fieldset>
      </Modal>
    </Fragment>
  );
};
