# ETH Lottery Smart Contract

A decentralized lottery application built with Ethereum smart contracts and React. This project demonstrates the implementation of a simple lottery system on the Ethereum blockchain.

<img width="1435" alt="image" src="https://github.com/user-attachments/assets/6d453f11-7ce0-4346-ae10-216b0ebdec8e" />

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

## License

MIT

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.
