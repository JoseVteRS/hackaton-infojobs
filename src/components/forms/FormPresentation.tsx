"use client"
import { LOCAL_STORAGE_KEYS } from '@/config/contants';
import { useLocalStorage } from '@/hooks/useLocalStorage';
import { Fieldset } from './Fieldset';
import { InputText } from './InputText';
import { Textarea } from './Textarea';

type FormValues = {
    "name": string;
    "surname": string;
    "summary": string;
}

export const FormPresentation = () => {

    const [, setStoredValue] = useLocalStorage(LOCAL_STORAGE_KEYS.PRESENTATION, {})

    const onSubmit = (data: FormValues) => {
        setStoredValue(data)
    }

    return (
        <Fieldset<FormValues> onSubmit={onSubmit} title="Introducción">
            {
                ({ register }) => (
                    <>
                        <InputText label="Nombre" {...register("name")} />
                        <InputText label={`Apellido`} {...register("surname")} />
                        <Textarea label="Resumen" {...register("summary")} />
                    </>
                )
            }
        </Fieldset>
    )
}
