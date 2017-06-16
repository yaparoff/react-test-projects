var React = require('react');
var QrEditor = require('./qr-editor.jsx');
var QrGrid = require('./qr-grid.jsx');
var createReactClass = require('create-react-class');
require('./app.css');

var App = React.createClass({
    /* начальное состояние */
    getInitialState: function() {
        return {
            notes: []
        }
    },

    componentDidMount: function() {
        //считываем поле notes из localStorage
        var localNotes = JSON.parse(localStorage.getItem('notes'));
        // если что-то записано обновляем состояние компонента
        if (localNotes) {
            this.setState({ notes: localNotes });
        }
    },

    handleNoteAdd: function(newNote) {
        //создаем копию
        var newNotes = this.state.notes.slice();
        newNotes.unshift(newNote);
        // принимаем обновленное состояние
        this.setState({ notes: newNotes }, this._updateLocalStorage);
    },

    render: function() {
        return (
            <div className="app">
                <QrEditor onNoteAdd={this.handleNoteAdd} />
                <QrGrid notes={this.state.notes} />
            </div>
        );
    },

    _updateLocalStorage: function() {
        // записываем в localStorage
        var notes = JSON.stringify(this.state.notes);
        localStorage.setItem('notes', notes);
    }
});

module.exports = App;