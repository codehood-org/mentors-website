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
const skills = [
  {
    value: "html",
    label: "html",
  },
  {
    value: "css",
    label: "css",
  },
  {
    value: "javascript",
    label: "javascript",
  },
  {
    value: ".net",
    label: ".net",
  },
  {
    value: "c#",
    label: "c#",
  },
];
const countries = [
  {
    value: "EG",
    label: "Egypt",
  },
  {
    value: "SA",
    label: "Saudi Arabia",
  },
];
const MentorFilter = (props) => {
  const classes = useStyles();
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
            <MenuItem key={skill.value} value={skill.value}>
              {skill.label}
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
