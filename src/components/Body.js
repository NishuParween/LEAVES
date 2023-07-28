import React, { useState } from "react";
import { product_list } from "./product-list";
import { Card } from "./Card";
import Header from "./Header";
import { useSelector } from "react-redux";
import { useEffect } from "react";

const Body = () => {
  const searchItem = useSelector((store) => store.app.searchItem);
  const itemsPerPage = 8;

  const filteredProducts = product_list.filter((product) => {
    return product.pname.toLowerCase().includes(searchItem.toLowerCase());
  });

  // State to keep track of the current page number
  const [currentPage, setCurrentPage] = useState(1);

  // Calculate the index of the first and last card to be shown on the current page
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredProducts.slice(
    indexOfFirstItem,
    indexOfLastItem
  );

  // Function to handle page changes
  const handlePageChange = (pageNumber) => {
    // Ensure the page number is within valid bounds
    if (
      pageNumber >= 1 &&
      pageNumber <= Math.ceil(filteredProducts.length / itemsPerPage)
    ) {
      setCurrentPage(pageNumber);
    }
  };

  // Function to go to the previous page
  const goToPreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <>
      <div className="container">
        <div className="product-list flex flex-wrap">
          {currentItems.map((product) => {
            return <Card {...product} key={product.id} />;
          })}
        </div>
      </div>

      {/* Pagination section */}
      <div className="pagination  hover: text-black font-bold py-1 px-3 rounded" style={{ display: "flex", justifyContent: "center" }}>
        {/* Button to go to the previous page */}
        <button onClick={goToPreviousPage} disabled={currentPage === 1}>
          {"previous <"}
        </button>

        {/* Page buttons */}
        {Array.from(
          { length: Math.ceil(filteredProducts.length / itemsPerPage) },
          (_, index) => (
            <button
              key={index}
              onClick={() => handlePageChange(index + 1)}
            ></button>
          )
        )}

        {/* Button to go to the next page */}
        <button
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={
            currentPage === Math.ceil(filteredProducts.length / itemsPerPage)
          }
        >
          {"> next"}
        </button>
      </div>
    </>
  );
};

export default Body;
