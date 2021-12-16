/**
 * 추상 팩토리
 */

// King
var KingJoffery = (function() {
    function KingJoffery() {

    }
    KingJoffery.prototype.makeDecision = function() {
        console.log("King: makeDecision");
    };
    KingJoffery.prototype.marry = function() {
        console.log("marry");
    };
    return KingJoffery;
})();

// Hand of the king
var LordTywin = (function() {
    function LordTywin() {

    }
    LordTywin.prototype.makeDecision = function() {
        console.log("HandOfKing: makeDecision");
    };
    return LordTywin;
})();

// 구체 팩토리 메소드
var LannisterFactory = (function() {
    function LannisterFactory() {
        
    }
    LannisterFactory.prototype.getKing = function() {
        return new KingJoffery();
    }
    LannisterFactory.prototype.getHandOfTheKing = function() {
        return new LordTywin();
    }
    return LannisterFactory;
})();

/** 
 * 위의 코드는 단순히 필요한 각 클래스의 새로운 인스턴스를 생성하고 이를 반환한다.
 * 자바사크립트에서 추상 팩토리 패턴의 구현은 다른 언어에 비해 훨씬 쉽다.
 * 추상 팩토리 패턴을 사용하려면, 위의 지배 가문을 필요로 하는 클래스가 필요하다.
 */

var CourtSession = (function() {
    function CourtSession(abstractFactory) {
        this.abstractFactory = abstractFactory;
        this.COMPLAINT_THRESHOLD = 10;
    }
    
    CourtSession.prototype.complaintPresented = function(complaint) {
        if (complaint.severity < this.COMPLAINT_THRESHOLD) {
            this.abstractFactory.getHandOfTheKing().makeDecision();
        } else {
            this.abstractFactory.getKing().makeDecision();
        }
    }
    return CourtSession;
})();

var courtSession1 = new CourtSession(new LannisterFactory()); // 인자로 넘겨주는 Factory 를 새로 만들어서 넘겨주면 또 새롭게 생성된다.
courtSession1.complaintPresented({severity: 8});
courtSession1.complaintPresented({severity: 12});

