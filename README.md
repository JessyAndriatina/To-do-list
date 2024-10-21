# Application To-Do List

Une application mobile simple développée en React Native pour gérer les tâches quotidiennes.

## Technologies Utilisées

- React Native
- JSON Server
- Expo

## Fonctionnalités

- Ajouter une nouvelle tâche.
- Afficher la liste des tâches.
- Marquer une tâche comme terminée.
- Supprimer une tâche.
- Filtrer les tâches.
- Rechercher des tâches par titre.

## Prérequis

Assurez-vous d'avoir installé :

- Node.js
- Expo CLI
- JSON Server

## Installation

1. Clonez le dépôt ou téléchargez les fichiers.
2. Installez les dépendances :  npm install
3. Lancez JSON Server: json-server --watch ./api/db.json
4. Dans un autre terminal, démarrez l'application Expo : npx expo start

Note : Si vous souhaitez tester l'application sur un téléphone, remplacez localhost par votre adresse IP dans l'URL de l'API. Par exemple, si votre adresse IP est 192.168.1.100, l'URL de votre API sera http://192.168.1.100:3000.

## Architecture du Projet

 MVC (Modèle-Vue-Contrôleur)
  - Modèle (Model) : Gère les données des tâches et les opérations CRUD via JSON Server.
  - Vue (View) : Composants React Native affichant la liste des tâches et les formulaires d'ajout.
  - Contrôleur (Controller) : Gère les interactions de l'utilisateur et la communication entre le modèle et la vue.






