import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
  } from "react-router-dom";
import { Collaborate } from '../components/collaborate/Collaborate';
import { FanScreen } from '../components/fan/FanScreen';
import { HomeScreen } from '../components/home/HomeScreen';
import { TopicScreen } from '../components/topic/TopicScreen';
import { Navbar } from '../components/ui/navbar/Navbar'

export const AppRouter = () => {
    return (
        <>
            <div>
                <Router>
                    <Navbar />
                    <Switch>
                        <Route exact path="/soy-su-fan">
                            <FanScreen />
                        </Route>
                        <Route exact path="/tema-del-mes">
                            <TopicScreen />
                        </Route>
                        <Route exact path="/expresate">
                            <Collaborate />
                        </Route>
                        <Route exact path="/">
                            <HomeScreen />
                        </Route>
                        
                        <Redirect to="/" />
                    </Switch>
                </Router>
            </div>
        </>
    )
}
