import { useState } from "react";
import BlogList from "./BlogList";

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
    const handleDelete = (id) => {
        const newBlogs = blogs.filter(blog =>blog.id !==id);
        setBlogs(newBlogs);
    }
   
    return (
        <div className= "home">
          <BlogList  blogs ={blogs} title = "All blogs!" handleDelete ={handleDelete}/>
          <BlogList  blogs ={blogs.filter((blog)=> blog.author === 'simon')} title = "simon`s blogs"/>
        </div>
    );
}
export default Home;