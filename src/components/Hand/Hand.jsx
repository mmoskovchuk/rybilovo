var React = require('react');
var css = require('./hand.styl');
var Card = require('../Card/Card');

var Hand = React.createClass({
    render: function () {
        var handleClick = this.props.handleClick;

        var n = 3;
        var item = this.props.items;
        var selected=item.slice(0,n);
        var cardsList = selected.map(function (el, index) {
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