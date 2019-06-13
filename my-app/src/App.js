import React, { Component, Fragment } from 'react';

class App extends Component {

  state = {
    users: {
      results:[ ]
    }
  }
  componentDidMount() {
    fetch("https://randomuser.me/api/?results=10")
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
          {console.log(this.state.users.results)}
          {this.state.users.results.map(user =>
            
            <tr key={user.login.uuid}>
              
              <td><img src={user.picture.thumbnail} alt="thumbnail"/></td>
              <td>{user.name.first}</td>
              <td>{user.name.last}</td>
              <td>{user.email}</td>
            </tr>
          )}
        </tbody>
      </table>
    </Fragment>
  );}
}

export default App;
