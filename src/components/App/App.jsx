var React = require('react');
var css = require('./app.styl');
var Area = require('../Area/Area');
var Hand = require('../Hand/Hand');

var App = React.createClass({
    /*установка состояния*/
    getInitialState: function () {
        return {
            data: [
                {
                    id: 11,
                    img: 'https://vignette.wikia.nocookie.net/btc/images/3/33/S_luchnik_dzara.jpg',
                    name: 'Лучник Дзара',
                    damage: 1,
                    health: 7
                },
                {
                    id: 14,
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
                    id: 3444,
                    img: 'https://vignette.wikia.nocookie.net/btc/images/8/82/S_luchnik_toa-dana.jpg',
                    name: 'Лучник Тоа-Дана',
                    damage: 2,
                    health: 6
                },
                {
                    id: 65324,
                    img: 'https://vignette.wikia.nocookie.net/btc/images/e/e0/S_ork_voevoda.jpg',
                    name: 'Орк-воевода',
                    damage: 2,
                    health: 7
                }
            ],

            areaCard: []
        }
    },

    handleClick: function (cardId) {
        var cardsList = this.state.data;
        var areaCards = this.state.areaCard;

        for (var i = 0; i < cardsList.length; i++) {
            if (this.state.data[i].id === cardId) {
                    areaCards.push(this.state.data[i]);
            }
        }

        this.setState({
            areaCard: areaCards
        });
    },

    render: function () {
        var data = this.state.data;
        var areaCard = this.state.areaCard;
        //three cards into hand
        var n = 3;
        var selected=data.slice(0,n);
        //shuffled cards
        var shuffled = selected.sort(function() {
            return .5 - Math.random()
        });
        return (
            <div>
                <Area arr={areaCard} handleClick={this.handleClick} />
                <Hand handleClick={this.handleClick} items={shuffled}/>
            </div>
        )
    }
});
module.exports = App;
