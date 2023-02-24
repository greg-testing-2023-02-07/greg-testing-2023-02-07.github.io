import React, { ChangeEvent, MouseEvent } from 'react';
import { tx } from "../../utils/signed_transaction";


export default class AdminPanel extends React.Component<{}, { commandCode: string, commandResult: any }> {

    constructor(props: { commandCode: string, commandResult: any }) {
        super(props);
        this.state = { commandCode: "", commandResult: {} }
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleInputChange(e: ChangeEvent<HTMLInputElement>) {
        this.setState({ commandCode: e.target.value })
    }

    async handleSubmit(_: MouseEvent<HTMLButtonElement>) {
        const resp = await tx(this.state.commandCode);
        this.setState({ commandResult: resp })
    }

    render() {
      return(
          <>
              <p>AdminPanel</p>
              <div>
                  <input type="textarea" onChange={this.handleInputChange}/>
                  <button onClick={this.handleSubmit}>Submit</button>
              </div>
              <div>
                  <pre>{JSON.stringify(this.state.commandResult,null,2)}</pre>
              </div>
          </>
      )
    }
}
