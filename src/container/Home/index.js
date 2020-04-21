import React from 'react';
import HomeHeader from "../../component/HomeHeader/index"
import * as actions from "../../redux/actions/home";
import { connect } from "react-redux";
import "./index.less";

class Home extends React.Component {
    changeLessonType = (val) => {
        this.props.setLesson(val);
    }
    render() {
        return <div className="container">
            <HomeHeader changeLessonType={this.changeLessonType} />
            <div className="content">
                <p>{this.props.home.lesson}</p>
                <p>{this.props.home.lesson}</p>
                <p>{this.props.home.lesson}</p>
                <p>{this.props.home.lesson}</p>
                <p>{this.props.home.lesson}</p>
                <p>{this.props.home.lesson}</p>
                <p>{this.props.home.lesson}</p>
                <p>{this.props.home.lesson}</p>
                <p>{this.props.home.lesson}</p>
                <p>{this.props.home.lesson}</p>
                <p>{this.props.home.lesson}</p>
                <p>{this.props.home.lesson}</p>
                <p>{this.props.home.lesson}</p>
                <p>{this.props.home.lesson}</p>
                <p>{this.props.home.lesson}</p>
                <p>{this.props.home.lesson}</p>
                <p>{this.props.home.lesson}</p>
                <p>{this.props.home.lesson}</p>
                <p>{this.props.home.lesson}</p>
                <p>{this.props.home.lesson}</p>
                <p>{this.props.home.lesson}</p>
                <p>{this.props.home.lesson}</p>
                <p>{this.props.home.lesson}</p>
                <p>{this.props.home.lesson}</p>
                <p>{this.props.home.lesson}</p>
                <p>{this.props.home.lesson}</p>
                <p>{this.props.home.lesson}</p>
                <p>{this.props.home.lesson}</p>
                <p>{this.props.home.lesson}</p>
                <p>{this.props.home.lesson}</p>
                <p>{this.props.home.lesson}</p>
                <p>{this.props.home.lesson}</p>
                <p>{this.props.home.lesson}</p>
                <p>{this.props.home.lesson}</p>
                <p>{this.props.home.lesson}</p>
                <p>{this.props.home.lesson}</p>
                <p>{this.props.home.lesson}</p>
                <p>{this.props.home.lesson}</p>
                <p>{this.props.home.lesson}</p>
                <p>{this.props.home.lesson}</p>
            </div>
        </div>
    }
}

export default connect((state) => { return { ...state, lesson: state.home.lesson } }, actions)(Home);