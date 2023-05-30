"use client";
import { LOCAL_STORAGE_KEYS } from "@/config/contants";
import { useLocalStorage } from "@/hooks/useLocalStorage";
import { Fragment } from "react";
import { Separator } from "../ui/Separator";
import { Fieldset } from "./Fieldset";
import { InputText } from "./InputText";
import { SelectSoftSkills } from "@/components/forms/SelectSoftSkills";
import { Textarea } from "./Textarea";
import softSkills from "@/config/soft-skills.json";
import { SelectBasic } from "./SelectBasic";

type FormValuesIntroduction = {
  headline: string;
  summary: string;
};

type FormValuesSkills = {
  skills: [{ id: string; name: string }];
};

export const FormPresentation = () => {
  const [, setStoredValue] = useLocalStorage(LOCAL_STORAGE_KEYS.PRESENTATION);

  const onSubmitIntroduction = (data: FormValuesIntroduction) => {
    setStoredValue((oldData: FormValuesIntroduction) => ({
      ...oldData,
      ...data,
    }));
  };

  const onSubmitSkills = (data: FormValuesSkills) => {
    console.log({ data });
    setStoredValue((oldData: FormValuesSkills) => ({ ...oldData, ...data }));
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
        {(methods) => {
          return (
            <>
              <SelectSoftSkills
              isMultiple
                label="Habilidades"
                options={softSkills}
                {...methods.register("skills")}
              />
            </>
          );
        }}
      </Fieldset>
    </Fragment>
  );
};
