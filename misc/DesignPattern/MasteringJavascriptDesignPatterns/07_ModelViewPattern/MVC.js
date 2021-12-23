import ElementId from "./ElementId";

var CreateCastleView = (function() {
    function CreateCastleView(document, controller, model, validationResult) {
        this.document = document;
        this.controller = controller;
        this.model = model;
        this.validationResult = validationResult;

        var _this = this;
        this.document.getElementById(ElementId.SAVEBUTTON).addEventListener("click", function() { return _this.saveCastle(); }); // CreateCastleView.prototype.saveCastle 
        this.document.getElementById(ElementId.CASTLENAME).value = model.name;
        this.document.getElementById(ElementId.DESCRIPTION).value = model.description;
        this.document.getElementById(ElementId.OUTERWALLTHICKNESS).value = model.outerWallThickness;
        this.document.getElementById(ElementId.NUMBEROFTOWERS).value = model.numberOfTowers;
        this.document.getElementById(ElementId.MOAT).value = model.moat;

    }
    CreateCastleView.prototype.saveCastle = function() {
        var data = {
            [ElementId.CASTLENAME]: this.document.getElementById(ElementId.CASTLENAME).value,
            [ElementId.DESCRIPTION]: this.document.getElementById(ElementId.DESCRIPTION).value,
            [ElementId.OUTERWALLTHICKNESS]: this.document.getElementById(ElementId.OUTERWALLTHICKNESS).value,
            [ElementId.NUMBEROFTOWERS]: this.document.getElementById(ElementId.NUMBEROFTOWERS).value,
            [ElementId.MOAT]: this.document.getElementById(ElementId.MOAT).value
        }
        this.controller.saveCastle(data); // controller 와의 접점
    };
    return CreateCastleView;
})();

var Controller = (function() {
    function Controller(document) {
        this.document = document;
    }

    Controller.prototype.createCastle = function() {
        this.setView(new CreateCastleView(this.document, this));
    };

    Controller.prototype.saveCastle = function(data) {
        var validationResult = this.validate(data);
        if (validationResult.IsValid) {
            // Castle 을 저장장치에 저장

            this.saveCastleSuccess(data);
        } else {
            this.setView(new CreateCastleView(this.document, this, data, validationResult));
        }
    };

    Controller.prototype.saveCastleSuccess = function(data) {
        this.setView(new CreateCastleView(this.document, this, data));
    }

    Controller.prototype.setView = function(view) {
        //뷰를 브라우저에 전송
    }

    Controller.prototype.validate = function(model) {
        var validationResult = new validationResult();
        if (!model.name || model.name === "") {
            validationResult.IsValid = false;
            validatoinResult.Errors.push("Name is Requred");
        }
        return;
    }

    return Controller;
})();

var Model = (function() {
    function Model(name, description, outerWallThickness, numberOfTowers, moat) {
        this.name = name;
        this.description = description;
        this.outerWallThickness = outerWallThickness;
        this.numberOfTowers = numberOfTowers;
        this.moat = moat;
    }
    return Model;
})();

var ModelSingleton = new Model();