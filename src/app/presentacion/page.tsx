import { Fieldset } from "@/components/forms/Fieldset";
import { InputText } from "@/components/forms/InputText";
import { Textarea } from "@/components/forms/Textarea";


export default function PresentationPage() {
 
  return (
    <>
      <h3 className="my-6 text-2xl text-black/80 font-semibold">
        Presentación
      </h3>
      <Fieldset title="Introducción">
        <InputText label="Headline" />
        <InputText label="Headline" />
        <Textarea label="Resumen" />
      </Fieldset>
    </>
  );
}
