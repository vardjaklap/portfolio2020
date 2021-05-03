import React, { Component } from 'react';
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles'
import {createMuiTheme} from "@material-ui/core";
import CssBaseline from '@material-ui/core/CssBaseline';
import MainCard from "./mainCard";
import Container from "@material-ui/core/Container";
import SkillsCard from "./skillsCard";
import WorksCard from "./worksCard";
import InterestsCard from "./interestsCard";
import Nav from "./nav";
//import Decorations from "./decorations";
import ContactCard from "./contactCard";
import WorkInfo from "./workInfo";
import {red} from "@material-ui/core/colors";
import Grow from "@material-ui/core/Grow";


export class MainApp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            theme: createMuiTheme({
                palette: {
                    primary: {
                        light: '#ff867c',
                        main: '#ef5350',
                        dark: '#b61827',
                        contrastText: '#fff',
                    },
                    background: {
                        default: "#efefef"
                    }

                },
                typography: {
                    useNextVariants: true,
                },
            }),
            title: "default",
            dialogOpened: false,
            workId: 0
        };
        this.dialogOpen = this.dialogOpen.bind(this);
        this.closeDialog = this.closeDialog.bind(this);

    }
    dialogOpen(id){
        this.setState({
            dialogOpened: true,
            workId: id
        });
        console.log(id);

    }
    closeDialog(){
        this.setState({
            dialogOpened: false
        });
    }

    render() {
    return (
        <div>
                <MuiThemeProvider theme={this.state.theme}>
                    <CssBaseline>
                        <Grow in>
                            <div className="bot" style={{width: "100%", height: "5px", backgroundColor: red[400]}}/>
                        </Grow>
                        <WorkInfo idOfWork={this.state.workId} dialogOpen={this.state.dialogOpened} closeDialog={this.closeDialog}/>
                        <Nav/>
                        {/*<Decorations></Decorations>*/}
                        <Container maxWidth="xl" >
                            <MainCard/>
                            <SkillsCard/>
                            <WorksCard dialogOpen={this.dialogOpen}/>
                            <InterestsCard/>
                            <ContactCard/>
                        </Container>
                        <div className="bot" style={{width: "100%", height: "8px", backgroundColor: red[400]}}/>
                    </CssBaseline>
                </MuiThemeProvider>
        </div>

    );
  }
}

export default MainApp;
