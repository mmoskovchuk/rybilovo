var React = require('react');
var css = require('./app.styl');
var cssArea = require('../Area/area.styl');
var Area = require('../Area/Area');
var Card = require('../Card/Card');
var Hand = require('../Hand/Hand');

var App = React.createClass({
    render: function () {
        return (
            <ul>
                {this.map(function(item){
                    return <Card key={item} />
                })}
            </ul>
        )
    }
});

module.exports = App;
