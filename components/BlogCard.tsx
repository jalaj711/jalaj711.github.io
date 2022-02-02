import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  CardActions,
  Button,
  Box,
  useTheme,
} from "@mui/material";

const BlogCard = (
  props: React.ComponentProps<"div"> & {
    data: { image: string; title: string; description: string };
  }
) => {
  const theme = useTheme();
  return (
    <Box
      sx={{
        borderRadius: theme.spacing(2),
        padding: "2px",
        transition: "0.4s",
        display: "flex",
        flexDirection: "column",
        backgroundImage: "none",
        "&:hover": {
          background: `linear-gradient(135deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
          "& .MuiCardActions-root .MuiButton-root": {
            opacity: "1 !important",
          },
        },
      }}
    >
      <div style={{background: theme.palette.background.default, borderRadius: theme.spacing(2)}}>
      <Card style={{ borderRadius: theme.spacing(2), background: "rgba(255, 255, 255, 0.05)" }}>
        
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
          sx={{
            position: "sticky",
            bottom: 0,
          }}
        >
          <span style={{ flexGrow: 1 }}></span>
          <Button
            size="small"
            sx={{
              opacity: 0,
              transition: "0.4s",
              "&:hover": {
                backgroundPosition: "40px"
              },
              [theme.breakpoints.down("sm")]: {
                display: "none",
              },
            }}
          >
            Read More
          </Button>
        </CardActions>
      </Card>
      </div>
    </Box>
  );
};

export default BlogCard;
