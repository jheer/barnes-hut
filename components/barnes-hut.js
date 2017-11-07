const React = require('react');
const d3 = require('d3');
const D3Component = require('idyll-d3-component');
const quadtreeVis = require('./quadtree');

class BarnesHut extends D3Component {

  initialize(dom, props) {
    // initialize properties
    const state = this._state = {
      width:      514,
      height:     514,
      size:       0,
      theta:      props.theta || 0,
      charge:     props.charge || -30,
      radius:     props.radius || 4,
      accumulate: 0,
      layout:     true,
      estimate:   false
    };

    // initialize component
    const div = d3.select(dom),
          el = div.append('div').attr('class', 'quad'),
          quad = this._quad = quadtreeVis(el.node(),
                  {
                    width:  state.width,
                    height: state.height,
                    theta:  state.theta,
                    radius: state.radius,
                  }
                );

    this.update(props);
  }

  updated(props, name) {
    return props[name] != null && props[name] !== this._state[name]
      ? (this._state[name] = props[name], 1) : 0;
  }

  update(props) {
    const quad = this._quad;

    if (this.updated(props, 'charge')) {
      quad.charge(props.charge);
    }

    if (this.updated(props, 'layout')) {
      quad.layout(props.layout);
    }

    if (this.updated(props, 'accumulate')) {
      quad.accumulate();
    }

    if (this.updated(props, 'estimate')) {
      quad.estimate(props.estimate);
    }

    if (this.updated(props, 'theta')) {
      quad.theta(props.theta);
    }

    if (this.updated(props, 'size')) {
      quad.size(props.size);
    }
  }
}

module.exports = BarnesHut;
