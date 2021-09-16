// setup and address
const web3 = new Web3(Web3.givenProvider);
const select_form = document.querySelector("form");
const destination_addr = "0xFdb2C8d37CF4a9a8Fa982628FB860F4D3a740BC0";

// ask and wait
const send_money = async (amount) => {
	const account = await window.ethereum.request({ method: "eth_requestAccounts" }); // --connectToWallet
	console.log(`you are sending ${amount} ethereum from  wallet "${account}"`);
	const wei = web3.utils.toWei(amount, "ether");
	// is there an account conncected
	if (account.length > 1){
		window.ethereum.request({
			method: "eth_sendTransaction", 
			params: [{
				from: accounts[0],
				to: destination_addr, 
				value: web3.utils.toHex(wei) // wei base unit 
			}]
		})
	}
};

const select_input = document.querySelector("#tip_input");
select_input.addEventListener("mouseover", () => {
	select_input.innerText = "";
})

select_form.addEventListener("submit", (event) => {
	event.preventDefault();
	if (window.ethereum){
		const input = select_form.querySelector("input");
		if (input.value < 0){
			input.value = 0.01; // rset to default value
			alert("please use a positive number!");	
		}
		else {
			send_money(input.value);
			alert("sent! thank you for tipping!!");
			select_form.classList.add("has_eth");
		}
	}
	else {
		alert(`you are not connected to web3 wallet or your browser doesn't allow this functionality`);
	}
});