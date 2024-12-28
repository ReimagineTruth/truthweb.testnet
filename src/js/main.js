import { Header } from '../components/Header.js';
import { Navigation } from '../components/Navigation.js';
import { Hero } from '../components/Hero/Hero.js';
import { NFTGallery } from '../components/NFTGallery/NFTGallery.js';
import { Footer } from '../components/Footer/Footer.js';
import { ModalContent } from '../components/ModalContent.js';
import { ModalManager } from '../utils/modalManager.js';
import { initializeScrollEffects } from '../utils/scrollEffects.js';
import { initializeAnimations } from '../utils/animations.js';

document.addEventListener('DOMContentLoaded', () => {
    const app = document.getElementById('app');
    
    // Render components
    app.innerHTML = `
        ${Header()}
        ${Navigation()}
        ${Hero()}
        ${NFTGallery()}
        ${ModalContent()}
        ${Footer()}
    `;

    // Initialize components
    new ModalManager('infoModal', 'openModalButton', 'closeModalButton');
    initializeScrollEffects();
    initializeAnimations();

    // Handle NFT card clicks
    document.querySelectorAll('.card .btn').forEach(button => {
        button.addEventListener('click', (e) => {
            e.preventDefault();
            const nftId = e.target.closest('.card').dataset.nftId;
            console.log(`Viewing NFT ${nftId}`);
        });
    });
});