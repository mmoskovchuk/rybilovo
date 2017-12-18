var React = require('react');
var css = require('./app.styl');
var cssArea = require('../Area/area.styl');
var Area = require('../Area/Area');
var Card = require('../Card/Card');
var Hand = require('../Hand/Hand');

var App = React.createClass({
    render: function () {
        var cards = ["card","card1","card2","card3"];
        var cardsList = cards.map(function(index){
            return <Card key={ index } />
        });
        return <div className={[cssArea.root]}> { cardsList } </div>
    }
});

module.exports = App;
