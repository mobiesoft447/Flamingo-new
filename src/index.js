import React from 'react'
import ReactDOM from 'react-dom'
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom'

import './style.css'
import PrivPol from './views/priv-pol'
import Home from './views/home'
import ContactUs from './views/contact-us'
import Specials from './views/specials'
import Wholesale from './views/wholesale'
import TermsConditions from './views/terms-conditions'
import Products from './views/products'
import LegalAgg from './views/legal-agg'
import FAQS from './views/faqs'
import Mgt from './views/mgt'
import DeliveryInfo from './views/delivery-info'
import About from './views/about'
import NotFound from './views/not-found'

const App = () => {
  return (
    <Router>
      <Switch>
        <Route component={PrivPol} exact path="/priv-pol" />
        <Route component={Home} exact path="/" />
        <Route component={ContactUs} exact path="/contact-us" />
        <Route component={Specials} exact path="/specials" />
        <Route component={Wholesale} exact path="/wholesale" />
        <Route component={TermsConditions} exact path="/terms-conditions" />
        <Route component={Products} exact path="/products" />
        <Route component={LegalAgg} exact path="/legal-agg" />
        <Route component={FAQS} exact path="/faqs" />
        <Route component={Mgt} exact path="/mgt" />
        <Route component={DeliveryInfo} exact path="/delivery-info" />
        <Route component={About} exact path="/about" />
        <Route component={NotFound} path="**" />
        <Redirect to="**" />
      </Switch>
    </Router>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))
