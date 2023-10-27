"use client";

import { motion } from "framer-motion";
import { ComponentProps } from "react";

type TechnologyBadgeProps = ComponentProps<typeof motion.div> & {
    name: string;
}

const TechnologyBadge: React.FC<TechnologyBadgeProps> = ({
    name, ...props
}) => {
    return (
        <motion.div 
            className="flex items-center bg-gradient-to-r from-indigo-600 to-indigo-800 text-indigo-200 py-1 px-3 rounded-lg text-sm font-medium"
            {...props}
        >
            {name}
        </motion.div>
    )
}

export default TechnologyBadge;