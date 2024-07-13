// main.js

document.addEventListener('DOMContentLoaded', () => {
    const integrationNav = document.getElementById('integration-nav');
    const integrationTitle = document.getElementById('integration-title');
    const integrationDescription = document.getElementById('integration-description');
    const demoContent = document.getElementById('demo-content');

    // Function to load available integrations
    async function loadIntegrations() {
        try {
            const response = await fetch('integrations/integrations.json');
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
        }
    }

    // Function to load a specific integration
    async function loadIntegration(integration) {
        integrationTitle.textContent = integration.name;
        integrationDescription.textContent = integration.description;

        try {
            const module = await import(`./integrations/${integration.id}/demo.js`);
            demoContent.innerHTML = ''; // Clear previous content
            module.default(demoContent);
        } catch (error) {
            console.error('Error loading integration:', error);
            demoContent.innerHTML = '<p>Error loading integration. Please try again.</p>';
        }
    }

    // Initial load of integrations
    loadIntegrations();
});