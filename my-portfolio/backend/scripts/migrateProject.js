const path = require('path');
require('dotenv').config({ path: path.join(__dirname, '..', '.env') });
const mongoose = require('mongoose');
const Project = require('../models/Project');
const fs = require('fs-extra');

const projects = [
  {
    title: "Previously_On",
    description: "Projet visant à utiliser l'API de Betaseries pour regrouper les séries vues et à voir, en React.",
    image: "/previously.png",
    githubLink: "https://github.com/Melinda-EM/Previously_on"
  },
  {
    title: "Html_Gaming",
    description: "Création d'un jeu vidéo de type fighting game en HTML, CSS et JavaScript/Phaser.js.",
    image: "/gaming.png",
    githubLink: "https://github.com/Melinda-EM/HtmlGaming"    
  },
  {
    title: "Connect_Four",
    description: "Création d'un puissance 4 en Javascript vanilla.",
    image: "/connectFour.png",
    githubLink: "https://github.com/Melinda-EM/ConnectFour"
  },
  {
    title: "Game_Of_Life",
    description: "Reproduction de Meetic dans l\'univers du jeu vidéo, en PHP, Javascript et HTML.",
    image: "/meetic.png",
    githubLink: "https://github.com/Melinda-EM/MyMeetic"
  },
  {
    title: "Rezotop",
    description: "Site de mise en relation poseur de film et client pour la société Réflectiv, en Symfony/React.",
    image: "/rezotop.png",
    websiteLink: 'https://www.rezotop.com/'
  },
  {
    title: "Pictioble_Io",
    description: "Reproduction de scribble.io, dessin en temps réel en Golang, HTMl, CSS et Javascript.",
    image: "/pictioble.io.png",
    githubLink: "https://github.com/Melinda-EM/Pictioble.io"
  },
];

async function migrateProjects() {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log('✅ Connecté à MongoDB');
    
    const rootDir = path.join(__dirname, '..');
    const publicDir = path.join(rootDir, 'public', 'images');
    const frontendPublicDir = path.join(rootDir, '..', 'frontend', 'public');
    
    await fs.ensureDir(publicDir);
    console.log('✅ Dossier public/images vérifié');

    for (const project of projects) {
        try {
            const sourceImagePath = path.join(frontendPublicDir, project.image);
            const imageName = path.basename(project.image);
            const destImagePath = path.join(publicDir, imageName);
            
            console.log(`Copie de ${sourceImagePath} vers ${destImagePath}`);

            if (await fs.pathExists(sourceImagePath)) {
                await fs.copy(sourceImagePath, destImagePath);
                console.log(`✅ Image copiée: ${imageName}`);
            } else {
                console.warn(`⚠️ Image source introuvable: ${sourceImagePath}`);
                continue;
            }
            
            const imageUrl = `/images/${imageName}`;
            
            const exists = await Project.findOne({ title: project.title });
            
            if (!exists) {
                await Project.create({
                    ...project,
                    image: imageUrl
                });
                console.log(`✅ Projet ${project.title} créé`);
            } else {
                await Project.findOneAndUpdate(
                    { title: project.title },
                    { ...project, image: imageUrl },
                    { new: true }
                );
                console.log(`✅ Projet ${project.title} mis à jour`);
            }
        } catch (error) {
            console.error(`❌ Erreur pour le projet ${project.title}:`, error);
        }
    }

    console.log('✅ Migration terminée avec succès');
    await mongoose.connection.close();
    process.exit(0);
  } catch (error) {
    console.error('❌ Erreur durant la migration:', error);
    if (mongoose.connection) await mongoose.connection.close();
    process.exit(1);
  }
}

migrateProjects();