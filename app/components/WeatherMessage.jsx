var React = require('react');

// var WeatherMessage = React.createClass({
//   render: function () {
//     var {temp, location} = this.props;
//     return (
//       <p>It is {temp} in {location}</p>
//     );
//   }
// });

//presentational component >> sateless functional component
var WeatherMessage = ({temp, location}) => { //instead of 'props' in argument
  //var {temp, location} = props; //can destructure in the argument
  return (
    <h3 className="text-center">It is {temp} in {location}</h3>
  );
}

module.exports = WeatherMessage;
