var React = require('react');
var css = require('./app.styl');
var Area = require('../Area/Area');
var Hand = require('../Hand/Hand');
var Enemy = require('../Enemy/Enemy');

var App = React.createClass({
    /*установка состояния*/
    getInitialState: function () {
        return {
            data: [
                {
                    id: 0,
                    img: 'https://vignette.wikia.nocookie.net/btc/images/3/33/S_luchnik_dzara.jpg',
                    name: 'Лучник Дзара',
                    damage: 1,
                    health: 7
                },
                {
                    id: 1,
                    img: 'https://vignette.wikia.nocookie.net/btc/images/3/37/S_amazonka.jpg',
                    name: 'Амазонка',
                    damage: 1,
                    health: 5
                },
                {
                    id: 2,
                    img: 'https://vignette.wikia.nocookie.net/btc/images/6/6b/S_kulhan.jpg',
                    name: 'Кулхан',
                    damage: 2,
                    health: 5
                },
                {
                    id: 3,
                    img: 'https://vignette.wikia.nocookie.net/btc/images/8/82/S_luchnik_toa-dana.jpg',
                    name: 'Лучник Тоа-Дана',
                    damage: 2,
                    health: 6
                },
                {
                    id: 4,
                    img: 'https://vignette.wikia.nocookie.net/btc/images/e/e0/S_ork_voevoda.jpg',
                    name: 'Орк-воевода',
                    damage: 2,
                    health: 7
                }
            ],

            areaCard: [],
            enemyCard: []
        }
    },

    handleClick: function (cardId) {
        var cardsList = this.state.data;
        var areaCards = this.state.areaCard;
        var enemyCards = this.state.enemyCard;

        for (var i = 0; i < cardsList.length; i++) {
            if (this.state.data[i].id === cardId) {
                if (areaCards.length < 4) {
                    areaCards.push(this.state.data[i]);
                }
            }
            var sortId = Math.round(cardId+1);
            if (this.state.data[i].id === sortId) {
                if (enemyCards.length < 3) {
                    enemyCards.push(this.state.data[i]);
                }
            }
        }

        this.setState({
            areaCard: areaCards,
            enemyCard: enemyCards
        });

    },

    render: function () {
        var data = this.state.data;
        var areaCard = this.state.areaCard;
        var enemyCard = this.state.enemyCard;
        //shuffled cards
        var shuffled = data.sort(function() {
            return .5 - Math.random()
        });
        //three cards into hand
        var n = 3;
        var selected=shuffled.slice(0,n);
        return (
            <div>
                <Area arr={areaCard} handleClick={this.handleClick} />
                <Enemy arr={enemyCard} handleClick={this.handleClick} />
                <Hand handleClick={this.handleClick} items={selected}/>
            </div>
        )
    }
});
module.exports = App;
