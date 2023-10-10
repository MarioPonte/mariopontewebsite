'use client';

interface InputProps {
    id: string;
    placeholder: string;
}

const Input: React.FC<InputProps> = ({
    id,
    placeholder,
}) => {

    return (
        <input type="text" id={id} placeholder={placeholder}
            className="
                peer
                w-full
                my-2
                p-4
                bg-indigo-950
                border-2
                rounded-xl
                outline-none
                transition
                placeholder-neutral-200
            "
        />
    )
}

export default Input;