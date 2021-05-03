import React, { Component } from 'react';
import DialogTitle from "@material-ui/core/DialogTitle";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import Button from "@material-ui/core/Button";
import DialogContent from "@material-ui/core/DialogContent";
import Typography from "@material-ui/core/Typography";

const projects = [
    {id: 1, title: 'PMPG Simulation tool', content: 'Project, sponsored by Humber college. \nThe app is developed on Unity.', icon: "fas fa-tasks", fin: false},
    {id: 2, title: 'Fitonia 2.0', content: 'The newer version of fitness application, with fully operational front-end (React), backend (Node.JS) and database (MongoDB).', icon: "fas fa-circle-notch", fin: false},
    {id: 3, title: 'Spatium', content: 'Social network, developed using Vue.JS and Laravel (PHP).', icon: "fas fa-users", fin: false},
    {id: 4, title: 'MyWhisk', content: 'Android application for getting better pairings for whisky.', icon: "fas fa-glass-whiskey", fin: false},
    {id: 5, title: 'Athena', content: 'TensorFlow assistant (in concept stage).', icon: "fas fa-user-graduate", fin: false},
    {id: 6, title: 'TWL', content: 'Challenge task, made for Shopify Summer internship 2019. Gets .json file from Toronto Waste and filters data to get results.', icon: "fas fa-recycle", fin: true},
    {id: 7, title: 'Modest', content: 'Landing page with pure HTML and CSS.', icon: "fas fa-pager", fin: true},
    {id: 8, title: 'Fitonia', content: 'First attempt and developing applications using AngularJS.', icon: "far fa-stop-circle", fin: true},

];

export class WorkInfo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            open: true,
            project: {
                title: "test",
                content: "",
                icon: ""
            }
        };
        this.handleClose = this.handleClose.bind(this);
    }

    handleClose(){
        this.props.closeDialog();
    }
    componentDidUpdate(prevProps, prevState, snapshot) {
        if(prevProps.idOfWork !== this.props.idOfWork){
            this.setState({
                project: projects[this.props.idOfWork-1],
                open: true
            })
        }
    }


    render() {
        return (
            <div>
                <Dialog onClose={this.handleClose} aria-labelledby="simple-dialog-title" open={this.props.dialogOpen} scroll={"body"} maxWidth={"md"}>
                    <DialogTitle id="simple-dialog-title">{this.state.project.title}</DialogTitle>
                    <DialogContent >
                        <Typography gutterBottom>
                            {this.state.project.content}
                        </Typography>

                    </DialogContent>
                    <DialogActions>
                        <Button onClick={this.handleClose} color="primary">
                            Close
                        </Button>

                    </DialogActions>
                </Dialog>
            </div>

        );
    }
}

export default WorkInfo;
