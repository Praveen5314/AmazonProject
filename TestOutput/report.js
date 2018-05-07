$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("SearchPage.feature");
formatter.feature({
  "line": 1,
  "name": "Amazon shopping Details",
  "description": "",
  "id": "amazon-shopping-details",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 3,
  "name": "User verifies Laptop searching and Add to cart",
  "description": "",
  "id": "amazon-shopping-details;user-verifies-laptop-searching-and-add-to-cart",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "The user is on Amazon search page",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "the user search Laptop \"\u003claptop\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "the user add to cart",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "the user verifies the laptop in cart",
  "keyword": "Then "
});
formatter.examples({
  "line": 9,
  "name": "",
  "description": "",
  "id": "amazon-shopping-details;user-verifies-laptop-searching-and-add-to-cart;",
  "rows": [
    {
      "cells": [
        "laptop"
      ],
      "line": 10,
      "id": "amazon-shopping-details;user-verifies-laptop-searching-and-add-to-cart;;1"
    },
    {
      "cells": [
        "HP laptop"
      ],
      "line": 11,
      "id": "amazon-shopping-details;user-verifies-laptop-searching-and-add-to-cart;;2"
    },
    {
      "cells": [
        "Dell laptop"
      ],
      "line": 12,
      "id": "amazon-shopping-details;user-verifies-laptop-searching-and-add-to-cart;;3"
    },
    {
      "cells": [
        "Asus laptop"
      ],
      "line": 13,
      "id": "amazon-shopping-details;user-verifies-laptop-searching-and-add-to-cart;;4"
    },
    {
      "cells": [
        "Lenova laptop"
      ],
      "line": 14,
      "id": "amazon-shopping-details;user-verifies-laptop-searching-and-add-to-cart;;5"
    },
    {
      "cells": [
        "Acer Aspire laptop"
      ],
      "line": 15,
      "id": "amazon-shopping-details;user-verifies-laptop-searching-and-add-to-cart;;6"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 11,
  "name": "User verifies Laptop searching and Add to cart",
  "description": "",
  "id": "amazon-shopping-details;user-verifies-laptop-searching-and-add-to-cart;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "The user is on Amazon search page",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "the user search Laptop \"HP laptop\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "the user add to cart",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "the user verifies the laptop in cart",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.the_user_is_on_Amazon_search_page()"
});
formatter.result({
  "duration": 12969131274,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "HP laptop",
      "offset": 24
    }
  ],
  "location": "StepDefinition.the_user_search_Laptop(String)"
});
formatter.result({
  "duration": 6802007251,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.the_user_add_to_cart()"
});
formatter.result({
  "duration": 11968757896,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.the_user_verifies_the_laptop_in_cart()"
});
formatter.result({
  "duration": 4917453,
  "status": "passed"
});
formatter.scenario({
  "line": 12,
  "name": "User verifies Laptop searching and Add to cart",
  "description": "",
  "id": "amazon-shopping-details;user-verifies-laptop-searching-and-add-to-cart;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "The user is on Amazon search page",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "the user search Laptop \"Dell laptop\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "the user add to cart",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "the user verifies the laptop in cart",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.the_user_is_on_Amazon_search_page()"
});
formatter.result({
  "duration": 6890214991,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Dell laptop",
      "offset": 24
    }
  ],
  "location": "StepDefinition.the_user_search_Laptop(String)"
});
formatter.result({
  "duration": 6054881265,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.the_user_add_to_cart()"
});
formatter.result({
  "duration": 7918313189,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.the_user_verifies_the_laptop_in_cart()"
});
formatter.result({
  "duration": 483340,
  "error_message": "java.lang.NullPointerException\r\n\tat OnlineShopping.Amazon.StepDefinition.the_user_verifies_the_laptop_in_cart(StepDefinition.java:90)\r\n\tat ✽.Then the user verifies the laptop in cart(SearchPage.feature:7)\r\n",
  "status": "failed"
});
formatter.scenario({
  "line": 13,
  "name": "User verifies Laptop searching and Add to cart",
  "description": "",
  "id": "amazon-shopping-details;user-verifies-laptop-searching-and-add-to-cart;;4",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "The user is on Amazon search page",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "the user search Laptop \"Asus laptop\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "the user add to cart",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "the user verifies the laptop in cart",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.the_user_is_on_Amazon_search_page()"
});
formatter.result({
  "duration": 7083725731,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Asus laptop",
      "offset": 24
    }
  ],
  "location": "StepDefinition.the_user_search_Laptop(String)"
});
formatter.result({
  "duration": 7395427384,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.the_user_add_to_cart()"
});
formatter.result({
  "duration": 8052669339,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.the_user_verifies_the_laptop_in_cart()"
});
formatter.result({
  "duration": 9672653,
  "error_message": "java.lang.NullPointerException\r\n\tat OnlineShopping.Amazon.StepDefinition.the_user_verifies_the_laptop_in_cart(StepDefinition.java:102)\r\n\tat ✽.Then the user verifies the laptop in cart(SearchPage.feature:7)\r\n",
  "status": "failed"
});
formatter.scenario({
  "line": 14,
  "name": "User verifies Laptop searching and Add to cart",
  "description": "",
  "id": "amazon-shopping-details;user-verifies-laptop-searching-and-add-to-cart;;5",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "The user is on Amazon search page",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "the user search Laptop \"Lenova laptop\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "the user add to cart",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "the user verifies the laptop in cart",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.the_user_is_on_Amazon_search_page()"
});
formatter.result({
  "duration": 7507255712,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Lenova laptop",
      "offset": 24
    }
  ],
  "location": "StepDefinition.the_user_search_Laptop(String)"
});
formatter.result({
  "duration": 7886534965,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.the_user_add_to_cart()"
});
formatter.result({
  "duration": 8517268023,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.the_user_verifies_the_laptop_in_cart()"
});
formatter.result({
  "duration": 304469,
  "error_message": "java.lang.NullPointerException\r\n\tat OnlineShopping.Amazon.StepDefinition.the_user_verifies_the_laptop_in_cart(StepDefinition.java:98)\r\n\tat ✽.Then the user verifies the laptop in cart(SearchPage.feature:7)\r\n",
  "status": "failed"
});
formatter.scenario({
  "line": 15,
  "name": "User verifies Laptop searching and Add to cart",
  "description": "",
  "id": "amazon-shopping-details;user-verifies-laptop-searching-and-add-to-cart;;6",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "The user is on Amazon search page",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "the user search Laptop \"Acer Aspire laptop\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "the user add to cart",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "the user verifies the laptop in cart",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.the_user_is_on_Amazon_search_page()"
});
formatter.result({
  "duration": 7462139468,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Acer Aspire laptop",
      "offset": 24
    }
  ],
  "location": "StepDefinition.the_user_search_Laptop(String)"
});
formatter.result({
  "duration": 8127284439,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.the_user_add_to_cart()"
});
formatter.result({
  "duration": 1266798978,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.the_user_verifies_the_laptop_in_cart()"
});
formatter.result({
  "duration": 358228,
  "error_message": "java.lang.NullPointerException\r\n\tat OnlineShopping.Amazon.StepDefinition.the_user_verifies_the_laptop_in_cart(StepDefinition.java:94)\r\n\tat ✽.Then the user verifies the laptop in cart(SearchPage.feature:7)\r\n",
  "status": "failed"
});
});