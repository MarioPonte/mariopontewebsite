'use client';

import { IconType } from 'react-icons';

interface ServicesCardProps {
    title: string;
    description: string;
    icon: IconType;
}

const ServicesCard: React.FC<ServicesCardProps> = ({
    title,
    description,
    icon: Icon
}) => {

    return (
        <div className="bg-slate-950 p-8 rounded-xl w-full border-[1px] border-slate-950 hover:border-white transition duration-500">
            <div className="text-6xl">
                <Icon />
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
