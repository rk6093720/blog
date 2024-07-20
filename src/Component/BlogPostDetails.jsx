import { Box } from '@mui/material';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const BlogPostDetails = () => {
    const {id}=useParams();
    const [data, setData] = useState([]);
    const [detail,setDetails]=useState({})
    const apiKey = "b668ac647f43439f94112c7c2ac3a832";
     const getBlog = async () => {
      try {
        const res = await fetch(
          `https://newsapi.org/v2/everything?q=apple&from=2024-07-18&to=2024-07-18&sortBy=popularity&apiKey=${apiKey}`,
          {
            headers: {
              Origin: "https://rk6093720.github.io",
            },
          }
        );
        const result = await res.json();
        setData(result.articles);
      } catch (e) {
        alert(e.message);
      }
     };
    useEffect(()=>{
        getBlog();
    },[])
    useEffect(()=>{
        if(id){
             const detail = data.find((data, index) => index + 1 === Number(id));
              detail && setDetails(detail) 
        }
    },[data,id])
    console.log(detail);
  return (
    <React.Fragment>
      <Box
        sx={{
          width: {xs:"100%",sm:"100%",md:"50%",lg:"60%"},
          height: {xs:"800px",sm:"540px",md:"590px",lg:"490px"},
          border: "1px solid Black",
          margin: "auto",
          padding:{xs:"4",lg:"10px"},
          gap: "20px",
        }}
      >
        <Box width={"100%"} height={"195px"}>
          <img
            width={"100%"}
            height={"200px"}
            src={
              detail.urlToImage === null
                ? "https://images.unsplash.com/photo-1516802273409-68526ee1bdd6?w=164&h=164&fit=crop&auto=format&dpr=2"
                : detail.urlToImage
            }
            alt=""
          />
        </Box>
        <Box
          sx={{
            textAlign: "start",
            fontSize: "20px",
            fontFamily: "sans-serif",
            familyWeight: "bold",
            color: "white",
          }}
        >
          <label
            style={{ color: "black", fontSize: "24px", fontWeight: "bold" }}
          >
            Author:
          </label>
          <text>{detail.author}</text>
        </Box>
        <Box
          sx={{
            textAlign: "start",
            fontSize: "20px",
            fontFamily: "sans-serif",
            familyWeight: "bold",
            color: "white",
          }}
        >
          <label
            style={{ color: "black", fontSize: "24px", fontWeight: "bold" }}
          >
            Content:
          </label>
          <text>{detail.content}</text>
        </Box>
        <Box
          sx={{
            textAlign: "start",
            fontSize: "20px",
            fontFamily: "sans-serif",
            familyWeight: "bold",
            color: "white",
          }}
        >
          <label
            style={{ color: "black", fontSize: "24px", fontWeight: "bold" }}
          >
            Description:
          </label>

          <text>{detail.description}</text>
        </Box>
        <Box
          sx={{
            textAlign: "start",
            fontSize: "20px",
            fontFamily: "sans-serif",
            familyWeight: "bold",
            color: "white",
          }}
        >
          <label
            style={{ color: "black", fontSize: "24px", fontWeight: "bold" }}
          >
            PublishedAt:{" "}
          </label>
          <text>{detail.publishedAt}</text>
        </Box>
        <Box
          sx={{
            textAlign: "start",
            fontSize: "20px",
            fontFamily: "sans-serif",
            familyWeight: "bold",
            color: "white",
          }}
        >
          <label
            style={{ color: "black", fontSize: "24px", fontWeight: "bold" }}
          >
            NameofSource:
          </label>
          <text>{detail?.source?.name}</text>
        </Box>
        <Box
          sx={{
            textAlign: "start",
            fontSize: "20px",
            fontFamily: "sans-serif",
            familyWeight: "bold",
            color: "white",
          }}
        >
          <label
            style={{ color: "black", fontSize: "24px", fontWeight: "bold" }}
          >
            Title:{" "}
          </label>
          <text>{detail.title}</text>
        </Box>
      </Box>
    </React.Fragment>
  );
}

export default BlogPostDetails;
