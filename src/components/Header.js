import React from 'react';
import { useState } from "react";
const Header = () => {
    const [searchInput,setsearchInput] = useState();
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
                      <button className="search-btn" onClick={ () => {
                        // const data= filterData(searchInput,);
                         //setsearchInput(data);
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
                {/* <a class="login">LogIn /</a>
                <a class="register"> SignUp</a> */}
            </div>
        </div>
    )
};
export default Header;