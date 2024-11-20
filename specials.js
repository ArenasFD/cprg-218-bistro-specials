const currentDate = new Date();
console.log(currentDate);
let currentDay = currentDate.getDay();
console.log(currentDay); // counts from 0-6. Sunday is 0, saturday is 6// 

if(currentDay==0) {
    special_name.innerHTML = " $9 Deluxe Burger & Fries";   // " special_name" = id were lookgin for//
    special_image.src = "sunday.jpg"
    special_description. innerHTML = "50% off our Deluxe Burger and fries. A 16oz Angus patty on a pretzel bun topped with lettuce, tomato, bacon, grilled onions, and an onion ring. A huge side of our famous fries is served on the side.";

}
if(currentDay==1) {
    special_name.innerHTML = "$12 Chicken Penne Alfredo";   
    special_image.src = "monday.jpg"
    special_description. innerHTML= " Grilled chicken breast over penne noodles with a creamy Alfredo sauce and parmesan cheese on top. Side Caesar Salad included";
}

if(currentDay==2) {
    special_name.innerHTML = "$10 Any Small Pizza";   
    special_image.src = "tuesday.jpg"
    special_description. innerHTML= "Pick up to 3 of your favourite toppings. Our pizzas have a crispy golden whole wheat crust.";
}
