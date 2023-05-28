"use client";
import { LOCAL_STORAGE_KEYS } from "@/config/contants";
import { useLocalStorage } from "@/hooks/useLocalStorage";
import { Fieldset } from "./Fieldset";
import { InputText } from "./InputText";
import { Textarea } from "./Textarea";
import { Fragment } from "react";
import { Separator } from "../ui/Separator";
import { SelectSkills } from "./SelectSkills";
import softSkills from "@/config/soft-skills.json";

type FormValues = {
  headline: string;
  introduction: string;
  summary: string;
  softskills: [{ id: string; name: string }];
};

export const FormPresentation = () => {
  const [, setStoredValue] = useLocalStorage(
    LOCAL_STORAGE_KEYS.PRESENTATION,
    {}
  );
  const localStorage = window?.localStorage.getItem(
    LOCAL_STORAGE_KEYS.PRESENTATION
  );
  const presentationData = JSON.parse(localStorage || "{}");

  const onSubmit = (data: FormValues) => {
    setStoredValue(data);
  };

  return (
    <Fragment>
      <Fieldset<FormValues>
        onSubmit={onSubmit}
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
      <Fieldset<FormValues>
        onSubmit={onSubmit}
        title="Competencias"
        localStorage={LOCAL_STORAGE_KEYS.PRESENTATION}
      >
        {({ register }) => (
          <>
            <SelectSkills
            label="Competencias"
            options={softSkills}
              {...register("softskills")}
            />
          </>
        )}
      </Fieldset>
    </Fragment>
  );
};
