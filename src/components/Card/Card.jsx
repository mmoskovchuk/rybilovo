var React = require('react');
var css = require('./card.styl');

var Card = React.createClass({
    render: function () {
        return <div className={[css.root]}>Card</div>
    }
});

module.exports = Card;