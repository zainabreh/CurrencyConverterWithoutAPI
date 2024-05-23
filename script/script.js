

let inputPrice = document.getElementById("inputPrice");
let From = document.getElementById("fromCurrency");
let To = document.getElementById("toCurrency");
let btn = document.getElementById("btn");
let display = document.getElementById("finalRes");


let input;
let from;
let to;

const handleSubmite = (e) => {
  e.preventDefault();
  input =  inputPrice.value;
  from = From.value;
  to = To.value;
  console.log(input);
  console.log(from);
  console.log(to);
  convert(input,from,to,display,From,To);
  inputPrice.value = "";
  From.value = "";
  To.value = "";
}

const convert = (amount, from, to,display,fromCurrency,toCurrency) => {
  if(!amount){
    alert("Enter valid Data");
  }else{
    const f = countries.find(c => c.currency == from);
    const t = countries.find(c => c.currency == to) ;
    
    if(f && t){
        const convertedAmount = (amount / f.exchangeRate ) * t.exchangeRate ;
        // display.value = `${fromCurrency.options[fromCurrency.selectedIndex].textContent} to ${toCurrency.options[toCurrency.selectedIndex].textContent} = ${convertedAmount.toFixed(2)}`;
        display.value = `${from}  TO  ${to}  = ${convertedAmount.toFixed(2)}`;
        console.log(convertedAmount);
    }else{
      alert("Invalid Currency");
    }
  }
 
  };
  
btn.addEventListener('click',handleSubmite);