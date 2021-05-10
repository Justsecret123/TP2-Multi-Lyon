# TP2-Multi-Lyon

# Scripts

## Build

> *npm run build*

Ce script exécute le build du projet en mode "production", via la commande > *webpack --mode production*

## Dev

> *npm run dev*

Ce script exécute le build du projet en mode "dev", via la commande > *webpack --mode development && node server/index.js"*

# Déploiement sur Heroku

## Création du repo Heroku

> *heroku create*

Cette commande permet de créer un nouveau projet heroku

## Déploiement

> *git push heroku master*

Cette commande permet de déployer notre projet nommé "Heroku" sur heroku.

# Additional notes

## Organisation du TP

- Ce projet a été organisé un peu plus dans le sens de Trello, avec les différents boards affichés sur la même page, ces Boards contenant différents postits.

- Il suffit de cliquer sur le lien "Go to" d'un board pour être redirigé vers la route contenant ledit Board

> *Il est possible de modifier les Postits d'un Board dans la route contenant son id; les modifications seront propagées à l'état de l'application.*