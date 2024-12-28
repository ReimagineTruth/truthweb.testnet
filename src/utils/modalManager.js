export class ModalManager {
    constructor(modalId, openBtnId, closeBtnId) {
        this.modal = document.getElementById(modalId);
        this.openBtn = document.getElementById(openBtnId);
        this.closeBtn = document.getElementById(closeBtnId);
        this.init();
    }

    init() {
        if (this.openBtn) this.openBtn.addEventListener('click', () => this.open());
        if (this.closeBtn) this.closeBtn.addEventListener('click', () => this.close());
        if (this.modal) {
            window.addEventListener('click', (e) => {
                if (e.target === this.modal) this.close();
            });
        }
    }

    open() {
        if (this.modal) this.modal.style.display = 'block';
    }

    close() {
        if (this.modal) this.modal.style.display = 'none';
    }
}