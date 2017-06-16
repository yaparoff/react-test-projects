var React = require('react');
var createReactClass = require('create-react-class');
require('./qr.css');

function Qr(props) {
    return (
        <div className="qr">
            <img className="qr__img" src={ props.qr.img } />
            <p>{ props.qr.text }</p>
        </div>
    );
};

module.exports = Qr;