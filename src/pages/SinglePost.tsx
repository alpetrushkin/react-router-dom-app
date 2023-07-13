import axios from "axios";
import { Link, useLoaderData } from "react-router-dom";

export const singlePostLoader = async ({ request, params }) => {
  const { data } = await axios.get(
    `https://jsonplaceholder.typicode.com/posts/${params.id}`
  )
  return data
}

const SinglePost = () => {
  const post = useLoaderData()

  return (
    <>
      <h1 className='text-white text-center text-2xl my-10'>
        Single Post Page
      </h1>

      <Link
        className='bg-sky-500 rounded-md px-6 py-2 hover:bg-sky-600 mx-auto flex justify-center max-w-fit'
        to='/posts'>
        Back
      </Link>

      <div className='mt-5 flex flex-col gap-2'>
        <p>
          <span className='text-green-300'>Post ID:</span>
          {post.id}
        </p>
        <h1 className='text-xl'>
          <span className='text-green-300'>Post Title</span>{' '}
          {post.title}
        </h1>
        <p>
          <span className='text-green-300'>Post Body:</span>
          {post.body}
        </p>
      </div>
    </>
  );
};

export default SinglePost;