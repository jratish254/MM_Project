var stuDetails = /** @class */ (function () {
    function stuDetails() {
    }
    stuDetails.prototype.a = function () {
    };
    stuDetails.prototype.b = function () {
    };
    stuDetails.prototype.c = function () {
    };
    stuDetails.prototype.eligiblityForVoting = function (age) {
        if (age >= 18)
            return true;
        else
            return false;
    };
    return stuDetails;
}());
var myObj = new stuDetails();
var flag = myObj.eligiblityForVoting(13);
console.log(flag);
