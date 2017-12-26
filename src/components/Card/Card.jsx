var React = require('react');
var css = require('./card.styl');

var Card = React.createClass({
    handleClick() {
            console.log(this.props.name);
    },
    render: function () {
        return <div className={[css.root]} onClick={this.handleClick} >
            <img className={[css.root__img]} src={this.props.img} alt={this.props.name}/>
            <div className={[css.root__name]}>{this.props.name}</div>
            <div className={[css.root__damage]}>{this.props.damage}</div>
            <div className={[css.root__health]}><span>здоровье: </span>{this.props.health}</div>
        </div>

    }
});

module.exports = Card;