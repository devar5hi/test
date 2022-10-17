package steps;


import static org.testng.Assert.assertEquals;
import static org.testng.Assert.assertTrue;

import java.util.List;

import org.openqa.selenium.support.ui.Wait;
import org.testng.Assert;

import io.cucumber.datatable.DataTable;
import io.cucumber.java.en.And;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;
import page.actions.LoginActions;
import utils.SeleniumDriver;

public class loginStep {
	
	LoginActions LoginActions= new LoginActions();
	
		
	
	@Given("User navigates to parkstreet login page {string}")
	public void user_navigates_to_parkstreet_login_page(String WebsiteUrl) {
	  SeleniumDriver.openPage(WebsiteUrl);
	}

	@When("User login into application with username and password")
	public void user_login_into_application_with_username_and_password(DataTable data) throws Throwable {
		List<List<String>> credentials = data.asLists();
		String userName = credentials.get(0).get(0);
		String password = credentials.get(0).get(1);
		LoginActions.enterCredentialsAndLogin(userName, password);
	}

	@Then("user should be redirect to {string}")
	public void user_should_be_redirect_to(String DashboardPageUrl) throws InterruptedException {

		Thread.sleep(5000);
		
		System.out.println("user is on dashboard: " + LoginActions.DashboardPageTitle() );
	   Assert.assertEquals(LoginActions.DashboardPageTitle(), DashboardPageUrl);
	}
	

}
