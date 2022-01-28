import {
  AppBar,
  Slide,
  SlideProps,
  Toolbar,
  Typography,
  useScrollTrigger,
} from "@mui/material";
import Image from "next/image";
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
      <AppBar
        position="fixed"
        style={{
          transition: "0.2s",
          opacity: 0.7,
          backdropFilter: "blur(10px)",
        }}
      >
        <Toolbar sx={{ bgcolor: "background.default" }}>
          <Image src="/logo64.png" alt="logo" height="64" width="113"/>
          <span style={{ flexGrow: 1 }} />
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
                  onClick={() => router.push("#")}
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
