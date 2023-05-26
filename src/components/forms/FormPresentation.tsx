"use client"

import { Fieldset } from './Fieldset';
import { InputText } from './InputText';

type FormValues = {
    "name": string;
    "surname": string;
}

export const FormPresentation = () => {

    const onSubmit = (data: FormValues) => console.log(data);
    return (
        <Fieldset<FormValues> onSubmit={onSubmit} title="Introducción">
            {
                ({ register }) => (
                    <>
                        <InputText label="Nombre" {...register("name")} />
                        <InputText label={`Apellido`} {...register("surname")} />
                        {/* <Textarea label="Resumen" /> */}
                    </>
                )
            }
        </Fieldset>
    )
}
