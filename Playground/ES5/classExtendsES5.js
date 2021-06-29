"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Widget = function () {
    function Widget(width, height) {
        _classCallCheck(this, Widget);

        this.width = width || 50;
        this.height = height || 50;
        this.$elem = null;
    }

    _createClass(Widget, [{
        key: "redner",
        value: function redner($where) {
            if (this.$elem) {
                this.$elem.css({
                    width: this.width + "px",
                    height: this.height + "px"
                }).appendTo($where);
            }
        }
    }]);

    return Widget;
}();

var Button = function (_Widget) {
    _inherits(Button, _Widget);

    function Button(width, height, label) {
        _classCallCheck(this, Button);

        var _this = _possibleConstructorReturn(this, (Button.__proto__ || Object.getPrototypeOf(Button)).call(this, width, height));

        _this.label = label || "Default";
        _this.$elem = $("<button>").text(_this.label);
        return _this;
    }

    _createClass(Button, [{
        key: "render",
        value: function render($where) {
            this.$elem.click(this.onClick.bind(this));
        }
    }, {
        key: "onClick",
        value: function onClick(evt) {
            console.log(this.label + "button clicked!!");
        }
    }]);

    return Button;
}(Widget);
