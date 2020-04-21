import React from "react";
import { NavLink } from "react-router-dom";
import "./index.less";

export default class Tab extends React.Component {
    render() {
        return <div className="footer">
            <NavLink to="/home" activeClassName="selected">
                <i className="iconfont icon-home"></i>
                <span>主页</span>
            </NavLink>
            <NavLink to="/lesson" activeClassName="selected">
                <i className="iconfont icon-icon_new_recruit"></i>
                <span>教学课程</span>
            </NavLink>
            <NavLink to="/profile" activeClassName="selected">
                <i className="iconfont icon-icon_im_face"></i>
                <span>个人中心</span>
            </NavLink>
        </div>
    }
}