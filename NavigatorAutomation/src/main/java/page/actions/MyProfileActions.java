package page.actions;

import org.openqa.selenium.support.PageFactory;

import page.locators.LoginLocators;
import page.locators.MyProfileLocators;
import utils.SeleniumDriver;

public class MyProfileActions {
	
	MyProfileLocators MyProfileLocators = null;
	
	
public MyProfileActions() {
		
		this.MyProfileLocators= new MyProfileLocators();
		PageFactory.initElements(SeleniumDriver.getDriver(), MyProfileLocators);
		
	}
	
	public void clickOnProfileMenu() throws InterruptedException {
		Thread.sleep(5000);
		MyProfileLocators.ProfileMenu.click();
		
	}
	
     public void clickOnMyProfileLink() {
		
		MyProfileLocators.MyProfileLink.click();
		
	}
     
     public void clickOnlogout() {
 		
 		MyProfileLocators.logout.click();
 		
 	}
     
     public String verifyMyProfilePagetitle() {
    	 
    	return SeleniumDriver.getDriver().getTitle();
    	
 		 		
 	}
	
	
	

}
