import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import '../Multi-switch-btn/Multi-switch-btn.css';

class MultiSwitchBtn extends Component {
    render() {
        let cssClass = "SimBox"
        if (this.props.simProp == this.props.selecteditem) {
            cssClass = "SimBox active";
        }
        return <span onClick={this.props.click} className={cssClass}>{this.props.simProp}</span>        
    }
}

export default MultiSwitchBtn;