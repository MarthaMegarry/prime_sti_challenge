var arrayAtticus = ["Atticus", "2405", "47000", 3];
var arrayJem = ["Jem", "62347", "63500", 4];
var arrayBoo = ["Boo", "11435", "54000", 3];
var arrayScout = ["Scout", "6243", "74750", 5];

function mainFunct(array){

var sti = 0; // bonus percentage
var updatedSalary = 0; // new salary with bonus accounted for
var bonus = 0; // total bonus recieved
array[2] = parseInt(array[2]); // changes string to decimal

sti = stiCalc(array[1], array[2], array[3]); //calls stiCalc function and assigns return to sti

var stiPer = (sti*100) + "%";

if(sti>0){
	updatedSalary=((array[2]*sti)+(array[2])); // determines updated salary based on sti being > 0 	
}else{
	updatedSalary = array[2]; // determines updated salary with no sti
}

bonus = updatedSalary - array[2]; //subracts updated from salary to find bonus
bonus = Math.round(bonus); // rounds bonus to nearest int 

return [array[0], stiPer, updatedSalary, bonus]; // returns a new array with manipulated data
}


function stiCalc(empNum, salary, rating){ // function that calculates the sti
	
	//var intSalary = parseInt(salary); //changes string to decimal
	var sti = 0;

	switch (rating){ // case switch to determine sti based on rating

		case 3:
		sti += 0.04;
		break;

		case 4:
		sti += 0.06;
		break;

		case 5:
		sti += 0.10
		break;

		default:
		return 0;
	}

	if(empNum.length <= 4){ // additional percentages based on length of employee number (seniority)
		sti += 0.05;
	} 
	if(salary > 65000){ // takes a percentage point away if original salary is higher than 65K
		sti -= 0.01;
	}
	if (sti > 0.13){ // caps sti at .13
		sti = 0.13;
	}
	return sti; //returns calculated STI to function call 

}


var newArrayAtticus = mainFunct(arrayAtticus); //creates new arrays for a 4 employees
var newArrayJem = mainFunct(arrayJem);
var newArrayBoo = mainFunct(arrayBoo);
var newArrayScout = mainFunct(arrayScout);

console.log(newArrayAtticus);
console.log(newArrayJem);
console.log(newArrayBoo);
console.log(newArrayScout);