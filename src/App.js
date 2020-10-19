import React, { useState, useEffect } from "react";
import "./App.css";
import {
  Grid,
  AppBar,
  Toolbar,
  FormGroup,
  FormControlLabel,
  Switch,
  Typography,
  makeStyles,
  createMuiTheme,
  ThemeProvider,
  CssBaseline,
} from "@material-ui/core";
import MentorCard from "./controllers/mentor-card/MentorCard";
import MentorFilter from "./controllers/mentor-filter/MentorFilter";
import mentorsList from "./data/mentors.json";
import useLocalStorageToggle from "./hooks/useLocalStorageToggle";

const useStyles = makeStyles(() => ({
  cardsWrapper: {
    maxWidth: 1200,
  },
  title: {
    flexGrow: 1,
  },
  containerMain: {
    padding: 24,
  },
}));

function App() {
  const classes = useStyles();
  const [mentors, setMentors] = useState(mentorsList);
  const [darkMode, setDarkMode] = useState(false);

  const [skill, setSkill] = useState("");
  const [country, setCountry] = useState("");
  const [heartedMentors, toggleHeartedMentor] = useLocalStorageToggle(
    "heartedMentors",
    []
  );
  const [isFavMentors, setIsFavMentors] = useState(false);
  useEffect(() => {
    const isDarkMode = JSON.parse(localStorage.getItem('codehood_darkmode'))
    if (isDarkMode != null) {
      setDarkMode(isDarkMode)
    }
    
    filterMentors();
  }, [skill, country, isFavMentors, heartedMentors]);

  const appliedTheme = createMuiTheme({
    palette: {
      type: darkMode ? "dark" : "light",
    },
  });
  const filterFromHeartedMentors = () => {
    const filteredHeartedMentors = mentorsList.filter((mentor) =>
      heartedMentors.includes(mentor.id)
    );
    if (skill === "" && country === "") {
      setMentors(filteredHeartedMentors);
    } else if (skill === "") {
      setMentors(
        filteredHeartedMentors.filter(
          (mentor) => mentor.countryAlpha2Code === country
        )
      );
    } else if (country === "") {
      setMentors(
        filteredHeartedMentors.filter((mentor) => mentor.skills.includes(skill))
      );
    } else {
      setMentors(
        filteredHeartedMentors
          .filter((mentor) => mentor.countryAlpha2Code === country)
          .filter((mentor) => mentor.skills.includes(skill))
      );
    }
  };

  const filterFormMentorsList = () => {
    if (skill === "" && country === "") {
      setMentors(mentorsList);
    } else if (skill === "") {
      setMentors(
        mentorsList.filter((mentor) => mentor.countryAlpha2Code === country)
      );
    } else if (country === "") {
      setMentors(mentorsList.filter((mentor) => mentor.skills.includes(skill)));
    } else {
      setMentors(
        mentorsList
          .filter((mentor) => mentor.countryAlpha2Code === country)
          .filter((mentor) => mentor.skills.includes(skill))
      );
    }
  };

  const filterMentors = () => {
    switch(isFavMentors) {
      case true:
        filterFromHeartedMentors(skill, country);
        break;
      case false:
        filterFormMentorsList(skill, country);
        break;
      default:
        return null;
    }
  };

  const searchByMentorName = (mentorName) => {
    if(mentorName.length >= 3 ){
      setMentors(mentorsList.filter((mentor) => mentor.name.toLowerCase().indexOf(mentorName.toLowerCase()) !== -1));
    } else {
      setMentors(mentorsList);
    }
  }

  const choseSkill = (chosenSkill) => {
    setSkill(chosenSkill);
  };

  const choseCountry = (chosenCountry) => {
    setCountry(chosenCountry);
  };

  const choseFavMentors = (chosenFavMentorsStatus) => {
    setIsFavMentors(chosenFavMentorsStatus);
    console.log(chosenFavMentorsStatus);
  };

  const handleModeChange = () => {
    localStorage.setItem('codehood_darkmode', !darkMode)
    setDarkMode(!darkMode);
  };
  return (
    <div className="App">
      <ThemeProvider theme={appliedTheme}>
        <CssBaseline />
        <AppBar position="static" className={classes.appBar}>
          <Toolbar>
            <Typography
              variant={window.innerWidth < 637 ? "h6" : "h4"}
              className={classes.title}
            >
              Codehood Mentors
            </Typography>
            <FormGroup>
              <FormControlLabel
                control={
                  <Switch
                    color="default"
                    checked={darkMode}
                    onChange={handleModeChange}
                    aria-label={darkMode ? "Light Mode" : "Dark Mode"}
                  />
                }
                label={darkMode ? "Light Mode" : "Dark Mode"}
              />
            </FormGroup>
          </Toolbar>
        </AppBar>
        <Grid container spacing={2} className={classes.containerMain}>
          <Grid container item xs={12} md={3}>
            <MentorFilter
              mentors={mentors}
              filterMentors={filterMentors}
              skill={skill}
              country={country}
              choseSkill={choseSkill}
              choseCountry={choseCountry}
              choseFavMentors={choseFavMentors}
              isFavMentors={isFavMentors}
              searchByMentorName={searchByMentorName}
            />
          </Grid>
          <Grid
            container
            item
            xs={12}
            md={9}
            spacing={2}
            justify={window.innerWidth < 637 ? "center" : "flex-start"}
            alignContent="flex-start"
            className={classes.cardsWrapper}
          >
            {mentors.map((mentor, index) => (
              <Grid item key={index}>
                <MentorCard
                  mentor={mentor}
                  choseCountry={choseCountry}
                  choseSkill={choseSkill}
                  heartedMentor={heartedMentors.includes(mentor.id)}
                  toggleHeartedMentor={toggleHeartedMentor}
                />
              </Grid>
            ))}
          </Grid>
        </Grid>
      </ThemeProvider>
    </div>
  );
}

export default App;
