import React from 'react'
import { CommonContext } from './components/CommonContext'
import Main from './components/Main';
import UpdateButton from './components/UpdateButton';
import Header from './components/Header';
import Footer from './components/Footer';

class App extends React.Component {
  constructor() {
    super()

    this.updateColor = (colour) => {
      this.setState({
        color: colour
      })
    }
    this.state = {
      color: "green",
      updateColor: this.updateColor
    }
  }

  render() {
    return (
      <CommonContext.Provider value={this.state}>
        <Header />
        <CommonContext.Consumer>
          {
            ({ color }) => (
              <h1 style={{ backgroundColor: color }}>Complete an easy example for Context API</h1>
            )
          }
        </CommonContext.Consumer>
        <Main />
        <UpdateButton />
        <Footer />
      </CommonContext.Provider>
    );
  }
}


export default App;
