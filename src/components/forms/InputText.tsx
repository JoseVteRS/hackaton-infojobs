interface InputTextProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

export const InputText = ({ label }: InputTextProps) => {
  return (
    <div className="relative w-full">
      <span className="flex text-sm mb-1 relative">
        <label>{label}</label>
      </span>
      <div>
      <input
        type="text"
        id=""
        className="text-sm border-2 border-primary-l4 transition duration-300 rounded-md ij-shadow-base focus:outline-none hover:border-primary w-full h-12 p-5"
      />
      </div>
    </div>
  );
};
