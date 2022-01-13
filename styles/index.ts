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
      color: theme.palette.primary.main,
      cursor: "pointer",
      transform: "translateY(-8px)",
      filter: `drop-shadow(0 0 16px ${theme.palette.primary.main})`
    },
  }),
};

export default styles;
