var React = require('react');
var css = require('./app.styl');
var Area = require('../Area/Area');
var Hand = require('../Hand/Hand');

var App = React.createClass({
    render: function () {
        return (
            <div>
                <Area />
                <Hand/>
            </div>
        );
    }
});
module.exports = App;
