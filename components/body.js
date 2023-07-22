import { product_list } from "./product-list";
import { pcard } from "./card";

const Body = () => {
    return(
        <>
        <div className="container" >
          <div className="product-list">
             {product_list.map((product_list) => {
                return <pcard{...product_list} key={product_list.id}/>
             })}
          </div>
        
        
        </div>
        </>
    )
}

export default Body;
