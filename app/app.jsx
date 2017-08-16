var React = require('react');
var ReactDOM = require('react-dom');
var {Route, Router, IndexRoute, hashHistory} = require('react-router'); //destructuring syntax, similar to var Route = require('react-router').Route ...
var Main = require('Main');
var Weather = require('Weather');
var About = require('About');
var Examples = require('Examples');


ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={Main}>
      <Route path="about" component={About}/>
      <Route path="examples" component={Examples}/>
      <IndexRoute component={Weather}/>
    </Route>
  </Router>,
  document.getElementById('app')
);

//'Router' needs to know what kind of tracking to use - hashHistory; .../#/path
//If 'about' or 'examples' don't match, 'IndexRoute' render's Weather component
//RoT: when using IndexRoute, you want to use 'IndexLink' instead of 'Link'; so that 'Weather' in this case doesn't always get matched since path starts with '/'
