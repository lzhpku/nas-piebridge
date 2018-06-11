import React, { Component } from 'react';
import { Route, Switch } from 'react-router';
import { HashRouter } from 'react-router-dom';

import MalePage from "./pages/MalePage";
import PostFriend from "./pages/PostFriend";
import HomePage from "./pages/HomePage";
import PersonFriend from "./pages/PersonFriend";
import About from './pages/About';

import './app.css';


class App extends Component {
    constructor(props) {
        super(props);

        // insert history
        const href = window.location.href;
        window.history.replaceState({}, '', './#');
        window.history.pushState({}, '', href);
    }
    componentDidMount() {
    }
    render() {
        return (
            <div>
                <div className="background" />
                <HashRouter onUpdate={(e) => {console.log(e)}}>
                    <Switch>
                        <Route exact path={['/', '/femalefriend']} component={HomePage} />
                        <Route exact path='/malefriend' component={MalePage} />
                        <Route exact path="/post" component={PostFriend} />
                        <Route exact path="/friend/:friendId" component={PersonFriend} />
                        <Route exact path="/about" component={About} />
                    </Switch>
                </HashRouter >
            </div>
        )
    }
}

export default App;
