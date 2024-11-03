# final_portfolio

Portfolio de Melinda Esteves Mendes <br/><br/>
Bienvenue dans mon portfolio en one-page ! Ce projet présente mes compétences, mes projets, et mon parcours de manière interactive et responsive.

🎯 Objectifs<br/>
Ce portfolio a été conçu pour :

Mettre en valeur mes compétences en développement web.
Offrir une interface engageante et facile à naviguer.
Fournir un moyen de contact direct avec un formulaire qui envoie des notifications par email.

🛠️ Technologies Utilisées <br/><br/>
Front-end : React, Tailwind CSS, Vite <br/>
Back-end : Node.js, Express <br/>
Base de données : MongoDB (pour enregistrer les messages de contact) <br/>
Email : EmailJS pour l'envoi de notifications et confirmations automatiques

📂 Structure du Projet <br/><br/>
frontend/ : Code source du front-end React. <br/>
backend/ : Code source du back-end Node.js (Express) pour gérer les API et les messages. <br/>

🚀 Installation et Lancement en Local
Prérequis
Node.js (v14 ou plus) et npm
MongoDB (en local ou en ligne)
EmailJS pour les envois d'email

Étapes d'Installation

Cloner le projet :<br/>
git clone <url_du_projet><br/>
cd <nom_du_projet>

Installer les dépendances :

Back-end : <br/>
cd server<br/>
npm install

Front-end :<br/>
cd ../client<br/>
npm install

Configurer les variables d'environnement :

Crée un fichier .env dans le dossier server avec les variables suivantes :<br/>
VITE_EMAILJS_PUBLIC_KEY=ton_public_key_emailjs<br/>
VITE_EMAILJS_SERVICE_ID=ton_service_id<br/>
VITE_EMAILJS_TEMPLATE_ID=ton_template_id<br/>
VITE_EMAILJS_TEMPLATE_ID_CONFIRMATION=ton_template_id_confirmation<br/>
MONGODB_URI=ta_mongodb_uri

Lancer le projet en local :

Back-end :<br/>
cd server<br/>
node server.js

Front-end :<br/>
cd ../client<br/>
npm run dev

L'application sera accessible en local à l'adresse http://localhost:3000.

📩 Fonctionnalité de Contact<br/>
Le formulaire de contact envoie les messages en utilisant EmailJS et MongoDB pour conserver les informations. Les visiteurs reçoivent une confirmation automatique une fois le message envoyé.

✨ Features<br/>
Design Responsive pour une expérience optimale sur tous les appareils.
Carrousel de Projets pour parcourir facilement mes travaux.
Formulaire de Contact qui envoie une confirmation de réception par email.<br/>

📝 License<br/>
Ce projet est sous licence MIT.
