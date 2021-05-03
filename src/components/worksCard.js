import React, { Component } from 'react';
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import Typography from "@material-ui/core/Typography";
import {red} from "@material-ui/core/colors";
import CircularProgress from "@material-ui/core/CircularProgress";
import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline';

const posts = [
    {id: 1, title: 'PM tool', content: 'Unity app', icon: "fas fa-tasks", fin: true},
    {id: 2, title: 'Fitonia 2.0', content: 'New version', icon: "fas fa-circle-notch", fin: false},
    {id: 3, title: 'Spatium', content: 'Social network', icon: "fas fa-users", fin: true},
    {id: 4, title: 'MyWhisk', content: 'Android app', icon: "fas fa-glass-whiskey", fin: false},
    {id: 5, title: 'Athena', content: 'TensorFlow assistant', icon: "fas fa-user-graduate", fin: false},
    {id: 6, title: 'TWL', content: 'Challenge task', icon: "fas fa-recycle", fin: true},
    {id: 7, title: 'Modest', content: 'Landing page', icon: "fas fa-pager", fin: true},
    {id: 8, title: 'Fitonia', content: 'WebApp using AngularJS', icon: "far fa-stop-circle", fin: true},

];
posts.map((work) =>
    <Grid item xs={12} md={4} key={work.id}>
        <Card style={{height: "250px", position: "relative"}}>
            <div style={{position: "relative"}}>
                {work.fin ? <CheckCircleOutlineIcon color="primary"  fontSize="large"  style={{position: "absolute", right: "5px", top: "5px"}}/> : <CircularProgress size={30} style={{position: "absolute", right: "5px", top: "5px"}}/>}
            </div>
            <Grid container justify="center">
                <i className={work.icon} style={{color: red[400], fontSize: "5rem", margin: "35px 0 15px"}}/>
            </Grid>
            <Grid container justify="center">
                <Typography variant="h4">
                    {work.title}
                </Typography>
            </Grid>
            <Grid container justify="center">
                <Typography variant="subtitle1" gutterBottom>
                    {work.content}
                </Typography>
            </Grid>
            <div className="cardTop" style={{backgroundColor: red[400]}}> </div>
        </Card>
    </Grid>
);

export class WorksCard extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };


    }


    render() {
        return (
            <div>
                <div className="section" id="works">
                    <Grid container justify="center">
                        <Grid item xs={12} >
                            <Grid container justify="center">
                                <Typography variant="h2" gutterBottom>
                                    My projects
                                </Typography>
                            </Grid>
                        </Grid>
                        <Grid item xs={12} md={8}>
                            <Grid container justify="center" spacing={4} >
                                {/*{works}*/}
                                {posts.map((work) =>
                                    <Grid item xs={12} sm={6} md={6} lg={4} key={work.id}>
                                        <Card style={{height: "250px", position: "relative"}} onClick={() => this.props.dialogOpen(work.id)}>
                                            <div style={{position: "relative"}}>
                                                {work.fin ? <CheckCircleOutlineIcon color="primary"  fontSize="large"  style={{position: "absolute", right: "5px", top: "5px"}}/> : <CircularProgress size={30} style={{position: "absolute", right: "5px", top: "5px"}}/>}
                                            </div>
                                            <Grid container justify="center">
                                                <i className={work.icon} style={{color: red[400], fontSize: "5rem", margin: "35px 0 15px"}}/>
                                            </Grid>
                                            <Grid container justify="center">
                                                <Typography variant="h4">
                                                    {work.title}
                                                </Typography>
                                            </Grid>
                                            <Grid container justify="center">
                                                <Typography variant="subtitle1" gutterBottom>
                                                    {work.content}
                                                </Typography>
                                            </Grid>
                                            <div className="cardTop" style={{backgroundColor: red[400]}}> </div>
                                        </Card>
                                    </Grid>
                                )}
                            </Grid>
                        </Grid>
                        <Grid item xs={12}>
                            <Grid container justify="center">
                                <Grid item>

                                    <Typography variant="h5" style={{marginTop: "20px"}}>
                                        <CircularProgress size={20} style={{marginRight: "5px"}}/>
                                         - Ongoing
                                    </Typography>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </div>
            </div>

        );
    }
}

export default WorksCard;
