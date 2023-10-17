'use client';

interface InputProps {
    id: string;
    type: string;
    placeholder: string;
    register: any;
}

const Input: React.FC<InputProps> = ({
    id,
    type,
    placeholder,
    register
}) => {

    return (
        <input
            id={id}
            type={type}
            placeholder={placeholder}
            required
            autoComplete="off"
            className="
                peer
                w-full
                my-2
                p-4
                bg-transparent
                border-2
                border-indigo-950
                dark:border-neutral-200
                focus:border-indigo-800
                dark:focus:border-white
                rounded-xl
                outline-none
                transition
                placeholder-indigo-950
                dark:placeholder-neutral-200
            "
            {...register(id)}
        />
    )
}

export default Input;