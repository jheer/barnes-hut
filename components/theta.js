const React = require('react');

const colors = {
  '0':   'color0',
  '0.5': 'color1',
  '1':   'color2',
  '1.5': 'color3'
};

function label(value) {
  return value ? 'theta=' + value : 'naïve approach';
}

// A custom component that prints a colored theta parameter link
// Hovering over the link updates theta and focus variables
class Theta extends React.PureComponent {

  // On mouseover, push update to set theta value and enable focus
  over() {
    this.props.updateProps({
      theta: this.props.value,
      focus: true
    });
  }

  // On mouseout, push update to disable focus
  out() {
    this.props.updateProps({
      focus: false
    });
  }

  render() {
    return (
      <span> <span
        className={colors[this.props.value]}
        onClick={this.over.bind(this)}
        onMouseOver={this.over.bind(this)}
        onMouseOut={this.out.bind(this)}
      >{label(this.props.value)}</span></span>
    );
  }
}

module.exports = Theta;
