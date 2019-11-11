import React, { Component } from "react";
import { loadData } from "../utils/loadData";


class Issues extends Component {
    state = {
        issues: []
    };

    async componentDidMount() {
        const issues = await loadData(
        `https://api.github.com/repos/facebook/create-react-app/issues`
        );

        this.setState({
            issues
        });
    }

    render() {
        const { issues } = this.state;

        return (
            <ul>
                {issues.map(id => {
                    return (
                        // State is an array so iterate over the array
                        <div key={`${id}`} >
                            <p>{ id.title }</p>
                            <p>&nbsp;</p>
                            <li>
                                { id.body }
                            </li>
                            <p>&nbsp;</p>
                        </div>
                    );
                })}
            </ul>
        );
    }
}

export default Issues;