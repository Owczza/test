import React, { Component, Fragment } from 'react';

class App extends Component {

  state = {
    users: {}
  }
  componentDidMount() {
    fetch("https://randomuser.me/api/?results=10",
    ({
      url: 'https://randomuser.me/api/?results=10',
      dataType: 'json',
      method: "GET"
    }))
      .then(response => response.json())
      .then(results => {
        this.setState({
          users: results
        });
      });
  }

  render() {
  return (
    <Fragment>
      <table>
        <tbody>
          {this.state.users.results
          // .map(
          //   <tr>
              
          //   <td></td>
          //   <td></td>
          //   <td></td>
          //   <td></td>
          // </tr>
          // )
            
            
          }
        </tbody>
      </table>
    </Fragment>
  );}
}

export default App;
