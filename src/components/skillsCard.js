import React, { Component } from 'react';
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import Typography from "@material-ui/core/Typography";
import {red} from "@material-ui/core/colors";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails  from "@material-ui/core/AccordionDetails";
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';


export class SkillsCard extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }

    render() {
        return (
            <div>
                <div className="section" id="skills">
                    <Grid container justify="center">
                        <Grid item xs={12} >
                            <Grid container justify="center">
                                <Typography variant="h2" gutterBottom>
                                    Professional skills
                                </Typography>
                            </Grid>
                        </Grid>
                        <Grid item xs={12} sm={10} md={8}>
                            <Grid container justify="center">
                                <Card style={{width: "100%"}}>
                                    <Accordion >
                                        <AccordionSummary
                                            expandIcon={<ExpandMoreIcon />}
                                            aria-controls="panel1a-content"
                                            id="panel1a-header"
                                        >
                                            <Grid container justify="center" alignItems="center"
                                            >
                                                {/*<div className="jsIcon lgSkillIcon"></div>*/}
                                                <i className="fab fa-js-square" style={{fontSize: "100px", color: red[400], marginRight: "15px"}}></i>
                                                <Typography variant="h4">Front End</Typography>
                                            </Grid>
                                        </AccordionSummary>
                                        <AccordionDetails>
                                            <Grid container justify="space-evenly"
                                                  alignItems="center"
                                            >
                                                <Grid item>
                                                    <Grid container justify="space-evenly" alignItems="center" spacing={1}>
                                                        <Grid item>
                                                            {/*<div className="smSkillIcon" id="reactIcon"></div>*/}
                                                            <i className="fab fa-react" style={{fontSize: "50px", color: red[400], marginRight: "5px"}}></i>
                                                        </Grid>
                                                        <Grid item>
                                                            <Typography variant="h5">React</Typography>
                                                        </Grid>
                                                    </Grid>
                                                </Grid>
                                                <Grid item>
                                                    <Grid container justify="space-evenly" alignItems="center" spacing={1}>
                                                        <Grid item>
                                                            {/*<div className="smSkillIcon"  id="vueIcon"></div>*/}
                                                            <i className="fab fa-vuejs" style={{fontSize: "50px", color: red[400], marginRight: "5px"}}></i>
                                                        </Grid>
                                                        <Grid item>
                                                            <Typography variant="h5">VueJS</Typography>
                                                        </Grid>
                                                    </Grid>
                                                </Grid>
                                                <Grid item>
                                                    <Grid container justify="space-evenly" alignItems="center" spacing={1}>
                                                        <Grid>
                                                            {/*<div className="smSkillIcon"  id="angIcon"></div>*/}
                                                            <i className="fab fa-angular" style={{fontSize: "50px", color: red[400], marginRight: "5px"}}></i>
                                                        </Grid>
                                                        <Grid>
                                                            <Typography variant="h5">AngularJS</Typography>
                                                        </Grid>
                                                    </Grid>
                                                </Grid>
                                                <Grid item>
                                                    <Grid container justify="space-evenly" alignItems="center" spacing={1}>
                                                        <Grid>
                                                            {/*<div className="smSkillIcon"  id="nodeIcon"></div>*/}
                                                            <i className="fab fa-node-js" style={{fontSize: "50px", color: red[400], marginRight: "5px"}}></i>
                                                        </Grid>
                                                        <Grid>
                                                            <Typography variant="h5">Node.js</Typography>
                                                        </Grid>
                                                    </Grid>
                                                </Grid>
                                            </Grid>
                                        </AccordionDetails>
                                    </Accordion >
                                    <Accordion >
                                        <AccordionSummary
                                            expandIcon={<ExpandMoreIcon />}
                                            aria-controls="panel2a-content"
                                            id="panel2a-header"
                                        >
                                            <Grid container justify="center" alignItems="center"
                                            >
                                                {/*<div className="phpIcon lgSkillIcon"></div>*/}
                                                <i className="fas fa-server" style={{fontSize: "100px", color: red[400], marginRight: "15px"}}></i>
                                                <Typography variant="h4">Back end</Typography>
                                            </Grid>
                                        </AccordionSummary>
                                        <AccordionDetails>
                                            <Grid container justify="space-evenly"
                                                  alignItems="center">
                                                <Grid item>
                                                    <Grid container justify="space-evenly" alignItems="center" spacing={1}>
                                                        <Grid item>

                                                            <i className="fab fa-php" style={{fontSize: "50px", color: red[400], marginRight: "5px"}}></i>
                                                        </Grid>
                                                        <Grid item>
                                                            <Typography variant="h5">PHP</Typography>
                                                        </Grid>
                                                    </Grid>
                                                </Grid>
                                                <Grid item>
                                                    <Grid container justify="space-evenly" alignItems="center" spacing={1}>
                                                        <Grid item>
                                                            <i className="fab fa-laravel" style={{fontSize: "50px", color: red[400], marginRight: "5px"}}></i>
                                                        </Grid>
                                                        <Grid item>
                                                            <Typography variant="h5">Laravel</Typography>
                                                        </Grid>
                                                    </Grid>
                                                </Grid>
                                                <Grid item>
                                                    <Grid container justify="space-evenly" alignItems="center" spacing={1}>
                                                        <Grid item>
                                                            <i className="fas fa-code" style={{fontSize: "50px", color: red[400], marginRight: "5px"}}></i>
                                                        </Grid>
                                                        <Grid item>
                                                            <Typography variant="h5">Asp .NET Core</Typography>
                                                        </Grid>
                                                    </Grid>
                                                </Grid>
                                            </Grid>
                                        </AccordionDetails>
                                    </Accordion >
                                    <Accordion >
                                        <AccordionSummary
                                            expandIcon={<ExpandMoreIcon />}
                                            aria-controls="panel2a-content"
                                            id="panel2a-header"
                                        >
                                            <Grid container justify="center" alignItems="center"
                                            >
                                                <i className="fas fa-terminal" style={{fontSize: "100px", color: red[400], marginRight: "15px"}}></i>
                                                <Typography variant="h4">Other skills</Typography>
                                            </Grid>
                                        </AccordionSummary>
                                        <AccordionDetails>
                                            <Grid container justify="space-evenly"
                                                  alignItems="center">
                                                <Grid item>
                                                    <Grid container justify="space-evenly" alignItems="center" spacing={1}>
                                                        <Grid item>
                                                            <i className="fab fa-java" style={{fontSize: "50px", color: red[400], marginRight: "5px"}}></i>
                                                        </Grid>
                                                        <Grid item>
                                                            <Typography variant="h5">Java</Typography>
                                                        </Grid>
                                                    </Grid>
                                                </Grid>
                                                <Grid item>
                                                    <Grid container justify="space-evenly" alignItems="center" spacing={1}>
                                                        <Grid item>
                                                            <i className="fab fa-android" style={{fontSize: "50px", color: red[400], marginRight: "5px"}}></i>
                                                        </Grid>
                                                        <Grid item>
                                                            <Typography variant="h5">Kotlin</Typography>
                                                        </Grid>
                                                    </Grid>
                                                </Grid>
                                                <Grid item>
                                                    <Grid container justify="space-evenly" alignItems="center" spacing={1}>
                                                        <Grid item>
                                                            <i className="fas fa-database" style={{fontSize: "50px", color: red[400], marginRight: "5px"}}></i>
                                                        </Grid>
                                                        <Grid item>
                                                            <Typography variant="h5">SQL</Typography>
                                                        </Grid>
                                                    </Grid>
                                                </Grid>
                                                <Grid item>
                                                    <Grid container justify="space-evenly" alignItems="center" spacing={1}>
                                                        <Grid item>
                                                            <i className="fab fa-python" style={{fontSize: "50px", color: red[400], marginRight: "5px"}}></i>
                                                        </Grid>
                                                        <Grid item>
                                                            <Typography variant="h5">Python</Typography>
                                                        </Grid>
                                                    </Grid>
                                                </Grid>
                                                <Grid item>
                                                    <Grid container justify="space-evenly" alignItems="center" spacing={1}>
                                                        <Grid item>
                                                            <i className="fab fa-cuttlefish" style={{fontSize: "50px", color: red[400], marginRight: "5px"}}></i>
                                                        </Grid>
                                                        <Grid item>
                                                            <Typography variant="h5">C#</Typography>
                                                        </Grid>
                                                    </Grid>
                                                </Grid>
                                                <Grid item>
                                                    <Grid container justify="space-evenly" alignItems="center" spacing={1}>
                                                        <Grid item>
                                                            <i className="fab fa-cuttlefish" style={{fontSize: "50px", color: red[400], marginRight: "5px"}}></i>
                                                        </Grid>
                                                        <Grid item>
                                                            <Typography variant="h5">C++</Typography>
                                                        </Grid>
                                                    </Grid>
                                                </Grid>
                                                <Grid item>
                                                    <Grid container justify="space-evenly" alignItems="center" spacing={1}>
                                                        <Grid item>
                                                            <i className="fab fa-unity" style={{fontSize: "50px", color: red[400], marginRight: "5px"}}></i>
                                                        </Grid>
                                                        <Grid item>
                                                            <Typography variant="h5">Unity</Typography>
                                                        </Grid>
                                                    </Grid>
                                                </Grid>
                                            </Grid>
                                        </AccordionDetails>
                                    </Accordion >
                                </Card>
                            </Grid>
                        </Grid>
                    </Grid>
                </div>
            </div>

        );
    }
}

export default SkillsCard;
