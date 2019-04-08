package com.all4test.booksservices.acceptancetests.runner;

import cucumber.api.CucumberOptions;


import net.masterthought.cucumber.Configuration;
import net.masterthought.cucumber.ReportBuilder;
import net.masterthought.cucumber.Reportable;
import org.junit.jupiter.api.AfterAll;
import org.junit.runner.RunWith;

import cucumber.api.junit.Cucumber;

import java.io.File;
import java.util.ArrayList;
import java.util.List;

@RunWith(Cucumber.class)
@CucumberOptions(
        features = "src/test/resources/features",
        tags = {"@demo"},
        monochrome = true,
        plugin = {
                "pretty", "html:target/cucumber-report/single",
                "json:target/cucumber-report/single/cucumber.json",
                "rerun:target/cucumber-report/single/rerun.txt"},
        glue = "com.all4test.booksservices.acceptancetests.stepdefs")
public class RunAcceptanceTestSuite {



    @AfterAll
    public static void  after()
    {
        File reportOutputDirectory = new File("target");
        List<String> jsonFiles = new ArrayList<String>();
        jsonFiles.add("target/cucumber-report/single/cucumber.json");
        String buildNumber = "1";
        String projectName = "MicroServices - All4Test - JFTL 2019";
        boolean runWithJenkins = false;

        Configuration configuration = new Configuration(reportOutputDirectory, projectName);
        configuration.setRunWithJenkins(runWithJenkins);
        configuration.setBuildNumber(buildNumber);
        configuration.addClassifications("Platform", "Windows");
        configuration.addClassifications("Branch", "release/1.0");

        ReportBuilder reportBuilder = new ReportBuilder(jsonFiles, configuration);
        Reportable result = reportBuilder.generateReports();
    }
}