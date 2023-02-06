import PostItem from "./PostItem";
import { PostParams } from "../types/type";
import { TransitionGroup, CSSTransition } from "react-transition-group";

type PostItemProps = {
    posts: Array<PostParams>,
    title: string,
    remove: (removePost: PostParams) => void;
};

const PostList = ({posts, title, remove}:PostItemProps) => {

    if (posts.length === 0)  {
        return (
        <>
            <h1 className='TitlePosts'> Посты не найдены </h1>
        </>
        )
    }

    return (
        <>
            <h1 className='TitlePosts'> {title} </h1>
            <TransitionGroup>
                {posts.map((post, index) => 
                <CSSTransition
                    key={post.id}
                    timeout={500}
                    classNames="post"
                >
                    <PostItem remove={remove} index={index + 1} post={post}/>
                </CSSTransition>
                )}
            </TransitionGroup>
        </>
    )
}

export default PostList;