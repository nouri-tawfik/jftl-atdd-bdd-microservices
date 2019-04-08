$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/resources/features/CalculRemise.feature");
formatter.feature({
  "name": "Calcul de la remise",
  "description": "  En tant que client\n  Je veux savoir le pourcentage de la remise de ma commande\n  Afin de prendre une décision d\u0027achat ou non",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@sprint-01"
    }
  ]
});
formatter.scenarioOutline({
  "name": "Calcul de la remise pour un totale de commande",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "le total de la commande est \u003cTotal\u003e",
  "keyword": "Given "
});
formatter.step({
  "name": "la catégorie du client est \"\u003cCatégorie\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "la remise est calculée",
  "keyword": "When "
});
formatter.step({
  "name": "le code de réponse HTTP du service est \"\u003cCode\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "name": "le pourcentage de la remise est \u003cPourcentage\u003e",
  "keyword": "And "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "Total",
        "Catégorie",
        "Code",
        "Pourcentage"
      ]
    },
    {
      "cells": [
        "10.00",
        "BONNE",
        "OK",
        "7"
      ]
    },
    {
      "cells": [
        "10.01",
        "BONNE",
        "OK",
        "1"
      ]
    },
    {
      "cells": [
        "50.01",
        "BONNE",
        "OK",
        "1"
      ]
    },
    {
      "cells": [
        "0.01",
        "EXCELLENTE",
        "OK",
        "1"
      ]
    },
    {
      "cells": [
        "50.00",
        "EXCELLENTE",
        "OK",
        "1"
      ]
    },
    {
      "cells": [
        "50.01",
        "EXCELLENTE",
        "OK",
        "5"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Calcul de la remise pour un totale de commande",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@sprint-01"
    }
  ]
});
formatter.step({
  "name": "le total de la commande est 10.00",
  "keyword": "Given "
});
formatter.match({
  "location": "ComputeDiscountSteps.le_total_de_la_commande_est(Double)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "la catégorie du client est \"BONNE\"",
  "keyword": "And "
});
formatter.match({
  "location": "ComputeDiscountSteps.la_catégorie_du_client_est(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "la remise est calculée",
  "keyword": "When "
});
formatter.match({
  "location": "ComputeDiscountSteps.la_remise_est_calculée()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "le code de réponse HTTP du service est \"OK\"",
  "keyword": "Then "
});
formatter.match({
  "location": "ComputeDiscountSteps.le_code_de_réponse_HTTP_du_service_est(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "le pourcentage de la remise est 7",
  "keyword": "And "
});
formatter.match({
  "location": "ComputeDiscountSteps.le_pourcentage_de_la_remise_est(Integer)"
});
formatter.result({
  "error_message": "java.lang.AssertionError: 1 expectation failed.\nJSON path discountPercentage doesn\u0027t match.\nExpected: \u003c7\u003e\n  Actual: 0\n\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.codehaus.groovy.reflection.CachedConstructor.invoke(CachedConstructor.java:80)\r\n\tat org.codehaus.groovy.reflection.CachedConstructor.doConstructorInvoke(CachedConstructor.java:74)\r\n\tat org.codehaus.groovy.runtime.callsite.ConstructorSite$ConstructorSiteNoUnwrap.callConstructor(ConstructorSite.java:84)\r\n\tat org.codehaus.groovy.runtime.callsite.CallSiteArray.defaultCallConstructor(CallSiteArray.java:59)\r\n\tat org.codehaus.groovy.runtime.callsite.AbstractCallSite.callConstructor(AbstractCallSite.java:237)\r\n\tat org.codehaus.groovy.runtime.callsite.AbstractCallSite.callConstructor(AbstractCallSite.java:249)\r\n\tat io.restassured.internal.ResponseSpecificationImpl$HamcrestAssertionClosure.validate(ResponseSpecificationImpl.groovy:483)\r\n\tat io.restassured.internal.ResponseSpecificationImpl$HamcrestAssertionClosure$validate$1.call(Unknown Source)\r\n\tat io.restassured.internal.ResponseSpecificationImpl.validateResponseIfRequired(ResponseSpecificationImpl.groovy:655)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat org.codehaus.groovy.runtime.callsite.PlainObjectMetaMethodSite.doInvoke(PlainObjectMetaMethodSite.java:43)\r\n\tat org.codehaus.groovy.runtime.callsite.PogoMetaMethodSite$PogoCachedMethodSiteNoUnwrapNoCoerce.invoke(PogoMetaMethodSite.java:190)\r\n\tat org.codehaus.groovy.runtime.callsite.PogoMetaMethodSite.callCurrent(PogoMetaMethodSite.java:58)\r\n\tat org.codehaus.groovy.runtime.callsite.CallSiteArray.defaultCallCurrent(CallSiteArray.java:51)\r\n\tat org.codehaus.groovy.runtime.callsite.AbstractCallSite.callCurrent(AbstractCallSite.java:156)\r\n\tat org.codehaus.groovy.runtime.callsite.AbstractCallSite.callCurrent(AbstractCallSite.java:168)\r\n\tat io.restassured.internal.ResponseSpecificationImpl.content(ResponseSpecificationImpl.groovy:275)\r\n\tat io.restassured.specification.ResponseSpecification$content$1.callCurrent(Unknown Source)\r\n\tat org.codehaus.groovy.runtime.callsite.CallSiteArray.defaultCallCurrent(CallSiteArray.java:51)\r\n\tat org.codehaus.groovy.runtime.callsite.AbstractCallSite.callCurrent(AbstractCallSite.java:156)\r\n\tat org.codehaus.groovy.runtime.callsite.AbstractCallSite.callCurrent(AbstractCallSite.java:192)\r\n\tat io.restassured.internal.ResponseSpecificationImpl.body(ResponseSpecificationImpl.groovy:258)\r\n\tat io.restassured.internal.ValidatableResponseOptionsImpl.body(ValidatableResponseOptionsImpl.java:274)\r\n\tat com.all4test.booksservices.acceptancetests.stepdefs.ComputeDiscountSteps.le_pourcentage_de_la_remise_est(ComputeDiscountSteps.java:37)\r\n\tat ✽.le pourcentage de la remise est 7(src/test/resources/features/CalculRemise.feature:14)\r\n",
  "status": "failed"
});
formatter.scenario({
  "name": "Calcul de la remise pour un totale de commande",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@sprint-01"
    }
  ]
});
formatter.step({
  "name": "le total de la commande est 10.01",
  "keyword": "Given "
});
formatter.match({
  "location": "ComputeDiscountSteps.le_total_de_la_commande_est(Double)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "la catégorie du client est \"BONNE\"",
  "keyword": "And "
});
formatter.match({
  "location": "ComputeDiscountSteps.la_catégorie_du_client_est(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "la remise est calculée",
  "keyword": "When "
});
formatter.match({
  "location": "ComputeDiscountSteps.la_remise_est_calculée()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "le code de réponse HTTP du service est \"OK\"",
  "keyword": "Then "
});
formatter.match({
  "location": "ComputeDiscountSteps.le_code_de_réponse_HTTP_du_service_est(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "le pourcentage de la remise est 1",
  "keyword": "And "
});
formatter.match({
  "location": "ComputeDiscountSteps.le_pourcentage_de_la_remise_est(Integer)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Calcul de la remise pour un totale de commande",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@sprint-01"
    }
  ]
});
formatter.step({
  "name": "le total de la commande est 50.01",
  "keyword": "Given "
});
formatter.match({
  "location": "ComputeDiscountSteps.le_total_de_la_commande_est(Double)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "la catégorie du client est \"BONNE\"",
  "keyword": "And "
});
formatter.match({
  "location": "ComputeDiscountSteps.la_catégorie_du_client_est(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "la remise est calculée",
  "keyword": "When "
});
formatter.match({
  "location": "ComputeDiscountSteps.la_remise_est_calculée()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "le code de réponse HTTP du service est \"OK\"",
  "keyword": "Then "
});
formatter.match({
  "location": "ComputeDiscountSteps.le_code_de_réponse_HTTP_du_service_est(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "le pourcentage de la remise est 1",
  "keyword": "And "
});
formatter.match({
  "location": "ComputeDiscountSteps.le_pourcentage_de_la_remise_est(Integer)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Calcul de la remise pour un totale de commande",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@sprint-01"
    }
  ]
});
formatter.step({
  "name": "le total de la commande est 0.01",
  "keyword": "Given "
});
formatter.match({
  "location": "ComputeDiscountSteps.le_total_de_la_commande_est(Double)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "la catégorie du client est \"EXCELLENTE\"",
  "keyword": "And "
});
formatter.match({
  "location": "ComputeDiscountSteps.la_catégorie_du_client_est(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "la remise est calculée",
  "keyword": "When "
});
formatter.match({
  "location": "ComputeDiscountSteps.la_remise_est_calculée()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "le code de réponse HTTP du service est \"OK\"",
  "keyword": "Then "
});
formatter.match({
  "location": "ComputeDiscountSteps.le_code_de_réponse_HTTP_du_service_est(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "le pourcentage de la remise est 1",
  "keyword": "And "
});
formatter.match({
  "location": "ComputeDiscountSteps.le_pourcentage_de_la_remise_est(Integer)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Calcul de la remise pour un totale de commande",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@sprint-01"
    }
  ]
});
formatter.step({
  "name": "le total de la commande est 50.00",
  "keyword": "Given "
});
formatter.match({
  "location": "ComputeDiscountSteps.le_total_de_la_commande_est(Double)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "la catégorie du client est \"EXCELLENTE\"",
  "keyword": "And "
});
formatter.match({
  "location": "ComputeDiscountSteps.la_catégorie_du_client_est(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "la remise est calculée",
  "keyword": "When "
});
formatter.match({
  "location": "ComputeDiscountSteps.la_remise_est_calculée()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "le code de réponse HTTP du service est \"OK\"",
  "keyword": "Then "
});
formatter.match({
  "location": "ComputeDiscountSteps.le_code_de_réponse_HTTP_du_service_est(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "le pourcentage de la remise est 1",
  "keyword": "And "
});
formatter.match({
  "location": "ComputeDiscountSteps.le_pourcentage_de_la_remise_est(Integer)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Calcul de la remise pour un totale de commande",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@sprint-01"
    }
  ]
});
formatter.step({
  "name": "le total de la commande est 50.01",
  "keyword": "Given "
});
formatter.match({
  "location": "ComputeDiscountSteps.le_total_de_la_commande_est(Double)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "la catégorie du client est \"EXCELLENTE\"",
  "keyword": "And "
});
formatter.match({
  "location": "ComputeDiscountSteps.la_catégorie_du_client_est(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "la remise est calculée",
  "keyword": "When "
});
formatter.match({
  "location": "ComputeDiscountSteps.la_remise_est_calculée()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "le code de réponse HTTP du service est \"OK\"",
  "keyword": "Then "
});
formatter.match({
  "location": "ComputeDiscountSteps.le_code_de_réponse_HTTP_du_service_est(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "le pourcentage de la remise est 5",
  "keyword": "And "
});
formatter.match({
  "location": "ComputeDiscountSteps.le_pourcentage_de_la_remise_est(Integer)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Calcul de la remise avec un totale négatif",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@sprint-01"
    }
  ]
});
formatter.step({
  "name": "le total de la commande est -10.00",
  "keyword": "Given "
});
formatter.match({
  "location": "ComputeDiscountSteps.le_total_de_la_commande_est(Double)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "la catégorie du client est \"EXCELLENTE\"",
  "keyword": "And "
});
formatter.match({
  "location": "ComputeDiscountSteps.la_catégorie_du_client_est(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "la remise est calculée",
  "keyword": "When "
});
formatter.match({
  "location": "ComputeDiscountSteps.la_remise_est_calculée()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "le code de réponse HTTP du service est \"BAD REQUEST\"",
  "keyword": "Then "
});
formatter.match({
  "location": "ComputeDiscountSteps.le_code_de_réponse_HTTP_du_service_est(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "la reponse du service contient le message d\u0027erreur \"Le montant total de la commande doit être positif !\"",
  "keyword": "And "
});
formatter.match({
  "location": "ComputeDiscountSteps.la_reponse_du_service_contient_le_message_d_erreur(String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Calculer la remise pour un totale de commande pour une catégorie non supportée",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@sprint-01"
    }
  ]
});
formatter.step({
  "name": "le total de la commande est 10.00",
  "keyword": "Given "
});
formatter.match({
  "location": "ComputeDiscountSteps.le_total_de_la_commande_est(Double)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "la catégorie du client est \"SUPER_EXCELLENTE\"",
  "keyword": "And "
});
formatter.match({
  "location": "ComputeDiscountSteps.la_catégorie_du_client_est(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "la remise est calculée",
  "keyword": "When "
});
formatter.match({
  "location": "ComputeDiscountSteps.la_remise_est_calculée()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "le code de réponse HTTP du service est \"BAD REQUEST\"",
  "keyword": "Then "
});
formatter.match({
  "location": "ComputeDiscountSteps.le_code_de_réponse_HTTP_du_service_est(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "la reponse du service contient le message d\u0027erreur \"La catégorie SUPER_EXCELLENTE n\u0027est pas supportée\"",
  "keyword": "And "
});
formatter.match({
  "location": "ComputeDiscountSteps.la_reponse_du_service_contient_le_message_d_erreur(String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "Calculer la remise pour un totale de commande pour une catégorie non supportée v2",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "le total de la commande est 10.00",
  "keyword": "Given "
});
formatter.step({
  "name": "la catégorie du client est \"\u003ccatégorie\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "la remise est calculée",
  "keyword": "When "
});
formatter.step({
  "name": "le code de réponse HTTP du service est \"BAD REQUEST\"",
  "keyword": "Then "
});
formatter.step({
  "name": "la reponse du service contient le message d\u0027erreur \"\u003cmessage\u003e\"",
  "keyword": "And "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "catégorie",
        "message"
      ]
    },
    {
      "cells": [
        "SUPER_EXCELLENTE",
        "La catégorie SUPER_EXCELLENTE n\u0027est pas supportée"
      ]
    },
    {
      "cells": [
        "SUPER",
        "La catégorie SUPER n\u0027est pas supportée"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Calculer la remise pour un totale de commande pour une catégorie non supportée v2",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@sprint-01"
    }
  ]
});
formatter.step({
  "name": "le total de la commande est 10.00",
  "keyword": "Given "
});
formatter.match({
  "location": "ComputeDiscountSteps.le_total_de_la_commande_est(Double)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "la catégorie du client est \"SUPER_EXCELLENTE\"",
  "keyword": "And "
});
formatter.match({
  "location": "ComputeDiscountSteps.la_catégorie_du_client_est(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "la remise est calculée",
  "keyword": "When "
});
formatter.match({
  "location": "ComputeDiscountSteps.la_remise_est_calculée()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "le code de réponse HTTP du service est \"BAD REQUEST\"",
  "keyword": "Then "
});
formatter.match({
  "location": "ComputeDiscountSteps.le_code_de_réponse_HTTP_du_service_est(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "la reponse du service contient le message d\u0027erreur \"La catégorie SUPER_EXCELLENTE n\u0027est pas supportée\"",
  "keyword": "And "
});
formatter.match({
  "location": "ComputeDiscountSteps.la_reponse_du_service_contient_le_message_d_erreur(String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Calculer la remise pour un totale de commande pour une catégorie non supportée v2",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@sprint-01"
    }
  ]
});
formatter.step({
  "name": "le total de la commande est 10.00",
  "keyword": "Given "
});
formatter.match({
  "location": "ComputeDiscountSteps.le_total_de_la_commande_est(Double)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "la catégorie du client est \"SUPER\"",
  "keyword": "And "
});
formatter.match({
  "location": "ComputeDiscountSteps.la_catégorie_du_client_est(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "la remise est calculée",
  "keyword": "When "
});
formatter.match({
  "location": "ComputeDiscountSteps.la_remise_est_calculée()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "le code de réponse HTTP du service est \"BAD REQUEST\"",
  "keyword": "Then "
});
formatter.match({
  "location": "ComputeDiscountSteps.le_code_de_réponse_HTTP_du_service_est(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "la reponse du service contient le message d\u0027erreur \"La catégorie SUPER n\u0027est pas supportée\"",
  "keyword": "And "
});
formatter.match({
  "location": "ComputeDiscountSteps.la_reponse_du_service_contient_le_message_d_erreur(String)"
});
formatter.result({
  "status": "passed"
});
});