var React = require('react');

var css = require('./app.styl');

var contacts = [
    {
        id: 1,
        name: 'Kill Bill',
        phoneNumber: '6565656556',
        image: 'https://media.giphy.com/media/3o6nV6fZlIaVjb6YMg/giphy.gif'
    }, {
        id: 2,
        name: 'Ranga Rao',
        phoneNumber: '8957685443',
        image: 'https://media.giphy.com/media/d2YWTOsVtuHgOHhC/giphy.gif'
    }, {
        id: 3,
        name: 'Johnny Cash',
        phoneNumber: '6565656556',
        image: 'https://media.giphy.com/media/xUNd9XlvXJdh9oAsve/giphy.gif'
    }, {
        id: 4,
        name: 'Albert Einstein',
        phoneNumber: '23434545644',
        image: 'https://media.giphy.com/media/3ov9k8OQOBNlfdWnEk/giphy.gif'
    }
];

var Contact = React.createClass({
    render: function () {
        return (
            <li className={[css.contact]}>
                <img className={[css.contactImg]} src={this.props.image} width="52px" height="50px" />
                <div className={[css.contactDes]}>
                    <div className={[css.contactName]} >{this.props.name}</div>
                    <div className={[css.contactNumber]} >{this.props.phoneNumber}</div>
                </div>
            </li>
        );
    }
});

var App = React.createClass({
    handleSearch: function(){

    },

    render: function() {
        return (
            <div className={[css.contactBlock]}>
                <input type="text" className={[css.contactSearch]} onChange={this.handleSearch}/>
                <ul className={[css.contactList]}>
                    {
                        contacts.map(function(el) {
                            return <Contact key={el.id}
                                            name={el.name}
                                            phoneNumber={el.phoneNumber}
                                            image={el.image}
                            />;
                        })
                    }
                </ul>
            </div>
        );
    }
});

module.exports = App;