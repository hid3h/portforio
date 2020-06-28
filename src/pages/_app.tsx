import '../styles/global.css'
import "antd/dist/antd.css";
import Footer from '../components/footer'
import { Layout } from 'antd'

export default ({ Component, pageProps }) => (
  <>
    <Layout>
      <Component {...pageProps} />
      <Footer />
    </Layout>
  </>
)
