import React from "react";
import {Route, Switch} from "react-router";
import App from "../App";
import ServiceItem from "../Components/ServiceItem/ServiceItem";
import AboutUs from "../Components/AboutUs/AboutUs";
import Contacts from "../Components/Contacts/Contacts";
import NotFound from "../Components/NotFound/NotFound";


export const Routing = () => {
         return (
           <Switch>
             <Route exact path="/" component={App} />
             <Route path="/service/:Id" component={ServiceItem} />
             <Route path="/about" component={AboutUs} />
             <Route path="/contacts" component={Contacts} />
             <Route path="*" component={NotFound} />
           </Switch>
         );
       };