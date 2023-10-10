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
        <textarea id={id} placeholder={placeholder} maxLength={1000}
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

export default Textarea;