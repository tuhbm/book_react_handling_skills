import React, { Component } from 'react';

class StateComponents extends Component {
  constructor(props) {
    super(props);
    this.state = {
      number: 0,
      fixedNumber: 0
    };
  }

  render() {
    const { number } = this.state;
    return (
      <div>
        <h1>{number}</h1>
        <h2>바뀌지 않는 값: {this.state.fixedNumber}</h2>
        <button
          onClick={() => {
            this.setState({
                number: number + 1
              },
              () => {
              console.log('setState 실행')
            });
          }}
        >+1
        </button>
      </div>
    );
  }
}

export default StateComponents;
