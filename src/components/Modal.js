export class Modal {
    constructor() {
        this.modal = document.getElementById('infoModal');
        this.openBtn = document.getElementById('openModalButton');
        this.closeBtn = document.getElementById('closeModalButton');
        
        if (!this.modal || !this.openBtn || !this.closeBtn) {
            console.error('Modal elements not found');
            return;
        }
        
        this.init();
    }

    init() {
        this.openBtn.addEventListener('click', () => this.open());
        this.closeBtn.addEventListener('click', () => this.close());
    }

    open() {
        this.modal.style.display = 'block';
    }

    close() {
        this.modal.style.display = 'none';
    }
}