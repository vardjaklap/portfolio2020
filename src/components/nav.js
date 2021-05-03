import React, { Component } from 'react';
import Grid from "@material-ui/core/Grid";


class Nav extends Component {
    constructor(props) {
        super(props);
        this.state = {
            didMount: true,
            scrolledHead: false,
            menuOpened: false
        };
        this.handleNav = this.handleNav.bind(this);
    }

    scrollContact(){
        let test = document.getElementById("contactMe");
        window.scroll({
            top: test.offsetTop,
            left: 0,
            behavior: 'smooth'
        });
    }
    scrollAbout(){
        let test = document.getElementById("skills");
        window.scroll({
            top: test.offsetTop,
            left: 0,
            behavior: 'smooth'
        });
    }

    scrollWorks(){
        let test = document.getElementById("works");
        window.scroll({
            top: test.offsetTop - 20,
            left: 0,
            behavior: 'smooth'
        });

    }
    scrollInterests(){
        let test = document.getElementById("interests");
        window.scroll({
            top: test.offsetTop,
            left: 0,
            behavior: 'smooth'
        });
    }
    scrollTop(){
        window.scroll({
            top: 0,
            left: 0,
            behavior: 'smooth'
        });
    }
    handleNav(){
        console.log(this.state.menuOpened);
        // const menuOpened = this.state.menuOpened;
        if(this.state.menuOpened === false){
            this.setState({
                menuOpened: true
            });
        }else{
            this.setState({
                menuOpened: false
            });
        }

    }
    componentDidMount() {
        window.addEventListener('scroll', () =>{
            let scrollPosHeader = window.pageYOffset | document.body.scrollTop;
            if(scrollPosHeader > 50) {
                this.setState({
                    scrolled: true
                })
            } else if(scrollPosHeader <= 50) {
                this.setState({
                    scrolled: false
                })
            }
        });
    }
    render() {
        return (
            <header>
                <div className={("overlayNav ") + (this.state.menuOpened ? "overlayNavOpened" : "overlayNavClosed")} onClick={this.handleNav}>
                    <nav id="navigation" className={(this.state.scrolled ? "scrolledUl " : "unScrolledUl ") + (this.state.menuOpened ? "navOpened" : "navClosed")}>
                        <Grid container justify="space-around" spacing={4}>
                            <div className="butNav"><div className="navLink"><a href="#1" className={this.state.scrolled ? "scrolledA" : "unScrolledA"} onClick={this.scrollAbout}>About</a></div> <div className="lineNav" style={this.props.theme}></div></div>
                            <div className="butNav"><div className="navLink"><a href="#2" className={this.state.scrolled ? "scrolledA" : "unScrolledA"} onClick={this.scrollWorks}>Works</a></div><div className="lineNav" style={this.props.theme}></div></div>
                            <div className="butNav"><div className="navLink"><a href="#3" className={this.state.scrolled ? "scrolledA" : "unScrolledA"} onClick={this.scrollInterests}>Interests</a></div><div className="lineNav" style={this.props.theme}></div></div>
                            <div className="butNav"><div className="navLink"><a href="#4" className={this.state.scrolled ? "scrolledA" : "unScrolledA"} onClick={this.scrollContact}>Contact</a></div><div className="lineNav" style={this.props.theme}></div></div>
                            {/*<div className="butNav"><div className="navLink"><a href="#5" className={this.state.scrolled ? "scrolledA" : "unScrolledA"} onClick={this.scrollAbout}>More</a></div><div className="lineNav" style={this.props.theme}></div></div>*/}

                        </Grid>
                    </nav>
                </div>
                <div className={this.state.scrolled ? "hamb scrolledHam" : "hamb unScrolledHam"} onClick={this.handleNav}>
                    <i className="fa fa-bars"></i>
                </div>
                <div className={this.state.scrolled ? "upButton" : "noDisplay"}>
                    <a href="#0" className="scrollUp" onClick={this.scrollTop}><i className="fas fa-arrow-up"></i></a>
                </div>
            </header>
        );
    }
}





export default Nav;