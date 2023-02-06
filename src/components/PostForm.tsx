import React from "react";
import { PostParams } from "../types/type";
import PostInput from "./UI/PostInput/PostInput";
import PostButton from "./UI/PostButton/PostButton";

type PostFormProps = {
  create: (newPost: PostParams) => void;
}

const PostForm = ({create}:PostFormProps) => {

    const [post, setPost] = React.useState<PostParams>({title:"", body:""});

    const addNewPost = (e: React.SyntheticEvent) => {
        e.preventDefault();
    
        const newPost = {
            ...post,
            id: Date.now(),
        }
        create(newPost);
        setPost({title:"", body:""});
      };

    return (
    <form>
        <PostInput 
          type='text' 
          placeholder="Название" 
          value={post.title} 
          onChange={(e) => setPost({...post, title: e.target.value})}/>
        <PostInput 
          type='text' 
          placeholder='Описание поста'           
          value={post.body} 
          onChange={(e) => setPost({...post, body: e.target.value})}/>
        <PostButton onClick={addNewPost}> Создать пост </PostButton>
      </form>
    )
};

export default PostForm;