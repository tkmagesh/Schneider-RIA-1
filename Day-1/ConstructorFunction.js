var e = new Employee(101,"magesh",10000);
e.id -> undefined
e.getId() -> return 101

e.setId(102)
e.getId() -> return 102

function Employee(id,name,salary){
 
 if (this.constructor.name != "Employee")
   return new Employee(id,name,salary);
 var _id=id, _name=name, _salary=salary;
 
 this.id = function(){
 	if (arguments.length == 0) return _id;
 	_id = arguments[0];
 }

 this.name = function(){
 	if (arguments.length == 0) return _name;
 	_name = arguments[0];
 }

 this.salary = function(){
 	if (arguments.length == 0) return _salary;
 	_salary = arguments[0];
 }

}
