package OnlineShopping.Amazon;

import java.util.Set;

import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.interactions.Actions;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class StepDefinition extends Base {
	String cartCount;
	String parentWindowId;
	Set<String> allWindowsId;
	String cartItem;
	String laptopBrand;
	
	@Given("^The user is on Amazon search page$")
	public void the_user_is_on_Amazon_search_page() {
	    
		launchBrowser("https://www.amazon.in/");
	}
	@When("^the user search Laptop \"([^\"]*)\"$")
	public void the_user_search_Laptop(String item) throws InterruptedException  {
		WebElement showCategory=driver.findElement(By.xpath("//*[@id=\"nav-link-shopall\"]"));
		Actions mouseOverAcc=new Actions(driver);
		mouseOverAcc.moveToElement(showCategory).build().perform();
		WebElement laptopCategory = driver.findElement(By.xpath("//*[@id=\"nav-flyout-shopAll\"]/div[2]/span[6]/span"));
		mouseOverAcc.moveToElement(laptopCategory).build().perform();
		WebElement laptopSelect = driver.findElement(By.xpath("//*[@id=\"nav-flyout-shopAll\"]/div[3]/div[6]/div[2]/div/a[2]/span"));
		laptopSelect.click();
		WebElement txtSearch = driver.findElement(By.id("twotabsearchtextbox"));
		searchLaptop(txtSearch,item);
		laptopBrand=item;
	}
	@When("^the user add to cart$")
	public void the_user_add_to_cart() throws Throwable {
		
		 WebElement itemLink = driver.findElement(By.xpath("//*[@id=\"result_3\"]/div/div[3]/div[1]/a/h2"));
		 itemDetails(itemLink);
		 parentWindowId=driver.getWindowHandle();
		 allWindowsId=driver.getWindowHandles();
		 if(allWindowsId.size()>1)
		 {
			 for(String currentWindow : allWindowsId)
			 {
				 if(currentWindow != parentWindowId)
					 driver.switchTo().window(currentWindow);
			 }
			 WebElement btnAddToCart = driver.findElement(By.id("add-to-cart-button"));
			 addToCart(btnAddToCart);
			 try
			 {
				 WebElement btnAdd = driver.findElement(By.id("siAddCoverage-announce"));
				 addWarrenty(btnAdd);
				
			 }
			 catch(Exception e)
			 {
				 System.out.println(e);
			 }
			 WebElement spnaddCount = driver.findElement(By.id("nav-cart-count"));
			 cartCount = spnaddCount.getText();
			 spnaddCount.click();
			 try
			 {
				 WebElement itemInCart = driver.findElement(By.xpath("/html/body/div[1]/div[4]/div/div[4]/div/div[2]/div[3]/form/div[2]/div[1]/div[4]/div[2]/div[1]/div/div/div[2]/ul/li[1]/span/a/span"));
				 cartItem=itemInCart.getText();
			 }
			 catch(Exception e)
			 {
				 System.out.println(e);
			 }
			 
		 }
		  quitBrowser(driver);
	}
	@Then("^the user verifies the laptop in cart$")
	public void the_user_verifies_the_laptop_in_cart() {
	    //Assert.assertEquals("1", cartCount);
	    if(laptopBrand.contains("HP"))
	    {
	    Assert.assertTrue(cartItem.contains("HP"));
	    }
	    else if(laptopBrand.contains("Dell"))
	    {
	    	Assert.assertTrue(cartItem.contains("Dell"));
	    }
	    else if(laptopBrand.contains("Acer"))
	    {
	    	Assert.assertTrue(cartItem.contains("Acer"));
	    }
	    else if(laptopBrand.contains("Lenova"))
	    {
	    	Assert.assertTrue(cartItem.contains("Lenova"));
	    }
	    else if(laptopBrand.contains("Asus"))
	    {
	    	Assert.assertTrue(cartItem.contains("Lenova"));
	    }
	    else
	    {
	    	Assert.assertTrue(cartItem.isEmpty());
	    }
	    
	}


}
