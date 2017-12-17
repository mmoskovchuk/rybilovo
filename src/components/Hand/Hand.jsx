var React = require('react');
var css = require('./hand.styl');

function Hand() {
    return (
        <div className={[css.hand__border]}></div>
    );
}


module.exports = Hand;