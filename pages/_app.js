import "@fortawesome/fontawesome-svg-core"
import { library } from "@fortawesome/fontawesome-svg-core"
import Layout from '../components/Layout'
import '../styles/globals.css'



function MyApp({ Component, pageProps }) {
  return (
     <Layout>
       <Component {...pageProps} />
     </Layout>
  )
}

export default MyApp
