var React = require('react');
var ReactDOM = require('react-dom'); //error modal fix
var ReactDOMServer = require('react-dom/server'); //error modal fix

var ErrorModal = React.createClass({
  //'componentDidMount' renders ErrorModal to the DOM when ErrorModal is called from Weather.jsx from 'renderError' method
  getDefaultProps: function () {
    return { //'{' vs. '('?
      title: 'Error'
    };
  },
  propTypes: {
    title: React.PropTypes.string,
    message: React.PropTypes.string.isRequired
  },
  componentDidMount: function () {
    var {title, message} = this.props; //from old return
    var modalMarkup = (
      //from old return; //error modal fix: conflict between react and foundation rendering to DOM, can't search for a city after searching for a city that produces an error
      <div id="error-modal" className="reveal tiny text-center" data-reveal="">
        <h4>{title}</h4>
        <p>{message}</p>
        <p>
          <button className="button hollow" data-close="">
            Okay
          </button>
        </p>
      </div>
    );

    var $modal = $(ReactDOMServer.renderToString(modalMarkup)); //error modal fix
    $(ReactDOM.findDOMNode(this)).html(modal);

    var modal = new Foundation.Reveal($('#error-modal')); //from cDM
    modal.open();
  },
  render: function () {
    return (
      <div>

      </div>
    );


  }
});

module.exports = ErrorModal;
