export function ModalContent() {
    return `
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
    `;
}