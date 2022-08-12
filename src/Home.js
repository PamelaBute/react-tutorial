import { useState } from "react";

const Home = ( ) =>{
    const [blogs, setBlogs]= useState([ 
        {title: 'My new website', body: 'lorem ipsum...', author:'pamela', id: 1},
        {title: 'Welcome party!', body: 'lorem ipsum...', author:'simon', id: 2},
        {title: 'Web dev top tips', body: 'lorem ipsum...', author:'Simone', id: 3}
     ])
    // let name = 'mario';
    // const[name, setName]= useState( 'mario');
    // const[age, setAge]= useState(25);
    // const handleClick = () => {
    //    setName('lungi');
    //    setAge(30);
  
   
    return (
        <div className= "home">
          {blogs.map((blog) =>(
            <div className="blog-preview" key= {blog.id}>
                <h2>{blog.title}</h2>
                <p> written by  { blog.author}</p>
                </div>
          ))} 
        </div>
    );
}
export default Home;