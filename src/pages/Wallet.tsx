import {useState} from 'react';
import {TonConnectButton} from "@tonconnect/ui-react";

import {SendTx} from "../SendTx.tsx";
import {BackendDemoApi} from "../BackendDemoApi.tsx";
import {BackendTokenContext} from "../BackendTokenContext";



const Wallet = () => {
    const [token, setToken] = useState<string | null>(null);


    return (
        <BackendTokenContext.Provider value={{token, setToken}}>
            <div>
                <div className="pages-content">
                    <h2 className="pages-title">Wallet</h2>
                    <div className="pouch">
                        <div className="balance">0 ton</div>
                        <div>
                            <TonConnectButton/>
                        </div>
                    </div>
                    {/*<div style={{height: '140px'}}>*/}
                    {/*    <AddressInfo/>*/}
                    {/*    <WalletInfo/>*/}
                    {/*</div>*/}
                    <SendTx/>
                    {/*<Settings />*/}
                    <BackendDemoApi/>
                </div>
            </div>
        </BackendTokenContext.Provider>

    );
};

export default Wallet;