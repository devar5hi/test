package page.locators;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;

public class LoginLocators {
	
	@FindBy(xpath = "//input[@id='email']")
	public WebElement userNameFiled;
	
	@FindBy(css="input#password")
	public WebElement passwordField;
	
	@FindBy(xpath="//button[@type='submit']")
	public WebElement loginButton;
	
	@FindBy(css = "div.form-title > h1")
	public WebElement loginText;
	
	@FindBy(xpath = "//div[@class='form-validation']//span[contains(text(),'email/username')]")
	public WebElement invalidUsernameEmailMessage;
	
	@FindBy(xpath = "//div[@class='form-validation']//span[contains(text(),'password')]")
	public WebElement invalidPassword;
	
	@FindBy(xpath = "//a[@class='dropdown-select placeholder']")
	public WebElement selectClientButton;
	
	@FindBy(xpath = "//input[@placeholder='Search']")
	public WebElement searchClient;
	
	@FindBy(xpath = "//i[@class='fas fa-search']")
	public WebElement searchIcon;
	
	@FindBy(css = "body > app:nth-child(2) > div:nth-child(3) > select-client:nth-child(1) > div:nth-child(4) > div:nth-child(1) > div:nth-child(2) > psi-dropdown-v2:nth-child(1) > div:nth-child(2) > ul:nth-child(2) > li:nth-child(3) > div:nth-child(1) > div:nth-child(1)")
	public WebElement selectClient;
	
	@FindBy(xpath = "//div[@class='row dashboard-header d-board ng-scope']")
	public WebElement DashbaordPageHeader;

}
