import React, { useEffect, useState } from 'react';
import axios from "axios";
import { Box } from '@mui/material';
import BlogPostItem from './BlogPostItem';
import Pagination from '../Functionality/Pagination';
const BlogPostList = () => {
    const [data,setData]=useState([]);
    const apiKey="b668ac647f43439f94112c7c2ac3a832";
    const [page,setPage]=useState(1);
   // console.log(data.length);
    const itemperpage=10;
    const totalPage = Math.ceil(data.length/itemperpage);
    const end = page * itemperpage;
    const start = end - itemperpage;
    const paginationdata = data.slice(start,end);
    const getBlog=async()=>{
      return await axios.get(`https://newsapi.org/v2/everything?q=apple&from=2024-07-18&to=2024-07-18&sortBy=popularity&apiKey=${apiKey}`)
      .then((r)=>{
        console.log(r.data.articles);
        setData(r.data.articles);
      })
      .catch((e)=>{
        console.log(e)
      })
    }
    useEffect(()=>{
        getBlog()
    },[])
   // console.log(paginationdata.length,totalPage);
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
        {paginationdata.map((item, index) => (
          <Box padding={"2px"} backgroundColor="#282c34" key={index}>
            <BlogPostItem item={item} index={index} />
          </Box>
        ))}
        <Pagination
          sx={{ width: { xs: "100%", sm: "100%", md: "50%", lg: "60%" } }}
          page={page}
          setPage={setPage}
          totalPage={totalPage}
        />
      </Box>
    </React.Fragment>
  );
}

export default BlogPostList;
