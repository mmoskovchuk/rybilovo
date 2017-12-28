var React = require('react');
var css = require('./hand.styl');
var Card = require('../Card/Card');

var Hand = React.createClass({
    render: function () {
        var n = 3;
        var item = this.props.items;
        var handleClick = this.props.handleClick;
        console.log(handleClick);
        item.push(handleClick);
        var shuffled = item.sort(function() {
            return .5 - Math.random()
        });
        var selected=shuffled.slice(0,n);
        var cardsList = selected.map(function (el, index) {
            return <Card
                key={index}
                img={el.img}
                name={el.name}
                damage={el.damage}
                health={el.health}
                handleClick={el.handleClick}
            />
        });
        return <div className={css.root}>{cardsList}</div>

    }
});


module.exports = Hand;