var React = require('react');
var css = require('./card.styl');

function Card() {
    return (
        <div className={[css.root]}>Card</div>
    );
}

module.exports = Card;