"use client";
import { LOCAL_STORAGE_KEYS } from "@/config/contants";
import { useLocalStorage } from "@/hooks/useLocalStorage";
import { Fragment } from "react";
import { Separator } from "../ui/Separator";
import { Fieldset } from "./Fieldset";
import { InputText } from "./InputText";
import { SelectSoftSkills } from "./Select/select";
import { Textarea } from "./Textarea";

type FormValuesIntroduction = {
  headline: string;
  summary: string;
};

type FormValuesSkills = {
  skills: [{ id: string; name: string }];
}


const softskillsOptions = [
  { value: "1", label: "Trabajo en equipo" },
  { value: "2", label: "Comunicación" },
  { value: "3", label: "Creatividad" },
  { value: "4", label: "Adaptabilidad" },
  { value: "5", label: "Resolución de problemas" },
  { value: "6", label: "Pensamiento crítico" },
  { value: "7", label: "Responsabilidad" },
  { value: "8", label: "Liderazgo" },
  { value: "9", label: "Organización" },
];

export const FormPresentation = () => {
  const [, setStoredValue] = useLocalStorage(
    LOCAL_STORAGE_KEYS.PRESENTATION,
    {}
  );
  const localStorage = window?.localStorage.getItem(
    LOCAL_STORAGE_KEYS.PRESENTATION
  );
  const presentationData = JSON.parse(localStorage || "{}");

  const onSubmitIntroduction = (data: FormValuesIntroduction) => {
    setStoredValue((oldData: FormValuesIntroduction) => ({ ...oldData, ...data }))
  };

  const onSubmitSkills = (data: FormValuesSkills) => {
    console.log({ data })
    setStoredValue((oldData: FormValuesSkills) => ({ ...oldData, ...data }))
  };

  return (
    <Fragment>
      <Fieldset<FormValuesIntroduction>
        onSubmit={onSubmitIntroduction}
        title="Introducción"
        localStorage={LOCAL_STORAGE_KEYS.PRESENTATION}
      >
        {({ register }) => (
          <>
            <InputText label="Headline" {...register("headline")} />
            <Textarea label="Resumen" {...register("summary")} />
          </>
        )}
      </Fieldset>
      <Separator size="lg" />

      <Fieldset<FormValuesSkills>
        onSubmit={onSubmitSkills}
        title="Competencias"
        localStorage={LOCAL_STORAGE_KEYS.PRESENTATION}
      >
        {
          (methods) => {
            return (
              <>
                <SelectSoftSkills
                  label="Habilidades"
                   options={softskillsOptions}
                  {...methods.register("skills")}
                />
              </>
            );
          }
        }

      </Fieldset>

    </Fragment>
  );
};
