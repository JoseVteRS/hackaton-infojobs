"use client";

import { useLocalStorage } from "@/hooks/useLocalStorage";
import { Fieldset } from "./Fieldset";
import { InputText } from "./InputText";
import { LOCAL_STORAGE_KEYS } from "@/config/contants";
import { Fragment } from "react";
import { Separator } from "../ui/Separator";

type FormValuesIntroduction = {
  name: string;
  surname: string;
  headline: string;
  country: string;
  phone: string;
  email: string;
};

type FormValuesLinks = {
  link: string;
};

export const FormContact = () => {
  const [, setData] = useLocalStorage(LOCAL_STORAGE_KEYS.CONTACT, {});

  const onSubmitIntroduction = (data: FormValuesIntroduction) => {
    setData((prev: FormValuesIntroduction) => ({ ...prev, ...data }));
  };

  const onSubmitLinks = (data: FormValuesLinks) => {
    setData((prev: FormValuesLinks) => ({ ...prev, ...data }));
  };


  return (
    <Fragment>
      <Fieldset<FormValuesIntroduction>
        onSubmit={onSubmitIntroduction}
        title="Introducción"
        localStorageKey={LOCAL_STORAGE_KEYS.CONTACT}
      >
        {({ register }) => {
          return (
            <>
              <div className="flex gap-5">
                <div className="w-[40%]">
                  <InputText label="Nombre" {...register("name")} />
                </div>
                <div className="w-[60%]">
                  <InputText label={`Apellido`} {...register("surname")} />
                </div>
              </div>
              <div className="w-[40%] pr-2">
                <InputText label={`¿Donde vives?`} {...register("country")} />
              </div>

              <div className="w-[100%] pr-2">
                <InputText label={`Teléfono`} {...register("phone")} />
              </div>
              <div className="w-[100%] pr-2">
                <span className="flex text-sm mb-1 relative font-semibold">
                  <label>E-Mail</label>
                </span>
                email@example.com
              </div>
            </>
          );
        }}
      </Fieldset>

      <Separator size="lg" />
      
      <Fieldset<FormValuesLinks>
        onSubmit={onSubmitLinks}
        title="Perfiles y sitios web"
        localStorageKey={LOCAL_STORAGE_KEYS.CONTACT}
      >
        {({ register }) => {
          return (
            <>
              <div className="flex flex-col">
                <div className="w-[100%]">
                  <InputText label="Tu url de la web" {...register("link")} />
                </div>
  
              </div>
            </>
          );
        }}
      </Fieldset>
    </Fragment>
  );
};
