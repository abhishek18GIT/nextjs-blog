import React from 'react'
import Link from 'next/link'
import styles from '/styles/Home.module.css'
import mobliestyles from '/styles/Mobile.module.css'
import Script from 'next/script'
import { useRouter } from 'next/router'

const Navbar = () => {
  const router = useRouter();
  const currentRoute = router.pathname;
  return (
    <>
         {/* <div className={styles.mainnav}>
         <ul className={styles.nva_main_ul}>
             <Link href="/about">
                 <li className={styles.navli}><a className={currentRoute === "/about" ? styles.active : styles.non_active}>About</a></li>
             </Link>
             <Link href="/">
                 <li className={styles.navli}><a className={currentRoute === "/" ? styles.active : styles.non_active}>Home</a></li>
             </Link>
             <Link href="/blog">
                 <li className={styles.navli}><a className={currentRoute === "/blog" ? styles.active : styles.non_active}>Blog</a></li>
             </Link>
             <Link href="/contact">
                 <li className={styles.navli}><a className={currentRoute === "/contact" ? styles.active : styles.non_active}>Contact</a></li>
             </Link>
         </ul>
     </div>

    <div> */}

    <nav role="navigation">
      <div id="menuToggle" >
        <input type="checkbox" className={styles.hidehamburger}/>
          <span></span>
          <span></span>
          <span></span>
          {/* <div className={styles.mainnav}> */}
          <ul id="menu" className={styles.mainnav}>
        {/* <li><a href="#">Home</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">Info</a></li>
        <li><a href="#">Contact</a></li> */}
                     <Link href="/about">
                 <li className={styles.navli}><a className={currentRoute === "/about" ? styles.active : styles.non_active}>About</a></li>
             </Link>
             <Link href="/">
                 <li className={styles.navli}><a className={currentRoute === "/" ? styles.active : styles.non_active}>Home</a></li>
             </Link>
             <Link href="/blog">
                 <li className={styles.navli}><a className={currentRoute === "/blog" ? styles.active : styles.non_active}>Blog</a></li>
             </Link>
             <Link href="/contact">
                 <li className={styles.navli}><a className={currentRoute === "/contact" ? styles.active : styles.non_active}>Contact</a></li>
             </Link>
      </ul>
          {/* </div> */}

     </div>
    </nav>
 <style jsx>{`
    @media only screen and (max-width : 762px) {
        a {
            text-decoration: none;
            color: #white;
            opacity:1;
            font-family: 'work sans', sans serif;
            font-size: 1.5em;
            font-weight: 400;
            transition: 200ms;
        }
        a:hover {
            opacity:0.5;
        }
        ul {
            padding: 0;
            list-style-type: none;
        }
        
        
        
        .content {
            border: 1px solid #36383F;
            border-radius: 20px;
            width: 100%;
            height: 100%;
            background-color: #F5F6FA;
            overflow: hidden;
        }
        nav {
            background-color: #1E1E23;
            height: 65px;
        }
        
        
        #menuToggle {
            display: flex;
            flex-direction: column;
            position: relative;
            top: 25px;
            left: 25px;
            z-index: 1;
            -webkit-user-select: none;
            user-select: none;
        }
        
        #menuToggle input
        {
            display: flex;
            width: 40px;
            height: 32px;
            position: absolute;
            cursor: pointer;
            opacity: 0;
            z-index: 2;
        }
        
        #menuToggle span
        {
            display: flex;
            width: 29px;
            height: 2px;
            margin-bottom: 5px;
            position: relative;
            background: #ffffff;
            border-radius: 3px;
            z-index: 1;
            transform-origin: 5px 0px;
            transition: transform 0.5s cubic-bezier(0.77,0.2,0.05,1.0),
                        background 0.5s cubic-bezier(0.77,0.2,0.05,1.0),
                        opacity 0.55s ease;
        }
        
        #menuToggle span:first-child
        {
            transform-origin: 0% 0%;
        }
        
        #menuToggle span:nth-last-child(2)
        {
            transform-origin: 0% 100%;
        }
        
        #menuToggle input:checked ~ span
        {
            opacity: 1;
            transform: rotate(45deg) translate(-3px, -1px);
            background: #36383F;
        }
        #menuToggle input:checked ~ span:nth-last-child(3)
        {
            opacity: 0;
            transform: rotate(0deg) scale(0.2, 0.2);
        }
        
        #menuToggle input:checked ~ span:nth-last-child(2)
        {
            transform: rotate(-45deg) translate(0, -1px);
        }
        
        #menu
        {
            position: absolute;
            width: 260px;
            height: 672px;
            box-shadow: 0 0 10px #85888C;
            margin: -50px 0 0 -50px;
            padding: 50px;
            padding-top: 125px;
            background-color: #1e1e23;
            color:white;
            -webkit-font-smoothing: antialiased;
            transform-origin: 0% 0%;
            transform: translate(-100%, 0);
            transition: transform 0.5s cubic-bezier(0.77,0.2,0.05,1.0);
        }
        
        #menu li
        {
            padding: 10px 0;
            transition-delay: 2s;
            margin-top:50px;
        }
        
        #menuToggle input:checked ~ ul
        {
            transform: none;
        }
    }
`}</style>

    </>

  )
}

export default Navbar