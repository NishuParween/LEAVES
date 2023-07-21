import { useState } from "react";

const title = () => {
    <>
    <a href ="/"></a>
    <img className="logo"
         alt="logo"
         src="https://img.favpng.com/21/7/18/autumn-leaves-drawing-leaf-png-favpng-VaQBk1pFTxj0iv83RDQbP0GHz.jpg"/>
         </>
}


const Header = () => {
    return(
        <div className="Header">
            <div className="logo">
            <title />
            </div>

            <div className="Search">
                const [searchInput,setsearchInput] = useState();
                       return(
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
                                    const data= filterData(searchInput,);
                                    setsearchInput(data);
                                }

                                }
                                >Search</button>
                            </div>
                        }
                        </>
                       )
                      

            </div>

            <div className="wishlist">
                <a class="w-list">wishlist</a>
            </div>

            <div className="authenticate">
                <a class="login">LogIn</a>
                <a class="register">SignUp</a>
            </div>
        </div>
    )
};
export default Header;