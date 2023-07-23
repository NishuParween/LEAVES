import { product_list } from "./product-list";
import { Card } from "./card";

const Body = () => {
    return (
        <>
            <div className="container">
                <div className="product-list">
                    {product_list.map((product) => {
                        return <Card {...product} key={product.id} />;
                    })}
                </div>
            </div>
        </>
    );
}

export default Body;
