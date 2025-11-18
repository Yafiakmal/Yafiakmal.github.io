import ProjectCard from "../Card/ProjectCard"
import { useEffect, useState } from "react";

interface Project {
    id: number;
    title: string;
    description: string;
    link_view: string;
    link_source: string;
    link_cover: string;
}
export default function MyProject() {
    const [data, setData] = useState<Project[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch('/project.json')
            .then(res => res.json())
            .then(data => {
                setData(data);
                setLoading(false);
            });
    }, []);

    return (
        <section className="bg-[#1D546C] w-full h-fit p-[60px] pt-[30px] flex font-mono">
            <div className="title w-full h-fit flex flex-col justify-center items-center content-center">
                <h1 className="p-[30px] text-2xl font-black text-blue-50">Latest Project</h1>

                {loading ? (
                    <div className="text-white">Loading projects...</div>
                ) : (
                    <div className="project-show h-full w-full grid grid-cols-2 grid-rows-2 gap-4 place-items-center">
                        {data.map(item => (
                            <ProjectCard
                                key={item.id}
                                title={item.title}
                                description={item.description}
                                link_view={item.link_view}
                                link_source={item.link_source}
                                link_cover={item.link_cover}
                            />
                        ))}
                    </div>
                )}
            </div>
        </section>
    );
}