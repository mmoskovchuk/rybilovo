var React = require('react');
var ReactDOM = require('react-dom');
var Area = require('./components/Area/Area');
var Card = require('./components/Card/Card');
var Hand = require('./components/Hand/Hand');
var cssBase = require('./base.styl');

ReactDOM.render(<Area />, document.getElementById('root'));
ReactDOM.render(<Card />, document.getElementById('card'));
ReactDOM.render(<Hand />, document.getElementById('hand'));
