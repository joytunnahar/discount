document.getElementById('btn-apply').addEventListener('click',function(){
    const previousPriceElement = document.getElementById('price-field');
    const previousPriceString = previousPriceElement.value;
    const previousPrice = parseFloat(previousPriceString);

    previousPriceElement.value ='';

    const discountPrice = previousPrice - (previousPrice*(30/100));
    const payAbleAmount = Math.round(discountPrice);

   const payAmountElement = document.getElementById('pay-amount');
//    const payAmountString = payAmountElement.innerText;
//    const PayAmount = parseFloat(payAmountString);

//    const newPayAmount = PayAmount + discountPrice;
   payAmountElement.innerText = payAbleAmount;

   



    
})