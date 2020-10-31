import React, { useState, useEffect } from "react";
import "./App.css";

import {
  Container,
  Grid,
  makeStyles,
  createMuiTheme,
  ThemeProvider,
  CssBaseline,
} from "@material-ui/core";

import MentorCard from "./controllers/mentor-card/MentorCard";
import MentorFilter from "./controllers/mentor-filter/MentorFilter";
import mentorsList from "./data/mentors.json";
import useLocalStorageToggle from "./hooks/useLocalStorageToggle";
import AppHeader from './components/AppHeader';

const useStyles = makeStyles((theme) => ({
  title: {
    flexGrow: 1,
  },
  
  containerMain: {
    paddingTop: theme.spacing(4),
  },
}));

function App() {
  const classes = useStyles();
  const [mentors, setMentors] = useState(mentorsList);
  const [darkMode, setDarkMode] = useState(false);

  const [name, setName] = useState("");
  const [skill, setSkill] = useState("");
  const [country, setCountry] = useState("");
  const [heartedMentors, toggleHeartedMentor] = useLocalStorageToggle(
    "heartedMentors",
    []
  );
  const [isFavMentors, setIsFavMentors] = useState(false);

  useEffect(() => {
    const isDarkMode = JSON.parse(localStorage.getItem("codehood_darkmode"));
    if (isDarkMode != null) {
      setDarkMode(isDarkMode);
    }

    filterMentors();
  }, [name, skill, country, isFavMentors, heartedMentors]);

  const appliedTheme = createMuiTheme({
    palette: {
      type: darkMode ? "dark" : "light",
      primary: {
        main: "#36ABB5",
      },
      secondary: {
        main: "#FFDE59",
      },
    },
  });

  const filterFromHeartedMentors = () => {
    const filteredHeartedMentors = mentorsList.filter((mentor) =>
      heartedMentors.includes(mentor.id)
    );

    filterstate(filteredHeartedMentors);
  };

  const filterFormMentorsList = () => {
    const list = mentorsList;

    filterstate(list);
  };

  /**
   *  takes a List of mentors and return state with filterd list based on filter type
   * @param {*} mentorList
   * @returns state with array of mentors
   */
  const filterstate = (mentorList) => {
    if (!name && !country && !skill) {
      setMentors(mentorList);
    } else if (name && !country && !skill) {
      setMentors(
        mentorList.filter(
          (mentor) =>
            mentor.name.toLowerCase().indexOf(name.toLowerCase()) !== -1
        )
      );
    } else if (!name && country && !skill) {
      setMentors(
        mentorList.filter((mentor) => mentor.countryAlpha2Code === country)
      );
    } else if (!name && !country && skill) {
      setMentors(mentorList.filter((mentor) => mentor.skills.includes(skill)));
    } else if (name && country && !skill) {
      setMentors(
        mentorList
          .filter(
            (mentor) =>
              mentor.name.toLowerCase().indexOf(name.toLowerCase()) !== -1
          )
          .filter((mentor) => mentor.countryAlpha2Code === country)
      );
    } else if (name && !country && skill) {
      setMentors(
        mentorList
          .filter(
            (mentor) =>
              mentor.name.toLowerCase().indexOf(name.toLowerCase()) !== -1
          )
          .filter((mentor) => mentor.skills.includes(skill))
      );
    } else if (!name && country && skill) {
      setMentors(
        mentorList
          .filter((mentor) => mentor.countryAlpha2Code === country)
          .filter((mentor) => mentor.skills.includes(skill))
      );
    } else {
      setMentors(
        mentorList
          .filter(
            (mentor) =>
              mentor.name.toLowerCase().indexOf(name.toLowerCase()) !== -1
          )
          .filter((mentor) => mentor.countryAlpha2Code === country)
          .filter((mentor) => mentor.skills.includes(skill))
      );
    }
  };
  const filterMentors = () => {
    switch (isFavMentors) {
      case true:
        filterFromHeartedMentors();
        break;
      case false:
        filterFormMentorsList();
        break;
      default:
        return null;
    }
  };

  const searchByMentorName = (mentorName) => {
    setName(mentorName);
  };

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
    localStorage.setItem("codehood_darkmode", !darkMode);
    setDarkMode(!darkMode);
  };

  return (
    <ThemeProvider theme={appliedTheme}>
      <CssBaseline />

      <AppHeader darkMode={darkMode} ModeChange={handleModeChange} />

      <Container maxWidth='lg' component="main" className={classes.containerMain}>

        <Grid container spacing={2} className=''>

          <Grid item xs={12} md={3}>

            <MentorFilter
              mentors={mentors}
              filterMentors={filterMentors}
              name={name}
              skill={skill}
              country={country}
              searchByMentorName={searchByMentorName}
              choseSkill={choseSkill}
              choseCountry={choseCountry}
              choseFavMentors={choseFavMentors}
              isFavMentors={isFavMentors}
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

      </Container>

    </ThemeProvider>
  );
}

export default App;
