import '../styles/globals.css'
import Navbar from './component/Navbar'
import Footer from './component/Footer'

function MyApp({ Component, pageProps }) {
  return <>
  <Navbar></Navbar>
  <Component {...pageProps} />
  <Footer></Footer>
  </>
}
export default MyApp
