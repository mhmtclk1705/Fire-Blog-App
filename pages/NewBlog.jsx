import React, { useContext } from "react";
import {
  Container,
  Box,
  Avatar,
  Typography,
  Grid,
  TextField,
  Button,
} from "@mui/material";
import {  toastSuccessNotify } from "../helpers/toastNotify";
import blogPng from "../assets/blok.png";
import { BlogContext } from "../contexts/BlogContext";
import {AuthContext} from '../contexts/AuthContext'
import { useNavigate } from "react-router-dom";


const NewBlog = () => {
  const navigate = useNavigate()
  const {currentUser} = useContext(AuthContext);
  const { addBlog } = useContext(BlogContext);
  const [posts, setPosts] = React.useState({
    title: "",
    content: "",
    imgUrl: "",
    user: currentUser.email,
    addDate: new Date(),
    likeCount: 0,
    commentCount: 0,

  });

  const handleChange = (e) => {
    e.preventDefault();
    const {name, value} = e.target;
    setPosts({...posts,[name]:value})
    // addBlog(posts);
    // toastSuccessNotify("Blog added successfully!");
    console.log(posts)

  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addBlog(posts);
    toastSuccessNotify("Blog added successfully!");
    navigate("/")
    console.log(posts)

  };
  return (
    <Container className="login-container" style={{ height: "100vh" }}>
      <Box className="login-box">
        <Avatar
          className="login-avatar"
          alt="avatar_img"
          src={blogPng}
          sx={{ width: 156, height: 156 }}
        />
        <Typography
          variant="h4"
          component="h1"
          sx={{ m: 4, fontFamily: "Girassol", color: "#046582" }}
        >
          ── NEW BLOG ──
        </Typography>
        
        <form 
        onSubmit={handleSubmit}
        >
          <Grid container spacing={4}>
            <Grid item xs={12}>
              <TextField
                id="title"
                label="Title"
                name="title"
                variant="outlined"
                type="text"
                autoFocus
                autoComplete="title"
                required
                value={posts.title}
                onChange={handleChange}
               
                fullWidth
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                id="imgUrl"
                label="Image URL"
                name="imgUrl"
                variant="outlined"
                type="text"
                autoComplete="image-url"
                required
                value={posts.imgUrl}
                onChange={handleChange}

                fullWidth
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                id="content"
                label="Content"
                name="content"
                multiline
                variant="outlined"
                type="text"
                rows={10}
                autoFocus
                autoComplete="content"
                required
                value={posts.content}
                onChange={handleChange}

          
                fullWidth
              />
            </Grid>
            <Grid item xs={12}>
              <Button
                style={{ backgroundColor: "#046582", fontWeight: 700 }}
                variant="contained"
                color="primary"
                type="submit"
                fullWidth
              >
                Add Blog
              </Button>
            </Grid>
          </Grid>
        </form>
       
      </Box>
    </Container>
  );
};

export default NewBlog;
