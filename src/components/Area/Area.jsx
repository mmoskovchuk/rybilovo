var React = require('react');
var css = require('./area.styl');
var Card = require('../Card/Card');


var Area = React.createClass({
    render: function () {
        return <div className={css.root} onClick={this.props.printMsg.bind(null, 'suka')}></div>
    }
});

module.exports = Area;