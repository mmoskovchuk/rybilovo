var React = require('react');
var css = require('./area.styl');
var Area = React.createClass({

    render: function() {
        return (
            <div className={[css.area__border]}></div>
        );
    }
});

module.exports = Area;