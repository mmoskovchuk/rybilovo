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
                    img: 'https://vignette.wikia.nocookie.net/btc/images/3/33/S_luchnik_dzara.jpg',
                    name: 'Лучник Дзара',
                    damage: 1,
                    health: 7
                },
                {
                    img: 'https://vignette.wikia.nocookie.net/btc/images/3/37/S_amazonka.jpg',
                    name: 'Амазонка',
                    damage: 1,
                    health: 5
                },
                {
                    img: 'https://vignette.wikia.nocookie.net/btc/images/6/6b/S_kulhan.jpg',
                    name: 'Кулхан',
                    damage: 2,
                    health: 5
                },
                {
                    img: 'https://vignette.wikia.nocookie.net/btc/images/8/82/S_luchnik_toa-dana.jpg',
                    name: 'Лучник Тоа-Дана',
                    damage: 2,
                    health: 6
                },
                {
                    img: 'https://vignette.wikia.nocookie.net/btc/images/e/e0/S_ork_voevoda.jpg',
                    name: 'Орк-воевода',
                    damage: 2,
                    health: 7
                }
            ]
        }
    },

    render: function () {
        return(
            <div>
                <Area />
                <Hand />
            </div>
        )
    }
});
module.exports = App;
