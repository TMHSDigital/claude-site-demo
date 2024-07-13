# Claude Site Demo

![GitHub last commit](https://img.shields.io/github/last-commit/TMHSDigital/claude-site-demo)
![GitHub repo size](https://img.shields.io/github/repo-size/TMHSDigital/claude-site-demo)
![GitHub stars](https://img.shields.io/github/stars/TMHSDigital/claude-site-demo?style=social)
![GitHub forks](https://img.shields.io/github/forks/TMHSDigital/claude-site-demo?style=social)

![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)
![GitHub Pages](https://img.shields.io/badge/GitHub%20Pages-222222?style=for-the-badge&logo=GitHub%20Pages&logoColor=white)

## Overview

Claude Site Demo is a dynamic, modular website hosted on GitHub Pages, designed to showcase various product and software integrations. This project demonstrates how to create a flexible platform for presenting different technologies, APIs, or services in an easily swappable manner.

## Features

- **Modular Integration System**: Easily add, remove, or swap out different product/software demonstrations.
- **Dynamic Content Loading**: Utilizes JavaScript to load integration demos on-the-fly without page reloads.
- **Responsive Design**: Ensures a seamless experience across various devices and screen sizes.
- **GitHub Pages Hosting**: Leverages free and easy deployment through GitHub Pages.
- **Expandable Architecture**: Designed to accommodate future growth and additional integrations.

## Project Structure

```
claude-site-demo/
├── index.html                 # Main entry point
├── css/
│   └── styles.css             # Global styles
├── js/
│   ├── main.js                # Main site functionality
│   └── integration-loader.js  # Handles dynamic loading of integrations
├── integrations/
│   ├── integration1/
│   │   ├── demo.js            # Demo code for integration 1
│   │   └── config.json        # Configuration for integration 1
│   ├── integration2/
│   │   ├── demo.js
│   │   └── config.json
│   └── ...
├── assets/
│   ├── images/
│   └── fonts/
├── _config.yml                # GitHub Pages configuration
└── README.md                  # This file
```

## Getting Started

### Prerequisites

- A GitHub account
- Basic knowledge of HTML, CSS, and JavaScript
- Git installed on your local machine

### Setup

1. Clone the repository:
   ```
   git clone https://github.com/TMHSDigital/claude-site-demo.git
   ```
2. Navigate to the project directory:
   ```
   cd claude-site-demo
   ```
3. Open the project in your preferred code editor.

### Adding a New Integration

1. Create a new folder in the `integrations/` directory with your integration name.
2. Add a `demo.js` file in this new folder with your integration's demo code.
3. Create a `config.json` file in the same folder with metadata about your integration.
4. Update the navigation in `index.html` to include your new integration.

### Deployment

The site is automatically deployed to GitHub Pages when changes are pushed to the main branch. To manually deploy:

1. Go to your repository on GitHub.
2. Navigate to Settings > Pages.
3. Ensure the source is set to deploy from the main branch.

## Contributing

We welcome contributions to the Claude Site Demo! Please follow these steps:

1. Fork the repository.
2. Create a new branch for your feature or bug fix.
3. Make your changes and commit them with clear, descriptive messages.
4. Push your changes to your fork.
5. Submit a pull request with a clear description of your changes.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- Thanks to GitHub for providing GitHub Pages hosting.
- Inspired by the need for flexible, easy-to-update product demos.

## Contact

For any questions or feedback, please open an issue in the GitHub repository.