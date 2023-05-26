"use client"

import { useLocalStorage } from '@/hooks/useLocalStorage';
import { Fieldset } from './Fieldset';
import { InputText } from './InputText';
import { LOCAL_STORAGE_KEYS } from '@/config/contants';

type FormValues = {
    "name": string;
    "surname": string;
    "headline": string;
}

export const FormContact = () => {

    const [,setData] = useLocalStorage(LOCAL_STORAGE_KEYS.CONTACT, {})

    const onSubmit = (data: FormValues) => {
        setData(data)
    }
    return (
        <Fieldset<FormValues> onSubmit={onSubmit} title="Introducción">
            {
                ({ register }) => (
                    <>
                        <InputText label="Nombre" {...register("name")} />
                        <InputText label={`Apellido`} {...register("surname")} />
                        <InputText label={`Headline`} {...register("headline")} />
                    </>
                )
            }
        </Fieldset>
    )
}
