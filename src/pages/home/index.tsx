import { useContext, useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import Card from "../../components/Card";
import Layout from "../../components/Layout";
import { getProducts } from "../../services";
import { Product } from "../../types";
import { AppContext } from "../../context";

const Home = () => {
  const context = useContext(AppContext);
  if (context === undefined) {
    throw new Error("MyComponent must be used within a MyProvider");
  }
  const { state, dispatch } = context;

  const { data, status, error } = useQuery<Product[], Error>(
    ["Products"],
    getProducts
  );

  const products = data || [];

  useEffect(() => {
    dispatch({ type: "DEFAULT", payload: state.itemCount });
  }, []);

  const addToCartCount = () => {
    dispatch({ type: "UPDATE_ITEM_COUNT", payload: state.itemCount + 1 });
  };

  return (
    <>
      <Layout>
        <div className="container ">
          {products.map((product, idx) => (
            <Card key={idx} product={product} action={addToCartCount} />
          ))}
        </div>
      </Layout>
    </>
  );
};

export default Home;
