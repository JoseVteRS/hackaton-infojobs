

interface InputTextProps {
    label: string
}

export const InputText = ({
    label
}: InputTextProps) => {
    return (
        <label className="mb-5 inline-block w-full">
            <span className="block text-sm font-bold text-ij-black">{label}</span>
            <input type="text" className="text-sm border-2 border-primary-l4 transition duration-300 rounded-md focus:shadow-md focus:shadow-primary hover:border-primary w-full h-12 p-2" />
        </label>
    )
}
