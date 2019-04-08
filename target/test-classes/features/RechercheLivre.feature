@sprint-02
Feature: Recherche d'un livre

  En tant que client
  Je veux pouvoir rechercher les détails d'un livre existant
  Afin d'acheter un livre

  Scenario:Rechercher un livre existant par ISBN
    Given le catalogue contient ces livres
      | ISBN   | Titre    | Prix | Résumé                    | Auteur |
      | TN00A1 | ATDD/BDD | 90   | Pratiques agiles ATDD/BDD | Tawfik |
      | TN00A2 | Cucumber | 45   | Outil ATDD/BDD            | Tawfik |
      | TN00A3 | Docker   | 35   | DevOps                    | Tawfik |
    When je cherche un livre avec ISBN "TN00A1"
    Then je devrais obtenir le livre
      | ISBN   | Titre    | Prix | Résumé                    | Auteur |
      | TN00A1 | ATDD/BDD | 90   | Pratiques agiles ATDD/BDD | Tawfik |




  Scenario:Rechercher un livre par ISBN incorrect
    Given le catalogue contient ces livres
      | ISBN   | Titre    | Prix | Résumé                    | Auteur |
      | TN00A1 | ATDD/BDD | 90   | Pratiques agiles ATDD/BDD | Tawfik |
      | TN00A2 | Cucumber | 45   | Outil ATDD/BDD            | Tawfik |
      | TN00A3 | Docker   | 35   | DevOps                    | Tawfik |
    When je cherche un livre avec ISBN "NT12345"
    Then La liste des livres devrait être vide
    And  la reponse du service contient le message d'erreur "Désolé, aucun résultat n'a été trouvé."


  Scenario:Rechercher un livre existant par titre
    Given le catalogue contient ces livres
      | ISBN   | Titre    | Prix | Résumé                    | Auteur |
      | TN00A1 | ATDD/BDD | 90   | Pratiques agiles ATDD/BDD | Tawfik |
      | TN00A2 | Cucumber | 45   | Outil ATDD/BDD            | Tawfik |
      | TN00A3 | Docker   | 35   | DevOps                    | Tawfik |
    When je cherche un livre avec le titre "Cucumber"
    Then je devrais obtenir le livre
      | ISBN   | Titre    | Prix | Résumé         | Auteur |
      | TN00A2 | Cucumber | 45   | Outil ATDD/BDD | Tawfik |