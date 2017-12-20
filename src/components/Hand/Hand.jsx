var React = require('react');
var css = require('./hand.styl');
var Card = require('../Card/Card');

var myCards = [
    {
        img: 'https://vignette.wikia.nocookie.net/btc/images/3/33/S_luchnik_dzara.jpg',
        name: 'Лучник Дзара',
        damage: 1,
        health: 7
    }, {
        img: 'https://vignette.wikia.nocookie.net/btc/images/3/37/S_amazonka.jpg',
        name: 'Амазонка',
        damage: 1,
        health: 5
    }, {
        img: 'https://vignette.wikia.nocookie.net/btc/images/6/6b/S_kulhan.jpg',
        name: 'Кулхан',
        damage: 2,
        health: 5
    }, {
        img: 'https://vignette.wikia.nocookie.net/btc/images/8/82/S_luchnik_toa-dana.jpg',
        name: 'Лучник Тоа-Дана',
        damage: 2,
        health: 6
    }, {
        img: 'https://vignette.wikia.nocookie.net/btc/images/e/e0/S_ork_voevoda.jpg',
        name: 'Орк-воевода',
        damage: 2,
        health: 7
    }
];

var Hand = React.createClass({
    render: function () {

            var cardsList = myCards.map(function (el,index) {
                return <div key={ index }>
                        <div>{el.name}</div>
                        <div>здоровье: {el.health}</div>
                        <img src={ el.img } />
                            <Card/>
                        <div>наносит ущерб: {el.damage}</div>
                </div>;
            });
            return <div className={[css.root]}> {cardsList} </div>
    }
});


module.exports = Hand;