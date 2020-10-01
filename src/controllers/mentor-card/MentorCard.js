import React from "react";
import {
  Card,
  CardContent,
  CardActions,
  CardHeader,
  IconButton,
  Typography,
  Avatar,
  Chip,
  Grid,
  Divider,
  Button,
  makeStyles,
} from "@material-ui/core";
const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
  },
  avatar: {
    width: theme.spacing(7),
    height: theme.spacing(7),
  },
}));

const MentorCard = (props) => {
  const classes = useStyles();
  return (
    <Card className={classes.root}>
      <CardHeader
        avatar={
          <Avatar aria-label="mentor" className={classes.avatar}>
            N
          </Avatar>
        }
        title="Mentor Name"
        subheader="Mentor Title"
      />
      <CardContent>
        "I can help you answer the "why" questions and explain difficuilt
        systems in simple terms."
      </CardContent>
      <CardContent>
        <Grid container justify="flex-start" spacing={1}>
          <Grid item>
            <Chip label="skill" variant="outlined" />
          </Grid>
          <Grid item>
            <Chip label="skill" variant="outlined" />
          </Grid>
          <Grid item>
            <Chip label="skill" variant="outlined" />
          </Grid>
          <Grid item>
            <Chip label="skill" variant="outlined" />
          </Grid>
        </Grid>
      </CardContent>
      <CardContent>
        <Divider variant="middle" />
      </CardContent>
      <CardActions>
        <Button>Connect</Button>
      </CardActions>
    </Card>
  );
};

export default MentorCard;
