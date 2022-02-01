import { SxProps, Theme } from "@mui/material";
interface style {
  [className: string]: SxProps<Theme>;
}

const styles: style = {
  content: (theme) => ({
    mx: 2,
    position: "absolute",
    top: "40%",
    left: "5%",
    maxWidth: "50%",
    opacity: 0,
    animation: "fadeIn 0.3s forwards ease-in 0.7s",
    background: "rgba(255, 255, 255, 0.05)",
    p: theme.spacing(4),
    borderRadius: theme.spacing(4),
    backdropFilter: "blur(10px)",
    [theme.breakpoints.down("md")]: {
      left: 0,
      bottom: theme.spacing(2),
      top: "auto",
      maxWidth: `100%`,
    },
    "& h1": {
      [theme.breakpoints.down("sm")]: {
        fontSize: "3.5rem",
      },
    },
    "@keyframes fadeIn": {
      from: {
        opacity: 0,
      },
      to: {
        opacity: 1,
      },
    },
  }),
  socialMediaButtons: (theme) => ({
    position: "absolute",
    right: theme.spacing(2),
    bottom: theme.spacing(2),
    [theme.breakpoints.down("md")]: {
      display: "none",
    },
    "& .MuiSvgIcon-root": {
      transition: "0.2s",
      m: ({ spacing }) => spacing(1),
      fontSize: "xx-large",
      cursor: "pointer",
    },
    "& .MuiSvgIcon-root:hover": {
      color: theme.palette.primary.dark,
      cursor: "pointer",
      transform: "translateY(-8px)",
      filter: `drop-shadow(0 0 16px ${theme.palette.primary.dark})`,
    },
  }),
  title: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    textAlign: "center",
  },
  projCarousel: {
    position: "relative",
    p: 2,
    display: "flex",
    justifyContent: "center",
  },
  footer: {
    background: (theme) => theme.palette.background.paper,
    p: 2,
    textAlign: "center",
  },
  about: (theme) => ({
    color: theme.palette.text.secondary,
    py: 2,
  }),
  aboutBox: theme => ({
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "80vw",
    background: "rgba(255, 255, 255, 0.05)",
    borderRadius: theme.spacing(4),
    padding: theme.spacing(4),
    backdropFilter: "blur(10px)",
    "& h3": {
      textAlign: "center"
    },
    [theme.breakpoints.down("md")]: {
      width: "100vw",
      borderRadius: 0,
      padding: theme.spacing(1)
    }
  }),
};

export default styles;
