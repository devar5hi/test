package runner;


import io.cucumber.testng.AbstractTestNGCucumberTests;
import io.cucumber.testng.CucumberOptions;

@CucumberOptions(
		plugin = {"html:target/cucumber-reports/cucumber-html-report.html"},
		features = "src/test/resources/Featuresfile", 
		glue = "steps", 
		monochrome = true 
				)

public class RunCuke extends AbstractTestNGCucumberTests{
	

	

}
