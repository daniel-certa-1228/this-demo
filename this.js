console.log( "this.js" );

var world = "210";

function sky () {
	console.log( "sky function" );
	ocean();
}

function ocean () {
	console.log( "ocean function" );
	land();
}

function land () {
	console.log( "land function" );
	let world = "333";
	console.log( "this world", this.world );
}

sky();

////////////////////////////////////////////////////////

console.log( this );

let chickenObj = {

	eggs: 6,
	sound: "cluck",
	makeSound: function makeSound(){
		console.log( "this.sound", this.sound )
		// console.log( "what about sound,", sound );
	}
}

chickenObj.makeSound();

////////////////////////////////////////////////////////

let obj2 = {
	a: 42,
	foo: foo
}

let obj1 = {
	a: 2,
	obj2:obj2,
	foo: foo
}

function foo() {
	console.log( "foo", this.a );
}

obj1.obj2.foo();
obj1.foo();

////////////////////////////////////////////////////////

let weatherObj = {
	temp: 72,
	storm: storm
}

function storm() {
	console.log( "storm: this temp", this.temp );
}

var temp = "global warming"

weatherObj.storm();
storm();

////////////////////////////////////////////////////////

var obj = {
	a: 2,
	foo5: foo5
}


function foo5() {
	console.log( "foo5", this.a );
}


function doFoo(objFunction) {
	objFunction();
}

var a = "oops global";

doFoo(obj.foo5);
obj.foo5()

////////////////////////////////////////////////////////

let element = document.getElementsByTagName("div");

for (let i = 0; i < element.length; i++) {

	// console.log( "element", element[i] );
	element[i].onmouseover = over;
	element[i].onmouseout = out;

};

function over() {
	this.style.backgroundColor = 'white';
}

function out() {
	this.style.backgroundColor = 'gainsboro';
}

////////////////////////////////////////////////////////

























