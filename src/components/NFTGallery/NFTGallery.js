export function NFTGallery() {
    const nfts = [
        {
            id: 1,
            title: "Digital Dreamscape",
            description: "A surreal journey through digital realms",
            imageUrl: "https://picsum.photos/600/400?random=1"
        },
        {
            id: 2,
            title: "Cosmic Connection",
            description: "Bridging worlds through digital art",
            imageUrl: "https://picsum.photos/600/400?random=2"
        },
        {
            id: 3,
            title: "Neural Networks",
            description: "Abstract visualization of AI consciousness",
            imageUrl: "https://picsum.photos/600/400?random=3"
        }
    ];

    return `
        <section class="text-center" id="explore">
            <h2 class="text-3xl font-bold mb-8 fade-in">Discover the Hidden Realms</h2>
            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                ${nfts.map((nft, index) => `
                    <div class="card fade-in" style="animation-delay: ${index * 0.2}s;">
                        <img src="${nft.imageUrl}" alt="${nft.title}" class="w-full h-64 object-cover rounded mb-4" width="600" height="400"/>
                        <h3 class="text-xl font-semibold mb-2">${nft.title}</h3>
                        <p class="mb-4">${nft.description}</p>
                        <button class="btn" onclick="window.location.href='#nft/${nft.id}'">View NFT</button>
                    </div>
                `).join('')}
            </div>
        </section>
    `;
}