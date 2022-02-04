import { Box, Typography, ButtonGroup, Grid, IconButton } from "@mui/material";
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
import BlogCard from "../components/BlogCard";
import Stars from "../components/Stars";
import BlogData from "../data/blogs-latest-6.json";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Jalaj</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div id="background-stars" style={{width: "100vw", height: document.body.getBoundingClientRect().height + "px", position: "relative", zIndex: -11}}>
        <Stars count={50} />
      </div>
      <Box style={{ minHeight: "100vh", position: "relative" }}>
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100vh",
          }}
        >
          <div
            style={{
              position: "absolute",
              right: "10%",
              top: "10%",
              width: "300px",
              height: "300px",
              borderRadius: "50%",
              background: "#ebf3fe",
              transform: "scale(0.7)",
              boxShadow:
                "0px 0px 60px 20px #fff, 0 0 10px 2px #ccc, 0 0 100px 10px #ccc, " +
                "inset -40px 0px 0px #d8e8f7, inset 20px 0px 0px #ffffff, " +
                "inset -50px 0px 0px 20px #e2eefa, 0px 0px 0px 20px rgb(255 255 255 / 5%), " +
                "0px 0px 0px 40px rgb(255 255 255 / 3%), 0px 0px 0px 60px rgb(255 255 255 / 1%)",
            }}
          />
        </div>
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
      <Box
        sx={{ minHeight: "100vh", position: "relative", overflowX: "hidden" }}
      >
        <Box sx={styles.aboutBox}>
          <Typography variant="h3">ABOUT ME</Typography>
          <Typography sx={styles.about}>
            Hi there! I am Jalaj, a student of Electrical Engineering at the
            National Institute Of Technology, Durgapur.
          </Typography>
          <Typography sx={styles.about}>
            I have a keen interest in computer programming, especially creating
            web pages and other applications in languages like Python, C, C++,
            and Go. I am fairly acquainted with the following technologies:
            <ul style={{ listStyleType: "circle" }}>
              <li>React</li>
              <li>Typescript</li>
              <li>NodeJs</li>
              <li>NextJs</li>
              <li>Flask</li>
              <li>Django</li>
            </ul>
          </Typography>
          <Typography sx={styles.about}>
            Besides these, I am always striving to add new technologies in my
            arsenal and currently, I am focusing my efforts on cybersecurity
            fields such as cryptography, networking and the stuff.
          </Typography>
        </Box>
      </Box>
      <Box style={{ minHeight: "100vh", position: "relative" }}>

        <Grid container sx={{ minHeight: "100vh" }}>
          <Grid item xs={12} md={5} sx={styles.title}>
            <Typography variant="h2">PROJECTS</Typography>
            <Typography color="text.secondary">
              Some things I&apos;ve made
            </Typography>
            <div>
              <GlowingButton sx={{ width: "fit-content", m: 2 }}>
                View All &gt;
              </GlowingButton>
            </div>
          </Grid>
          <Grid
            item
            xs={12}
            md={7}
            sx={styles.projCarousel}
            id="project-carousel-container"
          >
            <ProjectsCarousel />
          </Grid>
        </Grid>
      </Box>
      <Box style={{ minHeight: "100vh", position: "relative" }}>
        {/** The blogs view */}
        <Grid
          container
          sx={{ p: 2, display: "flex", justifyContent: "center" }}
        >
          <Grid item xs={12} sx={{ ...styles.title, my: 4 }}>
            <Typography variant="h2">BLOGS</Typography>
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
                <BlogCard data={{ ...data }} key={index} />
              ))}
            </Masonry>
          </Grid>
        </Grid>
      </Box>
      <Box sx={styles.footer}>
        <Grid container>
          <Grid
            item
            xs={12}
            md={4}
            sx={{
              display: "block",
              textAlign: "center",
            }}
          >
            <img src="/logo128.png" alt="logo" height="128" width="227" />
          </Grid>
          <Grid item xs={12} md={4}>
            <Typography variant="button" component="div">
              Discover
            </Typography>
            {/** TODO: Convert these to links */}
            <Typography variant="button" component="div" color="text.secondary">
              About
            </Typography>
            <Typography variant="button" component="div" color="text.secondary">
              Blog
            </Typography>
            <Typography variant="button" component="div" color="text.secondary">
              Projects
            </Typography>
            <Typography variant="button" component="div" color="text.secondary">
              Resume
            </Typography>
          </Grid>
          <Grid item xs={12} md={4}>
            <Typography variant="button" component="div">
              Devs
            </Typography>
            <Typography variant="button" component="div" color="text.secondary">
              Site Map
            </Typography>
            <Typography variant="button" component="div" color="text.secondary">
              View on GitHub
            </Typography>
            <Typography variant="button" component="div" color="text.secondary">
              Collaborate
            </Typography>
          </Grid>

          <Grid item xs={12} md={4}>
            <ButtonGroup>
              <IconButton size="small">
                <GitHub />
              </IconButton>
              <IconButton size="small">
                <Instagram />
              </IconButton>
              <IconButton size="small">
                <LinkedIn />
              </IconButton>
              <IconButton size="small">
                <Twitter />
              </IconButton>
              <IconButton size="small">
                <MailOutline />
              </IconButton>
            </ButtonGroup>
          </Grid>
          <Grid item xs={12} md={4} />
          <Grid item xs={12} md={4}>
            <Typography variant="button" component="div">
              &copy; Jalaj Kumar, 2021
            </Typography>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default Home;