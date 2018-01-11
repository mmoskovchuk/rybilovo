var React = require('react');
var css = require('./area.styl');
var Card = require('../Card/Card');


var Area = React.createClass({
    render: function () {
        var itemData = this.props.arr;
        return <div className={css.root}>
            {
                itemData.map(function (el, index) {
                    return <Card
                            key={index}
                    />
                })
            }
        </div>
    }
});

module.exports = Area;