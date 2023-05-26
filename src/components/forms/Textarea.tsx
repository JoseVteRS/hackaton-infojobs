import { forwardRef } from "react";

type TextareaProps = React.DetailedHTMLProps<
    React.TextareaHTMLAttributes<HTMLTextAreaElement>,
    HTMLTextAreaElement
> & {
    label: string;
};


export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>((props, ref) => {
    return (
        <label className="mb-5 inline-block w-full">
            <span className="block text-sm font-bold text-ij-black">{props.label}</span>
            <textarea
                rows={22}
                className="resize-y text-sm border-2 border-primary-l4 transition duration-300 rounded-md focus:shadow-md focus:shadow-primary hover:border-primary w-full p-2"
                placeholder={`Ejemplo: 

Soy una persona creativa con pasión por aprender de cualquier tema. Mis estudios no representan la curiosidad que siento; me gustaría estar formándome 24/7 por el simple hecho de aprender. 
              
Desde hace años comparto la ilusión en un proyecto que me plantea retos técnicos en cuanto a escalabilidad, pero tengo ganas de desarrollar mis dotes de liderazgo. Disfruto de un buen e-café con mis compañeros de vez en cuando y tengo una tendencia natural para proponer iniciativas que fomenten el teambuilding. 

¡Salir un poco de la rutina nunca está de más!`}
                ref={ref}
                {...props}
            >
            </textarea>
        </label>
    )
})
