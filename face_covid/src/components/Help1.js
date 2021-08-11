import React, { Component } from 'react';
import Navigation from "./Navigation";
import Solution1 from "./Solution1";
import TalkButton from "./TalkButton";
import Gethelp from "./Gethelp"

export default class Index extends Component {
    render() {
        return (
            <div>
            <Navigation />
            <Solution1 />
            <Gethelp />
            <TalkButton />
            </div>
        )
    }
}