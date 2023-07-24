import React from 'react';
import { product_list } from "./product-list";
import { Card } from "./Card";
import Header from "./components/Header";

const Body = () => {
    return (
        <>
            <div className="container">
                <div className="product-list flex flex-wrap">
                    {product_list.map((product) => {
                        return <Card {...product} key={product.id} />;
                    })}
                </div>
            </div>
        </>
    );
}

export default Body;
