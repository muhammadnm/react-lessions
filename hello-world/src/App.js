import React from 'react';

// https://egghead.io/lessons/react-state-basics

// Lesson - 1
// const App = () => <h1>Hello World!</h1>

// Lesson -2 {React Component}
// class App extends React.Component {
//   render() {
//     return <div>
//         <h1>Hello World!</h1>
//         <small>First Component</small>
//       </div>
//   }
// }


Lesson -3 {React Props}
class App extends React.Component {
  render() {
    let build = this.props.build;
    let ver = this.props.version;
    return <h1>Hello World: { build } -v {ver}</h1>
  }
}

App.propTypes = {
  build: React.PropTypes.string,
  version: React.PropTypes.number.isRequired
}

App.defaultProps = {
  build: '010017',
  version: '1.25'
}

export default App
