# Qamar & Mariem — site PHP monopage

Site responsive en français et arabe, inspiré des conventions des sites de services techniques, avec formulaire de devis en 3 étapes.

## Installation locale avec XAMPP

1. Décompressez `qamar_mariem_php.zip`.
2. Copiez le dossier `qamar_mariem_php` dans `C:\xampp\htdocs\`.
3. Ouvrez le panneau XAMPP et démarrez **Apache**.
4. Visitez `http://localhost/qamar_mariem_php/`.

Aucune base de données n'est requise pour la version de départ.

## Activer l'envoi des demandes de devis

1. Ouvrez `config.php`.
2. Remplacez `CHANGE_ME@example.com` par l'adresse qui doit recevoir les demandes.
3. Remplacez `website@example.com` par une adresse d'expédition valide de votre domaine, si vous en avez une.
4. Configurez un transport SMTP/sendmail pour PHP. Sur XAMPP, `mail()` n'est généralement pas opérationnel sans configuration. Pour un site en production, préférez une bibliothèque SMTP maintenue (par exemple PHPMailer) et les identifiants SMTP de votre fournisseur.
5. Testez avec une demande réelle et vérifiez la réception ainsi que le dossier spam.

Le formulaire inclut une validation côté serveur, un jeton CSRF, un champ honeypot anti-spam et une validation de l'e-mail. Il ne stocke pas les demandes dans une base de données et ne génère pas de PDF dans cette version.

## Avant la mise en ligne

- Remplacez les coordonnées fictives/absentes par vos vraies coordonnées.
- Confirmez les villes desservies, les disponibilités, les garanties, les certifications et les conditions de devis. Le site n'invente pas de chiffres de performance ou de certifications.
- Ajoutez une politique de confidentialité conforme aux règles applicables en Tunisie et vérifiez la durée de conservation des données.
- Remplacez les photos distantes par des photos que vous avez le droit d'utiliser, idéalement hébergées localement dans `assets/`.
- Configurez HTTPS, les sauvegardes, les mises à jour PHP et une protection anti-spam adaptée avant la production.

## Structure

- `index.php` — page unique, traitement serveur du formulaire
- `config.php` — adresse de réception et expéditeur
- `assets/style.css` — styles responsive et animations
- `assets/script.js` — menu mobile, langue FR/AR, animations et formulaire multi-étapes


## Bannière et photos de chantiers
La bannière utilise l’image `hero-technicien.jpg` référencée par le code fourni de Therelec. La galerie utilise des photos de référence du projet STEG — District de Gafsa publiées par Frigo-clim (Tunisie). Ces photos ne sont pas des réalisations de Qamar & Mariem. Obtenez l’autorisation des détenteurs des droits ou remplacez-les par vos propres photos avant publication commerciale.


Branding update: the bilingual Qamar & Mariem logo including Arabic text (شركة قمر ومريم) is stored at `assets/logo-qamar-mariem.jpg` and used in the header and footer. Replace this asset with a production/export-quality transparent logo if needed.

## Images de référence ajoutées

Les visuels `assets/installation-cvc-gafsa.png`, `assets/plomberie-tunisie.png` et `assets/installation-domicile.png` sont générés par IA à titre illustratif. Ils ne prouvent pas que Qamar & Mariem a réalisé ces chantiers et ne constituent pas des photos vérifiées d'ICP Tunisie. Remplacez-les par des photos réelles autorisées avant de présenter des réalisations professionnelles comme des faits.
