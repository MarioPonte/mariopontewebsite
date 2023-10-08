'use client';

import { PiDatabaseThin } from 'react-icons/pi';

interface ServicesCardProps {
    title: string;
    description: string;
}

const ServicesCard: React.FC<ServicesCardProps> = ({
    title,
    description,
}) => {

    return (
        <div className="bg-slate-950 p-8 rounded-xl w-full border-[1px] border-slate-950 hover:border-white transition duration-500">
            <div className="text-6xl">
                <PiDatabaseThin />
            </div>
            <div>
                <div className="font-bold text-xl mb-1">
                    {title}
                </div>
                <div className="text-base">
                    {description}
                </div>
            </div>
        </div>
    )
}

export default ServicesCard;
