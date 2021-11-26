import { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import { useRecoilValue } from 'recoil';
import { GuardProvider, GuardedRoute } from 'react-router-guards';
import { LoadScripts } from '../../Hooks';
import _ from 'lodash';
import Home from '../Home';
import Error from '../Error';
import AboutPage from '../AboutPage';
import ContactPage from '../ContactPage';
import 'animate.css';

const App = () => {

  LoadScripts("js/bootstrap.min.js");
  LoadScripts("js/smoothscroll.min.js");
  LoadScripts("js/jquery.stellar.min.js");
  LoadScripts("assets/slider-pro/js/jquery.sliderPro.min.js");
  LoadScripts("js/scrollspy.min.js");
  LoadScripts("js/wow.min.js");
  LoadScripts("assets/owl-carousel/owl.carousel.min.js");
  LoadScripts("js/metisMenu.min.js");
  LoadScripts("js/theme.min.js");
  
  return (
    <Router>
      <GuardProvider guards={[]} loading={``} error={Error}>
      <TransitionGroup>
        <CSSTransition classNames="animate__animated animate__fadeInLeft" timeout={100}>
          <Suspense fallback={<div>Loading</div>}>
            <Switch>
              <GuardedRoute path="/" exact component={Home}></GuardedRoute>
              <GuardedRoute path="/about" exact component={AboutPage}></GuardedRoute>
              <GuardedRoute path="/contact" exact component={ContactPage}></GuardedRoute>
              <GuardedRoute path="*" exact component={Error}></GuardedRoute>
            </Switch>
          </Suspense>
        </CSSTransition>
      </TransitionGroup>
      </GuardProvider>
    </Router>
  );
}

export default App;
