// main.js

document.addEventListener('DOMContentLoaded', () => {
    const integrationNav = document.getElementById('integration-nav');
    const integrationTitle = document.getElementById('integration-title');
    const integrationDescription = document.getElementById('integration-description');
    const demoContent = document.getElementById('demo-content');

    let currentIntegration = null;

    async function loadIntegrations() {
        try {
            const response = await fetch('integrations/integrations.json');
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            const integrations = await response.json();
            
            integrations.forEach(integration => {
                const li = document.createElement('li');
                const a = document.createElement('a');
                a.href = '#';
                a.textContent = integration.name;
                a.addEventListener('click', (e) => {
                    e.preventDefault();
                    loadIntegration(integration);
                });
                li.appendChild(a);
                integrationNav.appendChild(li);
            });
        } catch (error) {
            console.error('Error loading integrations:', error);
            integrationNav.innerHTML = '<li>Error loading integrations</li>';
        }
    }

    async function loadIntegration(integration) {
        integrationTitle.textContent = integration.name;
        integrationDescription.textContent = integration.description;

        // Unload current integration if exists
        if (currentIntegration && currentIntegration.unload) {
            await currentIntegration.unload();
        }

        demoContent.innerHTML = '<p>Loading integration...</p>'; // Loading indicator

        try {
            console.log(`Attempting to load integration: ${integration.id}`);
            const module = await import(`./integrations/${integration.id}/demo.js`);
            console.log('Module loaded successfully');

            if (typeof module.default !== 'function') {
                throw new Error('Integration module does not export a default class');
            }

            currentIntegration = new module.default(demoContent);
            
            if (typeof currentIntegration.init !== 'function') {
                throw new Error('Integration class does not have an init method');
            }

            await currentIntegration.init();
            console.log('Integration initialized successfully');
        } catch (error) {
            console.error('Error loading integration:', error);
            demoContent.innerHTML = `<p>Error loading integration: ${error.message}. Please try again.</p>`;
        }
    }

    // Check if D3.js is loaded
    if (typeof d3 === 'undefined') {
        console.error('D3.js is not loaded. Mind mapping tool may not work correctly.');
    }

    loadIntegrations();
});