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
    const localStorage = window?.localStorage.getItem(LOCAL_STORAGE_KEYS.PRESENTATION)
    const presentationData = JSON.parse(localStorage || '{}')

    const onSubmit = (data: FormValues) => {
        setStoredValue(data)
    }


    return (
        <Fieldset<FormValues> onSubmit={onSubmit} title="Introducción">
            {
                ({ register }) => (
                    <>
                        <InputText label="Nombre" {...register("name")} value={presentationData?.name} />
                        <InputText label={`Apellido`} {...register("surname")} value={presentationData?.surname} />
                        <Textarea label="Resumen" {...register("summary")} value={presentationData?.summary} />
                    </>
                )
            }
        </Fieldset>
    )
}
