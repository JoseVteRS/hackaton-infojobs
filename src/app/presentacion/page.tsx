import { Fieldset } from "@/components/forms/Fieldset";
import { InputText } from "@/components/forms/InputText";
import { Textarea } from "@/components/forms/Textarea";



export default function PresentationPage() {

    return (
        <Fieldset title="Introducción">
                <InputText label="Headline" />
                <Textarea label="Resumen" />
        </Fieldset>
    )
}