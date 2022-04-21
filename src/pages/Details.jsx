import React, { useContext } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import { CardMedia, Container } from "@mui/material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { AuthContext } from "../contexts/AuthContext";
import { Grid } from "@mui/material";
import { BlogContext } from "../contexts/BlogContext";
import { toastSuccessNotify } from "../helpers/toastNotify";
import moment from "moment";

const Details = () => {
  const navigate = useNavigate();
  const {deleteBlog} = useContext(BlogContext);
  const { currentUser } = useContext(AuthContext);
  console.log(currentUser);
  const location = useLocation();
  const item = location.state.item;
  console.log(location.state.item);

  const handleDelete = (id) => {
    deleteBlog(id);
    navigate("/");
    toastSuccessNotify("Blog Deleted Successfully");

  };

  return (
    <Container>
      <Typography
        gutterBottom
        variant="h3"
        component="div"
        sx={{ fontFamily: "Girassol", textAlign: "center", color: "#046582" }}
      >
        ──── Details ────
      </Typography>
      <Card sx={{ m: 9, cursor: "pointer" }} key={item.id}>
        <CardMedia component="img" image={item?.imgUrl} alt="img" />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {item?.title}
          </Typography>
          <Typography>
               {moment(item?.addDate).format("MM/DD/YYYY")}
             </Typography>
          <Typography variant="body2" color="text.secondary">
            {item?.content}
          </Typography>
        </CardContent>
        <Typography gutterBottom sx={{ ml: 2 }} variant="h5">
          <AccountCircleIcon
            style={{ position: "relative", top: "5px", fontSize: "30px" }}
          />{" "}
          {item?.user}
        </Typography>
        <CardActions>
          <Button size="small">
            <FavoriteIcon
              style={{
                marginRight: "7px",
                color: item.likeCount > 0 ? "red" : "gray",
              }}
            />
            {item?.likeCount}
          </Button>
          <Button size="small">
            <ChatBubbleOutlineIcon
              style={{
                marginRight: "7px",
                color: item.commentCount > 0 ? "blue" : "gray",
              }}
            />
            {item?.commentCount}
          </Button>
        </CardActions>
      {item?.user === currentUser?.email ? (
        <Container style={{display:"flex",justifyContent:"space-around",marginTop:"10px",marginBottom:"20px" }}>
          <Grid item xs={12}>
            <Button
              style={{ backgroundColor: "#046582", fontWeight: 700,fontSize:"1rem",width:"200px"}}
              variant="contained"
              color="primary"
              type="submit"
              // fullWidth
              onClick={() => navigate("/update", { state: { item } })}
            >
              Update
            </Button>
          </Grid>

          <Grid item xs={12}>
            <Button
              style={{
                backgroundColor: "red",
                color: "white",
                fontWeight: 600,
                fontSize: "0.9rem",
                fontSize:"1rem",
                width:"200px"
              }}
              variant="contained"
              color="secondary"
              type="submit"
              onClick={() => handleDelete(item.id)}
              // fullWidth
            >
              Delete
            </Button>
          </Grid>
        </Container>
      ) : null}
      </Card>
    </Container>
  );
};

export default Details;
