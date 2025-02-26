export const useCurrencify = (amount) => {
    let posNegSymbol = "";
    if(amount > 0) posNegSymbol = "+";
    else if (amount < 0) posNegSymbol = "-";
  
  
    const currecySymbol =  "$",
    amountPositive = Math.abs(amount),
    amountFormatted = amountPositive.toLocaleString("en-US",{
      minimumFractionDigits:2,
      maxinmumFractionDigits:2
    });
    return `${posNegSymbol} ${currecySymbol} ${amountFormatted}`;
  }