$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/java/login.feature");
formatter.feature({
  "name": "Login Feature",
  "description": "",
  "keyword": "Feature"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I have launched the simplilearn application",
  "keyword": "Given "
});
formatter.match({
  "location": "stepdefs.Login_Stepdefs.i_have_launched_the_simplilearn_application()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click on the Login Link",
  "keyword": "When "
});
formatter.match({
  "location": "stepdefs.Login_Stepdefs.i_click_on_the_Login_Link()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Login Failure Scenario using test data as parameter",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@sanity"
    }
  ]
});
formatter.step({
  "name": "I enter the Username \"abc@xyz.com\"",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefs.Login_Stepdefs.i_enter_the_Username(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I enter the Password \"Abc@12345\"",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefs.Login_Stepdefs.i_enter_the_Password(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click on the Login button",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefs.Login_Stepdefs.i_click_on_the_Login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should be able to see the error message \"The email address or password you have entered is wrong\"",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefs.Login_Stepdefs.i_should_be_able_to_see_the_error_message(java.lang.String)"
});
formatter.result({
  "error_message": "org.junit.ComparisonFailure: expected:\u003c...you have entered is [wrong]\u003e but was:\u003c...you have entered is [invalid]\u003e\r\n\tat org.junit.Assert.assertEquals(Assert.java:117)\r\n\tat org.junit.Assert.assertEquals(Assert.java:146)\r\n\tat stepdefs.Login_Stepdefs.i_should_be_able_to_see_the_error_message(Login_Stepdefs.java:77)\r\n\tat ✽.I should be able to see the error message \"The email address or password you have entered is wrong\"(file:///B:/sai/Testing%20work/New%20folder/Cucumber_Project/src/test/java/login.feature:19)\r\n",
  "status": "failed"
});
formatter.embedding("image/png", "embedded0.png", "screenshot");
formatter.after({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "Login Failure Scenario using test data as Examples",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@sanity"
    }
  ]
});
formatter.step({
  "name": "I enter the Username \"\u003cUserName\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "I enter the Password \"\u003cPassword\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "I click on the Login button",
  "keyword": "And "
});
formatter.step({
  "name": "I should be able to see the error message \"\u003cError\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "UserName",
        "Password",
        "Error"
      ]
    },
    {
      "cells": [
        "abc@xyz.com",
        "Abc@1234",
        "The email address or password you have entered is invalid"
      ]
    },
    {
      "cells": [
        "pqr@xyz.com",
        "Acvb@1234",
        "The email address or password you have entered is invalid"
      ]
    }
  ]
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I have launched the simplilearn application",
  "keyword": "Given "
});
formatter.match({
  "location": "stepdefs.Login_Stepdefs.i_have_launched_the_simplilearn_application()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click on the Login Link",
  "keyword": "When "
});
formatter.match({
  "location": "stepdefs.Login_Stepdefs.i_click_on_the_Login_Link()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Login Failure Scenario using test data as Examples",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@sanity"
    }
  ]
});
formatter.step({
  "name": "I enter the Username \"abc@xyz.com\"",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefs.Login_Stepdefs.i_enter_the_Username(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I enter the Password \"Abc@1234\"",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefs.Login_Stepdefs.i_enter_the_Password(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click on the Login button",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefs.Login_Stepdefs.i_click_on_the_Login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should be able to see the error message \"The email address or password you have entered is invalid\"",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefs.Login_Stepdefs.i_should_be_able_to_see_the_error_message(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I have launched the simplilearn application",
  "keyword": "Given "
});
formatter.match({
  "location": "stepdefs.Login_Stepdefs.i_have_launched_the_simplilearn_application()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click on the Login Link",
  "keyword": "When "
});
formatter.match({
  "location": "stepdefs.Login_Stepdefs.i_click_on_the_Login_Link()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Login Failure Scenario using test data as Examples",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@sanity"
    }
  ]
});
formatter.step({
  "name": "I enter the Username \"pqr@xyz.com\"",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefs.Login_Stepdefs.i_enter_the_Username(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I enter the Password \"Acvb@1234\"",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefs.Login_Stepdefs.i_enter_the_Password(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click on the Login button",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefs.Login_Stepdefs.i_click_on_the_Login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should be able to see the error message \"The email address or password you have entered is invalid\"",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefs.Login_Stepdefs.i_should_be_able_to_see_the_error_message(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});