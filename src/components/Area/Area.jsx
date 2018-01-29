var React = require('react');
var css = require('./area.styl');
var Card = require('../Card/Card');


var Enemy = React.createClass({
    render: function () {
        var areaCard = this.props.arr;
        return <div className={css.root}>
            {
                areaCard.map(function (el, index) {
                    return <Card
                            key={index}
                            id={el.id}
                            img={el.img}
                            name={el.name}
                            damage={el.damage}
                            health={el.health}
                    />
                })
            }
        </div>
    }
});

module.exports = Enemy;