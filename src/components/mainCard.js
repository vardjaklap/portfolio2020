import React, { Component } from 'react';
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import Chip from "@material-ui/core/Chip";
import Typography from "@material-ui/core/Typography";
import FaceIcon from "@material-ui/icons/Face"
import {red} from "@material-ui/core/colors";
import IconButton from "@material-ui/core/IconButton";
import Divider from "@material-ui/core/Divider";
import Grow from "@material-ui/core/Grow";
import Button from "@material-ui/core/Button";
import SaveIcon from '@material-ui/icons/Save';

export class MainCard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentTitle: "Friend",
            titles: [ "Friend", "Full stack developer", "Software developer", "Creator" ],
            counter: 0,
            checkedTitle: true
        };
    }
    handleClick(){
        window.open('https://drive.google.com/file/d/1_FdecBOart6qKJl978SQWjm3KDew9kws')
    }
    componentDidMount() {
        this.interval = setInterval(() => {
            this.setState({checkedTitle: false });
            setTimeout(() => {
                this.setState({counter: this.state.counter + 1 });
                if(this.state.counter >= this.state.titles.length){
                    this.setState({counter: 0 });
                }
                this.setState({currentTitle: this.state.titles[this.state.counter] });
            }, 500);
            setTimeout(() => {
                this.setState({checkedTitle: true });
            }, 1000);
        }, 5000);
    }

    render() {
        return (
            <div>
                <div className="section">
                    <Grow in>
                        <Grid container justify="center">
                            <Grid item xs={12} sm={10} md={8}>
                                <Card>
                                    <Grid container justify="center" id="mainContent" spacing={4}>
                                        <Grid item xs={12} md={4}>
                                            <div id="avatarImg">

                                            </div>
                                        </Grid>
                                        <Grid item xs={12} md={8} >
                                            <div >
                                                <Chip icon={<FaceIcon />} color="primary" label="Hello" />
                                                <Typography variant="h4">
                                                    My name is <span> <b>Oleksandr Peresta</b></span>
                                                </Typography>
                                                <Grow in={this.state.checkedTitle}>
                                                    <Typography variant="h5" gutterBottom>
                                                        {this.state.currentTitle}
                                                    </Typography>
                                                </Grow>
                                                <Divider variant="middle" style={{margin: "25px 0"}}/>
                                                <Grid container spacing={2}>
                                                    <Grid  item>
                                                        <p className="mainKey">
                                                            AGE
                                                        </p>
                                                        <p className="mainKey">
                                                            ADDRESS
                                                        </p>
                                                        <p className="mainKey">
                                                            EMAIL
                                                        </p>
                                                        <p className="mainKey">
                                                            PHONE
                                                        </p>
                                                        <p className="mainKey">
                                                            AVAILABILITY
                                                        </p>
                                                    </Grid>
                                                    <Grid item >
                                                        <p className="mainValue">
                                                            24
                                                        </p>
                                                        <p className="mainValue">
                                                            Toronto
                                                        </p>
                                                        <p className="mainValue">
                                                            alexperesta@gmail.com
                                                        </p>
                                                        <p className="mainValue">
                                                            647-529-6657
                                                        </p>
                                                        <p className="mainValue">
                                                            Free
                                                        </p>
                                                    </Grid>
                                                </Grid>
                                            </div>
                                        </Grid>
                                    </Grid>
                                    <Grid container justify="space-evenly" alignItems="center" color="primary" className="boxContainer" style={{backgroundColor: red[400]}}>
                                        <Grid item>
                                            <IconButton aria-label="facebook" href="https://www.facebook.com/vardjaklap">
                                                <i className="fab fa-facebook-f" style={{color: "#fff"}}></i>
                                            </IconButton>
                                        </Grid>
                                        <Grid item>
                                            <IconButton aria-label="linked" href="https://www.linkedin.com/in/oleksandr-peresta/">
                                                <i className="fab fa-linkedin-in" style={{color: "#fff"}}></i>
                                            </IconButton>
                                        </Grid>
                                        <Grid item>
                                            <IconButton aria-label="instagram" href="https://www.instagram.com/alexperesta/">
                                                <i className="fab fa-instagram" style={{color: "#fff"}}></i>
                                            </IconButton>
                                        </Grid>
                                        <Grid item>
                                            <IconButton aria-label="telegram" href="https://t.me/Vardjaklap">
                                                <i className="fab fa-telegram-plane" style={{color: "#fff"}}></i>
                                            </IconButton>
                                        </Grid>
                                        <Grid item>
                                            <IconButton aria-label="mail" href="mailto:alexperesta@gmail.com">
                                                <i className="fas fa-envelope-open-text" style={{color: "#fff"}}></i>
                                            </IconButton>
                                        </Grid>
                                        <Grid item>
                                            <IconButton aria-label="git" href="https://github.com/vardjaklap">
                                                <i className="fab fa-git" style={{color: "#fff"}}></i>
                                            </IconButton>
                                        </Grid>
                                    </Grid>
                                </Card>
                            </Grid>
                        </Grid>
                    </Grow>
                    <Grid container justify="center">
                        <Grid item>
                            <Button variant="contained" color="primary" onClick={this.handleClick} startIcon={<SaveIcon />} style={{height: "70px", width: "250px", margin:"50px 0 0"}}>
                                Download resume
                            </Button>

                        </Grid>
                    </Grid>
                </div>
            </div>

        );
    }
}

export default MainCard;
