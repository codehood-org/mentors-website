import React from "react";
import TextField from "@material-ui/core/TextField";
import MenuItem from "@material-ui/core/MenuItem";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      width: "25ch",
    },
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
}
const MentorFilter = (props) => {
  const classes = useStyles();
  const { mentors } = props;
  //creating a unique skills array.
  const skills = [...new Set(mentors.map(mentor => mentor.skills).flat())];
  const filteredCountries = [...new Set(mentors.map(mentor => mentor.countryAlpha2Code))]
  console.log(filteredCountries)
  const countries = (filteredCountries.map(country => {
      return {
        value: country,
        label: arabCountries[country]
      }
      
      /* label: mentor.country, */
  }));
  console.log(countries)
  return (
    <form className={classes.root} noValidate autoComplete="off">
      <div>
        {/*FILTER BY SKILLS */}
        <TextField
          id="standard-select-currency"
          select
          label="Skill"
          /* value={currency}
          onChange={handleChange} */
          helperText="filter mentors by skills"
        >
          {skills.map((skill) => (
            <MenuItem key={skill} value={skill}>
              {skill}
            </MenuItem>
          ))}
        </TextField>
        {/*FILTER BY COUNTRY */}
        <TextField
          id="standard-select-currency"
          select
          label="country"
          /* value={currency}
          onChange={handleChange} */
          helperText="filter mentors by country"
        >
          {countries.map((country) => (
            <MenuItem key={country.value} value={country.value}>
              {country.label}
            </MenuItem>
          ))}
        </TextField>
      </div>
    </form>
  );
};

export default MentorFilter;
