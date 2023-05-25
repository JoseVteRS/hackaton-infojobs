import { Button } from "../ui/Button";

export const Fieldset = ({
  children,
  title,
}: {
  children: React.ReactNode | React.ReactNode[];
  title: string;
}) => {
  return (
    <form>
      <div className="border border-ij-gray-l4 rounded-md">
        <fieldset className="border-none p-0 m-0">
          <legend className="bg-primary-l4  p-4 w-full rounded-t-md border-b border-ij-gray-l4">
            <span className="text-primary font-bold uppercase leading-relaxed tracking-widest">
              {title}
            </span>
          </legend>
          <div className="p-3">{children}</div>
        </fieldset>
        <div className="p-3">
          <Button>Guardar</Button>
        </div>
      </div>
    </form>
  );
};
