import { useMemo } from "react";
import { PostParams } from "../types/type";

export const useSortedPosts = (posts:PostParams[], sort:string) => {
    const sortedPosts: PostParams[] = useMemo(() => {
        if (sort) {
          return [...posts].sort((a: any, b: any) =>
            a[sort].localeCompare(b[sort])
          );
        }
        return posts;
      }, [sort, posts]);

    return sortedPosts;
}

export const usePosts = (posts:PostParams[], sort:string, query:string) => {
    const sortedPosts: PostParams[] = useSortedPosts(posts, sort);
    
    const sortedAndSearchPosts: PostParams[] = useMemo(() => {
        return sortedPosts.filter(posts => posts.title.toLowerCase().includes(query.toLowerCase()));
      }, [query, sortedPosts]);

    return sortedAndSearchPosts;
}