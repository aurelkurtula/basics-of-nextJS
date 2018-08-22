import Layout from '../components/Layout';
import getPhotos from '../data/data.js'
import Photo from '../components/Photo';
const Index = (props) => (
    <Layout>
       {
        props.images.map((image, key) => <Photo id={key} id={key} data={image} />)
       }
    </Layout>
)
Index.getInitialProps = async ({ }) => {
  // Would fetch data
  return {  images: getPhotos()  } // return { images: [ { }, { } ] }
}

export default Index