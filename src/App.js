import React, { useState } from "react";
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
} from "@material-ui/core";
import MentorCard from "./controllers/mentor-card/MentorCard";
import MentorFilter from "./controllers/mentor-filter/MentorFilter";
import mentorsList from "./data/mentors.json";

//Modify the default Mui Theme
const globalTheme = createMuiTheme({});

const useStyles = makeStyles(() => ({
  cardsWrapper: {
    maxWidth: 1200,
  },
  title: {
    flexGrow: 1,
  },
}));

function App() {
  const classes = useStyles();
  const [mentors, setMentors] = useState(mentorsList);
  const [darkMode, setDarkMode] = useState(false)

  const filterMentors = (skill, country) => {
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

  const handleModeChange = () => {
    setDarkMode(!darkMode)
  }
  return (
    <div className="App">
      <ThemeProvider theme={globalTheme}>
        <AppBar position="static" className={classes.appBar}>
          <Toolbar>
            <Typography variant="h4" className={classes.title}>
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
        <Grid container spacing={2}>
          <Grid container item xs={12} sm={3}>
            <MentorFilter mentors={mentors} filterMentors={filterMentors} />
          </Grid>
          <Grid
            container
            item
            xs={12}
            sm={9}
            spacing={1}
            justify="flex-start"
            alignContent="flex-start"
            className={classes.cardsWrapper}
          >
            {mentors.map((mentor, index) => (
              <Grid item key={index} xs={12} md={4} lg={3}>
                <MentorCard mentor={mentor} />
              </Grid>
            ))}
          </Grid>
        </Grid>
      </ThemeProvider>
    </div>
  );
}

export default App;
