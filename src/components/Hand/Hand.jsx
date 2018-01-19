var React = require('react');
var css = require('./hand.styl');
var Card = require('../Card/Card');

var Hand = React.createClass({
    render: function () {
        var handleClick = this.props.handleClick;
        var item = this.props.items;
        var cardsList = item.map(function (el, index) {
            return <Card
                key={index}
                id={el.id}
                img={el.img}
                name={el.name}
                damage={el.damage}
                health={el.health}

                click={handleClick}
            />
        });
        return <div className={css.root}>{cardsList}</div>

    }
});


module.exports = Hand;