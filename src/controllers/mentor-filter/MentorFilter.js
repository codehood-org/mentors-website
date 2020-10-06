import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";
import MenuItem from "@material-ui/core/MenuItem";
import { makeStyles, Grid } from "@material-ui/core";

/* const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      width: "25ch",
    },
  },
})); */

const useStyles = makeStyles(() => ({

}));

const arabCountries = {
  EG: "Egypt",
  ----------------
  DZ: "Algeria",
  ----------------
  SD: "Sudan",
  ----------------
  IQ: "Iraq",
  ----------------
  MA: "Morocco",
  SA: "Saudi Arabia",
  YE: "Yemen",
  SY: "Syria",
  TN: "Tunisia",
  JO: "Jordan",
  AE: "United Arab Emirates",
  LB: "Lebanon",
  LY: "Libya",
  PS: "Palestine",
  OM: "Oman",
  KW: "Kuwait",
  MR: "Mauritania",
  QA: "Qatar",
  BH: "Bahrain",
  DJ: "Djibouti",
  KM: "Comoros",
};
const MentorFilter = (props) => {
  const classes = useStyles();

  const { mentors, filterBySkill, filterByCountry } = props;

  const [skill, setSkill] = useState(undefined);
  const [country, setCountry] = useState(undefined);

  const handleSkillSelection = (e) => {
    setSkill(e.target.value);
    filterBySkill(e.target.value);
  };
  const handleCountrySelection = (e) => {
    setCountry(e.target.value);
    filterByCountry(e.target.value);
  };
  //creating a unique skills array.
  const skills = [...new Set(mentors.map((mentor) => mentor.skills).flat())];
  const filteredCountries = [
    ...new Set(mentors.map((mentor) => mentor.countryAlpha2Code)),
  ];
  const countries = filteredCountries.map((country) => {
    return {
      value: country,
      label: arabCountries[country],
    };
  });
  return (
    <form className={classes.root} noValidate autoComplete="off">
      <Grid container>
        <Grid item xs={12}>
          {/*FILTER BY SKILLS */}
          <TextField
            id="standard-select-currency"
            select
            label="Skill"
            value={skill}
            onChange={handleSkillSelection}
            helperText="filter mentors by skills"
            fullWidth
          >
            {skills.map((skill) => (
              <MenuItem key={skill} value={skill}>
                {skill}
              </MenuItem>
            ))}
          </TextField>
        </Grid>
        <Grid item xs={12}>
          <TextField
            id="standard-select-currency"
            select
            label="country"
            value={country}
            onChange={handleCountrySelection}
            helperText="filter mentors by country"
            fullWidth
          >
            {countries.map((country) => (
              <MenuItem key={country.value} value={country.value}>
                {country.label}
              </MenuItem>
            ))}
          </TextField>
        </Grid>
      </Grid>
      {/*FILTER BY COUNTRY */}
    </form>
  );
};

export default MentorFilter;
