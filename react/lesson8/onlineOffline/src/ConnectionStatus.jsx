import React, { Component } from 'react';

class ConnectionStatus extends Component {
  state = {
    status: 'online',
  };

  handleOnline = () => {
    this.setState({
      status: 'online',
    });
  };

  handleOffline = () => {
    this.setState({
      status: 'offline',
    });
  };

  componentDidMount() {
    window.addEventListener('offline', this.handleOffline);
    window.addEventListener('online', this.handleOnline);
  }

  componentWillUnmount() {
    window.removeEventListener('offline', this.handleOffline);
    window.removeEventListener('online', this.handleOnline);
  }

  render() {
    if (this.state.status === 'offline') {
      return <div className="status status_offline">{this.state.status}</div>;
    }
    return <div className="status">{this.state.status}</div>;
  }
}

export default ConnectionStatus;
