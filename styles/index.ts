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
  }),
};

export default styles;
