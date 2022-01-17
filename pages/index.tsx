import {
  Box,
  Typography,
  ButtonGroup,
  Grid,
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Button,
} from "@mui/material";
import { Masonry } from "@mui/lab";
import type { NextPage } from "next";
import Head from "next/head";
import styles from "../styles/index";
import GlowingButtonPrimary, {
  GlowingButton,
} from "../components/GlowingButton";
import {
  GitHub,
  Instagram,
  LinkedIn,
  Twitter,
  MailOutline,
} from "@mui/icons-material";
import ProjectsCarousel from "../components/ProjectCarousel";
import BlogData from "../data/blogs-latest-6.json";

const BlogCard = (
  props: React.ComponentProps<"div"> & {
    data: { image: string; title: string; description: string };
  }
) => (
  <Card
    sx={styles.blogCard}
    variant="outlined"
  >
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
const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Jalaj</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Box style={{ minHeight: "100vh" }}>
        <Box sx={styles.content}>
          <Typography color="text.secondary">hi, I am</Typography>
          <Typography
            variant="h1"
            sx={{
              letterSpacing: "3px",
            }}
          >
            JALAJ
          </Typography>
          <div>
            <Typography
              sx={{
                textAlign: "justify",
              }}
              color="text.secondary"
            >
              some thing about mesome thing about mesome thing about mesome
              thing about mesome thing about mesome thing about mesome thing
              about mesome thing about mesome thing about me
            </Typography>
            <div style={{ marginTop: "16px", textAlign: "center" }}>
              <GlowingButtonPrimary>Show me the code</GlowingButtonPrimary>
              <GlowingButton
                sx={(theme) => ({
                  border: "2px solid transparent",
                  ml: 2,
                  [theme.breakpoints.down("md")]: {
                    ml: 0,
                    mt: 1,
                  },
                })}
              >
                More about me
              </GlowingButton>
            </div>
          </div>
        </Box>

        <ButtonGroup orientation="vertical" sx={styles.socialMediaButtons}>
          <GitHub />
          <Instagram />
          <LinkedIn />
          <Twitter />
          <MailOutline />
        </ButtonGroup>
      </Box>
      <Box style={{ minHeight: "100vh" }}>
        <Grid container sx={{ minHeight: "100vh" }}>
          <Grid item xs={12} md={5} sx={styles.title}>
            <Typography variant="h2">Projects</Typography>
            <Typography color="text.secondary">
              Some things I&apos;ve made
            </Typography>
            <div>
              <GlowingButton sx={{ width: "fit-content", m: 2 }}>
                View All &gt;
              </GlowingButton>
            </div>
          </Grid>
          <Grid item xs={12} md={7} sx={styles.projCarousel}>
            <ProjectsCarousel />
          </Grid>
        </Grid>
      </Box>
      <Box sx={styles.box}>
        {/** The blogs view */}
        <Grid container sx={{p: 2, display: "flex", justifyContent: "center"}}>
          <Grid item xs={12} sx={{ ...styles.title, my: 4}}>
            <Typography variant="h2">Blogs</Typography>
            <Typography color="text.secondary">
              Some stuff I&apos;ve written
            </Typography>
            <div>
              <GlowingButton sx={{ width: "fit-content", m: 2 }}>
                Read All &gt;
              </GlowingButton>
            </div>
          </Grid>
          <Grid item xs={12} lg={9}>
            <Masonry columns={{ xs: 1, md: 3 }} sx={styles.blogMasonry}>
              {BlogData.map((data, index) => (
                <BlogCard
                  data={{ ...data}}
                  key={index}
                />
              ))}
            </Masonry>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default Home;
