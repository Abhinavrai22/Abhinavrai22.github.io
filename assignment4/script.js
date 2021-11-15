var xyz=new Array();
xyz[0]="Yaakov";
xyz[1]="John";
xyz[2]="Jen";
xyz[3]="jason";
xyz[4]="paul";
xyz[5]="frank";
xyz[6]="larry";
xyz[7]="paula";
xyz[8]="laura";
xyz[9]="jim";

for (var i = 0; i < xyz.length; i++) {
	if(xyz[i].charAt(0)==='J'|| xyz[i].charAt(0)==='j'){
		console.log("Goodbye "+ xyz[i])
	}
	else{
		console.log("Hello "+ xyz[i])
	} 
}