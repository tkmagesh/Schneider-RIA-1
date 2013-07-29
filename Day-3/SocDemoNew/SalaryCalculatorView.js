//Not the right way of writing JavaScript classes... 
//Please follow the Object-ConstructorFunction-Prototype Model
var app = app || {};
(function(){
	function SalaryCalculatorView(model){
		this.model =  model;
		this.initialize = function(){
			model.subscribers.add('net',function(){
				$("#divSalary").text(model.net());
			});
			model.subscribers.add('tax',function(){
				$("#rangeTax").val(model.tax());
				$("#spanTax").text(model.tax());
			});
			model.subscribers.add('basic',function(){
				$("#txtBasic").val(model.basic());
			});
			model.subscribers.add('hra',function(){
				$("#txtHra").val(model.hra());
			});
			model.subscribers.add('da',function(){
				$("#txtDa").val(model.da());
			});
			this.root = $("#calculatorTemplate").html();
			this.$root = $(this.root);
			this.$root.on('change',"#txtBasic", function(){
				if (this.value !== ''){
					model.basic(parseInt(this.value));
					model.calculate();
				}
			});
			this.$root.on('change',"#txtHra", function(){
				if (this.value !== ''){
					model.hra(parseInt(this.value));
					model.calculate();
				}
			});		
			this.$root.on('change',"#txtDa", function(){
				if (this.value !== ''){
					model.da(parseInt(this.value));
					model.calculate();
				}
			});
			this.$root.on('change',"#rangeTax", function(){
				if (this.value !== ''){
					model.tax(parseInt(this.value));
					model.calculate();
				}
			});						
		}
		
	}
	app.SalaryCalculatorView = SalaryCalculatorView;
})()
