"use client";

import { LOCAL_STORAGE_KEYS } from "@/config/contants";
import { useLocalStorage } from "@/hooks/useLocalStorage";
import { Fragment } from "react";
import { v4 as generateUUID } from "uuid";
import Modal from "../ui/Modal";
import { Fieldset } from "./Fieldset";
import { InputText } from "./InputText";
import { SelectBasic } from "./SelectBasic";

type FormValuesLenguage = {
  lenguage_name: string;
  level: string;
};

export interface Lenguage {
  id: string;
  lenguage_name: string;
  level: string;
}

export type Lenguages = {
  lenguages: Lenguage[];
};

export const FormLenguages = () => {
  const [, setStoredLenguages] = useLocalStorage(LOCAL_STORAGE_KEYS.LANGUAGE);

  const onSubmitLenguage = (values: FormValuesLenguage) => {
    setStoredLenguages((oldData: Lenguages) => ({
      ...oldData,
      lenguages: [
        ...oldData.lenguages,
        {
          id: generateUUID(),
          ...values,
        },
      ],
    }));
  };

  return (
    <Fragment>
      <Modal title="Añade un idioma">
        <Fieldset<FormValuesLenguage>
          onSubmit={onSubmitLenguage}
          title="Idiomas"
          localStorageKey={LOCAL_STORAGE_KEYS.LANGUAGE}
        >
          {({ register }) => {
            return (
              <>
                <InputText label="Idioma" {...register("lenguage_name")} />

                <div>
                  <SelectBasic
                    label="Nivel"
                    options={[
                      { id: "basico", name: "Básico" },
                      { id: "intermedio", name: "Intermedio" },
                      { id: "avanzado", name: "Avanzado" },
                      { id: "nativo", name: "Nativo" },
                    ]}
                    {...register("level")}
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
