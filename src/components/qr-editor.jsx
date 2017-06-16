var React = require('react');
var createReactClass = require('create-react-class');
require('./qr-editor.css');

var QrEditor = React.createClass({
    getInitialState: function() {
        return {
            text: ''
        };
    },

    handleTextChange: function(event) {
        this.setState({ text: event.target.value });
    },

    handleNoteAdd: function() {
        var newNote = {
            text: this.state.text,
            id: Date.now(),
            img: 'https://avt-19.foto.mail.ru/mail/tersmeledisc/_avatar180?1483576992'
        };

        this.props.onNoteAdd(newNote);
        this.setState({ text: '' });
    },

    render: function() {
        return (
            <form className="qr-editor">
                <div className="qr-editor__container">
                    <h3 className="qr-editor__title">QR form</h3>
                    <div className="qr-editor__input-group">
                        <span className="qr-editor__label">Your QR code:</span>
                        <div className="qr-editor__input-wrapper">
                            <input type="text" 
                                className="qr-editor__input"
                                placeholder="Enter your QR code here"
                                value={this.state.text}
                                onChange={this.handleTextChange}
                            />
                        </div>  
                    </div>
                    <div className="qr-editor__input-group">
                        <span className="qr-editor__label"></span>
                        <div className="qr-editor__submit-wrapper">
                            <button className="qr-editor__submit" onClick={this.handleNoteAdd}>
                                <span className="qr-editor__submit-text">Submit</span>
                            </button>
                        </div>
                        
                    </div>
                </div>    
            </form>
        );
    }
});

module.exports = QrEditor;