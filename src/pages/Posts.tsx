import {Link, useLoaderData} from "react-router-dom";
import axios from "axios";

export const postsLoader = async ({ request, params}) => {
  const { data } = await axios.get(
    'https://jsonplaceholder.typicode.com/posts'
  )
  return data
}

const Posts = () => {
  const posts = useLoaderData()

  return (
    <div className='flex flex-col gap-2'>
      <h1 className='text-white text-center text-2xl my-10'>
        Post Page
      </h1>

      {posts.map((post, index) => (
        <Link
          className='flex py-2 px-4 bg-slate-700'
          key={index}
          to={`${post.id}`}
        >
          <span className='text-green-300 text-lg'>{post.id} - </span>
          {post.title}
        </Link>
      ))}
    </div>
  );
};

export default Posts;