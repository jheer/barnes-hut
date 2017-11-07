const D3Component = require('idyll-d3-component');
const d3 = require('d3');
const vega = require('vega');
const data = require('./data-performance');

function init(dom, props, spec) {
  const el = d3.select(dom)
    .append('div')
    .style('margin-left', '-35px')
    .style('padding', '1em 0');

  const view = new vega.View(vega.parse(spec))
    .renderer('svg')
    .initialize(el.node())
    .insert('perf', data)
    .run();

  view.addSignalListener('focus', (name, value) => {
    const obj = {focus: value !== -1};
    if (obj.focus) obj.theta = value;
    setTimeout(props.updateProps(obj), 0);
  });

  return view;
};

class VegaPlot extends D3Component {

  initialize(dom, props) {
    this._view = init(dom, props, this.state.spec);
  }

  update(props) {
    const value = props.focus ? props.theta : -1;
    this._view.signal('focus', value).run();
  }
}

module.exports = VegaPlot;
