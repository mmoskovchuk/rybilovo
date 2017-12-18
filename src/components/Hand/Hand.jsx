var React = require('react');
var css = require('./hand.styl');
var Card = require('../Card/Card');

var Hand = React.createClass({
    render: function () {
        var cards = ["card","card1","card2","card3","card4"];
        var cardsList = cards.map(function(index){
            return <Card key={ index }></Card>
        });
        return <div className={[css.root]}> { cardsList } </div>
    }
});


module.exports = Hand;