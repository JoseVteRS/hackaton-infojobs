"use client";

import { useLocalStorage } from "@/hooks/useLocalStorage";
import { Fieldset } from "./Fieldset";
import { InputText } from "./InputText";
import { LOCAL_STORAGE_KEYS } from "@/config/contants";
import { PlacesAutocomplete } from "./Select";
import { InputSearchCountry } from "./InputSearchCountri";
import { Controller, useFieldArray, useForm } from "react-hook-form";

type FormValues = {
  name: string;
  surname: string;
  headline: string;
  country: string;
};

export const FormContact = () => {
  const [, setData] = useLocalStorage(LOCAL_STORAGE_KEYS.CONTACT, {});

  const onSubmit = (data: FormValues) => {
    console.log(data);
    setData(data);
  };
  return (
    <Fieldset<FormValues> onSubmit={onSubmit} title="Introducción" localStorage={LOCAL_STORAGE_KEYS.CONTACT} >
      {({ register }, localData) => {
        return (
          <>
            <div className="flex gap-5">
              <div className="w-[40%]">
                <InputText label="Nombre" defaultValue={localData.name} {...register("name")} />
              </div>
              <div className="w-[60%]">
                <InputText label={`Apellido`} defaultValue={localData.surname} {...register("surname")} />
              </div>
            </div>
            <InputSearchCountry label={"Ciudad, País"} defaultValue={localData.country} {...register("country")} />
          </>
        );
      }}
    </Fieldset>
  );
};
