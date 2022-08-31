import {useRouter} from 'next/router'
import styles from '/styles/Blog.module.css'
import React, { useEffect , useState} from 'react'

const slug = (props) => {
  const [blog, setBlog] = useState(props.setBlog);
  // const router = useRouter();
  // useEffect(() => {
  //   if(!router.isReady) return;
  //   const {slug} = router.query;
  //   fetch(`http://localhost:3000/api/getblog?slug=${slug}`).then((a) => {
  //     return a.json()
  //   }).then((parsed) => {
  //     setBlog(parsed)
  //   })
  // }, [router.isReady])
  
  return  <div className={styles.container}>
      <main className={styles.main}>
        <h1>{blog && blog.title}</h1>
        
        <div>
          {blog && blog.content}
        </div>
      </main>
    </div>;
}

export async function getServerSideProps(context) {
    const {slug} = context.query
    let data = await fetch(`http://localhost:3000/api/getblog?slug=${slug}`)
    let setBlog = await data.json()
  return {
    props: {setBlog}, // will be passed to the page component as props
  }
}

export default slug;