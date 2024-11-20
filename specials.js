const currentDate = new Date();
console.log(currentDate);
let currentDay = currentDate.getDay(); // getDay menas " get current date"//
console.log(currentDay); // counts from 0-6. Sunday is 0, saturday is 6// 

if(currentDay==0) //Sunday//
 {
    special_name.innerHTML = " $9 Deluxe Burger & Fries";   // " special_name" = id were lookgin for//
    special_image.src = "sunday.jpg"
    special_description. innerHTML = "50% off our Deluxe Burger and fries. A 16oz Angus patty on a pretzel bun topped with lettuce, tomato, bacon, grilled onions, and an onion ring. A huge side of our famous fries is served on the side.";

}
if(currentDay==1) // Monday//
    {
    special_name.innerHTML = "$12 Chicken Penne Alfredo";   
    special_image.src = "monday.jpg"
    special_description. innerHTML= " Grilled chicken breast over penne noodles with a creamy Alfredo sauce and parmesan cheese on top. Side Caesar Salad included.";
}

if(currentDay==2) //Tuesday//
    {
    special_name.innerHTML = "$10 Any Small Pizza";   
    special_image.src = "tuesday.jpg"
    special_description. innerHTML= "Pick up to 3 of your favourite toppings. Our pizzas have a crispy golden whole wheat crust.";
}

if(currentDay==3) // Wednesday//
    {
    special_name.innerHTML = "35¢ Chicken Wings";   
    special_image.src = "wednesday.jpg"
    special_description. innerHTML= "Our classic chicken wings come in three flavours - salt & pepper, honey garlic and extra hot. Minimum order is 20 wings - available in quantities of 10 after that.";
}
if(currentDay==4) //Thursday//
    {
    special_name.innerHTML = "$9 Fish and Chips";   
    special_image.src = "thursday.jpg"
    special_description. innerHTML= "Authentic English style battered cod with a heaping helping of piping hot chips. Served with salt, vinegar and a curry sauce to flavor it to your taste. This dish is jolly good!";
}
if(currentDay==5) //Friday//
    {
    special_name.innerHTML = "$Half Price Cocktails All Day";   
    special_image.src = "friday.jpg"
    special_description. innerHTML= "50% off our regular price. Our customers rave about our Greek Salad, so we want to give everyone a chance to try it. Get a full sized Greek Salad at a great price.!";
}
if(currentDay==6) //Saturday//
    {
    special_name.innerHTML = "$10 Jumbo Greek Salad";   
    special_image.src = "saturday.jpg"
    special_description. innerHTML= "50% off our regular price. Our customers rave about our Greek Salad, so we want to give everyone a chance to try it. Get a full sized Greek Salad at a great price.";
}
