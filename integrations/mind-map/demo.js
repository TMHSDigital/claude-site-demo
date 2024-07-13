// integrations/mind-map/demo.js

export default class MindMapIntegration {
    constructor(container) {
        this.container = container;
    }

    async init() {
        if (typeof d3 === 'undefined') {
            throw new Error('D3.js is not loaded. Please ensure it is included in your HTML file.');
        }

        this.container.innerHTML = `
            <h2>Mind Mapping Tool</h2>
            <div id="mind-map-controls">
                <input type="text" id="node-input" placeholder="Enter node text">
                <button id="add-node">Add Node</button>
                <button id="reset-map">Reset Map</button>
            </div>
            <div id="mind-map-container"></div>
        `;

        this.initMindMap();
        this.addEventListeners();
    }

    initMindMap() {
        const width = 800;
        const height = 600;

        this.svg = d3.select('#mind-map-container')
            .append('svg')
            .attr('width', width)
            .attr('height', height);

        this.root = d3.hierarchy({
            name: "Central Idea",
            children: []
        });

        this.root.x0 = width / 2;
        this.root.y0 = height / 2;

        this.treeLayout = d3.tree().size([360, 200]);
        this.updateMindMap();
    }

    addEventListeners() {
        document.getElementById('add-node').addEventListener('click', () => this.addNode());
        document.getElementById('reset-map').addEventListener('click', () => this.resetMap());
    }

    addNode() {
        const input = document.getElementById('node-input');
        const newNodeName = input.value.trim();
        if (newNodeName) {
            if (!this.root.children) this.root.children = [];
            this.root.children.push({ name: newNodeName });
            this.updateMindMap();
            input.value = '';
        }
    }

    resetMap() {
        this.root.children = [];
        this.updateMindMap();
    }

    updateMindMap() {
        const treeData = this.treeLayout(this.root);
        const nodes = treeData.descendants();
        const links = treeData.links();

        this.svg.selectAll('.link')
            .data(links)
            .join('path')
            .attr('class', 'link')
            .attr('d', d3.linkRadial()
                .angle(d => d.x / 180 * Math.PI)
                .radius(d => d.y));

        const node = this.svg.selectAll('.node')
            .data(nodes)
            .join('g')
            .attr('class', 'node')
            .attr('transform', d => `translate(${this.project(d.x, d.y)})`);

        node.selectAll('circle')
            .data(d => [d])
            .join('circle')
            .attr('r', 4);

        node.selectAll('text')
            .data(d => [d])
            .join('text')
            .attr('dy', '0.31em')
            .attr('x', d => d.x < 180 === !d.children ? 6 : -6)
            .attr('text-anchor', d => d.x < 180 === !d.children ? 'start' : 'end')
            .attr('transform', d => d.x >= 180 ? 'rotate(180)' : null)
            .text(d => d.data.name);
    }

    project(x, y) {
        const angle = (x - 90) / 180 * Math.PI, radius = y;
        return [radius * Math.cos(angle) + 400, radius * Math.sin(angle) + 300];
    }

    async unload() {
        // Clean up any event listeners or resources
        document.getElementById('add-node')?.removeEventListener('click', this.addNode);
        document.getElementById('reset-map')?.removeEventListener('click', this.resetMap);
    }
}