import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  CardActions,
  Button,
} from "@mui/material";
import styles from "../styles/index";

const BlogCard = (
  props: React.ComponentProps<"div"> & {
    data: { image: string; title: string; description: string };
  }
) => (
  <Card sx={styles.blogCard} variant="outlined">
    <CardMedia
      component="img"
      height="140"
      image={props.data.image}
      alt="Blog logo"
      style={{ flexGrow: 1, minHeight: "140px" }}
    />
    <CardContent>
      <Typography gutterBottom variant="h5" component="div">
        {props.data.title}
      </Typography>
      <Typography
        variant="body2"
        color="text.secondary"
        sx={{ minHeight: "33.33%", maxHeight: "40%" }}
      >
        {props.data.description}
      </Typography>
    </CardContent>
    <CardActions
      sx={(theme) => ({
        background:
          "linear-gradient(transparent, " +
          theme.palette.background.paper +
          ")",
        position: "sticky",
        bottom: 0,
      })}
    >
      <span style={{ flexGrow: 1 }}></span>
      <Button
        size="small"
        sx={(theme) => ({
          opacity: 0,
          transition: "0.4s",
          [theme.breakpoints.down("sm")]: {
            display: "none",
          },
        })}
      >
        Read More
      </Button>
    </CardActions>
  </Card>
);

export default BlogCard;
