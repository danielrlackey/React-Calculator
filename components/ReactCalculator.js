import React from "react";
import ResultComponent from "./ResultComponent.js"
import KeypadComponent from "./KeypadComponent.js"


class ReactCalculator extends React.Component {
    constructor(){
        super();

        this.state = {
            result: ""
        }
    }


calculate = () => {

}


    render() {
        return (
          <div>
            <h1>Simple React-Calculator</h1>
            <ResultComponent />
            <KeypadComponent />
                </div>
        )
    }
}

export default ReactCalculator;