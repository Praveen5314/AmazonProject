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
  "duration": 16370121704,
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
  "duration": 7047556887,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.the_user_add_to_cart()"
});
formatter.result({
  "duration": 5962107946,
  "error_message": "org.openqa.selenium.WebDriverException: unknown error: Element \u003cspan id\u003d\"nav-cart-count\" aria-hidden\u003d\"true\" class\u003d\"nav-cart-count nav-cart-...\"\u003e0\u003c/span\u003e is not clickable at point (942, 28). Other element would receive the click: \u003cdiv class\u003d\"a-modal-scroller a-declarative\" data-action\u003d\"a-popover-floating-close\" style\u003d\"padding-bottom: 0px; visibility: visible;\"\u003e...\u003c/div\u003e\n  (Session info: chrome\u003d66.0.3359.139)\n  (Driver info: chromedriver\u003d2.38.552522 (437e6fbedfa8762dec75e2c5b3ddb86763dc9dcb),platform\u003dWindows NT 6.1.7600 x86) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 131 milliseconds\nBuild info: version: \u00273.4.0\u0027, revision: \u0027unknown\u0027, time: \u0027unknown\u0027\nSystem info: host: \u0027HASEE-PC\u0027, ip: \u0027192.168.137.102\u0027, os.name: \u0027Windows 7\u0027, os.arch: \u0027x86\u0027, os.version: \u00276.1\u0027, java.version: \u00271.8.0_161\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities [{applicationCacheEnabled\u003dfalse, rotatable\u003dfalse, mobileEmulationEnabled\u003dfalse, networkConnectionEnabled\u003dfalse, chrome\u003d{chromedriverVersion\u003d2.38.552522 (437e6fbedfa8762dec75e2c5b3ddb86763dc9dcb), userDataDir\u003dC:\\Users\\Elcot\\AppData\\Local\\Temp\\scoped_dir4656_25431}, takesHeapSnapshot\u003dtrue, pageLoadStrategy\u003dnormal, databaseEnabled\u003dfalse, handlesAlerts\u003dtrue, hasTouchScreen\u003dfalse, version\u003d66.0.3359.139, platform\u003dXP, browserConnectionEnabled\u003dfalse, nativeEvents\u003dtrue, acceptSslCerts\u003dfalse, acceptInsecureCerts\u003dfalse, locationContextEnabled\u003dtrue, webStorageEnabled\u003dtrue, browserName\u003dchrome, takesScreenshot\u003dtrue, javascriptEnabled\u003dtrue, cssSelectorsEnabled\u003dtrue, setWindowRect\u003dtrue, unexpectedAlertBehaviour\u003d}]\nSession ID: 6e429135e3415c197181f9f27a97c7ab\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat java.lang.reflect.Constructor.newInstance(Unknown Source)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:215)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:167)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:671)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.execute(RemoteWebElement.java:272)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.click(RemoteWebElement.java:82)\r\n\tat OnlineShopping.Amazon.StepDefinition.the_user_add_to_cart(StepDefinition.java:66)\r\n\tat ✽.And the user add to cart(SearchPage.feature:6)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "StepDefinition.the_user_verifies_the_laptop_in_cart()"
});
formatter.result({
  "status": "skipped"
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
  "duration": 12470690032,
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
  "duration": 7190919572,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.the_user_add_to_cart()"
});
formatter.result({
  "duration": 12692620545,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.the_user_verifies_the_laptop_in_cart()"
});
formatter.result({
  "duration": 2729963,
  "status": "passed"
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
  "duration": 9720746601,
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
  "duration": 8604229049,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.the_user_add_to_cart()"
});
formatter.result({
  "duration": 11574797147,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.the_user_verifies_the_laptop_in_cart()"
});
formatter.result({
  "duration": 696908,
  "error_message": "java.lang.AssertionError\r\n\tat org.junit.Assert.fail(Assert.java:86)\r\n\tat org.junit.Assert.assertTrue(Assert.java:41)\r\n\tat org.junit.Assert.assertTrue(Assert.java:52)\r\n\tat OnlineShopping.Amazon.StepDefinition.the_user_verifies_the_laptop_in_cart(StepDefinition.java:101)\r\n\tat ✽.Then the user verifies the laptop in cart(SearchPage.feature:7)\r\n",
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
  "duration": 9388913786,
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
  "duration": 8557051894,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.the_user_add_to_cart()"
});
formatter.result({
  "duration": 15709292091,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.the_user_verifies_the_laptop_in_cart()"
});
formatter.result({
  "duration": 240448,
  "error_message": "java.lang.AssertionError\r\n\tat org.junit.Assert.fail(Assert.java:86)\r\n\tat org.junit.Assert.assertTrue(Assert.java:41)\r\n\tat org.junit.Assert.assertTrue(Assert.java:52)\r\n\tat OnlineShopping.Amazon.StepDefinition.the_user_verifies_the_laptop_in_cart(StepDefinition.java:97)\r\n\tat ✽.Then the user verifies the laptop in cart(SearchPage.feature:7)\r\n",
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
  "duration": 9689846598,
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
  "duration": 9415052237,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.the_user_add_to_cart()"
});
formatter.result({
  "duration": 12697740816,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.the_user_verifies_the_laptop_in_cart()"
});
formatter.result({
  "duration": 37631,
  "status": "passed"
});
});