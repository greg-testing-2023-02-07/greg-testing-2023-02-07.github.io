import React, { ChangeEvent, MouseEvent } from 'react';
import { tx } from "../../utils/signed_transaction";
import styles from '@/styles/Home.module.css'


export default class AdminPanel extends React.Component<{}, { commandCode: string, commandResult: any }> {

    constructor(props: { commandCode: string, commandResult: any }) {
        super(props);
        this.state = { commandCode: "", commandResult: {} }
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleInputChange(e: ChangeEvent<HTMLTextAreaElement>) {
        this.setState({ commandCode: e.target.value })
    }

    async handleSubmit(_: MouseEvent<HTMLButtonElement>, sign: boolean) {
        const resp = await tx(this.state.commandCode, sign);
        this.setState({ commandResult: resp })
    }

    render() {
      return(
          <>
              <main className={styles.main}>
                  <div className="grid grid-rows-1 grid-cols-2">
                    <div className="flex flex-col">
                        <textarea
                            rows={16}
                            cols={40}
                            className="p-1 m-1"
                            onChange={this.handleInputChange}/>
                        <div className="flex flex-row">
                            <button
                                className="rouded-full bg-white shadow-lg p-1 max-w-sm mx-auto"
                                onClick={async (e) => {this.handleSubmit(e,false)}}>Send</button>
                            <button
                                className="rouded-full bg-white shadow-lg p-1 max-w-sm mx-auto"
                                onClick={async (e) => {this.handleSubmit(e,true)}}>Sign & Send</button>
                        </div>
                    </div>
                    <div className="p-1 m-1 bg-white">
                        <pre>{JSON.stringify(this.state.commandResult,null,2)}</pre>
                    </div>
                  </div>
              </main>
          </>
      )
    }
}
