const config = {
    port: process.env.PORT || "3002",
    ethUrl: process.env.ETH_URL || "HTTP://127.0.0.1:7545",
    wallet_passphrase:
        process.env.HD_WALLET_PASSPHRASE ||
        "sugar budget abandon electric flip civil filter use spider stand bounce accident",
    network_id: 5777,
    hs_contract_address: "0xd4e9Fe1d7f023dE899d45ecA4DdD51771Ccc8Df1",
    ipfs_api_address: "127.0.0.1",
    ipfs_api_port: "5001",
    ipfs_url: "http://127.0.0.1:8080",
    clientUrl: "http://127.0.0.1:3002",
    apiServerAddress: "http://127.0.0.1:3002",
    ipfsApiUrl: "/ip4/127.0.0.1/tcp/5001",
};

export default config;

// CONFIG.app = process.env.APP   || 'development';
// CONFIG.port = process.env.PORT  || '3002';

// CONFIG.eth_url = process.env.ETH_URL || 'http://127.0.0.1:9545';
// CONFIG.wallet_passphrase = process.env.HD_WALLET_PASSPHRASE || 'exact cabbage shove public maximum erase remain around crawl major april cross';
// CONFIG.eth_network_id = process.env.ETH_NETWORK_ID || '5777';

// CONFIG.hs_contract_address = "0x2c65Fc2142f73E206e206a4a9D5E4b2743877f71";

// CONFIG.ipfs_api_address = '127.0.0.1';
// CONFIG.ipfs_api_port = '5001';
// CONFIG.ipfs_url = CONFIG.ipfs_api_address + ':8080/ipfs/';

// CONFIG.clientUrl = 'http://127.0.0.1:3003';
