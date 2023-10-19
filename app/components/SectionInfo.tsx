'use client';

interface SectionInfoProps {
    title: string;
    description: string;
}

const SectionInfo: React.FC<SectionInfoProps> = ({
    title,
    description
}) => {
    return (
        <div className="my-20 gap-10 md:gap-32">
            <div className='text-4xl font-bold'>
                {title}
            </div>
            <p className="text-lg mt-8">
                {description}
            </p>
        </div>
    )
}

export default SectionInfo;