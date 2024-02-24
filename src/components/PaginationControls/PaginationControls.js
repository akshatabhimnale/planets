import React from "react";
import Pagination from "@mui/material/Pagination";
import { Button } from "@mui/material";

const CustomPagination = ({ pageCount, currentPage, onPageChange }) => {
  const handlePrevPage = () => {
    onPageChange(currentPage - 1);
  };

  const handleNextPage = () => {
    onPageChange(currentPage + 1);
  };

  return (
    <div>
      <Button
        variant="contained"
        onClick={handlePrevPage}
        disabled={currentPage === 1}
      >
        Previous
      </Button>
      <Pagination
        count={pageCount}
        page={currentPage}
        onChange={(event, page) => onPageChange(page)}
        color="primary"
        hideNextButton
        hidePrevButton
      />
      <Button
        variant="contained"
        onClick={handleNextPage}
        disabled={currentPage === pageCount}
      >
        Next
      </Button>
    </div>
  );
};

export default CustomPagination;
