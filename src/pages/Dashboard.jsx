import React, { useContext } from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { CardMedia, Container } from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import { BlogContext } from "../contexts/BlogContext";
import { AuthContext } from "../contexts/AuthContext";
import { useNavigate } from "react-router-dom";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

const Dashboard = () => {
  const {currentUser} = useContext(AuthContext);
  const { useFetch } = useContext(BlogContext);
  const { blog } = useFetch();
  const navigate = useNavigate()

  return (
    
    <Container >
      <Typography gutterBottom variant="h3" component="div"
      sx={{fontFamily:"Girassol",textAlign:"center",color:"#046582"}}>
        ──── Dashboard ────
      </Typography>
    <Box
      xs={{ d: "flex" }}
      display="flex"
      alignItems="center"
      justifyContent="space-evenly"
      flexWrap="wrap"
    >
      {blog?.map((item) => (
        <Card sx={{ width:345, m: 2, height: 600,cursor:"pointer" }} key={item.id} onClick={() => navigate(`/details`, { state: { item } })}>
          <CardMedia
            component="img"
            height="250"
            image={item?.imgUrl}
            alt="img"
          />
          <CardContent >
            <Typography gutterBottom variant="h5" component="div"sx={{fontFamily:"Girassol",textAlign:"left",color:"#046582"}}>
              {item?.title}
            </Typography>
             <Typography>
               {item?.addDate}
             </Typography>
            <Typography variant="body2" color="text.secondary" >
              {item?.content.substring(0,150)}...
              {/* {item?.content} */}
            </Typography>
          </CardContent>
          <Typography gutterBottom sx={{ml:2}} variant="h6">
          <AccountCircleIcon
          style={{position:"relative",top:"5px",fontSize:"30px"}}
          /> {item?.user}
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
        </Card>
      ))}
    </Box>
    </Container>
  );
};

export default Dashboard;
