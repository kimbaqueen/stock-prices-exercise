/*Instructions
This challenge, you’ll write a function, called best, 
that returns the maximum profit possible for buying-and-selling a stock.

The best function will be given an array of stock prices in the order 
they happened throughout the day.

It should return the maximum possible profit on the stock for that day.

For example, with the following prices, our best option would have been to 
buy the stock at $10 and sell it at $22. So the profit would be $12: */

const stockPrices = [15, 10, 20, 22, 1, 9];

const best = (stockPrices) => {
    let largestProfit = 0;

    for (let i = 0; i < stockPrices.length - 1; i++) {
        for (let j = i + 1; j < stockPrices.length; j++) {
            const earlyPrice = stockPrices[i];
            const laterPrice = stockPrices[j];
            const currentProfit = laterPrice - earlyPrice;
            // or can do 'const currentProfit = stockPrices[j]- stockPrices[i];'
            if (currentProfit > largestProfit) {
                largestProfit = currentProfit;
            }
        }
    }
    console.log('The largest profit is: ', largestProfit);
}

best([15, 10, 20, 22, 1, 9]);
best([5, 4, 3, 2, 1]);