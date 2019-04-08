@sprint-01
Feature: Calcul de la remise

  En tant que client
  Je veux savoir le pourcentage de la remise de ma commande
  Afin de prendre une décision d'achat ou non

  Scenario Outline: Calcul de la remise pour un totale de commande

    Given le total de la commande est <Total>
    And la catégorie du client est "<Catégorie>"
    When la remise est calculée
    Then le code de réponse HTTP du service est "<Code>"
    And le pourcentage de la remise est <Pourcentage>
    Examples:
      | Total | Catégorie  | Code | Pourcentage |
      | 10.00 | BONNE      | OK   | 7           |
      | 10.01 | BONNE      | OK   | 1           |
      | 50.01 | BONNE      | OK   | 1           |
      | 0.01  | EXCELLENTE | OK   | 1           |
      | 50.00 | EXCELLENTE | OK   | 1           |
      | 50.01 | EXCELLENTE | OK   | 5           |


  Scenario: Calcul de la remise avec un totale négatif
    Given le total de la commande est -10.00
    And la catégorie du client est "EXCELLENTE"
    When la remise est calculée
    Then le code de réponse HTTP du service est "BAD REQUEST"
    And  la reponse du service contient le message d'erreur "Le montant total de la commande doit être positif !"


  Scenario: Calculer la remise pour un totale de commande pour une catégorie non supportée
    Given le total de la commande est 10.00
    And la catégorie du client est "SUPER_EXCELLENTE"
    When la remise est calculée
    Then le code de réponse HTTP du service est "BAD REQUEST"
    And  la reponse du service contient le message d'erreur "La catégorie SUPER_EXCELLENTE n'est pas supportée"


  Scenario Outline: Calculer la remise pour un totale de commande pour une catégorie non supportée v2
    Given le total de la commande est 10.00
    And la catégorie du client est "<catégorie>"
    When la remise est calculée
    Then le code de réponse HTTP du service est "BAD REQUEST"
    And  la reponse du service contient le message d'erreur "<message>"
    Examples:
      | catégorie        | message                                           |
      | SUPER_EXCELLENTE | La catégorie SUPER_EXCELLENTE n'est pas supportée |
      | SUPER            | La catégorie SUPER n'est pas supportée            |