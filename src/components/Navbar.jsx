import {AppBar,InputBase,makeStyles, Toolbar, Typography} from '@material-ui/core'
import { Search } from "@material-ui/icons"

const useStyles = makeStyles((theme)=>({
    logoLg:{
        display:"none",
        [theme.breakpoints.up("sm")]:{
            display: "block",
        }
    },
    logoSm:{
        display: "block",
        [theme.breakpoints.up("sm")]:{
            display: "none",
        },
    }
}));

const Navbar=()=> {
    const classes = useStyles();
    return <AppBar>
        <Toolbar>
            <Typography variant="h6" className={classes.logoLg}>
                Prashanth Dev
            </Typography>
            <Typography variant="h6" className={classes.logoSm}>
                Prashanth
            </Typography>
            <div className={classes.search}>
                <Search/>
                <InputBase></InputBase>
                
            </div>
        </Toolbar>
    </AppBar>
}

export default Navbar;
