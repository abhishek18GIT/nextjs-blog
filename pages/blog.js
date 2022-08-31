import React, { useEffect , useState} from 'react'
import Link from 'next/link'
import styles from '../styles/Blog.module.css'

const blog = (props) => {
  const [blogs, setBlogs] = useState(props.allBlogs);
  // useEffect(()=>{
  //   fetch('http://localhost:3000/api/blogs').then((a) => {
  //     return a.json()
  //   }).then((parsed) => {
  //     setBlogs(parsed)
  //   })
  // },[])
  return (
    <div className={styles.container}>
      <main className={styles.main}>
      <h2>Blogs Posts</h2>
        {blogs.map((blogitem) => {
          return  <div key={blogitem.slug}>
            <Link  href={`blogpost/${blogitem.slug}`}>
              <h3 className={styles.blogitemh3}>{blogitem.title}</h3>
            </Link>
            <p>{blogitem.content.substr(0,400)}</p>
          </div>
        })}
        
      </main>
    </div>
  )
}

export async function getServerSideProps(context) {
  let data = await  fetch('http://localhost:3000/api/blogs')
  let allBlogs = await data.json()
  return {
    props: {allBlogs}, // will be passed to the page component as props
  }
}

export default blog