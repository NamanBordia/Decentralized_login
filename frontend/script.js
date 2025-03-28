const contractAddress = "0x3f735cB2ce61f5159B56A6c237159CB16a4D2922";  // Replace this
const contractABI = [
    {
        "inputs": [],
        "name": "register",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "login",
        "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }],
        "stateMutability": "view",
        "type": "function"
    }
];

let provider;
let signer;
let contract;
let userAddress = "";

async function connectWallet() {
    if (window.ethereum) {
        try {
            provider = new ethers.providers.Web3Provider(window.ethereum);
            await provider.send("eth_requestAccounts", []);
            signer = provider.getSigner();
            userAddress = await signer.getAddress();
            contract = new ethers.Contract(contractAddress, contractABI, signer);

            // Update UI with connected address
            const connectButton = document.getElementById("connectWallet");
            connectButton.textContent = `Connected: ${userAddress.slice(0, 6)}...${userAddress.slice(-4)}`;
            connectButton.disabled = true; // Disable after connection

            console.log("Wallet connected:", userAddress);
        } catch (error) {
            console.error("Wallet connection failed:", error);
            alert("Failed to connect wallet. Check console for details.");
        }
    } else {
        alert("MetaMask is not installed. Please install it to use this feature.");
    }
}

async function register() {
    if (!contract) return alert("Connect wallet first!");
    try {
        const tx = await contract.register();
        console.log("Transaction sent:", tx.hash);
        alert("Transaction sent! Waiting for confirmation...");

        await tx.wait();
        alert("Registered successfully!");

    } catch (error) {
        console.error("Registration failed:", error);
        alert("Registration failed! Check console for details.");
    }
}

async function login() {
    if (!contract) return alert("Connect wallet first!");
    try {
        const isLoggedIn = await contract.login();
        const statusMessage = isLoggedIn ? "Login Successful!" : "User Not Registered!";
        
        // Show status in navbar
        alert(statusMessage);
        console.log(statusMessage);
    } catch (error) {
        console.error("Login failed:", error);
        alert("Login failed! Check console for details.");
    }
}

// Event listeners
document.getElementById("connectWallet").addEventListener("click", connectWallet);
document.getElementById("signup").addEventListener("click", register);
document.getElementById("login").addEventListener("click", login);
