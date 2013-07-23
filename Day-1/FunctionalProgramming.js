function add(){
	function parseArg(arg){
     if (typeof arg == "string" && !isNaN(arg))
         return parseInt(arg);
     if (typeof arg == "number")
         return arg;
 	 if (typeof arg == "function")
 	 	return parseArg(arg());
 	 if (typeof arg["length"] != "undefined")
 	 	return add.apply(this,arg);
  	}
   	return arguments.length == 1 ? parseArg(arguments[0]) : parseArg(arguments[0]) + add.apply(this,[].splice.call(arguments,1));
}

var products = [
	{id : 1, name : "pen", price : 12, stock : 12, category : 1},
	{id : 4, name : "hen", price : 81, stock : 52, category : 1},
	{id : 2, name : "ken", price : 21, stock : 27, category : 2},
	{id : 6, name : "den", price : 61, stock : 32, category : 1},
	{id : 7, name : "ten", price : 19, stock : 23, category : 1},
	{id : 9, name : "zen", price : 11, stock : 10, category : 2}
]

function sort(list,comparer){
	var comparerHelper;
	if (typeof comparer == "function")
		comparerHelper = comparer;
	if (typeof comparer == "string")
		comparerHelper = function(left,right){
			if (left[comparer] > right[comparer]) return 1;
			if (left[comparer] < right[comparer]) return -1;
			return 0;
		};
	
	for(var i=0;i<list.length-1;i++)
		for(var j=i+1;j<list.length;j++){
	      	var left = list[i], right=list[j],temp;
	      	if (comparerHelper(left,right) > 0){
	         	temp = left;
	         	list[i] = list[j];
	         	list[j] = temp;
	      	}
	    }
}
function max(list,fieldSelector){
  var fieldSelectorHelper, result = Number.MIN_VALUE;
  if (typeof fieldSelector == "string") 
     fieldSelectorHelper = function(item){return item[fieldSelector];};
  else
     fieldSelectorHelper = fieldSelector;
  for(var i=0;i<list.length;i++)
    if (fieldSelectorHelper(list[i]) > result) result = fieldSelectorHelper(list[i]);
  return result;
}
function min(list,fieldSelector){
  var fieldSelectorHelper, result = Number.MAX_VALUE;
  if (typeof fieldSelector == "string") 
     fieldSelectorHelper = function(item){return item[fieldSelector];};
  else
     fieldSelectorHelper = fieldSelector;
  for(var i=0;i<list.length;i++)
    if (fieldSelectorHelper(list[i]) < result) result = fieldSelectorHelper(list[i]);
  return result;
}

function sum(list,fieldSelector){
  var fieldSelectorHelper, result = 0;
  if (typeof fieldSelector == "string") 
     fieldSelectorHelper = function(item){return item[fieldSelector];};
  else
     fieldSelectorHelper = fieldSelector;
  for(var i=0;i<list.length;i++)
    result += fieldSelectorHelper(list[i]);
  return result;
}

function count(list,criteria){
	var result = 0;
	for(var i=0;i<list.length;i++)
	  if (criteria(list[i])) result++;
	return result;
}

function filter(list,criteria){
	var result = [];
	for(var i=0;i<list.length;i++)
	  if (criteria(list[i])) result.push(list[i]);
	return result;
}

function avg(list,fieldSelector){
  return sum(list,fieldSelector) / list.length
}

function pluck(list,fieldName){
	var result = [];
	for(var i=0;i<list.length;i++)
		result.push(list[i][fieldName]);
	return result;
}

function transform(list,transformer){
	var result = [];
	for(var i=0;i<list.length;i++)
		result.push(transformer(list[i]));
	return result;
}
	