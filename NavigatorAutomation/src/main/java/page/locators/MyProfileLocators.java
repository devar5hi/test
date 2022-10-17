package page.locators;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;

public class MyProfileLocators {
	
	@FindBy(xpath = "//span[@class='profile_name ng-binding']")
	public WebElement ProfileMenu;
	
	@FindBy(xpath = "//span[@class='ng-binding'][normalize-space()='My Profile']")
	public WebElement MyProfileLink;
	
	@FindBy(xpath = "//span[@class='ng-binding'][normalize-space()='Sign Out']")
	public WebElement logout;
	
	

}
