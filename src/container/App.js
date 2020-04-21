import React from "react";
import Tab from "../component/Tab/index";

export default class App extends React.Component {
    render() {
        return <div>{this.props.children}
        <Tab/>
        </div>
    }
}