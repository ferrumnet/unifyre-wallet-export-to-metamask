const hdkey = require('hdkey');
const bip39 = require('bip39');
const secp256k1 = require("secp256k1");
const {AddressFromPublicKey,  sha256} = require('ferrum-crypto');

const path = `m/44'/714'/0'/0/0`;

function unCompressedPk(prik) {
	return Buffer.from(secp256k1.publicKeyCreate(prik, false));
}

export async function printSk(words) {
        if (words.split(/ +/).length !== 24) {
           return [{}, 'Invalid SEED', '', ''];
        }
	const seed = bip39.mnemonicToSeedSync(words);
        const seedHex = seed.toString('hex');
        const key = hdkey.fromMasterSeed(seed);
	const node = key.derive(path);
        const sk = node.privateKey.toString('hex');
	const pubk = node.publicKey.toString('hex');
	const pubkUn = unCompressedPk(node.privateKey).toString('hex');
	const afp = new AddressFromPublicKey();
	const addr = afp.forNetwork('ETHEREUM', pubk, pubkUn);
        return [addr, sk, pubk, pubkUn]; 
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

