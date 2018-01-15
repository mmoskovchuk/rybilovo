var React = require('react');
var css = require('./area.styl');
var Card = require('../Card/Card');


var Area = React.createClass({
    render: function () {
        var itemData = this.props.arr;
        //console.log(this.props.arr);
        //console.log(this.props.items);
        return <div className={css.root}>
            {
                itemData.map(function (el, index) {
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

module.exports = Area;