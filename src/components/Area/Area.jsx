var React = require('react');
var css = require('./area.styl');
var Card = require('../Card/Card');


var Area = React.createClass({
    render: function () {
        // var cards = ["card","card1","card2","card3"];
        // var cardsList = cards.map(function(card,index){
        //     return <Card key={ index } />
        // });
        return <div className={[css.root]}></div>
    }
});

module.exports = Area;