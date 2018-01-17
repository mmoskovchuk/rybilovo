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

            itemData: []
        }
    },
    handleClick: function (e) {
        var idCode = e.target.id;
        var idTrue = this.state.data[idCode].id;
        console.log('idCode: '+idCode);
        console.log('idTrue: '+idTrue);
        var dataNew = this.state.data[idCode];
        console.log(dataNew);
        var itemData = this.state.itemData;
        itemData.push(dataNew);
            this.setState({
                dataNew
            })

    },

    render: function () {
        var data = this.state.data;
        var itemData = this.state.itemData;
        var shuffled = data.sort(function() {
            return .5 - Math.random()
        });
        return (
            <div>
                <Area items={data} arr={itemData} handleClick={this.handleClick} />
                <Hand handleClick={this.handleClick} items={shuffled}/>
            </div>
        )
    }
});
module.exports = App;
