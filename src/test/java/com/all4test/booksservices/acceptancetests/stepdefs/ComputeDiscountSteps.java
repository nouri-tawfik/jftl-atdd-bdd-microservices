package com.all4test.booksservices.acceptancetests.stepdefs;

import com.all4test.booksservices.acceptancetests.helpers.HttpCodeHelper;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

import org.springframework.beans.factory.annotation.Value;

import static io.restassured.RestAssured.given;
import static org.hamcrest.CoreMatchers.equalTo;

public class ComputeDiscountSteps extends BaseSteps {

    @Value("${app.googlebooks.path}")
    private String basePath = "discount/computeDiscount";


    @Given("le total de la commande est {double}")
    public void le_total_de_la_commande_est(Double total) {
        request = given().baseUri(baseURI).config(config).queryParam("orderTotal", total);
    }

    @Given("la catégorie du client est {string}")
    public void la_catégorie_du_client_est(String categorie) {
        request = request.queryParam("customerRating", categorie);
    }

    @When("la remise est calculée")
    public void la_remise_est_calculée() {
        response = request.when().get(basePath);
    }

    @Then("le pourcentage de la remise est {int}")
    public void le_pourcentage_de_la_remise_est(Integer pourcentage) {

        response.then().body("discountPercentage", equalTo(pourcentage));
    }

    @Then("le code de réponse HTTP du service est {string}")
    public void le_code_de_réponse_HTTP_du_service_est(String httpStatusCode) {
        // get the http status code (input string, output integer)
        int httpCode = HttpCodeHelper.getHttpCode(httpStatusCode);
        response.then().statusCode(httpCode);
    }

    @Then("la reponse du service contient le message d'erreur {string}")
    public void la_reponse_du_service_contient_le_message_d_erreur(String erreur) {
        response.then().body("message", equalTo(erreur));
    }
}
