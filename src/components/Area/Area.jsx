var React = require('react');

var css = require('./area.styl');

var Area = React.createClass({

    render: function() {
        return (
            <div className={[css.helloBlock]}>Area</div>
        );
    }
});

module.exports = Area;