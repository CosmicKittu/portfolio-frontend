import type { Project } from "~/type";
import ProjectCard from "./ProjectCard";

type FeaturedProjectsProps={
    projects : Project[],
    count : number

}

const FeaturedProjects = ({projects, count=4}: FeaturedProjectsProps) => {
    // const featured = projects.filter((p)=>p.featured).slice(0, count) ###preously used when there was no strapi
    if (projects.length==0) return null;
    return ( 
        <section>
            <h2 className="text-2xl font-bold mb-6 text-gray-200">
                ⭐ Featured Projects
                <div className="grid gap-6 sm:grid-cols-2">
                    {projects.map((project)=>(
                        <ProjectCard key={project.id} project={project}  />
                    )
                    )}
                </div>
            </h2>
        </section>
     );
}
 
export default FeaturedProjects;