import React, { useEffect } from 'react';
import { useState } from "react";
//import { product_list } from "./product-list";
import { useDispatch } from 'react-redux';
import {modifySearchItem} from "../utilis/appSlice"; 

const Header = () => {

    const [searchInput,setsearchInput] = useState('');
    const dispatch = useDispatch();

    const handleSearch = () => {
       dispatch(modifySearchItem(searchInput));
      };
    

    return(
        <>
        <div className="Header">
             <div className="logo"> 
            <>
             {/* <a href ="/"></a> */}
             {/* <img className="logo" */}
             {/* alt="logo" */}
             {/* src="https://img.favpng.com/21/7/18/autumn-leaves-drawing-leaf-png-favpng-VaQBk1pFTxj0iv83RDQbP0GHz.jpg"/> */}
              <h1 className="font-bold text-xl mb-2">Leaves</h1>
            </>
            </div>

            <div className="Search">
                
             <>   
                 {
                    <div className="Search-container hover: text-black font-bold py-1 px-3 rounded" style={{ display: "flex", justifyContent: "center" }}>
                      <input type="text"
                             className="search-input rounded"
                             placeholder="Searching Something?"
                             value={searchInput}
                             onChange={(e) => {
                              setsearchInput(e.target.value)
                                   }
                                }
                                />
                      <button className="search-btn" 
                      onClick = {handleSearch}
                      style={{ marginLeft: "10px"}}
                      >Search</button>
                   </div>
                 }
             </>
        
                      

            </div>

            <div className="wishlist">
                <img src="https://assets.ajio.com/static/img/wishlistIcon.svg" alt="wishlistIcon"></img>
                
            </div>

            <div className="authenticate">
                 <a class="login">LogIn /</a>
                 <a class="register"> SignUp</a>
            </div>
        </div>
      </>
    )
};
export default Header;