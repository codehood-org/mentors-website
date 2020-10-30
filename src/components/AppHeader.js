import React from 'react';
import {
  Container,
  Grid,
  AppBar,
  Toolbar,
  FormControlLabel,
  Switch,
  Typography,
  makeStyles,
  Link as MUILink,
  Hidden
} from "@material-ui/core";

import DarkIcon from "@material-ui/icons/Brightness4";
import LightIcon from "@material-ui/icons/Brightness7";

import CodeHoodLogo from '../images/codehood-logo.jpg'

const useStyles = makeStyles((theme) => ({

    brand: {
        display: 'flex',
        color: '#fff',
        alignItems: 'center',
        
        '& img': {
            display: 'block',
            width: '60px',
            height: '60px'
        }
    },

    toolbar_container: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between'
    }
}));

const AppHeader = ({darkMode, ModeChange}) => {
    const classes = useStyles();

    return (
        <AppBar position="static" className={classes.appBar}>
            <Container maxWidth='lg'>
                <Toolbar disableGutters className={classes.toolbar_container}>

                    <MUILink href="/" title="CodeHood Mentors" className={classes.brand}>
                        <img src={CodeHoodLogo} alt="Codehood" />
                        <Hidden only={['xs', 'sm']}>
                            <Typography
                                variant={window.innerWidth < 637 ? "h6" : "h4"}
                                className={classes.title}
                            >
                                Mentors
                            </Typography>
                        </Hidden>
                    </MUILink>

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