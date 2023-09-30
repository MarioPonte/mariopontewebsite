import Link from "next/link";

export default function NotFoundPage(){
    return (
        <div className="mt-20 sm:mx-10 md:mx-20 mx-10">
            <p className="sm:text-4xl md:text-6xl text-4xl font-bold mb-8">
                Page not found
            </p>
            <p className="sm:text-xl md:text-2xl text-xl">
                Please return to the <Link href="/" className="font-semibold">homepage</Link> or use the navigation bar.
            </p>
        </div>
    )
}