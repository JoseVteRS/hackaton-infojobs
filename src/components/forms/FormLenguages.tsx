"use client"
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
    level: string
};

interface Lenguage {
    id: string;
    lenguage_name: string;
    level: string;
}

type Lenguages = {
    lenguages: Lenguage[];
}

export const FormLenguages = () => {
    const [, setStoredLenguages] = useLocalStorage(
        LOCAL_STORAGE_KEYS.LANGUAGE,
        { lenguages: [] } as { lenguages: Lenguage[] }
    );

    const localStorageLenguages = localStorage.getItem(LOCAL_STORAGE_KEYS.LANGUAGE);
    const localStorageLenguagesParsed = localStorageLenguages ? JSON.parse(localStorageLenguages) : [];

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

            <div className="flex gap-5 my-5">
                {

                    localStorageLenguagesParsed.lenguages.map((lenguage: Lenguage) => {
                        return (
                            <div className="shadow-ij-m p-3 rounded w-full" key={lenguage.id}>
                                <p className="text-ij-black text-lg font-bold">{lenguage.lenguage_name}</p>
                                <p className="text-sm text-ij-gray font-regular">{lenguage.level}</p>
                            </div>
                        )
                    })
                }

            </div>

            <Modal title="Añade un idioma" >
                <Fieldset<FormValuesLenguage>
                    onSubmit={onSubmitLenguage}
                    title="Idiomas"
                    localStorage={LOCAL_STORAGE_KEYS.LANGUAGE}
                >
                    {
                        ({ register }) => {
                            return (
                                <>
                                    <InputText
                                        label="Idioma"
                                        {...register("lenguage_name")}
                                    />

                                    <div  >
                                        <SelectBasic
                                            label="Nivel"
                                            options={[
                                                { id: "basico", name: "Básico" },
                                                { id: "intermedio", name: "Intermedio" },
                                                { id: "avanzado", name: "Avanzado" },
                                                { id: "nativo", name: "Nativo" }
                                            ]}
                                            {...register("level")}

                                        />
                                    </div>

                                </>
                            )
                        }
                    }

                </Fieldset>
            </Modal>
        </Fragment>
    )
}
