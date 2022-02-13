import React from 'react';
import {Button, TextField, Snackbar} from '@mui/material';

interface props {}
interface state {
    open: boolean,
    value: string,
    message: string
}

export class App extends React.Component<props, state> {
  constructor(props: any) {
    super(props)
    this.state = {
      open: false,
      value: '',
      message: ''
    }
  }
  handleChange(e: any) {
    this.setState({value: e.target.value});
  }
  onLogin() {
    this.setState({message: '登録しました！'});
    this.setState({open: true});
  }
  render() {
      return (
        <div>
          <Snackbar open={this.state.open} message={this.state.message} />
          <TextField value={this.state.value} onChange={(e: any) => this.handleChange(e)} type={'text'} />
          <Button variant="contained" onClick={() => this.onLogin()}>送信</Button>
        </div>
      )
  }
}
