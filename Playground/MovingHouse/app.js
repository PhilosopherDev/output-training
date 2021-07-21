class App {
    constructor() {
        this.canvas = document.createElement('canvas');
        document.body.appendChild(this.canvas);
        this.ctx = this.canvas.getContext('2d');

        this.pixelRatio = window.devicePixelRatio > 1 ? 2 : 1;
        
        window.addEventListener('resize', this.resize.bind(this), false);
        this.resize();

        window.requestAnimationFrame(this.animate.bind(this));
    }
    
    resize() {
        this.stageWidth = document.body.clientWidth;
        this.stageHeight = document.body.clientHeight;

        this.canvas.width = this.stageWidth * this.pixelRatio;
        this.canvas.height = this.stageHeight * this.pixelRatio;
        this.ctx.scale(this.pixelRatio, this.pixelRatio);
    }

    animate() {
        window.requestAnimationFrame(this.animate.bind(this));

        // Set line width
        this.ctx.lineWidth = 10;

        // Wall
        this.ctx.strokeRect(75, 140, 150, 110);

        // Door
        this.ctx.fillRect(130, 190, 40, 60);

        // Roof
        this.ctx.beginPath();
        this.ctx.moveTo(50, 140);
        this.ctx.lineTo(150, 60);
        this.ctx.lineTo(250, 140);
        this.ctx.closePath();
        this.ctx.stroke();

        // Set line width
        this.ctx.lineWidth = 10;

        // Wall
        this.ctx.strokeRect(this.stageWidth/2 - 75, this.stageHeight/2, 150, 110);

        // Door
        this.ctx.fillRect(this.stageWidth/2 - 20, this.stageHeight/2 + 50, 40, 60);

        // Roof
        this.ctx.beginPath();
        this.ctx.moveTo(this.stageWidth/2 - 100, this.stageHeight/2);
        this.ctx.lineTo(this.stageWidth/2, this.stageHeight/2 - 80);
        this.ctx.lineTo(this.stageWidth/2 + 100, this.stageHeight/2);
        this.ctx.closePath();
        this.ctx.stroke();

        // Root Circle
        
        this.ctx.beginPath();
        this.ctx.arc(
            this.stageWidth / 2,
            this.stageHeight / 2,
            30,
            Math.PI, 0
        )
        this.ctx.fill();
    }
}

window.onload = () => {
    new App();
}