import React from "react";
import {
  makeStyles,
  Grid,
  InputAdornment,
  IconButton,
  MenuItem,
  TextField,
  Typography,
  FormGroup,
  FormControlLabel,
  Switch,
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

  const {
    mentors,
    name,
    skill,
    country,
    searchByMentorName,
    choseSkill,
    choseCountry,
    choseFavMentors,
    isFavMentors,
  } = props;

  const handleSkillSelection = (e) => {
    choseSkill(e.target.value);
  };
  const handleCountrySelection = (e) => {
    choseCountry(e.target.value);
  };
  const handleFavMentorsChange = () => {
    choseFavMentors(!isFavMentors);
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

  const handleNameSearch = (e) => {
    searchByMentorName(e.target.value);
  }

  const handleSkillClear = () => {
    choseSkill("");
  };
  const handleCountryClear = () => {
    choseCountry("");
  };
  return (
    <form className={classes.root} noValidate autoComplete="off">
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Typography variant="h6" color="primary">
            Filter
          </Typography>
        </Grid>
        <Grid item xs={12}>
            <TextField
              value={name}
              variant="outlined"
              label="Name"
              helperText="Filter mentors by name"
              onChange={handleNameSearch}
              fullWidth
            />
        </Grid>
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
        <Grid item xs={12}>
          <FormGroup>
            <FormControlLabel
              control={
                <Switch
                  color="secondary"
                  checked={isFavMentors}
                  onChange={handleFavMentorsChange}
                  aria-label={
                    isFavMentors ? "Favourite Mentors" : "All Mentors"
                  }
                />
              }
              label={
                <Typography color={isFavMentors ? "secondary" : "initial"}>
                  Favorite Mentors
                </Typography>
              }
            />
          </FormGroup>
        </Grid>
      </Grid>
    </form>
  );
};

export default MentorFilter;
