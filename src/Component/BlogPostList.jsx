import React, { useEffect, useState } from "react";
import { Box } from "@mui/material";
import BlogPostItem from "./BlogPostItem";
import Pagination from "../Functionality/Pagination";

const BlogPostList = () => {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const itemsPerPage = 10;
  const apiKey = "b668ac647f43439f94112c7c2ac3a832";
  const totalPage = Math.ceil(data.length / itemsPerPage);
  const end = page * itemsPerPage;
  const start = end - itemsPerPage;
  const paginationData = data.slice(start, end);

  const getBlog = async () => {
    try {
      const res = await fetch(
        `https://newsapi.org/v2/everything?q=apple&from=2024-07-18&to=2024-07-18&sortBy=popularity&apiKey=${apiKey}`,
        {
          method: "GET",
          headers: {
            Authorization: `Bearer ${apiKey}`,
          },
          mode: "cors",
        }
      );

      if (!res.ok) {
        throw new Error(`HTTP error! Status: ${res.status}`);
      }

      const result = await res.json();
      setData(result.articles);
    } catch (e) {
      console.error("Error fetching data:", e.message);
    }
  };

  useEffect(() => {
    getBlog();
  }, []);

  return (
    <React.Fragment>
      <Box
        sx={{
          width: { xs: "100%", sm: "100%", md: "50%", lg: "60%" },
          minHeight: { xs: "", sm: "", md: "", lg: "100vh" },
          margin: "auto",
          gap: "20px",
        }}
      >
        {paginationData.length > 0 ? (
          paginationData.map((item, index) => (
            <Box padding={"2px"} backgroundColor="#282c34" key={index}>
              <BlogPostItem item={item} index={index} />
            </Box>
          ))
        ) : (
          <Box padding={"2px"} backgroundColor="#282c34">
            No articles found.
          </Box>
        )}
        <Pagination
          sx={{ width: { xs: "100%", sm: "100%", md: "50%", lg: "60%" } }}
          page={page}
          setPage={setPage}
          totalPage={totalPage}
        />
      </Box>
    </React.Fragment>
  );
};

export default BlogPostList;
