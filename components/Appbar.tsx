import {
  AppBar,
  Fade,
  Slide,
  SlideProps,
  Toolbar,
  Typography,
  useScrollTrigger,
} from "@mui/material";
import { useRouter } from "next/router";
import React from "react";

const DelayedSlideIn = (props: SlideProps & { delay: number }) => {
  const [visible, setVisible] = React.useState(false);

  setTimeout(() => setVisible(true), props.delay);

  return (
    <Slide in={visible} {...props}>
      {props.children}
    </Slide>
  );
};

// Reference: https://mui.com/components/app-bar

const HideOnScroll = (props: { children: React.ReactElement<any> }) => {
  const trigger = useScrollTrigger();

  return (
    <ElevationScroll>
      <Slide appear={false} direction="down" in={!trigger}>
        {props.children}
      </Slide>
    </ElevationScroll>
  );
};
function ElevationScroll(props: { children: React.ReactElement<any> }) {
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
  });

  return React.cloneElement(props.children, {
    elevation: trigger ? 4 : 0,
  });
}

export default function ApplicationBar() {
  const router = useRouter();
  return (
    <HideOnScroll>
      <AppBar position="fixed" style={{ transition: "0.2s", opacity: 0.7, backdropFilter: "blur(10px)" }}>
        <Toolbar sx={{ bgcolor: "background.default" }}>
          <Fade in={true}>
            <Typography variant="h5" sx={{ flexGrow: 1 }}>
              <span style={{ color: "white" }}>$ </span>
              jalaj
              <span style={{ color: "white", fontSize: "1.1rem" }}>
                &nbsp;&#x2581;
              </span>
            </Typography>
          </Fade>
          {["About", "Connect", "Projects", "Blog", "Resume"].map(
            (elem, index) => (
              <DelayedSlideIn delay={index * 100 + 100} key={index}>
                <Typography
                  sx={(theme) => ({
                    mx: 1,
                    color: theme.palette.text.primary,
                    textDecoration: "none",
                    "&:hover": {
                      color: theme.palette.primary.main,
                      transform: "translateY(-4px) !important",
                    },
                  })}
                  onClick={() => router.push('#')}
                  component="a"
                  href="#"
                  variant="button"
                >
                  {elem}
                </Typography>
              </DelayedSlideIn>
            )
          )}
        </Toolbar>
      </AppBar>
    </HideOnScroll>
  );
}
