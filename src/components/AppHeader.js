import React from 'react';
import {
  Container,
  AppBar,
  Toolbar,
  FormControlLabel,
  Switch,
  Typography,
  makeStyles,
} from "@material-ui/core";

import DarkIcon from "@material-ui/icons/Brightness4";
import LightIcon from "@material-ui/icons/Brightness7";

const useStyles = makeStyles((theme) => ({
  title: {
    flexGrow: 1,
  },
  
  containerMain: {
    paddingTop: theme.spacing(4),
  },
}));

const AppHeader = ({darkMode, ModeChange}) => {
    const classes = useStyles();

    return (
        <AppBar position="static" className={classes.appBar}>
            <Container maxWidth='lg'>
                <Toolbar disableGutters>
                    
                    <Typography
                    variant={window.innerWidth < 637 ? "h6" : "h4"}
                    className={classes.title}
                    >
                        Codehood Mentors
                    </Typography>
                    
                    <FormControlLabel
                        control={
                            <Switch
                                name="switch_dark_mode"
                                checked={darkMode}
                                onChange={ModeChange}
                                aria-label={darkMode ? "Light Mode" : "Dark Mode"}
                                color='default'
                            />
                        }
                        label={
                            darkMode ? (
                                <LightIcon htmlColor='#ffffff' />
                            ) : (
                                <DarkIcon htmlColor='#ffffff' />
                            )
                        }

                    />

                </Toolbar>
            </Container>
        </AppBar>
    )
}

export default AppHeader;