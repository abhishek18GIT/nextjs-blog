import React, { useEffect , useState} from 'react'
import Link from 'next/link'
import styles2 from '../styles/Blog.module.css'
import styles from '../styles/Sample.module.css'
const blog = (props) => {
  const [blogs, setBlogs] = useState([]);
  useEffect(()=>{
    fetch('http://localhost:3000/api/blogs').then((a) => {
      return a.json()
    }).then((parsed) => {
      setBlogs(parsed)
    })
  },[])
  var count = 0;
  return (
    <div className={styles2.container}>
      <main className={styles2.main}>
      <h2>The Man in the Machine</h2>
      <div className={styles.timeline_section}>
        {blogs.map((blogitem) => {
          count=count+1;
          return  <div key={blogitem.slug}>
            
            <div className={styles.timeline_items}>
                <div className={`${(count%2) == 0 ?"even":"odd"}timeline_item`}>
                    <div className={styles.timeline_dot}></div>
                    <div className={styles.timeline_date}>{blogitem.date}</div>
                    <div className={styles.timeline_content}>
                    <Link  href={`blogpost/${blogitem.slug}`}>
                      <h3 className={styles.blogitemh3}>{blogitem.title}</h3>
                    </Link>
                        <p>{blogitem.content.substr(0,300)}</p>
                    </div>
                </div>
            </div>
        </div>
          
        })}
        </div>
      </main>
      <style jsx>{`
          .eventimeline_item{
            margin-bottom: 40px;
            width: 100%;
            position: relative;
              padding-left: calc(50% + 30px);
          }
          .oddtimeline_item{
            margin-bottom: 40px;
            width: 100%;
            position: relative;
              padding-right: calc(50% + 30px);
            text-align: right;
          }
          h2{
              font-size: 60px;
          }
        }
      `}</style>
    </div>
  )
}

// export async function getServerSideProps(context) {
//   // console.log(context.req.headers.host)
//   let data = await  fetch(`http://${context.req.headers.host}/api/blogs`)
//   let allBlogs = await data.json()
//   return {
//     props: {allBlogs}, // will be passed to the page component as props
//   }
// }

export default blog