'use client';

interface InputProps {
    id: string;
    placeholder: string;
    register: any;
}

const Input: React.FC<InputProps> = ({
    id,
    placeholder,
    register
}) => {

    return (
        <input
            type="text"
            id={id}
            placeholder={placeholder}
            required
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
            {...register(id)}
        />
    )
}

export default Input;