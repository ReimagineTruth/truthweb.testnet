export function Navigation() {
    return `
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
    `;
}