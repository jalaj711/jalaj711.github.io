import { styled } from "@mui/material";

export const GlowingButton = styled("button")(({ theme }) => ({
  padding: `${theme.spacing(2)} ${theme.spacing(3)}`,
  fontFamily: theme.typography.fontFamily,
  background: "none",
  color: theme.palette.primary.main,
  borderRadius: 0,
  letterSpacing: "4px",
  textTransform: "uppercase",
  transition: "0.4s",
  border: "none",
  "&:hover": {
    color: theme.palette.background.default,
    cursor: "pointer",
    background: theme.palette.primary.main,
    boxShadow: `0 0 5px ${theme.palette.primary.main}, 0 0 25px ${theme.palette.primary.main}, 0 0 50px ${theme.palette.primary.main}, 0 0 200px ${theme.palette.primary.main}`,
    "-webkit-box-reflect": "below 1px linear-gradient(transparent, #0005)",
  },
}));

export const GlowingButtonPrimary = styled(GlowingButton)(({ theme }) => ({
  border: `2px solid ${theme.palette.primary.main}`,
}));

export default GlowingButtonPrimary;
