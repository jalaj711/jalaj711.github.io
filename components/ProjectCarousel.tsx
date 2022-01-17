import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
  Chip,
  Theme,
  IconButton,
} from "@mui/material";
import React from "react";
import {
  Star,
  Merge,
  BugReport,
  ForkRight,
  GitHub,
  Link,
} from "@mui/icons-material";
import data from "../data/projects-best-5.json";
import { useRouter } from "next/router";

interface ProjectData {
  name: string;
  desc: string;
  github: string;
  website: string;
  image: string;
  stars: number;
  forks: number;
  pr: number;
  issues: number;
}

const ProjectCard = (
  props: React.ComponentProps<"div"> & {
    data: ProjectData;
    pos: number;
  }
) => {
  const styles = {
    "-1": {
      top: "5%",
      transform: "scale(0.6) translateY(-5%)",
      filter: "blur(3px)",
      zIndex: -2,
    },
    "0": {
      top: "50%",
      transform: "translateY(-50%)",
      boxShadow: (theme: Theme) =>
        `0 0 5px ${theme.palette.primary.main}, 0 0 25px ${theme.palette.primary.main}, 0 0 50px ${theme.palette.primary.main}, 0 0 200px ${theme.palette.primary.main}`,
    },
    "1": {
      bottom: "5%",
      transform: "scale(0.6) translateY(5%)",
      filter: "blur(3px)",
      zIndex: -2,
    },
    "2": { display: "none" },
  }[props.pos];
  const router = useRouter();
  return (
    <Card
      variant="outlined"
      sx={{
        position: "absolute",
        transition: "0.5s",
        maxWidth: "80%",
        borderRadius: "32px",
        ...styles,
      }}
    >
      <CardMedia
        component="img"
        image={props.data.image}
        alt={props.data.name}
        sx={{maxHeight: "30vh"}}
      />
      <CardContent>
        <Typography
          gutterBottom
          variant="h5"
          component="div"
          sx={{ display: "flex" }}
        >
          {props.data.name}
          <span style={{ flexGrow: 1 }} />
          <div>
            <Chip
              variant="outlined"
              size="small"
              sx={{ mx: 0.25 }}
              icon={<Star />}
              label={props.data.stars}
            />
            <Chip
              variant="outlined"
              size="small"
              sx={{ mx: 0.25 }}
              icon={<ForkRight />}
              label={props.data.forks}
            />
            <Chip
              variant="outlined"
              size="small"
              sx={{ mx: 0.25 }}
              icon={<BugReport />}
              label={props.data.issues}
            />
            <Chip
              variant="outlined"
              size="small"
              sx={{ mx: 0.25 }}
              icon={<Merge />}
              label={props.data.pr}
            />
          </div>
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {props.data.desc}
        </Typography>
      </CardContent>
      <CardActions>
        <IconButton
          href={props.data.github}
          onClick={(e) => {
            e.preventDefault();
            router.push(props.data.github);
          }}
        >
          <GitHub />
        </IconButton>
        <IconButton
          href={props.data.website}
          onClick={(e) => {
            e.preventDefault();
            router.push(props.data.website);
          }}
        >
          <Link />
        </IconButton>
      </CardActions>
    </Card>
  );
};

class ProjectsCarousel extends React.Component {
  state: {
    active: number;
  };
  constructor(props: React.ComponentProps<"div">) {
    super(props);
    this.state = {
      active: 2,
    };
  }
  componentDidMount() {
    setInterval(() => {
      if (this.state.active === data.length - 1) this.setState({ active: 0 });
      else this.setState({ active: this.state.active + 1 });
    }, 3000);
  }
  render(): React.ReactNode {
    return (
      <>
        {data.map((item, index) => {
          var pos;
          // Active element
          if (index === this.state.active) pos = 0;
          // Succeeding element
          else if (
            index ===
            (this.state.active === data.length - 1 ? 0 : this.state.active + 1)
          )
            pos = 1;
          // Preceeding element
          else if (
            index ===
            (this.state.active === 0 ? data.length - 1 : this.state.active - 1)
          )
            pos = -1;
          // All others
          else pos = 2;
          return <ProjectCard data={item} key={index} pos={pos} />;
        })}
      </>
    );
  }
}

export default ProjectsCarousel;
