package OnlineShopping.Amazon;

import org.openqa.selenium.Keys;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.interactions.Actions;

public class Base {

public static WebDriver driver;
public static Actions act;
public static Actions act1;
	
	public static WebDriver launchBrowser(String url)
	{
		System.setProperty("webdriver.chrome.driver", "C:\\Users\\Elcot\\eclipse-workspace\\test\\Driver\\chromedriver.exe");
		driver=new ChromeDriver();
		driver.get(url);
		driver.manage().window().maximize();
		return driver;
		
	}
	public static void searchLaptop(WebElement search_element,  String name) {
		
		search_element.sendKeys(name);
		act=new Actions(driver);
		act.sendKeys(Keys.DOWN).sendKeys(Keys.DOWN).sendKeys(Keys.ENTER).build().perform();
		//btnSearch_element.click();
	}
	public static void itemDetails(WebElement itemLink_element) throws InterruptedException {
		itemLink_element.click();
		
	}
	public static void addToCart(WebElement btnAddToCart_element)
	{
		btnAddToCart_element.click();
	}
	public static void addWarrenty(WebElement btnAdd_element) {
		btnAdd_element.click();
	}
	
	public static void quitBrowser(WebDriver driver) {
		driver.quit();

	}
}
