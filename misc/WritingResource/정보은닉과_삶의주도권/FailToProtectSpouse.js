/**
 * 세상의 '결혼'이라는 규칙을 marriageWith 라는 함수로 표현, Me 에게 있어 Object는 세상의 원형(prototype)
 */ 
Object.prototype.marriageWith = function() {
    console.log(`나 ${this.name} 은/는 상대 ${this.spouse} 와/과 결혼하겠습니다.`);
}

const meInstance = function () {    
    /**
     * 내가 제어 가능한 내 세상
     * '나'를 정의할 수 있다.
     */ 
	function Me(name, type, spouse) {        
        this.name = name;
        this.type = type;
        this.spouse = spouse; // spouse = 배우자
    }

    Me.prototype.getName = function() {
        return this.name;
    }

    Me.prototype.introduceSpouse = function() {
        console.log(`나 ${this.name} 의 배우자는 ${this.spouse} 입니다.`);
    }

    /**
     * 있어선 안 될 함수를 정의했다.
     * 나만이 정할 수 있어야할 배우자 설정을 누구든지 접근해서 바꿀 수 있게 해놨다.
     */
    Me.prototype.setSpouse = function(spouse) {
        this.spouse = spouse;
    }

    Me.prototype.setOpinionAboutMarriage = function(opinion) {
        switch(opinion){
            case "1":
                console.log("hi");
        }
        
    }

    return new Me("이상해씨", "풀", "꼬부기");
}();

/**
 *  내가 제어할 수 없는 바깥 세상.
 */ 

const parentInstance = (function() {
    function Parent(name, type) {
        this.name = name;
        this.type = type;
    }

    Parent.prototype.changeSpouseOfChildTo = function(stranger) {
        console.log(`부모 ${this.name} 이/가 자식 ${meInstance.getName()} 의 배우자를 ${stranger}로 바꿉니다.`);
        meInstance.setSpouse(stranger);
    }

    return new Parent("리자몽", "드래곤");
})();

meInstance.introduceSpouse();
meInstance.marriageWith();

parentInstance.changeSpouseOfChildTo("피카츄");

meInstance.introduceSpouse();
meInstance.marriageWith();
