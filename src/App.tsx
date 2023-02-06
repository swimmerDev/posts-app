import React, { useEffect } from "react";
import "./styles/App.css";
import PostList from "./components/PostList";
import { PostParams, FilterParams } from "./types/type";
import PostButton from "./components/UI/PostButton/PostButton";
import PostForm from "./components/PostForm";
import PostFilter from "./components/PostFilter";
import PostCreateModal from "./components/UI/PostCreateModal/PostCreateModal";
import { usePosts } from "./hooks/usePosts";
import PostService from "./API/PostService";
import Loader from "./components/UI/Loader/Loader";
import { useFetching } from "./hooks/useFetching";

function App() {
  const [posts, setPosts] = React.useState<PostParams[]>([]);

  const [filter, setFilter] = React.useState<FilterParams>({
    sort: "",
    query: "",
  });
  const [modal, setModal] = React.useState<boolean>(false);
  const sortedAndSearchPosts = usePosts(posts, filter.sort, filter.query);

  const [fetchPosts, isPostLoading, postError] = useFetching(async () => {
    const posts = await PostService.getAll();
    setPosts(posts);
  })

  const createPost = (newPost: PostParams) => {
    setPosts([...posts, newPost]);
    setModal(false);
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  const removePost = (postToRemove: PostParams) => {
    setPosts(posts.filter((post) => post.id !== postToRemove.id));
  };

  return (
    <div className="App">
      <PostButton onClick={() => setModal(true)}>Создать пост</PostButton>
      <PostCreateModal visible={modal} setVisible={setModal}>
        {" "}
        <PostForm create={createPost} />
      </PostCreateModal>
      <hr style={{ margin: "15px 0" }} />
      <PostFilter filter={filter} setFilter={setFilter} />
      { postError && <h1> Произошла ошибка {postError}</h1>

      }
      {isPostLoading ? (
          <Loader />
      ) : (
        <PostList
          remove={removePost}
          posts={sortedAndSearchPosts}
          title={"Список постов 1"}
        />
      )}
    </div>
  );
}

export default App;
