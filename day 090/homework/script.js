class SecureNote {
    #content;
    #pin;

    constructor(content, pin) {
        this.#content = content;
        this.#pin = pin;
    }
    
    #validatePin(pin) {
        return pin === this.#pin;
    }
    
    updateContent(newContent, pin) {
        if (this.#validatePin(pin)) {
        this.#content = newContent;
        } else {
        throw new Error("Invalid PIN.");
    }
    }

    getContent(pin) {
        if (this.#validatePin(pin)) {
            return this.#content;
        } else {
            return "Access denied.";
    }
    }
}