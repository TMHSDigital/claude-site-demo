// integration-loader.js

export default class IntegrationLoader {
    constructor(contentElement) {
        this.contentElement = contentElement;
        this.currentIntegration = null;
    }

    async loadIntegration(integrationId) {
        // Unload current integration if exists
        if (this.currentIntegration) {
            await this.currentIntegration.unload();
        }

        // Load new integration
        try {
            const module = await import(`./integrations/${integrationId}/demo.js`);
            this.currentIntegration = new module.default(this.contentElement);
            await this.currentIntegration.init();
        } catch (error) {
            console.error('Error loading integration:', error);
            this.contentElement.innerHTML = '<p>Error loading integration. Please try again.</p>';
        }
    }
}