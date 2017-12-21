var React = require('react');
var css = require('./hand.styl');
var Card = require('../Card/Card');


var Hand = React.createClass({
    render: function () {
        var cardsList = this.props.items.map(function (el, index) {
            return <Card
                key={index}
                img={el.img}
                name={el.name}
                damage={el.damage}
                health={el.health}
            />
        });
        return <div className={[css.root]}>{cardsList}</div>
    }
});


module.exports = Hand;