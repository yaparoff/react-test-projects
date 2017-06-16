var React = require('react');
var Qr = require('./qr.jsx');
var createReactClass = require('create-react-class')
require('./qr-grid.css');

function QrGrid(props) {
    return (
        <div className="qr-grid">
            {
                props.notes.map(function(note, index) {
                    return <Qr key={index} qr={note}/>;
                })
            }
        </div>
    );
};

module.exports = QrGrid;