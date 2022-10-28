import React, { Component } from 'react';

class ConnectionStatus extends Component {
  state = {
    status: 'Online',
  };

  handleOnline = () => {
    this.setState({
      status: 'Online',
    });
  };

  handleOffline = () => {
    this.setState({
      status: 'Offline',
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
    if (this.state.status === 'Offline') {
      return <div className="status status_offline">{this.state.status}</div>;
    }
    return <div className="status">{this.state.status}</div>;
  }
}

export default ConnectionStatus;
