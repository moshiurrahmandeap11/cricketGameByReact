import { use } from "react";
import Post from "./post";

export default function Posts({ postPromise }) {

    const posts = use(postPromise)
    console.log(posts);
  return (
    <div>
      <h3>Posts : {posts.length} </h3>
      {
        posts.map(post => <Post key={post.id} post={post}></Post>)
      }
    </div>
  );
}