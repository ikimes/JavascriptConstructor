function myFirstComponent(fn, ln, ag) {
 this.firstName = fn;
 this.lastName = ln;
 this.age = ag;
 this.ele = document. createElement("div");
 this.ele.innerHTML = "concat string";

 document.querySelector(".wrapper").appendChild(this.ele)
}

myFirstComponent.prototype.write = function(){
    this.ele.innerHTML = "My name is " + this.firstName + " " + this.lastName + " and I am " + this.age + " years old.";
};

var dood = new myFirstComponent("Pete", "Super", 42);

dood.write();