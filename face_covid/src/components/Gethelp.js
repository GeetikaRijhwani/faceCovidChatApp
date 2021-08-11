import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Gethelp extends Component {
  render() {
    return (
      <section className="cov">
        <div className="container">
          <div className="row">
            <div className="card" style={{ width: "18rem" }}>
              <div className="card-body">
                <p className="card-text">
                  Frustuated sitting at home due to Lockdown and Covid?
                </p>
                <Link to="/frightened-from-covid" className="btn btn-primary">
                  Get Help
                </Link>
              </div>
            </div>

            <div className="card" style={{ width: "18rem" }}>
              <div className="card-body">
                <p className="card-text">
                  Is your Business severely affected due to COVID?
                </p>
                <Link to="/frightened-from-covid" className="btn btn-primary">
                  Get Help
                </Link>
              </div>
            </div>

            <div className="card" style={{ width: "18rem" }}>
              <div className="card-body">
                <p className="card-text">
                  Are you worried and frightend from COVID?
                </p>
                <Link to="/frightened-from-covid" className="btn btn-primary">
                  Get Help
                </Link>
              </div>
            </div>

            <div className="card" style={{ width: "18rem" }}>
              <div className="card-body">
                <p className="card-text">
                  Are you overthinking about what if I got COVID?
                </p>
                <Link to="/frightened-from-covid" className="btn btn-primary">
                  Get Help
                </Link>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="card" style={{ width: "18rem" }}>
              <div className="card-body">
                <p className="card-text">
                  Are you facing COVID or symptoms of COVID?
                </p>
                <Link to="/frightened-from-covid" className="btn btn-primary">
                  Get Help
                </Link>
              </div>
            </div>

            <div className="card" style={{ width: "18rem" }}>
              <div className="card-body">
                <p className="card-text">
                  Are your loved ones fighting with COVID?
                </p>
                <Link to="/frightened-from-covid" className="btn btn-primary">
                  Get Help
                </Link>
              </div>
            </div>

            <div className="card" style={{ width: "18rem" }}>
              <div className="card-body">
                <p className="card-text">
                  Have you lost your loved one due to COVID?
                </p>
                <Link to="/frightened-from-covid" className="btn btn-primary">
                  Get Help
                </Link>
              </div>
            </div>

            <div className="card" style={{ width: "18rem" }}>
              <div className="card-body">
                <p className="card-text">
                  Are you facing violence and harrasment at home?
                </p>
                <Link to="/frightened-from-covid" className="btn btn-primary">
                  Get Help
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
