/*============================================================
	Author: Eleanor Lien
==============================================================
	STYLES - In alphabetical order by class, id etc.
============================================================*/
function getReceipt() {
	text1 = "<h3>You Ordered:</h3>";
	text2 = "<h3>Subtotal:</h3>";
	var runningTotal = 0;
	var sizeTotal = 0;
	var sizeArray = document.getElementsByClassName("size");
	for (var i = 0; i < sizeArray.length; i++) {
		if (sizeArray[i].checked) {
			var selectedSize = sizeArray[i].value;
			text1 = text1 + selectedSize + "<br>";
		}
	}
	if (selectedSize === "Personal Pizza") {
		sizeTotal = 6;
	} else if (selectedSize === "Medium Pizza") {
		sizeTotal = 10;
	} else if (selectedSize === "Large Pizza") {
		sizeTotal = 14;
	} else if (selectedSize === "Extra Large Pizza") {
		sizeTotal = 16;
	}
	text2 = text2 + sizeTotal + ".00" + "<br>";
	runningTotal = sizeTotal;
	getCrust(runningTotal,text1,text2);
};	

function getCrust(runningTotal,text1,text2) {
	var crustTotal = 0;
	var crustArray = document.getElementsByClassName("crust");
	for (var j = 0; j < crustArray.length; j++) {
		if (crustArray[j].checked) {
			var selectedCrust = crustArray[j].value;
			text1 = text1 + selectedCrust + "<br>";
		}
	}
	if (selectedCrust === "Cheese Stuffed Crust") {
		crustTotal = 3;
	} else if (selectedCrust !== "Cheese Stuffed Crust") {
		crustTotal = 0;
	}
	text2 = text2 + crustTotal + ".00" + "<br>";
	runningTotal = (runningTotal + crustTotal);
	getSauce(runningTotal,text1,text2);
};

function getSauce(runningTotal,text1,text2) {
	var sauceTotal = 0;
	var sauceArray = document.getElementsByClassName("sauce");
	for (var j = 0; j < sauceArray.length; j++) {
		if (sauceArray[j].checked) {
			var selectedSauce = sauceArray[j].value;
			text1 = text1 + selectedSauce + "<br>";
		}
	}
	text2 = text2 + 0 + ".00" + "<br>";
	runningTotal = (runningTotal + sauceTotal);
	getCheese(runningTotal,text1,text2);
};

function getCheese(runningTotal,text1,text2) {
	var cheeseTotal = 0;
	var cheeseArray = document.getElementsByClassName("cheese");
	for (var j = 0; j < cheeseArray.length; j++) {
		if (cheeseArray[j].checked) {
			var selectedCheese = cheeseArray[j].value;
			text1 = text1 + selectedCheese + "<br>";
		}
	}
	if (selectedCheese === "Extra Cheese") {
		cheeseTotal = 3;
	} else if (selectedCheese !== "Extra Cheese") {
		cheeseTotal = 0;
	}
	text2 = text2 + cheeseTotal + ".00" + "<br>";
	runningTotal = (runningTotal + cheeseTotal);
	getMeat(runningTotal,text1,text2);
};

function getMeat(runningTotal,text1,text2) {
	var meatTotal = 0;
	var selectedMeat = [];
	var meatArray = document.getElementsByClassName("meats");
	for (var j = 0; j < meatArray.length; j++) {
		if (meatArray[j].checked) {
			selectedMeat.push(meatArray[j].value);
			text1 = text1+meatArray[j].value+"<br>";
		}
	}
	var meatCount = selectedMeat.length;
	if (meatCount > 1) {
		meatTotal = (meatCount - 1);
	} else {
		meatTotal = 0;
	}
	for (var j = 0; j < selectedMeat.length; j++) {
			if (meatCount <= 1) {
				meatCount = meatCount - 1;
				text2 = text2 + 0 + ".00" + "<br>";
			} else if (meatCount == 2) {
				meatCount = meatCount - 1;
				text2 = text2 + 1 + ".00" + "<br>";
			} else {
				meatCount = meatCount - 1;
				text2 = text2 + 1 + ".00" + "<br>";				
			}
	}
	runningTotal = (runningTotal + meatTotal);	
	getVeggies(runningTotal,text1,text2);
};

function getVeggies(runningTotal,text1,text2) {
	var veggiesTotal = 0;
	var selectedVeggies = [];
	var veggiesArray = document.getElementsByClassName("veggies");
	for (var j = 0; j < veggiesArray.length; j++) {
		if (veggiesArray[j].checked) {
			selectedVeggies.push(veggiesArray[j].value);
			text1 = text1+veggiesArray[j].value+"<br>";
		}
	}
	var veggiesCount = selectedVeggies.length;
	if (veggiesCount > 1) {
		veggiesTotal = (veggiesCount - 1);
	} else {
		veggiesTotal = 0;
	}
	for (var j = 0; j < selectedVeggies.length; j++) {
			if (veggiesCount <= 1) {
				veggiesCount = veggiesCount - 1;
				text2 = text2 + 0 + ".00" + "<br>";	
			} else if (veggiesCount == 2) {	
				veggiesCount = veggiesCount - 1;
				text2 = text2 + 1 + ".00" + "<br>";
			} else {
				veggiesCount = veggiesCount - 1;
				text2 = text2 + 1 + ".00" + "<br>";	
			}
	}
	runningTotal = (runningTotal + veggiesTotal);
	document.getElementById("cart").style.opacity=1;
	document.getElementById("showSelection").innerHTML=text1;
	document.getElementById("showCost").innerHTML=text2;
	document.getElementById("totalPrice").innerHTML = "<h3>Total: <strong>$"+runningTotal+".00"+"</strong></h3>";
};

//This resets form to default selections and hides the receipt.
function clearAll() {
	document.getElementById("frmMenu").reset();
	document.getElementById("cart").style.opacity=0;
};