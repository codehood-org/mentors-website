import React, { useState } from "react";
import "./App.css";
import { Grid, makeStyles, createMuiTheme, ThemeProvider } from "@material-ui/core";
import MentorCard from "./controllers/mentor-card/MentorCard";
import MentorFilter from "./controllers/mentor-filter/MentorFilter";
import mentorsList from "./data/mentors.json";

//Modify the default Mui Theme
const globalTheme = createMuiTheme({});

const useStyles = makeStyles(() => ({
  cardsWrapper: {
     maxWidth: 1200,
  }
  
}));

function App() {
  const classes = useStyles();
  const [mentors, setMentors] = useState(mentorsList);

  const filterBySkill = (skill) => {
    setMentors(mentorsList.filter(mentor => mentor.skills.includes(skill)))
  } 
  const filterByCountry = (country) => {
    setMentors(mentorsList.filter(mentor => mentor.countryAlpha2Code === country))
  }

  return (
    <div className="App">
      <ThemeProvider theme={globalTheme}>
        <h1>Mentors Website</h1>
        <Grid container spacing={2}>
          <Grid container item xs={12} sm={3}>
            <MentorFilter
              mentors={mentors}
              filterBySkill={filterBySkill}
              filterByCountry={filterByCountry}
            />
          </Grid>
          <Grid container item xs={12} sm={9} spacing={1} justify="flex-start" alignContent="flex-start" className={classes.cardsWrapper}>
            {mentors.map((mentor, index) => (
              <Grid item key={index} xs={12}  md={4} lg={3}>
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
