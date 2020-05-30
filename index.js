const hdkey = require('hdkey');
const bip39 = require('bip39');
const secp256k1 = require("secp256k1");
const {AddressFromPublicKey,  sha256} = require('ferrum-crypto');

const path = `m/44'/714'/0'/0/0`;

function unCompressedPk(prik) {
	return Buffer.from(secp256k1.publicKeyCreate(prik, false));
}

async function printSk(words) {
	const seed = bip39.mnemonicToSeedSync(words);
        const seedHex = seed.toString('hex');
        const key = hdkey.fromMasterSeed(seed);
	const node = key.derive(path);
        console.log('Your private key:');
	console.log(node.privateKey.toString('hex'));
        console.log('Your public key:');
	const pubk = node.publicKey.toString('hex');
	const pubkUn = unCompressedPk(node.privateKey).toString('hex');
	console.log(pubk);
	console.log(pubkUn);
	const afp = new AddressFromPublicKey();
	const addr = afp.forNetwork('ETHEREUM', pubk, pubkUn);
	console.log('Your address:', addr);
}

const EXAMPLE =  [
	  "express",
	  "prosper",
	  "inspire",
	  "phone",
	  "actual",
	  "void",
	  "joy",
	  "tuna",
	  "inner",
	  "item",
	  "skin",
	  "amazing",
	  "hobby",
	  "man",
	  "truth",
	  "assume",
	  "blade",
	  "will",
	  "better",
	  "simple",
	  "pledge",
	  "innocent",
	  "mistake",
	  "input",
];

if (!process.argv[2] || process.argv[2].split(' ').length !== 24) {
	console.error('Provide a 24 word mnemonic as argument');
	process.exit();
}

if (process.argv[3] !== 'I AM SURE') {
	console.error('Sorry! you must be sure what you are doing. Run with an additional argument that says "I AM SURE"');
	process.exit();
}
printSk(process.argv[2]);
