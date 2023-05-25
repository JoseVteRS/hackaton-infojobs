import { Fieldset } from "@/components/forms/Fieldset";
import { InputText } from "@/components/forms/InputText";
import { Textarea } from "@/components/forms/Textarea";


export default function ContactPage() {
 
  return (
    <>
      <h3 className="my-6 text-2xl text-black/80 font-semibold">
        Información básica
      </h3>
      <Fieldset title="Introducción">
        <InputText label="Nombre" />
        <InputText label={`Apellido`} />
        <Textarea label="Resumen" />
      </Fieldset>
    </>
  );
}
