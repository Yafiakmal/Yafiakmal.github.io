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
            .then(setData)
            .catch(() => console.error("Failed to fetch project.json"))
            .finally(() => setLoading(false));
    }, []);

    return (
        <section className="bg-[#1D546C] w-full p-10 pt-6 flex font-mono">
            <div className="flex flex-col items-center w-full">

                <h1 className="p-6 text-2xl font-black text-blue-50">
                    Latest Project
                </h1>

                {loading ? (
                    <div className="text-white">Loading projects...</div>
                ) : (
                    <div className="grid grid-cols-1 sm:grid-cols-2 2xl:grid-cols-3 gap-6 w-full">
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
