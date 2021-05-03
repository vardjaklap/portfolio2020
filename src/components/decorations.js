import React, { Component } from 'react';


export class Decorations extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }

    render() {
        return (
            <div style={{position: "absolute", top: 0, width: "100%", height: "100%", zIndex: -100}}>
                <div id="usbOne">
                </div>
                <div id="usbTwo">
                </div>
            </div>

        );
    }
}

export default Decorations;
