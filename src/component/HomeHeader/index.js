import React from 'react';
import "./index.less";

export default class HomeHeader extends React.Component {
    constructor() {
        super();
        this.state = {
            isClosed: false
        }
    }

    handleClick = () => {
        this.setState({ isClosed: !this.state.isClosed })
    }

    changeLesson = (event)=>{
        let val = event.target.getAttribute("type");
        this.props.changeLessonType(val);
        this.handleClick();
    }

    render() {
        return <div className="header">
            <div className="headertop">
                <div className="logo">
                    个人信息管理系统
            </div>
                <div onClick={this.handleClick}>
                    {this.state.isClosed ? <i className="iconfont icon-close"></i> : <i className="iconfont icon-gengduo"></i>}
                </div>
            </div>
            {this.state.isClosed ? <ul onClick={this.changeLesson}>
                <li type="1">今天学习React</li>
                <li type="2">明天学习Angular</li>
                <li type="3">后天学习Vue</li>
                <li type="4">大后天学习Node</li>
            </ul> : null}
        </div>
    }
}

