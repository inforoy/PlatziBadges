import React from 'react';
import { Route, BrowserRouter, Switch } from "react-router-dom";

import Badges from "../pages/Badges";
import BadgeNew from "../pages/BadgeNew";
import Layout from "./Layout";
import NotFound from "../pages/NotFound";

function App() {

    return (
        <BrowserRouter>
            <Layout>
                <Switch>
                    {/*<Route exact path="/" component={Home} />*/}
                    <Route exact path="/badges" component={Badges}/>
                    <Route exact path="/badges/new" component={BadgeNew}/>
                    <Route exact path="/badges/:badgeId/edit" component={BadgeNew}/>

                    <Route component={NotFound}/>
                </Switch>
            </Layout>
        </BrowserRouter>
    );
}

export default App;