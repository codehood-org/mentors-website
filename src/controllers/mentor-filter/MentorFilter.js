import React, { useState } from "react";
import {
  makeStyles,
  Grid,
  InputAdornment,
  IconButton,
  MenuItem,
  TextField,
} from "@material-ui/core";
import ClearIcon from "@material-ui/icons/Clear";
/* const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      width: "25ch",
    },
  },
})); */

const useStyles = makeStyles(() => ({
  clearBtn: {
    marginRight: 5,
  },
}));

const arabCountries = {
  EG: "Egypt",
  DZ: "Algeria",
  SD: "Sudan",
  IQ: "Iraq",
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

  const [skill, setSkill] = useState("");
  const [country, setCountry] = useState("");

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
  //creating a unique countries array.
  const filteredCountries = [
    ...new Set(mentors.map((mentor) => mentor.countryAlpha2Code)),
  ];
  const countries = filteredCountries.map((country) => {
    return {
      value: country,
      label: arabCountries[country],
    };
  });

  const handleSkillClear = () => {
    setSkill("");
    filterBySkill("");
  }
  const handleCountryClear = () => {
    setCountry("")
    filterByCountry("")
  }
  return (
    <form className={classes.root} noValidate autoComplete="off">
      <Grid container>
        <Grid item xs={12}>
          {/*FILTER BY SKILLS */}
          <TextField
            variant="outlined"
            id="standard-select-currency"
            select
            label="Skill"
            value={skill}
            onChange={handleSkillSelection}
            helperText="filter mentors by skills"
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  {skill && (
                  <IconButton
                    aria-label="clear filter"
                    className={classes.clearBtn}
                    onClick={handleSkillClear}
                    //onMouseDown={handleMouseDownPassword}
                    edge="end"
                  >
                    <ClearIcon />
                  </IconButton>
                  )}
                </InputAdornment>
              ),
            }}
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
            variant="outlined"
            id="standard-select-currency"
            select
            label="country"
            value={country}
            onChange={handleCountrySelection}
            helperText="filter mentors by country"
            InputProps={{
              endAdornment: (
                
                <InputAdornment position="end">
                  {country && (
                  <IconButton
                    aria-label="clear filter"
                    className={classes.clearBtn}
                    onClick={handleCountryClear}
                    //onMouseDown={handleMouseDownPassword}
                    edge="end"
                  >
                    <ClearIcon />
                  </IconButton>
                  )}
                </InputAdornment>
              ),
            }}
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
