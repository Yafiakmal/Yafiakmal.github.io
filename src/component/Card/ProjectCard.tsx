import Button from "../Button/Button";

interface ProjectCardProps {
    title: string;
    description: string;
    link_view: string;
    link_source: string;
    link_cover: string;
    className?: string;
}

export default function ProjectCard({
    title,
    description,
    link_view,
    link_source,
    link_cover,
    className = "",
}: ProjectCardProps) {
    return (
        <div
            className={`flex flex-col md:flex-row w-full h-auto md:h-[170px] rounded-2xl overflow-hidden bg-amber-600 ${className}`}
        >
            {/* Cover */}
            <div className="w-full md:w-[40%] shrink-0 h-40 md:h-full overflow-hidden">

                <img
                    src={link_cover}
                    alt={`cover for ${title}`}
                    className="w-full h-full object-cover"
                />
            </div>

            {/* Description */}
            <div className="flex-1 min-w-0 px-6 py-4 md:px-7 md:py-6 space-y-2">

                <h2 className="font-bold text-lg line-clamp-1">{title}</h2>
                <p className="font-medium text-sm line-clamp-2">{description}</p>


                <div className="flex gap-3 pt-2">
                    <Button href={link_view} variant="primary">
                        View Project
                    </Button>

                    <Button href={link_source} variant="outline">
                        Source Code
                    </Button>
                </div>
            </div>
        </div>
    );
}
