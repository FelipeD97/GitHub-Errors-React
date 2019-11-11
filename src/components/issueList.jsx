import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Dropdown, DropdownTrigger, Button, DropdownMenu, DropdownItem, DropdownContent } from "bloomer";
import { loadData } from "../utils/loadData";
import Wrapper from "../components/wrapper";

import "bulma/css/bulma.css";
import "../components/issueList.css";


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
                        <div key={`issues-${id}`} >
                            <Wrapper className="error-wrapper">
                                <Link to={`/issues/${id.number}`}>{ id.title}</Link>
                                <p>&nbsp;</p>
                                <li>
                                    { id.body }
                                </li>
                                <p>&nbsp;</p>
                            </Wrapper>
                        </div>
                    );
                })}
            </ul>
        );
    }
}

export default Issues;