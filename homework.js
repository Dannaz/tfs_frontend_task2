//2.1 Не работает с отрицательными числами.
function convertToBinary(value) {
	return (value > 0) ? convertToBinary(Math.floor(value / 2)) + (value % 2).toString() : "";
}
//2.2
function getIntersectingElements(arr1, arr2) {
	var obj = {};
	var crossing = [];
	for (var i = 0; i < arr1.length; i++) {
		var key = arr1[i];
		obj[key] = true;
	}
	for (var i = 0; i < arr2.length; i++) {
		if (obj[arr2[i]]) {
			crossing.push(arr2[i]);
		}
    }
	return crossing;
}
//2.3
function expandArray(arr) {
	return arr.reduce(function(result, current){
		return result.concat(current);
	}, []);
}
//2.4
function myBind(func, context) {
	return function() {
		return func.apply(context, arguments);
	}
}
//2.5
//Вызывается как sum1(a)(b)(c)()
function sum1(a) {
	var currentSum = a;

  	function f(b) {
  		if (!isNaN(b)) {
  			currentSum += b;
    		return f;
  		}
    	return currentSum;
  	}
  	
  	return f;
}
//Вызывается как sum2(a)(b)(c)
function sum2(arg) {
	sum2.currentSum = (sum2.currentSum) ? sum2.currentSum + arg : arg;

	sum2.toString = function () {
		var finalSum = sum2.currentSum;
		sum2.currentSum = 0;

		return finalSum; 
	};

	return sum2;
}
//
function demonstrate(){
	alert("Хэй, почему бы не заглянуть в консоль?;)");
	console.log("Здание 2.1");
	console.log(convertToBinary(4));
	console.log("Здание 2.2");
	console.log(getIntersectingElements([1, 3, 5, 7],[1, 2, 3, 4]));
	console.log("Здание 2.3");
	console.log(expandArray([[1, 2], [3, 4, 5], [6, 7]]));
	console.log("Здание 2.4");
	var obj = {
		prop: "value",
		getProp: function() {
			console.log(this.prop);
		}
	};
	var getProp = obj.getProp;
	console.log("Без myBind");
	getProp();
	getProp = myBind(obj.getProp,obj);
	console.log("С myBind");
	getProp();
	console.log("Здание 2.5");
	console.log(sum1(1)(2)(3)());
	console.log(sum2(1)(2)(3).toString());
}
demonstrate();

