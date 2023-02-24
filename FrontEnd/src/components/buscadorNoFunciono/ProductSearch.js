import React, { useState, useEffect } from "react";
import { helpHttp } from "../helpers/helpHttp";
import Loader from "./Loader";
import ProductDetails from "./ProductDetails";
import ProductForm from "./ProductForm";



const ProductSearch = () => {
  const [search, setSearch] = useState(null);
  const [vitamin, setVitamin] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (search === null) return;

    const fetchData = async () => {
      const {vitamin} = search;

      let vitaminUrl = `http://localhost:5000/vitamin`;

      setLoading(true);

      const [vitaminRes] = await Promise.all([
        helpHttp().get(vitaminUrl)
      ]);
      console.log(vitaminRes);

      setVitamin(vitaminRes);
      setLoading(false);
    };

    fetchData();
  }, [search]);

  const handleSearch = (data) => {
    console.log(data)
    setSearch(data);
  };

  return (
    <>
      {loading && <Loader />}
      <ProductForm handleSearch={handleSearch} />
      <ProductDetails search={search} vitamin={vitamin} />
    </>
  );
};

export default ProductSearch;
