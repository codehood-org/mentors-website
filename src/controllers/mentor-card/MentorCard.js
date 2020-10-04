import React, { useState } from "react";
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
import FavoriteBorderOutlinedIcon from "@material-ui/icons/FavoriteBorderOutlined";
import FavoriteOutlinedIcon from "@material-ui/icons/FavoriteOutlined";
const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 300,
  },
  avatar: {
    width: theme.spacing(8),
    height: theme.spacing(8),
    backgroundColor: '#e45',
  },
  cardAction: {
    display: "flex",
    justifyContent: "space-around",  
    padding: 0,
  },
}));

const MentorCard = (props) => {
  const classes = useStyles();
  const { mentor } = props;
  const [fav, setFav] = useState(false);
  const toggleMentorFav = () => {
    setFav(!fav);
  };
  return (
    <Card className={classes.root}>
      <CardHeader
        avatar={
          <Avatar src={mentor.image} aria-label="mentor" className={classes.avatar}>
            {mentor.name[0]}
          </Avatar>
        }
        action={
          <img
            src={`https://www.countryflags.io/${mentor.country}/flat/32.png`}
            alt=""
          />
        }
        title={mentor.name}
        subheader={mentor.title}
      />
      <CardContent>
        <Typography variant="body2">"{mentor.message}"</Typography>
      </CardContent>
      <CardContent>
        <Grid container justify="center" spacing={1}>
          {mentor.skills.map((skill, index) => (
            <Grid key={index} item>
              <Chip label={skill} variant="outlined" />
            </Grid>
          ))}
        </Grid>
      </CardContent>
      <Divider variant="fullWidth" />
      <CardActions className={classes.cardAction} disableSpacing>
        <Button href="#connect-mentor" color="primary">
          Connect
        </Button>
        <IconButton onClick={toggleMentorFav}>
          {fav ? <FavoriteOutlinedIcon color="secondary" /> : <FavoriteBorderOutlinedIcon />}
        </IconButton>
      </CardActions>
    </Card>
  );
};

export default MentorCard;
