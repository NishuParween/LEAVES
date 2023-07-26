import React, { useState } from "react";
import { product_list } from "./product-list";
import { Card } from "./Card";
import Header from "./Header";
import { useSelector } from "react-redux";
import { useEffect } from "react";

const Body = () => {
  const searchItem = useSelector((store) => store.app.searchItem);

  const filteredProducts = product_list.filter((product) => {
    return product.pname.toLowerCase().includes(searchItem.toLowerCase());
  });

  //const [productList,setproductList] = useState(product_list);
 // useEffect(() => {
 //   const filterData = product_list.filter((product) =>
 //     product?.pname.includes(searchItem)
 //   );
 //   setproductList(filterData);
 // }, [searchItem]);
 // console.log("searchItem", searchItem);
  return (
    <>
      <div className="container">
        <div className="product-list flex flex-wrap">
          {filteredProducts.map((product) => {
            return <Card {...product} key={product.id} />;
          })}
        </div>
      </div>
    </>
  );
};

export default Body;
