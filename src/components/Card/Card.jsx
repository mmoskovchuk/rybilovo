var React = require('react');
var css = require('./card.styl');

var Card = React.createClass({
    render: function () {
        return <div className={[css.root]}>
            <img className={[css.root__img]} src={this.props.img} alt={this.props.name}/>
            <div className={[css.root__block_name]}>{this.props.name}</div>
            <div className={[css.root__block_damage]}>{this.props.damage}</div>
            <div className={[css.root__block_health]}><span>здоровье: </span>{this.props.health}</div>
        </div>
    }
});

module.exports = Card;