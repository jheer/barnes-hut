import React from 'react';

class Aside extends React.PureComponent {
  render() {
    return (
      <div className={'aside-container'}>
        <div className={'aside'}>
          {this.props.children}
        </div>
      </div>
    );
  }
}

export default Aside;
