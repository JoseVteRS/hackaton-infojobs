"use client"
import { LOCAL_STORAGE_KEYS } from '@/config/contants';
import { useLocalStorage } from '@/hooks/useLocalStorage';
import { Fieldset } from './Fieldset';
import { InputText } from './InputText';
import { Textarea } from './Textarea';

type FormValues = {
    "headline": string;
    "introduction": string;
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
        <Fieldset<FormValues> onSubmit={onSubmit} title="Introducción" localStorage={LOCAL_STORAGE_KEYS.PRESENTATION}>
            {
                ({ register }, localData) => (
                    <>
                        <InputText label="Headline" defaultValue={localData.headline} {...register("headline")} />
                        <Textarea label="Resumen" defaultValue={localData.summary} {...register("summary")}  />
                    </>
                )
            }
        </Fieldset>
    )
}
