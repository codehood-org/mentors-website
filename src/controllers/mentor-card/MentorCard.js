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
import FavoriteBorderOutlinedIcon from "@material-ui/icons/FavoriteBorderOutlined";
import FavoriteOutlinedIcon from "@material-ui/icons/FavoriteOutlined";
const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 290,
  },
  avatar: {
    width: theme.spacing(8),
    height: theme.spacing(8),
    backgroundColor: "#e45",
  },
  cardAction: {
    display: "flex",
    justifyContent: "space-around",
    padding: 0,
  },
  MessageCardContent: {
    height: 120,
  },
  SkillsCardContent: {
    height: 100,
  },
}));

const MentorCard = (props) => {
  const classes = useStyles();
  const {
    mentor,
    choseCountry,
    choseSkill,
    heartedMentor,
    toggleHeartedMentor,
  } = props;

  const handleFlagClick = () => {
    choseCountry(mentor.countryAlpha2Code)
  }

  const handleSkillChipClick = (e) => {
    choseSkill(e.target.textContent)
  }
  return (
    <Card className={classes.root}>
      <CardHeader
        avatar={
          <Avatar
            src={`https://unavatar.now.sh/twitter/${mentor.twitter}`}
            aria-label="mentor"
            className={classes.avatar}
          >
            {mentor.name[0]}
          </Avatar>
        }
        action={
          <IconButton onClick={handleFlagClick}>
            <img
              src={`https://www.countryflags.io/${mentor.countryAlpha2Code}/flat/32.png`}
              alt={mentor.country}
            />
          </IconButton>
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
              <Chip label={skill} variant="outlined" onClick={handleSkillChipClick} />
            </Grid>
          ))}
        </Grid>
      </CardContent>
      <Divider variant="fullWidth" />
      <CardActions className={classes.cardAction} disableSpacing>
        <Button href="#connect-mentor" color="primary">
          Connect
        </Button>
        <IconButton onClick={() => toggleHeartedMentor(mentor.id)}>
          {heartedMentor ? (
            <FavoriteOutlinedIcon color="secondary" />
          ) : (
            <FavoriteBorderOutlinedIcon />
          )}
        </IconButton>
      </CardActions>
    </Card>
  );
};

export default MentorCard;
