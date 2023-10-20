interface TechnologyBadgeProps {
    name: string;
}

const TechnologyBadge: React.FC<TechnologyBadgeProps> = ({
    name
}) => {
    return (
        <div className="flex items-center bg-gradient-to-r from-indigo-600 to-indigo-800 text-indigo-200 py-1 px-3 rounded-lg text-sm font-medium">
            {name}
        </div>
    )
}

export default TechnologyBadge;
