var React = require('react');

var css = require('./area.styl');

var Card = require('../Card/Card');

function Area() {
    return (
        <div className={[css.area__border]}>
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
        </div>
    );
}

module.exports = Area;