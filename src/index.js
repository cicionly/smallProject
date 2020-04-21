import './common/index.less';
import React from 'react';
import ReactDom from 'react-dom';
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./container/Home/index";
import Profile from "./container/Profile/index";
import Lesson from "./container/Lesson/index";
import App from "./container/App";
import "./assets/fonts/iconfont.css";
import store from "./redux/store";
import { Provider } from "react-redux";

window._store = store;
ReactDom.render(
    <Provider store={store}>
        <Router>
            <App>
                <Switch>
                    <Route path="/" exact render={props => <h1>主页</h1>}></Route>
                    <Route path="/home" component={Home}></Route>
                    <Route path="/lesson" component={Lesson}></Route>
                    <Route path="/profile" component={Profile}></Route>
                </Switch>
            </App>
        </Router>
    </Provider>
    , document.getElementById("root"));
