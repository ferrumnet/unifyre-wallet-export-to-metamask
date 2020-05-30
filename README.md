# Utility to export your Unifyre account to other wallets

If you decided to export the unifyre account into other wallets, use this utility to generate your private key.


## Requirements

You need to have the following software on your system

- A unix compatible terminal
- Node v 8.0 or higher
- npm
- git

## First, install this utility

Open a linux/mac terminal and run the following command.

```
$ git clone https://github.com/ferrumnet/unifyre-wallet-export-to-metamask.git
$ cd unifyre-wallet-export-to-metamask
$ npm i
```

## Second run the utility

```
$ node index.js "your 24 word mnemonic" "I AM SURE"
```

 Note: You must include the sentence "I AM SURE" as an extra argument, to acknowledge you understand the consequences


## Import to other wallets such as Metamask

Copy the private key from above and import to your target wallet according to their "private key" import guideline

## Security consideration

YOUR UNIFYRE WALLET WILL BE NO LONGER SECURE! Do not use that wallet any more.
