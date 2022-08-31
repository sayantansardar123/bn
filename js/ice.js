function order(){
    var price;
       var flv = document.querySelector('#flavour').value;
       console.log(flv);
       var wei = document.querySelector('input[name=weight]:checked').value;
       console.log(wei);
       var serv = document.querySelector('input[name=serve]:checked').value;
       console.log(serv);
       var topp = document.querySelector('input[name=toppings]:checked').value;
       console.log(topp);

       if(flv == 'vanila'){
           price = (wei * 0.25);
       }
       else if(flv == 'chocolate'){
           price = (wei * 0.50);
       }else if(flv == 'strawberry'){ 
           price = (wei * 0.75);
       }else{
           price=(wei * 0.90);
       }
       alert("Payable Amount  ₹"+price);
       // alert("Selected Flavour:" + flv,
       //        "Selected Weight:" + wei,
       //        "Serve in:" + flv,
       //        "Your Toppings" + topp,)
   }