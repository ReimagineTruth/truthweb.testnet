export function NFTCard({ title, description, imageUrl }) {
    return `
        <div class="card fade-in">
            <img src="${imageUrl}" alt="${title}" class="w-full h-64 object-cover rounded mb-4" width="600" height="400"/>
            <h3 class="text-xl font-semibold mb-2">${title}</h3>
            <p class="mb-4">${description}</p>
            <button class="btn">View NFT</button>
        </div>
    `;
}