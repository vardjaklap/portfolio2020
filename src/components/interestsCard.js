import React, { Component } from 'react';
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import Typography from "@material-ui/core/Typography";
import {red} from "@material-ui/core/colors";
import CardHeader from "@material-ui/core/CardHeader";

export class InterestsCard extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }

    render() {
        return (
            <div>
                <div className="section" id="interests">
                    <Grid container justify="center">
                        <Grid item xs={12} >
                            <Grid container justify="center">
                                <Typography variant="h2" gutterBottom>
                                    My interests
                                </Typography>
                            </Grid>
                        </Grid>
                        <Grid item xs={12} sm={10} md={8} lg={6}>
                            <Grid container spacing={3}>
                                <Grid item xs={12} md={6}>
                                    <Card>
                                        <CardHeader
                                            avatar={
                                                <i className="fas fa-dumbbell" style={{color: red[400], fontSize: "2.5rem"}}></i>
                                            }
                                            title="Fitness"
                                            subheader="Challenging myself every day. Bigger. Better. Stronger.">
                                        </CardHeader>
                                    </Card>
                                </Grid>
                                <Grid item xs={12} md={6}>
                                    <Card>
                                        <CardHeader
                                            avatar={
                                                <i className="fas fa-camera-retro " style={{color: red[400], fontSize: "2.5rem"}}></i>
                                            }
                                            title="Photography"
                                            subheader="Sometimes the beauty of the world can be minute. Aperture can save it.">
                                        </CardHeader>
                                    </Card>
                                </Grid>
                                <Grid item xs={12} md={6}>
                                    <Card>
                                        <CardHeader
                                            avatar={
                                                <i className="fas fa-suitcase" style={{color: red[400], fontSize: "2.5rem"}}></i>
                                            }
                                            title="Traveling"
                                            subheader="World is big, world is small - I want to see it all!">
                                        </CardHeader>
                                    </Card>
                                </Grid>
                                <Grid item xs={12} md={6}>
                                    <Card>
                                        <CardHeader
                                            avatar={
                                                <i className="fas fa-utensils" style={{color: red[400], fontSize: "2.5rem"}}></i>
                                            }
                                            title="Cooking"
                                            subheader="Creating amazing experiences that can be shared with your loved ones.">
                                        </CardHeader>
                                    </Card>
                                </Grid>
                                <Grid item xs={12} md={6}>
                                    <Card>
                                        <CardHeader
                                            avatar={
                                                <i className="fas fa-book" style={{color: red[400], fontSize: "2.5rem"}}></i>
                                            }
                                            title="Literature"
                                            subheader="A gateway to experience multiple lifetimes in the span of one.">
                                        </CardHeader>
                                    </Card>
                                </Grid>
                                <Grid item xs={12} md={6}>
                                    <Card>
                                        <CardHeader
                                            avatar={
                                                <i className="fas fa-music" style={{color: red[400], fontSize: "2.5rem"}}></i>
                                            }
                                            title="Music"
                                            subheader="Aligning the beat of the heart to the rhythm of the song.">
                                        </CardHeader>
                                    </Card>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </div>
            </div>

        );
    }
}

export default InterestsCard;
