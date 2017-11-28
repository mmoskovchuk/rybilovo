var React = require('react');
//var styles = require('./style.less');
var css = require('!css-loader!stylus-loader!./app.styl');

var App = React.createClass({
    render: function() {
        return <div className='base' >Hello World</div>;
    }
});

module.exports = App;