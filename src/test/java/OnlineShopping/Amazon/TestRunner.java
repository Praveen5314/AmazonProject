package OnlineShopping.Amazon;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(features="Feature", glue="OnlineShopping.Amazon", plugin= {"pretty", "junit:C:\\Users\\Elcot\\eclipse-workspace\\Amazon\\TestOutput\\amazon.xml"})
public class TestRunner {

}
