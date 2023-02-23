// A throwaway Component for calling tx().

import { tx } from './signed_transaction'
import React from 'react';

export default class Tx extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            transactionCode: ''
        };
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleInputChange(event) {
        const target = event.target;
        const value = target.value;
        this.setState({
            transactionCode: value
        });
    }

    async handleSubmit(event) {
        const ret = await tx(this.state.transactionCode);
        return ret;
    }

    render() {
        return(

        <div>
            <input type="textarea" onChange={this.handleInputChange}/>
            <button onClick={this.handleSubmit}>Tx submit</button>
            </div>
        )
    }

}
