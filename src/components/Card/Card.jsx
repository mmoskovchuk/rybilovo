var React = require('react');
var css = require('./card.styl');

var Card = React.createClass({
    onClick: function() {
        this.props.click(this.props.id);
    },

    render: function () {
        return <div className={[css.root]} onClick={this.onClick}>
            <img className={[css.root__img]} src={this.props.img} alt={this.props.name} id={this.props.id}/>
            <div className={[css.root__name]} id={this.props.id}>{this.props.name}</div>
            <div className={[css.root__damage]} id={this.props.id}>{this.props.damage}</div>
            <div className={[css.root__health]} id={this.props.id}><span id={this.props.id}>здоровье: </span>{this.props.health}</div>
        </div>
    }
});

module.exports = Card;