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
                border-neutral-200
                focus:border-white
                rounded-xl
                outline-none
                transition
                placeholder-neutral-200
            "
            {...register(id)}
        />
    )
}

export default Textarea;