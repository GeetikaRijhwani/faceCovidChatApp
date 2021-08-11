import React, { Component } from 'react';
import ReactPlayer from "react-player";

export default class Solution1 extends Component {
    render() {
        return (
        <div className="container">
            <div className="row">
                <div className="col-6 mt-5 sol-text">
                    <h3>Are you worried and frightened from COVID?</h3>
                    <p>At present time and scenario of pandemic it is easy to get caught up in fear and worries. But amid all the people fighting over wearing mask, arranging for hospital beds, oxygen and medicines. It is important to take a deep breadth and remind ourselves a quote <br /><br />
                        <strong>God help those who help others</strong><br /><br />
                    Help others. It will make you feel better, satisfied and worth taking birth on Earth. By this act you will feel more happier and healthier (as being happy increases your immunity)
                    </p>
                    <p>Helping others makes a diiference in our community as well as support our own health and well-being. You can help others by changing your daily routine and eating habits. And never forget "Every Lock has a Key. We just need to find it." Same is the case with this situation as well. We will surely find a way. Doctors are working effortlessly on that</p>
                    <p>For better understanding watch the video alongside</p>
                </div>
                <div className="col-4 mt-5 sol-video">
                <ReactPlayer url="https://youtu.be/c6W7qOk6B-8" />
                </div>
            </div>
            <div className="row">
                    <h3 style={{marginBottom:"20px"}}>Related Videos</h3>
                    <div className="col-3">
                    <ReactPlayer url="https://youtu.be/XFImu0thk10" />
                    </div>
                    <div className="col-3 offset-3">
                    <ReactPlayer url="https://youtu.be/c6W7qOk6B-8" />
                    </div>
                    
            </div>
        </div>

        )
    }
}
