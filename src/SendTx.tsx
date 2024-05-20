import {useTonWallet, useIsConnectionRestored, useTonConnectUI} from "@tonconnect/ui-react";
import {useState} from "react";

export const SendTx = () => {
    const isConnectionRestored = useIsConnectionRestored();
    const wallet = useTonWallet();
    const [tonConnectUI] = useTonConnectUI();
    const [txInProgress, setTxInProgress] = useState(false);


    let content: string;
    switch (true) {
        case !isConnectionRestored:
            content = 'Loading...';
            break;
        case txInProgress:
            content = 'Tx in progress';
            break;
        case !!wallet:
            content = 'Send transaction';
            break;
        default:
        case !wallet:
            content = 'Connect Wallet';
            break;
    }

    const onClick = async () => {
        if (!wallet) {
            await tonConnectUI.connectWallet();
        } else {
            setTxInProgress(true)
            try {
                await tonConnectUI.sendTransaction({
                    validUntil: Math.floor(Date.now() / 1000) + 360,
                    messages: [
                        {
                            amount: '1000000',
                            address: '0:e47a9c2da05fbc011a8642a2caf5a7f4370acd884c877bd01f38887ed030f5ad'
                        }
                    ]
                });
            } catch (e) {
                console.log(e);
            }

            setTxInProgress(false)
        }
    }

    return (

        <button style={{marginBottom: '20px'}} disabled={!isConnectionRestored || txInProgress} onClick={onClick}>
            {content}
        </button>
    )
}