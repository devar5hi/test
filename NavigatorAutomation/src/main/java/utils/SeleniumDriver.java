package utils;

import java.time.Duration;
import java.util.concurrent.TimeUnit;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.chrome.ChromeOptions;
import org.openqa.selenium.support.ui.WebDriverWait;
import org.testng.annotations.AfterSuite;

import io.cucumber.java.After;
import io.github.bonigarcia.wdm.WebDriverManager;

public class SeleniumDriver {
	
	
	 private static SeleniumDriver seleniumDriver;
	 
	    //initialize webdriver
	    private static WebDriver driver;
	    
	    //initialize timeouts
	    private static WebDriverWait waitDriver;
	    public final static int TIMEOUT = 30;
	    public final static int PAGE_LOAD_TIMEOUT = 50;

	    SeleniumDriver() {

	    	//System.setProperty("webdriver.chrome.driver","chromedriver.exe"); 
	    	
	    	WebDriverManager.chromedriver().setup();
	        driver = new ChromeDriver();
	    	ChromeOptions options = new ChromeOptions(); 
	    	options.addArguments("--disable-dev-shm-usage"); // overcome limited resource problems
	    	options.addArguments("--no-sandbox");
	    	options.addArguments("--headless");
			options.addArguments("--disable-gpu");// Bypass OS security model
	    //	WebDriver driver = new ChromeDriver(options);
	    	
	        driver.manage().window().maximize();

	        waitDriver = new WebDriverWait(driver, TIMEOUT);
	        driver.manage().timeouts().implicitlyWait(TIMEOUT, TimeUnit.SECONDS);
	        driver.manage().timeouts().pageLoadTimeout(PAGE_LOAD_TIMEOUT, TimeUnit.SECONDS);
	        String window=driver.getWindowHandle();
	        System.out.println("Window ->"+window);
	       
	    }

	    public static void openPage(String url) {
	    	System.out.println(url);
	    	System.out.println(driver);
	        driver.get(url);
	    }

	    public static WebDriver getDriver() {
	        return driver;
	    }

	    public static void setUpDriver() {
	       if (seleniumDriver == null)
	            seleniumDriver = new SeleniumDriver();
	      
	    }

	//    @AfterSuite
	    public static void tearDown() {
	        if (driver != null) {
	            driver.quit();
	        }
	        //seleniumDriver = null;
	    }
	    public static void waitForPageToLoad()
	    {
	    	try {
				Thread.sleep(5000);
			} catch (InterruptedException e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			}
	    }

}
