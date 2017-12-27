var React = require('react');
var css = require('./card.styl');
var Area = require('../Area/Area');

var Element = React.createClass({
    render: function(){
        return <p>test</p>
    }
});
var Card = React.createClass({
    getInitialState(){
        return {
            itemh: []
        }
    },
    handleClick: function(){
        var text = this.state.text;
        var itemh = this.state.itemh;
        itemh.push(text);
        this.setState({
            itemh: itemh
        })
    },
    render: function () {
        var itemj = this.state.itemh;

        return <div className={[css.root]} onClick={this.handleClick}>
            <img className={[css.root__img]} src={this.props.img} alt={this.props.name}/>
            <div className={[css.root__name]}>{this.props.name}</div>
            <div className={[css.root__damage]}>{this.props.damage}</div>
            <div className={[css.root__health]}><span>здоровье: </span>{this.props.health}</div>

            <div id="list">{
                itemj.map(function (el, index) {
                    return <Element key={index} items={itemj}/>
                })
            }</div>
        </div>
    }
});

module.exports = Card;