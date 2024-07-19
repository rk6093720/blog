import { Box, Button, Stack } from "@mui/material";
import React, { useState, useEffect } from "react";

const Pagination = ({ page, totalPage, setPage }) => {
  const [pagination, setPagination] = useState({
    prev: false,
    next: false,
    items: [],
  });

  useEffect(() => {
    const generatePagination = () => {
      let items = [];
      for (let i = 1; i <= totalPage; i++) {
        items.push(i);
      }

      setPagination({
        prev: page > 1,
        next: page < totalPage,
        items,
      });
    };

    generatePagination();
  }, [page, totalPage]);

  return (
    <React.Fragment>
      <Box
        display="flex"
        sx={{
          width: { xs: "100%", sm: "100%", md: "80%", lg: "60%" },
          margin: "auto",
          padding: { xs: "10px", sm: "10px", md: "20px", lg: "10px" },
        }}
        justifyContent="center"
      >
        <Stack
          direction="row"
          sx={{
            width: "100%",
            flexWrap: "wrap",
          }}
          spacing={{ xs: 0.5, sm: 1, md: 1.5, lg: 0.8 }}
          marginTop={{xs:"41px",sm:"10px",md:"52px",lg:"1px"}}
          justifyContent="center"
        >
          {pagination.prev && (
            <Button
              sx={{
                minWidth: { xs: "30px", sm: "40px", md: "50px", lg: "60px" },
                padding: { xs: "5px", sm: "8px", md: "10px", lg: "12px" },
              }}
              aria-label="previous page"
              onClick={() => setPage(page - 1)}
              disabled={!pagination.prev}
              variant="outlined"
            >
              Prev
            </Button>
          )}

          {pagination.items.map((pageNumber) => (
            <Button
              sx={{
                minWidth: { xs: "30px", sm: "40px", md: "50px", lg: "60px" },
                padding: { xs: "5px", sm: "8px", md: "10px", lg: "12px" },
                backgroundColor: page === pageNumber ? "blue" : "black",
                color: "white",
                "&:hover": {
                  backgroundColor: page === pageNumber ? "blue" : "lightblue",
                },
              }}
              key={pageNumber}
              onClick={() => setPage(pageNumber)}
            >
              {pageNumber}
            </Button>
          ))}

          {pagination.next && (
            <Button
              sx={{
                minWidth: { xs: "30px", sm: "40px", md: "50px", lg: "60px" },
                padding: { xs: "5px", sm: "8px", md: "10px", lg: "12px" },
              }}
              aria-label="next page"
              onClick={() => setPage(page + 1)}
              variant="outlined"
            >
              Next
            </Button>
          )}
        </Stack>
      </Box>
    </React.Fragment>
  );
};

export default Pagination;
