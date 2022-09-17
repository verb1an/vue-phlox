class MakeChart {
    params = {
        count: 50,
        strokeWidth: 30,
        radius: 50,
        cx: 200,
        cy: 200
    }
    colors  = []
    elements = []

    constructor(container, config) {
        this.container = document.querySelector(container)
        this.colors = config.colors
        this.elements = config.elements
        this.setParams(config)
    }

    setParams(params) {
        if (!params) return
        for (let key in this.params) {
            if (Object.prototype.hasOwnProperty.call(params, key)) this.params[key] = params[key]
        }
    }

    beforeRender() {
        this.container.innerHTML = `<svg viewbox="0 0 400 400"><g transform="matrix(0,-1,1,0,0,400)"></g></svg>`;
        // this.container.append = `<circle></circle>`
    }

    render() {
        console.log(this.elements);
        if(!this.elements) return;
        this.elements.forEach((el, count) => {
            const value = typeof el === String || Number ? el : el.value
            const circleLine = (6.28 * this.params.radius); // ? 2pr
            const percentOfPie = value/this.params.count; // ? This el pie
            const elPie = (circleLine*percentOfPie).toFixed(2);

            let beforeElsPies = 0;
            for ( let i = 0; i < count; i++ ) {
                beforeElsPies += this.elements[i];
            }

            const style = `stroke:${el.color ?? this.colors[count]};
                            stroke-width:${el.strokeWith ?? this.params.strokeWidth};
                            stroke-dasharray: ${elPie}px, ${circleLine-((circleLine)*percentOfPie)}px;
                            stroke-dashoffset: 0;
                            transform-origin: center;
                            fill: none;
                            transform: rotateZ(${360*(beforeElsPies/this.params.count)}deg)`;
            this.container.children[0].children[0].innerHTML += (`
                <circle 
                    style="${style}"
                    r="${this.params.radius}"
                    cx="${this.params.cx}"
                    cy="${this.params.cy}"
                ></circle>
            `);
        })
    }

    create() {
        this.beforeRender();
        
        this.render();
    }
}

export {
    MakeChart
}