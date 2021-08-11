import React, { Component } from "react";

export default class Slider extends Component {
  render() {
    return (
      <div>
        <div className="overlay"></div>
        <div className="tscontainer">
          <div className="main_slider">
            <div className="slider-wrapper">
              <div className="slider" id="slider">
                <div className="slider-1">
                  LIFE IS <strong>BEAUTIFUL</strong>
                </div>
                <div className="slider-2">
                  EVERYTHING WILL BE FINE <strong>SOON</strong>
                </div>
                <div className="slider-3">
                  SPREAD <strong>LOVE, LAUGHTER AND HAPPINESS</strong>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
