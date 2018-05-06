Feature: Amazon shopping Details

Scenario Outline: User verifies Laptop searching and Add to cart
Given The user is on Amazon search page
When the user search Laptop "<laptop>"
And the user add to cart  
Then the user verifies the laptop in cart

Examples:
|laptop| 
|HP laptop|
|Dell laptop|
|Apple laptop|
|Lenova laptop|
|Acer Aspire laptop|