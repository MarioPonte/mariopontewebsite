'use client';

import { motion } from "framer-motion";
import { sectionInfoAnimation } from "../lib/animations";

interface SectionInfoProps {
    title: string;
    description: string;
}

const SectionInfo: React.FC<SectionInfoProps> = ({
    title,
    description
}) => {

    return (
        <motion.div 
            className="my-20 gap-10 md:gap-32"
            {...sectionInfoAnimation}
            transition={{ duration: 0.5 }}
        >
            <div className='text-4xl font-bold'>
                {title}
            </div>
            <p className="text-lg mt-8">
                {description}
            </p>
        </motion.div>
    )
}

export default SectionInfo;