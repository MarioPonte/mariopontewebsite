'use client';

import { useForm } from "react-hook-form";
import Input from "../inputs/Input";
import Textarea from "../inputs/Textarea";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import axios from "axios";
import toast from "react-hot-toast";

const contactFormSchema = z.object({
    name: z.string().min(3).max(100),
    email: z.string().email(),
    message: z.string().min(1).max(1000)
})

export default function ContactForm() {

    type ContactFormData = z.infer<typeof contactFormSchema>

    const { handleSubmit, register, reset, formState: { isSubmitting } } = useForm<ContactFormData>({
        resolver: zodResolver(contactFormSchema)
    });

    const onSubmit = async (data: ContactFormData) => {
        try{
            await axios.post("/api/contact", data);
            toast.success("Message sent successfully!");
            reset();
        }catch{
            toast.error("An error occurred while trying to send the message. Please try again.");
        }
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <Input id="name" type="text" placeholder="Name" register={register} />
            <Input id="email" type="email" placeholder="Email" register={register} />
            <Textarea id="message" placeholder="Message" register={register} />
            <button className="w-full my-2 p-4 bg-gradient-to-r from-indigo-600 to-indigo-800 text-white shadow-2xl shadow-indigo-300 dark:shadow-indigo-900 rounded-xl text-xl font-semibold disabled:opacity-70" disabled={isSubmitting}>
                Send
            </button>
        </form>
    )
}
