var React = require('react');

var css = require('./card.styl');

function Card() {
    return (
        <div className={[css.card__border]}>Card</div>
    );
}

module.exports = Card;