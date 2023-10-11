'use client';

interface TextareaProps {
    id: string;
    placeholder: string;
}

const Textarea: React.FC<TextareaProps> = ({
    id,
    placeholder,
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

export default Textarea;