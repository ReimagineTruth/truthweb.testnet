export function Footer() {
    return `
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
    `;
}