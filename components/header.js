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
            <title />
            <div className="nav-items">
                <ul>
                    <li>
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
                            </div>
                        }
                        </>
                       )

                    </li>
                    <li>Wishlist</li>
                    <li>SignIn</li>
                    <li>Register?</li>
                </ul>
            </div>
        </div>
    )
};
export default Header;