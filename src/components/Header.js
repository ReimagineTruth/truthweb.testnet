export function Header() {
    return `
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
    `;
}