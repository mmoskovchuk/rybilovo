var React = require('react');

var css = require('./app.styl');

var App = React.createClass({

    render: function() {
        return (
            <div className={[css.helloBlock]}>Hello world</div>
        );
    }
});

module.exports = App;