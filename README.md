# ETH Lottery Smart Contract

A decentralized lottery application built with Ethereum smart contracts and React. This project demonstrates the implementation of a simple lottery system on the Ethereum blockchain.

## Features

- 🎲 Enter the lottery by sending ETH
- 👥 View current players and prize pool
- 🏆 Pick a winner (manager only)
- 💰 Automatic prize distribution
- 🔒 Secure smart contract implementation
- 🎨 Modern and responsive UI

## Tech Stack

- Solidity (Smart Contracts)
- Web3.js
- React + Vite
- Ethereum (Sepolia Testnet)

## Prerequisites

- Node.js (v14 or higher)
- MetaMask or other Web3 wallet
- Some test ETH on Sepolia network

## Installation

1. Clone the repository:

```bash
git clone https://github.com/yourusername/eth-lottery.git
cd eth-lottery
```

2. Install dependencies:

```bash
npm install
```

3. Start the development server:

```bash
npm run dev
```

## Smart Contract

The lottery contract includes the following main functions:

- `enter()`: Enter the lottery by sending ETH
- `pickWinner()`: Select a random winner (manager only)
- `getPlayers()`: Get list of all players
- `manager()`: Get the contract manager address

## Usage

1. Connect your MetaMask wallet to the Sepolia testnet
2. Ensure you have some test ETH
3. Enter the lottery by specifying the amount of ETH you want to send
4. Wait for other players to join
5. The manager can pick a winner at any time

## Development

### Smart Contract

```bash
# Compile contracts
npx hardhat compile

# Deploy to testnet
npx hardhat run scripts/deploy.js --network sepolia
```

### Frontend

```bash
# Start development server
npm run dev

# Build for production
npm run build
```

## Deployment

The frontend is deployed on GitHub Pages. To deploy:

1. Update the `vite.config.js` base URL
2. Build the project: `npm run build`
3. Deploy to GitHub Pages: `npm run deploy`

## License

MIT

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.
