import React from "react";

const Counter = props => (
            <div className="panel panel-primary">
                <div className="panel-heading">Clicky Game!</div>
                <div className="panel-body text-center">
                    <p>Click on an image to earn points, but don't click on any more than once!</p>
                    <p>Click Count: {props.count}</p>
                    <p>Top Score: {props.count}</p>
                </div>
            </div>
        );

export default Counter;