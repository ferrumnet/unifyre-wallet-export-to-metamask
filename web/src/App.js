import './App.css';
import React, {useState} from 'react';
import {printSk} from './PrintSk';

function App() {
  const [seed, setSeed] = useState('');
  const [secrets, setSecrets] = useState({});
  return (
    <div className="App">
      <header className="App-header">
        <h1>Export unifyre private key to metamask</h1>
        <p>
          USE THIS SERVICE AT YOUR OWN RISK. Make sure the url on this page is <b>https://export-to-metamask.unifyre.io</b>.
        </p>
        <p>
          Only export your private keys as the last resort. <br/> <b>NEVER ENTER YOUR SEED PHRASE ON A WEBSITE! IT'S THE #1 METHOD SCAMMERS STEAL PEOPLES ASSETS</b>
        </p>
        <p>
          Scammers regularly impersonate projects support staff and convince people to enter their seed phrase on a web page. This may allow them to steal the phrase and take all your funds from your account.
        </p>
      </header>
        <h2>
          So if this is risky, what is the solution? If you ABSOLUTELY have to export your keys to metamask, and you know what you are doing, and you are dead sure you want to enter your phrase in this page, follow these steps to reduce your risk:
        </h2>

        <ul>
           <li>Only open this page in your browsers <b>Private</b> or <b>Incognito</b> mode. </li>
           <li>Disconnect all internet access from your device. NO WIFI, NO MOBILE SIGNAL. Turn your device to airplane mode</li>
           <li>Enter your mnemonic into the tool, save your private key in a safe place.</li>
           <li>CLOSE YOUR BROWSER COMPLETELY</li>
           <li>Turn back the internet access</li>
        </ul>
      <header className="App-header">
        <p>Enter the seed phrease here </p>
	<textarea type="textarea" value={seed} className="seedInput" rows={4} onChange={e => setSeed(e.target.value)} multiline={true}/>
        <br/>
        <input type="button" value="Generate Private Key" onClick={async () => {
		const [addr, sk, pubK, pubUn] = await printSk(seed);
                setSecrets(({addr, sk, pubK, pubUn}));
          }} />
          <br />
          <h4>PRIVATE KEY: {secrets.sk || ''}</h4>
          <h4>ADDRESS: {(secrets.addr || {}).addressWithChecksum}</h4>
          <h4>PUBLIC KEY: {secrets.pubK || ''}</h4>
          <small>UNCOMPRESSED PUBLIC KEY: {secrets.pubUn || ''}</small>
      </header>
      <br/>
      <br/>
      <br/>
    </div>
  );
}

export default App;
