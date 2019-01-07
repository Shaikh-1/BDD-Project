$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("login.feature");
formatter.feature({
  "comments": [
    {
      "line": 1,
      "value": "#Author: your.email@your.domain.com"
    },
    {
      "line": 2,
      "value": "#Keywords Summary :"
    },
    {
      "line": 3,
      "value": "#Feature: List of scenarios."
    },
    {
      "line": 4,
      "value": "#Scenario: Business rule through list of steps with arguments."
    },
    {
      "line": 5,
      "value": "#Given: Some precondition step"
    },
    {
      "line": 6,
      "value": "#When: Some key actions"
    },
    {
      "line": 7,
      "value": "#Then: To observe outcomes or validation"
    },
    {
      "line": 8,
      "value": "#And,But: To enumerate more Given,When,Then steps"
    },
    {
      "line": 9,
      "value": "#Scenario Outline: List of steps for data-driven as an Examples and \u003cplaceholder\u003e"
    },
    {
      "line": 10,
      "value": "#Examples: Container for s table"
    },
    {
      "line": 11,
      "value": "#Background: List of steps run before each of the scenarios"
    },
    {
      "line": 12,
      "value": "#\"\"\" (Doc Strings)"
    },
    {
      "line": 13,
      "value": "#| (Data Tables)"
    },
    {
      "line": 14,
      "value": "#@ (Tags/Labels):To group Scenarios"
    },
    {
      "line": 15,
      "value": "#\u003c\u003e (placeholder)"
    },
    {
      "line": 16,
      "value": "#\"\""
    },
    {
      "line": 17,
      "value": "## (Comments)"
    },
    {
      "line": 18,
      "value": "#Sample Feature Definition Template"
    }
  ],
  "line": 20,
  "name": "Dolna Test Feature",
  "description": "I want to use this template for my feature file",
  "id": "dolna-test-feature",
  "keyword": "Feature",
  "tags": [
    {
      "line": 19,
      "name": "@tag"
    }
  ]
});
formatter.scenarioOutline({
  "comments": [
    {
      "line": 23,
      "value": "#@tag1"
    },
    {
      "line": 24,
      "value": "#Scenario: Login Scenario"
    },
    {
      "line": 25,
      "value": "#Given User is already on the Login Page"
    },
    {
      "line": 26,
      "value": "#When Title of the Login Page is #1 Free CRM software in the cloud for sales and service"
    },
    {
      "line": 27,
      "value": "#Then user enters \"shaikh92\" and \"Test@1234\""
    },
    {
      "line": 28,
      "value": "#Then Click on the Login Button"
    },
    {
      "line": 29,
      "value": "#Then User is on Home Page"
    }
  ],
  "line": 33,
  "name": "Login Scenario",
  "description": "",
  "id": "dolna-test-feature;login-scenario",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 32,
      "name": "@tag1"
    }
  ]
});
formatter.step({
  "line": 34,
  "name": "User is already on the Login Page",
  "keyword": "Given "
});
formatter.step({
  "line": 35,
  "name": "Title of the Login Page is #1 Free CRM software in the cloud for sales and service",
  "keyword": "When "
});
formatter.step({
  "line": 36,
  "name": "user enters \"\u003cusername\u003e\" and \"\u003cpassword\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 37,
  "name": "Click on the Login Button",
  "keyword": "Then "
});
formatter.step({
  "line": 38,
  "name": "User is on Home Page",
  "keyword": "Then "
});
formatter.step({
  "line": 39,
  "name": "Close the Browser",
  "keyword": "Then "
});
formatter.examples({
  "line": 41,
  "name": "",
  "description": "",
  "id": "dolna-test-feature;login-scenario;",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ],
      "line": 42,
      "id": "dolna-test-feature;login-scenario;;1"
    },
    {
      "cells": [
        "shaikh92",
        "Test@1234"
      ],
      "line": 43,
      "id": "dolna-test-feature;login-scenario;;2"
    },
    {
      "cells": [
        "Gollie",
        "Test%67"
      ],
      "line": 44,
      "id": "dolna-test-feature;login-scenario;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 43,
  "name": "Login Scenario",
  "description": "",
  "id": "dolna-test-feature;login-scenario;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 19,
      "name": "@tag"
    },
    {
      "line": 32,
      "name": "@tag1"
    }
  ]
});
formatter.step({
  "line": 34,
  "name": "User is already on the Login Page",
  "keyword": "Given "
});
formatter.step({
  "line": 35,
  "name": "Title of the Login Page is #1 Free CRM software in the cloud for sales and service",
  "keyword": "When "
});
formatter.step({
  "line": 36,
  "name": "user enters \"shaikh92\" and \"Test@1234\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 37,
  "name": "Click on the Login Button",
  "keyword": "Then "
});
formatter.step({
  "line": 38,
  "name": "User is on Home Page",
  "keyword": "Then "
});
formatter.step({
  "line": 39,
  "name": "Close the Browser",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepDefination.userInLoginPage()"
});
formatter.result({
  "duration": 16901264217,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefination.title_of_login_page()"
});
formatter.result({
  "duration": 11814758,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "shaikh92",
      "offset": 13
    },
    {
      "val": "Test@1234",
      "offset": 28
    }
  ],
  "location": "LoginStepDefination.gets_Login(String,String)"
});
formatter.result({
  "duration": 152357389,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefination.click_loginButton()"
});
formatter.result({
  "duration": 7375897016,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefination.user_in_HomePage()"
});
formatter.result({
  "duration": 16364653,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefination.close_Browser()"
});
formatter.result({
  "duration": 2322180128,
  "status": "passed"
});
formatter.scenario({
  "line": 44,
  "name": "Login Scenario",
  "description": "",
  "id": "dolna-test-feature;login-scenario;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 19,
      "name": "@tag"
    },
    {
      "line": 32,
      "name": "@tag1"
    }
  ]
});
formatter.step({
  "line": 34,
  "name": "User is already on the Login Page",
  "keyword": "Given "
});
formatter.step({
  "line": 35,
  "name": "Title of the Login Page is #1 Free CRM software in the cloud for sales and service",
  "keyword": "When "
});
formatter.step({
  "line": 36,
  "name": "user enters \"Gollie\" and \"Test%67\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 37,
  "name": "Click on the Login Button",
  "keyword": "Then "
});
formatter.step({
  "line": 38,
  "name": "User is on Home Page",
  "keyword": "Then "
});
formatter.step({
  "line": 39,
  "name": "Close the Browser",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepDefination.userInLoginPage()"
});
formatter.result({
  "duration": 14822600121,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefination.title_of_login_page()"
});
formatter.result({
  "duration": 12488525,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Gollie",
      "offset": 13
    },
    {
      "val": "Test%67",
      "offset": 26
    }
  ],
  "location": "LoginStepDefination.gets_Login(String,String)"
});
formatter.result({
  "duration": 446144250,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefination.click_loginButton()"
});
formatter.result({
  "duration": 1449129874,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefination.user_in_HomePage()"
});
formatter.result({
  "duration": 35025457,
  "error_message": "junit.framework.ComparisonFailure: expected:\u003c[CRMPRO]\u003e but was:\u003c[#1 Free CRM software in the cloud for sales and service]\u003e\r\n\tat junit.framework.Assert.assertEquals(Assert.java:100)\r\n\tat junit.framework.Assert.assertEquals(Assert.java:107)\r\n\tat stepDefinations.LoginStepDefination.user_in_HomePage(LoginStepDefination.java:55)\r\n\tat ✽.Then User is on Home Page(login.feature:38)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "LoginStepDefination.close_Browser()"
});
formatter.result({
  "status": "skipped"
});
});