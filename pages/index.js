import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { Card, Placeholder, Button } from 'semantic-ui-react'
import dynamic from 'next/dynamic'
import Navbar from '../components/navbar'
import { connect } from 'react-redux'
import { addToCart } from '../redux/actions/cartActions'
const Product = dynamic(
  ()=> import('../components/product'),
  { loading: () => (
  <Placeholder>
    <Placeholder.Image/>
    <Placeholder.Header/>
    <Placeholder.Paragraph/>
    <Placeholder.Line/>
  </Placeholder>)})

const Home = ({products, addToCart}) => {

  function handleClick(id) {
    addToCart(id)
  }

  let productList = products.map(product => {
    return (
      <Product image={product.img} name={product.name} description={product.desc} price={product.price} rating={product.rating} onClick={()=>handleClick(product.id)} />
    )
  })

  return (
    <div className={styles.container}>
      <Head>
        <title>Website</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar/>

      <main className={styles.main}>
        <Card.Group>
          {productList}
        </Card.Group>
      </main>

      <footer className={styles.footer}>
      </footer>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
      products: state.products
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addToCart: (id)=>{dispatch(addToCart(id))}
  }
}

export default connect(mapStateToProps, mapDispatchToProps) (Home)
  