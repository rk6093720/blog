import { Box } from '@mui/material';
import React from 'react';
import { Link as RouterLink } from "react-router-dom";
import { Link as MuiLink } from "@mui/material";
const BlogPostItem = ({item,index}) => {
  return (
    <React.Fragment>
      <MuiLink
        component={RouterLink}
        sx={{
          textDecoration: "none",
          color: "blue",
          "&:hover": {
            textDecoration: "underline",
            color: "darkblue",
          },
        }}
        to={`/post/${index + 1}`}
      >
        <Box
          sx={{
            width: { xs: "100%", sm: "100%", md: "50%", lg: "60%" },
            height: "320px",
            border: "1px solid Black",
            margin: "auto",
            gap: "20px",
          }}
        >
          <Box width={"100%"} height={"195px"}>
            <img
              width={"100%"}
              height={"195px"}
              src={
                item.urlToImage === null
                  ? "https://images.unsplash.com/photo-1516802273409-68526ee1bdd6?w=164&h=164&fit=crop&auto=format&dpr=2"
                  : item.urlToImage
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
            <text>{item.content}</text>
          </Box>
        </Box>
      </MuiLink>
    </React.Fragment>
  );
}

export default BlogPostItem;
