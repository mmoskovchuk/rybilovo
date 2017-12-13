var React = require('react');

var css = require('./hand.styl');

var Hand = React.createClass({

    render: function() {
        return (
            <div className={[css.helloBlock]}>Hand</div>
        );
    }
});

module.exports = Hand;