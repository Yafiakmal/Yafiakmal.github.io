import Button from "../Button/Button"

interface ProjectCardProps {
    title: string;
    description: string;
    link_view: string;
    link_source: string;
    link_cover: string;
}

export default function ProjectCard({
    title,
    description,
    link_view,
    link_source,
    link_cover
}: ProjectCardProps) {
    return (
        <>
            <div className="card w-[80%] h-[170px] grid grid-row-3 grid-cols-5 rounded-2xl overflow-hidden">
                <div className="cover row-span-1 col-span-2 bg-green-300 rounded-2xl">
                    <div className="image w-full h-full bg-green-500">
                        <img src={link_cover} alt="" />
                    </div>
                </div>
                <div className="desc px-9 py-6 row-span-1 col-span-3 bg-amber-600">
                    <h2 className="font-bold text-lg">{title}</h2>
                    <p className="font-medium">{description}</p>
                    <div className="buttons flex gap-4">
                        <a href={link_view}>View Project</a>
                        <a href={link_source}>Source Code</a>
                        {/* <Button />
                        <Button /> */}
                    </div>
                </div>
            </div>
        </>
    )
}