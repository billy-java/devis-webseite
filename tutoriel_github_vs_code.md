# Tutoriel : Mettre à jour un projet Git sur GitHub avec Visual Studio Code

Voici un guide rapide pour mettre à jour un projet sur GitHub en utilisant Visual Studio Code (VS Code) et Git.

## 1. Ouvrir le projet dans VS Code

- Lance VS Code et ouvre ton projet.
- Assure-toi que Git est bien configuré.

## 2. Vérifier l'état des fichiers

- Ouvre le terminal intégré dans VS Code (`Terminal > Nouveau Terminal`).
- Vérifie les fichiers modifiés avec la commande :
  ```bash
  git status
  ```

## 3. Ajouter les modifications

- Pour ajouter tous les fichiers modifiés et nouveaux :
  ```bash
  git add .
  ```

## 4. Faire un commit

- Enregistre les changements avec un message de commit :

  ```bash
  git commit -m "Ton message de commit"
  ```

- ### Pour verifier ta branche tu dois faire : `git branch`

  ```bash
  git branch
  ```

## 5. Pousser vers GitHub

- Si ta branche principale est `master`, utilise :
  ```bash
  git push origin master
  ```
- Si c’est `main`, remplace `master` par `main` dans la commande :
  ```bash
  git push origin main
  ```

Et voilà, ton projet est maintenant mis à jour sur GitHub !
