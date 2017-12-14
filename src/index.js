var React = require('react');
var ReactDOM = require('react-dom');
var Area = require('./components/Area/Area');
var Hand = require('./components/Hand/Hand');
var cssBase = require('./base.styl');

ReactDOM.render(
    <Area />,
    document.getElementById('area')
);

ReactDOM.render(
    <Hand />,
    document.getElementById('hand')
);
