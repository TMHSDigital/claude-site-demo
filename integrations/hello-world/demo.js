// integrations/hello-world/demo.js

export default class HelloWorldIntegration {
    constructor(container) {
        this.container = container;
    }

    async init() {
        this.container.innerHTML = `
            <h2>Hello World Integration</h2>
            <p>This is a simple demonstration of a dynamically loaded integration.</p>
            <button id="greet-btn">Click me!</button>
        `;

        document.getElementById('greet-btn').addEventListener('click', () => {
            alert('Hello from the integration!');
        });
    }

    async unload() {
        // Clean up any event listeners or resources
        document.getElementById('greet-btn').removeEventListener('click');
    }
}