import React from "react";
import { PostParams } from "../types/type";
import PostButton from "./UI/PostButton/PostButton";

type PostItemProps = {
    post:PostParams,
    index: number;
    remove: (removePost: PostParams) => void;
}

const PostItem = ({post, index, remove}:PostItemProps) => {
    return (
        <div className='post'> 
        <div className='post-container'>
         <strong> {index}. {post.title}</strong>
         <div>
           {post.body}
         </div>
        </div>
        <div className="post__btns">
         <PostButton onClick={()=> remove(post)}> удалить </PostButton>
        </div>
       </div>
    );
 
};

export default PostItem;