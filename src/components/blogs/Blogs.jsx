import React, { useEffect,useState } from 'react';

import Blog from '../blog/Blog';    
const Blogs = ({handelBookMark}) => {

   
    const[blogs,setBlogs]= useState([]);
    useEffect(() => {
        fetch("blogs.json")
        .then(res => res.json())
        .then(data => setBlogs(data))

    },[]);
// console.log(blogs);
    return (
        <div>
            <h1 className='text-3xl'>total: {blogs.length}</h1>
            <div className="grid grid-cols-2 all-blogs">
                {
                    blogs.map((blog)=><Blog blog={blog} handelBookMark={handelBookMark}></Blog>)
                }
            </div>
        </div>
    );
};

export default Blogs;