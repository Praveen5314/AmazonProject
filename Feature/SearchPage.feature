Feature: Amazon shopping details

Scenario Outline: User verifies laptop searching and add to cart
Given The user is on amazon search page
When The user search Laptop "<laptop>"
And The user add to cart  
Then The user verifies the laptop in cart

Examples:
|laptop| 
|HP laptop|
|Dell laptop|
|Asus laptop|
|Lenova laptop|
|Acer Aspire laptop|