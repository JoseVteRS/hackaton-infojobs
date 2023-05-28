import { forwardRef } from "react";

type TextareaProps = React.DetailedHTMLProps<
  React.TextareaHTMLAttributes<HTMLTextAreaElement>,
  HTMLTextAreaElement
> & {
  label: string;
};

export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  (props, ref) => {
    return (
      <label className="mb-5 inline-block w-full">
        <span className="block text-sm font-bold text-ij-black">
          {props.label}
        </span>
        <textarea
          rows={22}
          className="resize-y text-sm border-2 border-primary-l4 transition duration-300 rounded-md focus:shadow-md focus:shadow-primary hover:border-primary w-full p-2"
          placeholder={`Ejemplo: 

Soy una mente creativa siempre sedienta de conocimiento. Mis estudios no pueden medir mi incesante curiosidad, ya que mi deseo de aprender es insaciable.

Durante años, he compartido mi entusiasmo por un proyecto desafiante que plantea obstáculos técnicos en términos de escalabilidad, pero ahora anhelo desarrollar mis habilidades de liderazgo. De vez en cuando, disfruto de un café virtual con mis colegas, creando un ambiente propicio para proponer iniciativas que fortalezcan el espíritu de equipo.
                
¡Romper la monotonía nunca viene mal!`}
          ref={ref}
          {...props}
        ></textarea>
      </label>
    );
  }
);

Textarea.displayName = "Textarea";