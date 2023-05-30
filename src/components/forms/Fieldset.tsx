'use client'
import { useBeforeUnload } from "@/hooks/useBeforeUnload";
import { useEffect } from "react";
import {
  FieldValues,
  SubmitHandler,
  UseFormReturn,
  useForm
} from "react-hook-form";
import { Button } from "../ui/Button";

type FormProps<TFormValues extends FieldValues> = {
  title: string;
  onSubmit: SubmitHandler<TFormValues>;
  localStorageKey: string;
  children: (
    methods: UseFormReturn<TFormValues>,
  ) => React.ReactNode;
};

export const Fieldset = <TFormValues extends FieldValues>({
  children,
  title,
  onSubmit,
  localStorageKey,
}: FormProps<TFormValues>): JSX.Element => {


  const methods = useForm<TFormValues>();

  useEffect(() => {
    if(typeof window === 'undefined') return;
    const data = localStorage.getItem(localStorageKey);
    const dataParsed = JSON.parse(data || "{}");

    methods.reset(dataParsed); 
 
  }, [localStorageKey, methods]);

  useBeforeUnload(
    methods.formState.isDirty,
    "¿Estás seguro de salir sin guardar?"
  );

  return (
    <form onSubmit={methods.handleSubmit(onSubmit)}>
      <div className="border border-ij-gray-l4 rounded-md">
        <fieldset className="border-none p-0 m-0">
          <legend className="bg-primary-l4  p-4 w-full rounded-t-md border-b border-ij-gray-l4">
            <span className="text-primary font-bold uppercase leading-relaxed tracking-widest">
              {title}
            </span>
          </legend>
          <div className="p-3">{children(methods)}</div>
        </fieldset>
        <div className="p-3">
          <Button>Guardar</Button>
        </div>
      </div>
    </form>
  );
};