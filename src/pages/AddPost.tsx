import React from 'react';
import {Form, redirect} from "react-router-dom";
import axios from "axios";

export const addPostAction = async ({request, params}) => {
  switch (request.method) {
    case 'POST': {
      const formData = await request.formData()

      const newPost = {
        title: formData.get('title'),
        body: formData.get('body'),
        userId: Date.now()
      }
      await axios.post('https://jsonplaceholder.typicode.com/posts', newPost)
      return redirect('/posts')
    }
    case 'DELETE': {}
  }
}

const AddPost = () => {
  return (
    <Form
      method='post'
      action='/add'
      className='p-10 bg-slate-800 flex flex-col gap-2'>
      <label className='flex flex-col gap-2'>
        Post title:
        <input type="text" className='text-black p-2' name='title'/>
      </label>
      <label className='flex flex-col gap-2'>
        Post body:
        <input type="text" className='text-black p-2' name='body'/>
      </label>

      <button className='bg-sky-500 rounded-md px-6 py-2 hover:bg-sky-600'>
        Submit
      </button>
    </Form>
  );
};

export default AddPost;