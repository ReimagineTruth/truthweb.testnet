(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const i of o.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&r(i)}).observe(document,{childList:!0,subtree:!0});function s(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(e){if(e.ep)return;e.ep=!0;const o=s(e);fetch(e.href,o)}})();function l(){return`
        <header class="sticky-header flex justify-between items-center h-16 px-4">
            <div class="flex items-center">
                <a href="home.html" class="text-[var(--text-color)] mr-4 flex items-center">
                    <span class="logo-text ml-2">TruthWeb</span>
                </a>
            </div>
            <div class="flex items-center">
                <a href="notifications.html" class="text-[var(--text-color)] mr-4 icon">
                    <i class="fas fa-bell text-xl sm:text-2xl"></i>
                </a>
                <a href="messages.html" class="text-[var(--text-color)] mr-4 icon">
                    <i class="fas fa-comments text-xl sm:text-2xl"></i>
                </a>
                <a href="profile.html" class="text-[var(--text-color)] icon">
                    <i class="fas fa-user text-xl sm:text-2xl"></i>
                </a>
            </div>
        </header>
    `}function c(){return`
        <nav class="bg-[var(--primary-color)] py-4">
            <ul class="flex justify-center space-x-4">
                <li class="nav-item">
                    <a href="#home" class="text-[var(--text-color)] hover:text-[var(--highlight-color)]">Home</a>
                </li>
                <li class="nav-item">
                    <a href="#about" class="text-[var(--text-color)] hover:text-[var(--highlight-color)]">About</a>
                </li>
                <li class="nav-item">
                    <a href="#services" class="text-[var(--text-color)] hover:text-[var(--highlight-color)]">Services</a>
                </li>
                <li class="nav-item">
                    <a href="#contact" class="text-[var(--text-color)] hover:text-[var(--highlight-color)]">Contact</a>
                </li>
                <li class="nav-item">
                    <button id="openModalButton" class="text-[var(--text-color)] hover:text-[var(--highlight-color)]">More</button>
                </li>
            </ul>
        </nav>
    `}function n(){return`
        <div class="hero">
            <h1 class="glow-text fade-in">TruthWeb</h1>
            <p class="text-xl mt-4 text-center fade-in" style="animation-delay: 0.5s;">
                Step into the realm of Reimagine Truth
            </p>
            <a href="#explore" class="btn mt-6 fade-in" style="animation-delay: 1s;">
                Explore the Mystery
            </a>
        </div>
    `}function d(){return`
        <section class="text-center" id="explore">
            <h2 class="text-3xl font-bold mb-8 fade-in">Discover the Hidden Realms</h2>
            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                ${[{id:1,title:"Digital Dreamscape",description:"A surreal journey through digital realms",imageUrl:"https://picsum.photos/600/400?random=1"},{id:2,title:"Cosmic Connection",description:"Bridging worlds through digital art",imageUrl:"https://picsum.photos/600/400?random=2"},{id:3,title:"Neural Networks",description:"Abstract visualization of AI consciousness",imageUrl:"https://picsum.photos/600/400?random=3"}].map((t,s)=>`
                    <div class="card fade-in" style="animation-delay: ${s*.2}s;">
                        <img src="${t.imageUrl}" alt="${t.title}" class="w-full h-64 object-cover rounded mb-4" width="600" height="400"/>
                        <h3 class="text-xl font-semibold mb-2">${t.title}</h3>
                        <p class="mb-4">${t.description}</p>
                        <button class="btn" onclick="window.location.href='#nft/${t.id}'">View NFT</button>
                    </div>
                `).join("")}
            </div>
        </section>
    `}function h(){return`
        <footer class="bg-[var(--primary-color)] py-8">
            <div class="container mx-auto text-center">
                <div class="mb-4">
                    <a href="https://www.facebook.com" target="_blank" class="text-[var(--text-color)] mx-2">
                        <i class="fab fa-facebook-f"></i>
                    </a>
                    <a href="https://www.twitter.com" target="_blank" class="text-[var(--text-color)] mx-2">
                        <i class="fab fa-twitter"></i>
                    </a>
                    <a href="https://www.instagram.com" target="_blank" class="text-[var(--text-color)] mx-2">
                        <i class="fab fa-instagram"></i>
                    </a>
                    <a href="https://www.linkedin.com" target="_blank" class="text-[var(--text-color)] mx-2">
                        <i class="fab fa-linkedin-in"></i>
                    </a>
                </div>
                <p class="text-[var(--text-color)] mb-4">© 2024 TruthWeb. All rights reserved.</p>
                <p class="text-[var(--text-color)]">Designed by Reimagine Truth Organization</p>
            </div>
        </footer>
    `}function m(){return`
        <div class="modal" id="infoModal">
            <div class="modal-content">
                <span class="close" id="closeModalButton">×</span>
                <h2>More Options</h2>
                <ul class="mt-4">
                    <li class="mb-2"><a href="#faq" class="text-[var(--primary-color)] hover:text-[var(--highlight-color)]">FAQ</a></li>
                    <li class="mb-2"><a href="#support" class="text-[var(--primary-color)] hover:text-[var(--highlight-color)]">Support</a></li>
                    <li class="mb-2"><a href="#blog" class="text-[var(--primary-color)] hover:text-[var(--highlight-color)]">Blog</a></li>
                    <li class="mb-2"><a href="#careers" class="text-[var(--primary-color)] hover:text-[var(--highlight-color)]">Careers</a></li>
                </ul>
            </div>
        </div>
    `}class f{constructor(t,s,r){this.modal=document.getElementById(t),this.openBtn=document.getElementById(s),this.closeBtn=document.getElementById(r),this.init()}init(){this.openBtn&&this.openBtn.addEventListener("click",()=>this.open()),this.closeBtn&&this.closeBtn.addEventListener("click",()=>this.close()),this.modal&&window.addEventListener("click",t=>{t.target===this.modal&&this.close()})}open(){this.modal&&(this.modal.style.display="block")}close(){this.modal&&(this.modal.style.display="none")}}function u(){window.addEventListener("scroll",()=>{const a=document.querySelector(".sticky-header"),t=document.querySelector(".logo-text");window.scrollY>0?(a.classList.add("scrolled"),t.classList.add("scrolled")):(a.classList.remove("scrolled"),t.classList.remove("scrolled"))})}function v(){const a={threshold:.1,rootMargin:"0px"},t=new IntersectionObserver(s=>{s.forEach(r=>{r.isIntersecting&&(r.target.classList.add("visible"),t.unobserve(r.target))})},a);document.querySelectorAll(".fade-in").forEach(s=>{t.observe(s)})}document.addEventListener("DOMContentLoaded",()=>{const a=document.getElementById("app");a.innerHTML=`
        ${l()}
        ${c()}
        ${n()}
        ${d()}
        ${m()}
        ${h()}
    `,new f("infoModal","openModalButton","closeModalButton"),u(),v(),document.querySelectorAll(".card .btn").forEach(t=>{t.addEventListener("click",s=>{s.preventDefault();const r=s.target.closest(".card").dataset.nftId;console.log(`Viewing NFT ${r}`)})})});
