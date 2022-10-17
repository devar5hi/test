$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Login.feature");
formatter.feature({
  "line": 1,
  "name": "Application Login",
  "description": "Login into application with credentials",
  "id": "application-login",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 5,
  "name": "User logs into application with valid username and password",
  "description": "",
  "id": "application-login;user-logs-into-application-with-valid-username-and-password",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 6,
  "name": "User navigates to parkstreet login page \"https://stgappnavigator.parkstreet.com/login\"",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "User login into application with username and password",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ],
      "line": 8
    },
    {
      "cells": [
        "Jbedoya",
        "Park2003Street"
      ],
      "line": 9
    }
  ],
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "user chooses a client",
  "rows": [
    {
      "cells": [
        "client"
      ],
      "line": 11
    },
    {
      "cells": [
        "Branca USA"
      ],
      "line": 12
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "client information should be displayed on home page",
  "rows": [
    {
      "cells": [
        "client"
      ],
      "line": 14
    },
    {
      "cells": [
        "Branca USA"
      ],
      "line": 15
    }
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "https://stgappnavigator.parkstreet.com/login",
      "offset": 41
    }
  ],
  "location": "loginStep.user_navigates_to_parkstreet_login_page(String)"
});
formatter.result({
  "duration": 193018095,
  "error_message": "java.lang.ExceptionInInitializerError\n\tat cucumber.deps.com.thoughtworks.xstream.XStream.setupConverters(XStream.java:820)\n\tat cucumber.deps.com.thoughtworks.xstream.XStream.\u003cinit\u003e(XStream.java:574)\n\tat cucumber.deps.com.thoughtworks.xstream.XStream.\u003cinit\u003e(XStream.java:530)\n\tat cucumber.runtime.xstream.LocalizedXStreams$LocalizedXStream.\u003cinit\u003e(LocalizedXStreams.java:50)\n\tat cucumber.runtime.xstream.LocalizedXStreams.newXStream(LocalizedXStreams.java:37)\n\tat cucumber.runtime.xstream.LocalizedXStreams.get(LocalizedXStreams.java:29)\n\tat cucumber.runtime.StepDefinitionMatch.runStep(StepDefinitionMatch.java:37)\n\tat cucumber.runtime.Runtime.runStep(Runtime.java:300)\n\tat cucumber.runtime.model.StepContainer.runStep(StepContainer.java:44)\n\tat cucumber.runtime.model.StepContainer.runSteps(StepContainer.java:39)\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:44)\n\tat cucumber.runtime.model.CucumberFeature.run(CucumberFeature.java:165)\n\tat cucumber.api.testng.TestNGCucumberRunner.runCucumber(TestNGCucumberRunner.java:63)\n\tat cucumber.api.testng.AbstractTestNGCucumberTests.feature(AbstractTestNGCucumberTests.java:21)\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:78)\n\tat java.base/jdk.internal.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\n\tat java.base/java.lang.reflect.Method.invoke(Method.java:567)\n\tat org.testng.internal.MethodInvocationHelper.invokeMethod(MethodInvocationHelper.java:134)\n\tat org.testng.internal.TestInvoker.invokeMethod(TestInvoker.java:597)\n\tat org.testng.internal.TestInvoker.invokeTestMethod(TestInvoker.java:173)\n\tat org.testng.internal.MethodRunner.runInSequence(MethodRunner.java:46)\n\tat org.testng.internal.TestInvoker$MethodInvocationAgent.invoke(TestInvoker.java:816)\n\tat org.testng.internal.TestInvoker.invokeTestMethods(TestInvoker.java:146)\n\tat org.testng.internal.TestMethodWorker.invokeTestMethods(TestMethodWorker.java:146)\n\tat org.testng.internal.TestMethodWorker.run(TestMethodWorker.java:128)\n\tat java.base/java.util.ArrayList.forEach(ArrayList.java:1511)\n\tat org.testng.TestRunner.privateRun(TestRunner.java:766)\n\tat org.testng.TestRunner.run(TestRunner.java:587)\n\tat org.testng.SuiteRunner.runTest(SuiteRunner.java:384)\n\tat org.testng.SuiteRunner.runSequentially(SuiteRunner.java:378)\n\tat org.testng.SuiteRunner.privateRun(SuiteRunner.java:337)\n\tat org.testng.SuiteRunner.run(SuiteRunner.java:286)\n\tat org.testng.SuiteRunnerWorker.runSuite(SuiteRunnerWorker.java:53)\n\tat org.testng.SuiteRunnerWorker.run(SuiteRunnerWorker.java:96)\n\tat org.testng.TestNG.runSuitesSequentially(TestNG.java:1187)\n\tat org.testng.TestNG.runSuitesLocally(TestNG.java:1109)\n\tat org.testng.TestNG.runSuites(TestNG.java:1039)\n\tat org.testng.TestNG.run(TestNG.java:1007)\n\tat org.testng.remote.AbstractRemoteTestNG.run(AbstractRemoteTestNG.java:115)\n\tat org.testng.remote.RemoteTestNG.initAndRun(RemoteTestNG.java:251)\n\tat org.testng.remote.RemoteTestNG.main(RemoteTestNG.java:77)\n\tat ✽.Given User navigates to parkstreet login page \"https://stgappnavigator.parkstreet.com/login\"(Login.feature:6)\nCaused by: java.lang.reflect.InaccessibleObjectException: Unable to make field private final java.util.Comparator java.util.TreeMap.comparator accessible: module java.base does not \"opens java.util\" to unnamed module @475530b9\n\tat java.base/java.lang.reflect.AccessibleObject.checkCanSetAccessible(AccessibleObject.java:357)\n\tat java.base/java.lang.reflect.AccessibleObject.checkCanSetAccessible(AccessibleObject.java:297)\n\tat java.base/java.lang.reflect.Field.checkCanSetAccessible(Field.java:177)\n\tat java.base/java.lang.reflect.Field.setAccessible(Field.java:171)\n\tat cucumber.deps.com.thoughtworks.xstream.core.util.Fields.locate(Fields.java:39)\n\tat cucumber.deps.com.thoughtworks.xstream.converters.collections.TreeMapConverter.\u003cclinit\u003e(TreeMapConverter.java:50)\n\tat cucumber.deps.com.thoughtworks.xstream.XStream.setupConverters(XStream.java:820)\n\tat cucumber.deps.com.thoughtworks.xstream.XStream.\u003cinit\u003e(XStream.java:574)\n\tat cucumber.deps.com.thoughtworks.xstream.XStream.\u003cinit\u003e(XStream.java:530)\n\tat cucumber.runtime.xstream.LocalizedXStreams$LocalizedXStream.\u003cinit\u003e(LocalizedXStreams.java:50)\n\tat cucumber.runtime.xstream.LocalizedXStreams.newXStream(LocalizedXStreams.java:37)\n\tat cucumber.runtime.xstream.LocalizedXStreams.get(LocalizedXStreams.java:29)\n\tat cucumber.runtime.StepDefinitionMatch.runStep(StepDefinitionMatch.java:37)\n\tat cucumber.runtime.Runtime.runStep(Runtime.java:300)\n\tat cucumber.runtime.model.StepContainer.runStep(StepContainer.java:44)\n\tat cucumber.runtime.model.StepContainer.runSteps(StepContainer.java:39)\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:44)\n\tat cucumber.runtime.model.CucumberFeature.run(CucumberFeature.java:165)\n\tat cucumber.api.testng.TestNGCucumberRunner.runCucumber(TestNGCucumberRunner.java:63)\n\tat cucumber.api.testng.AbstractTestNGCucumberTests.feature(AbstractTestNGCucumberTests.java:21)\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:78)\n\tat java.base/jdk.internal.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\n\tat java.base/java.lang.reflect.Method.invoke(Method.java:567)\n\tat org.testng.internal.MethodInvocationHelper.invokeMethod(MethodInvocationHelper.java:134)\n\tat org.testng.internal.TestInvoker.invokeMethod(TestInvoker.java:597)\n\tat org.testng.internal.TestInvoker.invokeTestMethod(TestInvoker.java:173)\n\tat org.testng.internal.MethodRunner.runInSequence(MethodRunner.java:46)\n\tat org.testng.internal.TestInvoker$MethodInvocationAgent.invoke(TestInvoker.java:816)\n\tat org.testng.internal.TestInvoker.invokeTestMethods(TestInvoker.java:146)\n\tat org.testng.internal.TestMethodWorker.invokeTestMethods(TestMethodWorker.java:146)\n\tat org.testng.internal.TestMethodWorker.run(TestMethodWorker.java:128)\n\tat java.base/java.util.ArrayList.forEach(ArrayList.java:1511)\n\tat org.testng.TestRunner.privateRun(TestRunner.java:766)\n\tat org.testng.TestRunner.run(TestRunner.java:587)\n\tat org.testng.SuiteRunner.runTest(SuiteRunner.java:384)\n\tat org.testng.SuiteRunner.runSequentially(SuiteRunner.java:378)\n\tat org.testng.SuiteRunner.privateRun(SuiteRunner.java:337)\n\tat org.testng.SuiteRunner.run(SuiteRunner.java:286)\n\tat org.testng.SuiteRunnerWorker.runSuite(SuiteRunnerWorker.java:53)\n\tat org.testng.SuiteRunnerWorker.run(SuiteRunnerWorker.java:96)\n\tat org.testng.TestNG.runSuitesSequentially(TestNG.java:1187)\n\tat org.testng.TestNG.runSuitesLocally(TestNG.java:1109)\n\tat org.testng.TestNG.runSuites(TestNG.java:1039)\n\tat org.testng.TestNG.run(TestNG.java:1007)\n\tat org.testng.remote.AbstractRemoteTestNG.run(AbstractRemoteTestNG.java:115)\n\tat org.testng.remote.RemoteTestNG.initAndRun(RemoteTestNG.java:251)\n\tat org.testng.remote.RemoteTestNG.main(RemoteTestNG.java:77)\n",
  "status": "failed"
});
formatter.match({
  "location": "loginStep.user_login_into_application_with_username_and_password(DataTable)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "loginStep.user_chooses_a_client(DataTable)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "loginStep.client_information_should_be_displayed_on_home_page(DataTable)"
});
formatter.result({
  "status": "skipped"
});
});