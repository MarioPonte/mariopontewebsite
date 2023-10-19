import Image from "next/image";

export default function Project() {
    return (
        <div className="flex flex-col items-center justify-center">
            <div>
                <div className='text-4xl font-bold'>
                    Avatar Landing Page
                </div>
                <p className="text-lg mt-8">
                    Simple landing page with the theme of the movie Avatar: The Way of Water to practice my HTML5 and CSS3 skills.
                </p>
            </div>
            <div className="mt-8">
                <Image alt="Project Image" width={1000} height={750} src="https://encurtador.com.br/boALR" className="w-full rounded-2xl" />
            </div>
        </div>
    )
}
