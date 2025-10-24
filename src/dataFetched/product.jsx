import { useEffect, useState } from "react";

const Product = () => {
  const [data, setData] = useState();
  const [loading, setloading] = useState(true);

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        setloading(false);
      });
  }, []);
  return (
    <>
      {loading ? (
        <h2>Data is loading...</h2>
      ) : (
        <ul>
          <h2>products list:</h2>
        {data.products.map((item) => (
          <li key={item.id}>{item.title}</li>
        ))}
      </ul>
      )}
    </>
  );
};
export default Product;
