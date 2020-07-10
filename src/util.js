export default function formatCurrency(num) {
    return "$" + Number((num||0).toFixed(1)).toLocaleString() + " ";
  }