package OnlineShopping.Amazon;

import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class StepDefinition extends Base {
	String cartCount;
	
	@Given("^The user is on Amazon search page$")
	public void the_user_is_on_Amazon_search_page() {
	    
		launchBrowser("https://www.amazon.in/");
	}
	@When("^the user search Laptop \"([^\"]*)\"$")
	public void the_user_search_Laptop(String arg1) throws InterruptedException  {
		 WebElement txtSearch = driver.findElement(By.id("twotabsearchtextbox"));
		 //WebElement btnSearch = driver.findElement(By.className("nav-input"));
		
		 searchLaptop(txtSearch,arg1);
		 
			 
		 
	    // quitBrowser(driver);
	}
	@When("^the user add to cart$")
	public void the_user_add_to_cart() throws Throwable {
		 WebElement itemLink = driver.findElement(By.className("a-link-normal s-access-detail-page  s-color-twister-title-link a-text-normal"));
		 WebElement btnAddToCart = driver.findElement(By.id("add-to-cart-button"));
		 WebElement btnAdd = driver.findElement(By.id("siAddCoverage-announce"));
		 WebElement spnaddCount = driver.findElement(By.id("nav-cart-count"));
		 addToCart(itemLink, btnAddToCart,btnAdd);
		 cartCount = spnaddCount.getText();
	}


	//@When("^the user search Laptops and add to cart \"([^\"]*)\" and \"([^\"]*)\" and \"([^\"]*)\" and \"([^\"]*)\" and \"([^\"]*)\"$")
//	public void the_user_search_Laptops_and_add_to_cart_and_and_and_and(String arg1, String arg2, String arg3, String arg4, String arg5) throws Throwable {
//		 WebElement txtSearch = driver.findElement(By.id("twotabsearchtextbox"));
//		 //WebElement btnSearch = driver.findElement(By.className("nav-input"));
//		 WebElement itemLink = driver.findElement(By.className("a-link-normal s-access-detail-page  s-color-twister-title-link a-text-normal"));
//		 WebElement btnAddToCart = driver.findElement(By.id("add-to-cart-button"));
//		 WebElement btnAdd = driver.findElement(By.id("siAddCoverage-announce"));
//		 WebElement spnaddCount = driver.findElement(By.id("nav-cart-count"));
//		 String[] searchItems= {"arg1","arg2","arg3","arg4","arg5"} ;
//		 for(String items : searchItems)
//		 {
//			 searchLaptop(txtSearch,items);
//			 addToCart(itemLink, btnAddToCart,btnAdd);
//			 cartCount = spnaddCount.getText();
//			 
//		 }
//	    // quitBrowser(driver);
//	}




	@Then("^the user verifies the laptop in cart$")
	public void the_user_verifies_the_laptop_in_cart() {
	    Assert.assertEquals("5", cartCount);
	}


}
