const investment = document.getElementById("investment");
const price = document.getElementById("price");
const sold = document.getElementById("sold");
const yourSharePerItem = document.getElementById("my-share");
const vendorSharePerItem = document.getElementById("vendor-share");
const output = document.getElementById("output");

// Function to calculate and display the result
function calculate() {
    if (!investment || !price || !sold) {
        output.innerHTML = "Error: Missing input fields.";
        return;
    }

    // Retrieve values
    const investmentValue = parseFloat(investment.value);
    const priceValue = parseFloat(price.value);
    const soldValue = parseInt(sold.value);

    // Validation
    if (isNaN(investmentValue) || isNaN(priceValue) || isNaN(soldValue)) {
        output.innerHTML = "Error: Please enter valid numbers in all fields.";
        return;
    }

    // Perform calculation
    const profitPerItem = priceValue - investmentValue;
    const totalProfit = profitPerItem * soldValue;
    const totalYourShare = yourSharePerItem.value * soldValue;
    const totalVendorShare = vendorSharePerItem.value * soldValue;

    // Display result
    output.innerHTML = `
        Total Profit: ${totalProfit.toFixed(2)}<br/><br/>
        Your Total Share: ${totalYourShare.toFixed(2)}<br/><br/>
        Vendor's Total Share: ${totalVendorShare.toFixed(2)}
    `;
}
