import React from 'react';
import TextField from 'material-ui/TextField';
import Divider from 'material-ui/Divider';
import Paper from 'material-ui/Paper';
import FlatButton from 'material-ui/FlatButton';

export default
class LoginScreen extends React.PureComponent {
  constructor() {
    super();
    this.state = {
      login: '',
      password: ''
    }
  }
  render() {
    const left = {
      marginLeft: 20
    };
    return(
      <div className='center'>
        <Paper zDepth={1}>
          <TextField
            style={left}
            name='login'
            value={this.state.login}
            onChange={(e) => this.setState({login: e.target.value})}
            hintText='Login'
            underlineShow={false}
          />
          <Divider />
          <TextField
            style={left}
            name='password'
            type='password'
            value={this.state.password}
            onChange={(e) => this.setState({password: e.target.value})}
            hintText='Password'
            underlineShow={false}
          />
          <Divider />
        </Paper>
      </div>
    )
  }
}
