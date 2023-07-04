import { useQuery } from "@tanstack/react-query"
import Card from "../../components/Card"
import Layout from "../../components/Layout"
import { getProducts } from "../../services"
import { Product } from "../../types"

const Home = () => {


  const { data, status, error } = useQuery<Product[], Error>(['Products'], getProducts);

  const products  = data ||  []

  return (
    <>
      <Layout>
        <div className="container ">{products.map((product, idx) => <Card key={idx} product={product}/>)}</div>
      </Layout>
    </>
  )
}

export default Home
