import type {Route} from "./+types/index";
import type {Project} from '~/type';
import ProjectCard from "~/components/ProjectCard";
import { useState } from "react";
import Pagination from "~/components/Pagination";
import { AnimatePresence, motion } from "framer-motion";


export async function loader({request}:Route.LoaderArgs):Promise<{projects : Project[]}>{
    const res = await fetch(`${import.meta.env.VITE_API_URL}/projects`);
    const data = await res.json();

    return {projects:data};
}

const ProjectPage = ({loaderData}: Route.ComponentProps) => {
    const {projects} = loaderData as {projects : Project[]};


    const [selectedCategory, setSelectedCategory] = useState('all');
    const [currentPage, setCurrentPage] = useState(1);
    //get unique Category
    const Categories= ['all', ...new Set(projects.map((project)=>project.category))]
    const FilteredProject = selectedCategory === 'all' ? projects : projects.filter((project)=> project.category==selectedCategory);

    const projectsperpage = 10;
    const totalPages = Math.ceil(FilteredProject.length / projectsperpage);

    const indexOfLast = currentPage * projectsperpage;
    const indexOfFirst = indexOfLast - projectsperpage;
    const currentProjects = FilteredProject.slice(indexOfFirst, indexOfLast);





    return ( 
        <>
            <h1 className="text-3xl font-bold text-white mb-8 text center">
               Projects
            </h1>
            <div className="flex flex-wrap gap-2 mb-8">
                {Categories.map((category)=>(
                    <button onClick={()=> {setSelectedCategory(category); setCurrentPage(1)}} key={category} className={`px-3 py-1 rounded text-sm cursor-pointer ${selectedCategory === category ? 'bg-blue-600 text-white' :'bg-gray-700 text-gray-200'}`}>
                        {category}
                    </button>
                ))}
            </div>
            <AnimatePresence mode='wait'>
                <motion.div layout  className="grid gap-6 sm:grid-cols-2">
                    {currentProjects.map((project)=>(
                        <motion.div key={project.id} layout>
                            <ProjectCard  project={project}/>
                        </motion.div>
                    ))}
                </motion.div>
            </AnimatePresence>
            
            <Pagination totalPages={totalPages} currentPage={currentPage} onPageChange={setCurrentPage} />
            </>
     );
}
 
export default ProjectPage;