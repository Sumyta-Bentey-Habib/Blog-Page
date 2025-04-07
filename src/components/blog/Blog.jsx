import React from 'react';
import { FaBookmark } from "react-icons/fa";

const Blog = ({blog,handelBookMark}) => {
   
    // console.log(blog);
    return (
        <div>
            
            <div className="shadow-sm card bg-base-100 w-96">
  <figure>
    <img
      src={blog.cover}
      alt="cover" />
  </figure>
  <div className="card-body">
    <div className="flex items-center justify-around author">
        <h3>{blog.author}</h3>
        <img  className='w-16'src= {blog.author_img}alt="" srcset="" />
        {/* for adding addition size there is a tag called size={}
        example <FaBookmark size={30} /> */} 
    
        <button onClick={()=>handelBookMark(blog)}><FaBookmark size={25} /></button>


    </div>
    <h2 className="card-title">{blog.title}</h2>
    <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
    <div className='flex'>
        {
        blog.hashtags.map((hashtag)=><p>{hashtag}</p>)
    }
    </div>
    <div className="justify-end card-actions">
      <button className="btn btn-primary">Mark As Read</button>
    </div>
  </div>
</div>

        </div>
    );
};

export default Blog;