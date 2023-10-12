'use client';

import { useForm } from "react-hook-form";
import Input from "./inputs/Input";
import Textarea from "./inputs/Textarea";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const contactFormSchema = z.object({
    name: z.string().min(3).max(100),
    email: z.string().email(),
    message: z.string().min(1).max(1000)
})

export default function ContactForm() {

    type ContactFormData = z.infer<typeof contactFormSchema>

    const { handleSubmit, register } = useForm<ContactFormData>({
        resolver: zodResolver(contactFormSchema)
    });

    const onSubmit = async (data: ContactFormData) => {
        console.log(data);
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <Input id="name" placeholder="Name" register={register} />
            <Input id="email" placeholder="Email" register={register} />
            <Textarea id="message" placeholder="Message" register={register} />
            <button className="w-full my-2 p-4 bg-indigo-800 border-2 border-indigo-900 rounded-xl text-xl font-semibold">
                Send
            </button>
        </form>
    )
}
