package com.all4test.booksservices.acceptancetests.stepdefs;

import io.restassured.config.RestAssuredConfig;
import io.restassured.response.Response;
import io.restassured.specification.RequestSpecification;

public abstract class BaseSteps {

    protected RequestSpecification request;
    protected Response response;
    protected RestAssuredConfig config;

    public String baseURI = "http://localhost:8080/";

}
