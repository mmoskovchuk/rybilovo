var React = require('react');

var css = require('./hand.styl');

var Card = require('../Card/Card');

function Hand() {
    return (
        <div className={[css.hand__border]}>
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
        </div>
    );
}


module.exports = Hand;