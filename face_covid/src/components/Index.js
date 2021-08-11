import React, { Component } from 'react';
import Navigation from "./Navigation";
import Slider from "./Slider";
import Gethelp from "./Gethelp";
import TalkButton from "./TalkButton";

export default class Index extends Component {
    render() {
        return (
            <div>
            <Navigation />
            <Slider />
            <Gethelp />
            <TalkButton />
            </div>
        )
    }
}
