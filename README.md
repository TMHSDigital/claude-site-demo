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
- **Mind Mapping Tool**: Interactive tool for creating and visualizing mind maps.

## Project Structure

```
claude-site-demo/
├── index.html                 # Main entry point
├── css/
│   ├── styles.css             # Global styles
│   └── mind-map.css           # Styles specific to mind mapping tool
├── js/
│   ├── main.js                # Main site functionality
│   └── integration-loader.js  # Handles dynamic loading of integrations
├── integrations/
│   ├── integrations.json      # Configuration for available integrations
│   ├── hello-world/
│   │   └── demo.js            # Demo code for Hello World integration
│   └── mind-map/
│       └── demo.js            # Demo code for Mind Mapping integration
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
3. Update the `integrations.json` file to include your new integration.

### Running Locally

To test the site locally:

1. Install a local server if you don't have one. For example, using Python:
   ```
   python -m http.server 8000
   ```
2. Open a browser and navigate to `http://localhost:8000`

### Deployment

The site is automatically deployed to GitHub Pages when changes are pushed to the main branch. To manually deploy:

1. Go to your repository on GitHub.
2. Navigate to Settings > Pages.
3. Ensure the source is set to deploy from the main branch.

## Current Integrations

1. **Hello World**: A simple demonstration integration.
2. **Mind Mapping Tool**: Create and visualize mind maps to organize your ideas.

## Upcoming Features

We're excited to announce upcoming productivity tool integrations:

1. **To-Do List Application**: A robust task management system with priority setting and categorization.
2. **Pomodoro Timer**: Boost productivity with customizable work and break intervals.
3. **Note-Taking App**: Organize thoughts and information with rich text editing and tagging.
4. **Time Tracker**: Monitor and analyze time usage across different activities and projects.
5. **Habit Tracker**: Build and maintain positive habits with streak tracking and progress visualization.

Stay tuned for these exciting additions to our Claude Site Demo!

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
- D3.js library for powering our Mind Mapping tool.
- Inspired by the need for flexible, easy-to-update product demos.

## Contact

For any questions or feedback, please open an issue in the GitHub repository.