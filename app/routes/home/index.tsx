import type { Route } from "./+types/index";
import FeaturedProjects from "~/components/FeaturedProjects";
import type { Project } from "~/type";
import AboutPreview from "~/components/AboutPreview";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "The Friendly Dev | Welcome" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export async function loader({request} : Route.LoaderArgs):Promise<{projects:Project[]}>{
  const res = await fetch(`${import.meta.env.VITE_API_URL}/projects`)
  const data = await res.json();
  // console.log(data)
  return {projects: data};
}


export default function Home({loaderData}: Route.ComponentProps) {
  const {projects} = loaderData;
  return (<>
    <FeaturedProjects projects ={projects} count={2} />
    <AboutPreview />
  </>);
}
