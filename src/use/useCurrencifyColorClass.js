export const useCurrencifyColorClass = (amount) => {
    if(amount > 0) return 'text-positive'
    else if(amount < 0 ) return 'text-negative'
  }