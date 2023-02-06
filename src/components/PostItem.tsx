import React from "react";
import { PostItemComponent } from "../types/type";
import PostButton from "./UI/PostButton/PostButton";

const PostItem = ({post, index, remove}:PostItemComponent) => {
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