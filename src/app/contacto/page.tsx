import { Fieldset } from '@/components/forms/Fieldset'
import { InputText } from '@/components/forms/InputText'
import { Separator } from '@/components/ui/Separator'

export default function ContactPage() {
    return (
        <div>
            <h3 className="mb-2 font-semibold">Informacion básica</h3>
            <Fieldset title="Sobre ti">
                <InputText label="Nombre" />
                <InputText label="Apellido(s)" />
                <InputText label="¿Dónde vives?" />
            </Fieldset>
            <Separator size="lg" />
            <Fieldset title="TUS PERFILES Y SITIOS WEB">
                <InputText label="Nombre" />
                <InputText label="Apellido(s)" />
            </Fieldset>
        </div>
    )
}