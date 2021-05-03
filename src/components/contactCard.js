import React, { Component } from 'react';
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";

export class ContactCard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            checkedB: false
        };
    }
    handleChange = name => event => {
        this.setState({  [name]: event.target.checked });
    };

    render() {
        return (
            <div>
                <div className="section" id="contactMe">
                    <Grid container justify="center">
                        <Grid item xs={12} >
                            <Grid container justify="center">
                                <Typography variant="h2" gutterBottom>
                                    Contact me
                                </Typography>
                            </Grid>
                        </Grid>
                        <Grid container justify="center" spacing={3} style={{margin: "25px 0 0"}}>
                            <Grid item>
                                <Button href="https://www.linkedin.com/in/oleksandr-peresta/" variant="outlined" color="primary" endIcon={<i className={"fab fa-linkedin"}></i>} style={{padding: "25px 45px"}}>
                                    Linked In
                                </Button>
                            </Grid>
                           <Grid item>
                               <Button href="mailto:alexperesta@gmail.com" variant="outlined" color="primary" endIcon={<i className={"fas fa-envelope-open-text"}></i>} style={{padding: "25px 45px"}}>
                                   Email
                               </Button>
                           </Grid>

                        </Grid>

                    </Grid>
                </div>
            </div>

        );
    }
}

export default ContactCard;
