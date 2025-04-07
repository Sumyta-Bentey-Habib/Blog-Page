
import { useState } from 'react'
import './App.css'
import Blogs from './components/blogs/Blogs'
import Navber from './components/navber/Navber'

function App() {
  const [bookmarked,setBookmarked]=useState([]);
const handelBookMark=(blog)=>{
  setBookmarked([...bookmarked,blog]);
}
  console.log(bookmarked);

const [readingCount,setReadingCount]=useState(0);
  
  const handleMarkAsRead=(time,id)=>{
    setReadingCount(readingCount+time);
    handleRemoveBookMark(id);
  }
  // console.log(readingCount);
  const handleRemoveBookMark=(id)=>{
    const remaining=bookmarked.filter((blog)=>blog.id !== id);
    setBookmarked(remaining);
    
  }

  return (
    <>
     <Navber></Navber>
    
     <div className="flex text-center main-container ">
      <div className="left-container w-[70%]">
       
       <Blogs handelBookMark={handelBookMark} handleMarkAsRead={handleMarkAsRead}></Blogs>
        </div>
      <div className="right-container w-[30%] bg-emerald-100 border-2">
        <h1>Reading time : {readingCount}</h1>
        <h1>Bookmark count: {bookmarked.length}</h1>
        {
          bookmarked.map((marked)=><p className='p-2 m-2 text-white shadow-2xl bg-amber-400'>{marked.title}</p>)
        }


      </div>
     </div>
    </>
  )
}

export default App
