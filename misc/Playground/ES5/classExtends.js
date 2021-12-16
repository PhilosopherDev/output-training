class Widget {
    constructor (width, height) {
        this.width = width || 50;
        this.height = height || 50;
        this.$elem = null;
    }

    redner($where) {
        if (this.$elem) {
            this.$elem.css({
                width: this.width + "px",
                height: this.height + "px"
            }).appendTo($where);
        }
    }
}

class Button extends Widget {
    constructor (width, height, label) {
        super(width, height);
        this.label = label || "Default";
        this.$elem = $("<button>").text(this.label);
    }
    render($where) {
        this.$elem.click(this.onClick.bind(this));
    }
    onClick(evt) {
        console.log(this.label + "button clicked!!");
    }
}
