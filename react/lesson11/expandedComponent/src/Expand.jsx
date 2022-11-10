import React from "react";

class Expand extends React.Component {
  state = {
    expanded: false
  }

  toggleExpand = () => {
    this.setState({
      expanded: !this.state.expanded
    })
  }
  render() {
    return (
      <div className="expand border">
        <div className="expand__header">
          <span className="expand__title">{this.props.title}</span>
          <button className="expand__toggle-btn" onClick={this.toggleExpand}>
            {
              this.state.expanded
                ? <i className="fa-solid fa-arrow-up"></i>
                : <i className="fa-solid fa-arrow-down"></i>
            }
          </button>
        </div>
        {
          this.state.expanded &&
          <div className="expand__content">
            {this.props.children}
          </div>
        }
      </div>
    )
  }
}

export default Expand;