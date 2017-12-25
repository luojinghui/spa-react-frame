import React from 'react';
import ReactDOM from 'react-dom';
import './resource/css/index.css';
import logo from './resource/img/logo.svg';
import './resource/css/App.css';

import {Provider} from 'react-redux'
import {store} from './tools/store';

import registerServiceWorker from './registerServiceWorker';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  Redirect
} from 'react-router-dom'
import Loadable from 'react-loadable';
import JNEctryLoading from './componentes/Common/JNEntryLoading';

const AsyncHome = Loadable({
  loader: () => import("./componentes/Home"),
  loading: JNEctryLoading
});
const AsyncInfo = Loadable({
  loader: () => import("./componentes/Info"),
  loading: JNEctryLoading
});

// const AsyncHome = asyncComponent(() => import("./componentes/Home"));
// const AsyncInfo = asyncComponent(() => import("./componentes/Info"));

// store.dispatch(push('/home'));

const App = () => (
  <Provider store={store}>
    <Router>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo"/>
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <h1>hello world</h1>
        <h1>random num: {Math.random() * 100}</h1>
        <Link to="/">go to home</Link>
        <div></div>
        <Link to="/info/666">go to info</Link>
        <div></div>

        <Switch>
          <Route path="/" exact component={AsyncHome}/>
          <Route path="/info/:id" component={AsyncInfo}/>
          <Redirect to="/"/>
        </Switch>
      </div>
    </Router>
  </Provider>
);

ReactDOM.render(<App/>, document.getElementById('root'));
registerServiceWorker();
