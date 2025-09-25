import React, { useEffect, useState } from "react";
import classes from "./ProductDetail.module.css";
import LayOut from "../../components/LayOut/LayOut";
import { useParams } from "react-router-dom";
import axios from "axios";
import ProductCard from "../../components/Product/ProductCard";
import { producturl } from "../../Api/endPoint";

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    axios
      .get(`${producturl}/products/${id}`)
      .then((res) => {
        setProduct(res.data);
        console.log("Fetched product:", res.data);
      })
      .catch((err) => {
        console.error("Error fetching product:", err);
      });
  }, [id]);

  if (!product) {
    return (
      <LayOut>
        <p>Loading product details...</p>
      </LayOut>
    );
  }

  return (
    <LayOut>
      <ProductCard product={product} key={product.id} />
    </LayOut>
  );
};

export default ProductDetail;
