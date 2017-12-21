var React = require('react');
var css = require('./hand.styl');
var Card = require('../Card/Card');


var Hand = React.createClass({
    render: function () {

            var cardsList = myCards.map(function (el,index) {
                return <div key={ index }>
                        <div>{el.name}</div>
                        <div>здоровье: {el.health}</div>
                        <img src={ el.img } />
                            <Card />
                        <div>наносит ущерб: {el.damage}</div>
                </div>;
            });
            return <div className={[css.root]}> {cardsList} </div>
    }
});


module.exports = Hand;