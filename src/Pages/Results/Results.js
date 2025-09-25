import React, { useEffect, useState } from "react";
import classes from "./Results.module.css";
import LayOut from "../../components/LayOut/LayOut";
import { useParams } from "react-router-dom";
import axios from "axios";
import { producturl } from "../../Api/endPoint";
import ProductCard from "../../components/Product/ProductCard"; // ✅ make sure path is correct

const Results = () => {
  const [results, setResults] = useState([]);
  const { categoryName } = useParams();
  useEffect(() => {
    axios

      .get(
        `${producturl}/products/category/${encodeURIComponent(
          categoryName.toLowerCase()
        )}`
      )
      .then((res) => {
        console.log("Fetched:", res.data);
        setResults(res.data);
      })
      .catch((err) => {
        console.error("Error fetching products:", err);
      });
  }, [categoryName]);

  return (
    <LayOut>
      <h1 style={{ padding: "30px" }}>Results</h1>
      <p style={{ padding: "30px" }}>Category / {categoryName}</p>

      <div className={classes.product_container}>
        {results.length > 0 ? (
          results.map((product) => (
            <ProductCard product={product} key={product.id} />
          ))
        ) : (
          <p style={{ padding: "30px" }}>No products found.</p>
        )}
      </div>
    </LayOut>
  );
};

export default Results;
