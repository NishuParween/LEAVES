import React, { useEffect } from 'react';
import { useState } from "react";
//import { product_list } from "./product-list";
import { useDispatch } from 'react-redux';
import {modifySearchItem} from "../utilis/appSlice"; 

const Header = () => {

    const [searchInput,setsearchInput] = useState("SAVSEA soft charcoal toothbrush");
    
   const dispatch = useDispatch();
   useEffect(() => {
        dispatch(modifySearchItem(searchInput));
      }, [searchInput])
    

    return(
        <div className="Header">
            <div className="logo">
            <>
             {/* <a href ="/"></a> */}
             <img className="logo"
              alt="logo"
              src="https://img.favpng.com/21/7/18/autumn-leaves-drawing-leaf-png-favpng-VaQBk1pFTxj0iv83RDQbP0GHz.jpg"/>
              <h1>Leaves</h1>
            </>
            </div>

            <div className="Search">
                
             <>   
                 {
                    <div className="Search-container">
                      <input type="text"
                             className="search-input"
                             placeholder="Searching Something?"
                             value={searchInput}
                             onChange={(e) => {
                              setsearchInput(e.target.value)
                                   }
                                }
                                />
                      <button className="search-btn" onClick={ (e) => {
                        // const SearchResult= updateSearchItem(searchInput);
                        setsearchInput(e.target.value);
                          }
                        }>Search</button>
                   </div>
                 }
             </>
        
                      

            </div>

            <div className="wishlist">
                <img src="https://assets.ajio.com/static/img/wishlistIcon.svg" alt="wishlistIcon"></img>
                
            </div>

            <div className="authenticate">
                {/* <a class="login">LogIn /</a> */}
                {/* <a class="register"> SignUp</a> */}
            </div>
        </div>
    )
};
export default Header;