const React = require('react');

// A custom component that simply renders a hand-coded SVG "probe" icon.
class Probe extends React.Component {
  render() {
    return (
      <svg width="18" height="12">
        <circle cx="6" cy="6" r="4" fill="white" strokeWidth="1.5" stroke="#800080"></circle>
        <path d="M6,6L16,6" fill="none" strokeLinecap="round" strokeWidth="1.5" stroke="#800080"></path>
      </svg>
    );
  }
}

module.exports = Probe;
