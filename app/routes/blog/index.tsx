import { Link } from "react-router";
import type { Route } from "./+types/index";
import type { PostMeta, StrapiResponse, StrapiPost } from "~/type";
import { article } from "framer-motion/client";
import PostCard from "~/components/PostCard";
import { useState } from "react";
import Pagination from "~/components/Pagination";
import PostFilter from "~/components/PostFilter";


export async function loader({request}: Route.LoaderArgs) : Promise<{posts:PostMeta[]}> {

    const res = await fetch(`${import.meta.env.VITE_API_URL}/posts?populate=image&sort=date:desc`);

    if(!res) throw new Error('Faild to fetch dat')
    const json:StrapiResponse<StrapiPost> = await res.json();
    const posts = json.data.map((item)=>({
        id: item.id,
        title : item.title,
        excerpt : item.excerpt,
        slug: item.slug,
        date: item.date,
        body: item.body,
        image: item.image?.url? `${item.image.url}`: '/images/no-image.png',
    }));
    return {posts}
}

const BlogPage = ({loaderData}: Route.ComponentProps) => {
    const {posts} = loaderData;
    const [searchQuery, setSearchQuery] = useState('');
    const [currentPage, setCurrentPage] = useState(1);
    const projectsperpage =2;
    const filteredPost = posts.filter((post)=>{
        const query = searchQuery.toLowerCase();
        return(
            post.title.toLocaleLowerCase().includes(query) || post.excerpt.toLocaleLowerCase().includes(query) 
        )
    })
    const totalPages = Math.ceil(filteredPost.length / projectsperpage);
    const indexOfLast = currentPage * projectsperpage;
    const indexOfFirst = indexOfLast - projectsperpage;
    const currentPost = filteredPost.slice(indexOfFirst, indexOfLast);
    return ( 
        <>
            <div className="max-w-3xl mx-auto mt-10 px-6 py-6 bg-gray-900">
                <h2 className="text-3xl text-white font-bold mb-8">
                    Blog
                </h2>
                <PostFilter searchQuery={searchQuery} onSearchQueryChange={(val)=>{setSearchQuery(val); setCurrentPage(1)}} />

                <div className="space-y-8">
                    {currentPost.length==0? (
                        <p className="text-gray-400 text-center">No Posts Found</p>
                    ):
                    (
                        currentPost.map((post)=>(
                        < PostCard key={post.slug} post= {post}/>
                         ))
                    )}
                </div>
                
                <Pagination totalPages={totalPages} currentPage={currentPage} onPageChange={setCurrentPage} />
            </div>
        </>
     );
}
 
export default BlogPage;