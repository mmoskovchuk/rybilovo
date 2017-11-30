var React = require('react');

var css = require('./app.styl');

var contacts = [
    {
        id: 1,
        name: 'Kill Bill',
        phoneNumber: '6565656556'
    }, {
        id: 2,
        name: 'Ranga Rao',
        phoneNumber: '4444444444'
    }, {
        id: 3,
        name: 'Johnny Cash',
        phoneNumber: '6565656556'
    }, {
        id: 4,
        name: 'Albert Einstein',
        phoneNumber: '4444444444'
    }
];

var App = React.createClass({
    render: function() {
        return (
            <div className={[css.root__btn, css.root__btn_type_submit].join(' ')}>
                <ul>
                    {
                        contacts.map(function(el) {
                            return <li> {el.name} </li>;
                        })
                    }
                </ul>
            </div>
        );
    }
});

module.exports = App;