package page.actions;

import org.openqa.selenium.interactions.Actions;
import org.openqa.selenium.support.PageFactory;
import org.openqa.selenium.support.ui.Select;

import page.locators.LoginLocators;
import utils.SeleniumDriver;

public class LoginActions{
	
	LoginLocators LoginLocators = null;
	
	
	
	public LoginActions() {
		
		this.LoginLocators= new LoginLocators();
		PageFactory.initElements(SeleniumDriver.getDriver(), LoginLocators);
		
	}
	
	public boolean verifyLoginPage() {
		return LoginLocators.loginText.isDisplayed();
	}
	
	public void enterCredentialsAndLogin(String username, String password) {
		LoginLocators.userNameFiled.click();
		LoginLocators.userNameFiled.sendKeys(username);
		LoginLocators.passwordField.click();
		LoginLocators.passwordField.sendKeys(password);
		LoginLocators.loginButton.click();
	}
	
	public void chooseClient(String client) throws InterruptedException {
		
		LoginLocators.selectClientButton.click();
		LoginLocators.searchClient.sendKeys(client);
		
		//LoginLocators.searchIcon.click();
		Thread.sleep(5000);
		
	Actions SelectClientAction= new Actions(SeleniumDriver.getDriver());
	SelectClientAction.click(LoginLocators.selectClient).perform();
	//	Select SelectClientSelect= new Select(LoginLocators.selectClient);
		
	//	SelectClientSelect.selectByIndex(1);
		
		LoginLocators.selectClient.click();
		LoginLocators.selectClientButton.click();
		LoginLocators.loginButton.click();
	}
	
	
	public String DashboardPageTitle() {
		
		
		System.out.println(LoginLocators.DashbaordPageHeader);
		return SeleniumDriver.getDriver().getCurrentUrl();
	}
	
	
	

}
