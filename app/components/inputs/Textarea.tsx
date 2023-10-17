'use client';

interface TextareaProps {
    id: string;
    placeholder: string;
    register:any;
}

const Textarea: React.FC<TextareaProps> = ({
    id,
    placeholder,
    register
}) => {

    return (
        <textarea id={id} placeholder={placeholder} maxLength={1000} required
            className="
                peer
                w-full
                h-40
                resize-none
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

export default Textarea;