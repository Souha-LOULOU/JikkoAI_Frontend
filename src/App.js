import React, { useRef, useEffect } from 'react';
import { useLocation, Switch } from 'react-router-dom';
import AppRoute from './utils/AppRoute';
import ScrollReveal from './utils/ScrollReveal';
import ReactGA from 'react-ga';
// Layouts
import LayoutDefault from './layouts/LayoutDefault';

// Views 
import Home from './views/Home';

//components
import Form from './Form';
import Login from './Login';
import Contact from './Contact';
import Profile from './Profile';
import FormEdit from './FormEdit';
import Body from './Body';
import Upload from './Upload';
import PaymentPlan from './PaymentPlan';

// Initialize Google Analytics
ReactGA.initialize(process.env.REACT_APP_GA_CODE);

const trackPage = page => {
  ReactGA.set({ page });
  ReactGA.pageview(page);
};

//the only componenent rendered to the DOM (index.js)
const App = () => {

  const childRef = useRef();
  let location = useLocation();

  useEffect(() => {
    const page = location.pathname;
    document.body.classList.add('is-loaded')
    childRef.current.init();
    trackPage(page);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location]);

  //not html it is jsx that will be converted to html later on
  return (
  
    <ScrollReveal
      ref={childRef}
      children={() => (
        <Switch>
          <AppRoute exact path="/" component={Home} layout={LayoutDefault} />
          <AppRoute path="/form" component={Form}  />
          <AppRoute path="/login" component={Login}  />
          <AppRoute path="/contact" component={Contact}  />
          <AppRoute path="/profile" component={Profile}  />
          <AppRoute path="/editprofile" component={FormEdit} />
          <AppRoute path="/body" component={Body} />
          <AppRoute path="/upload" component={Upload} />
          <AppRoute path="/payment" component={PaymentPlan} />
        </Switch>
        
      )
      } />
      
  );
}

export default App;