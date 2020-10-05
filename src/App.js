import React, { useState } from "react";
import "./App.css";
import { Grid, createMuiTheme, ThemeProvider } from "@material-ui/core";
import MentorCard from "./controllers/mentor-card/MentorCard";
import MentorFilter from "./controllers/mentor-filter/MentorFilter";
import mentorsList from "./data/mentors.json";

//Modify the default Mui Theme
const globalTheme = createMuiTheme({

});

function App() {
  const [mentors, setMentors] = useState(mentorsList);
  return (
    <div className="App">
      <ThemeProvider theme={globalTheme}>
        <h1>Mentors Website</h1>
        <Grid container spacing={2}>
          <Grid container item md={2}>
            <MentorFilter mentors={mentors} />
          </Grid>
          <Grid container item md={10} spacing={2} justify="flex-start">
            {mentors.map((mentor, index) => (
              <Grid key={index} item>
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
