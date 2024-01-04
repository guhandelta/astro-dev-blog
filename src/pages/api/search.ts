import type { APIRoute } from "astro";
import { getCollection, type CollectionEntry } from "astro:content";

export const GET: APIRoute = async ({ url }):Promise<Response> => {
    const query: string | null = url.searchParams.get('query');

    // If no query is provided
    if (query === null) {
        return new Response(JSON.stringify({
            error: 'No query provided'
        }), {
            status: 400, // Bad Request
            headers: {
                'Content-Type': 'application/json'
            }
        });
    }

    const allBlogArticles: CollectionEntry<'blog'>[] = await getCollection('blog');

    // Filter the articles based on the query
    const searchResults = allBlogArticles.filter((article) => {
        const titleMatch:boolean = article.data.title.toLowerCase().includes(query!.toLowerCase());
        
        const bodyMatch:boolean = article.body.toLowerCase().includes(query!.toLowerCase());
        
        const slugMatch:boolean = article.slug.toLowerCase().includes(query!.toLowerCase());

        return titleMatch || bodyMatch || slugMatch;
    });

    return new Response(JSON.stringify(searchResults), {
        status: 200, // Bad Request
        headers: {
            'Content-Type': 'application/json'
        },
    });
}