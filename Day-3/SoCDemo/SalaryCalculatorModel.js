var app = app || {};
(function(){
	function SalaryCalculator(){
		this.onChange = function(){};
	};
	var salaryCalculatorPrototype = {

		calculate : function(){
			gross = this.basic() + this.hra() + this.da();
			taxDeduction = gross * (this.tax()/100);
			this.net(gross - taxDeduction);
		},
		basic : (function(){
			var _basic = 0;
			return function(){
				if (arguments.length === 0) return _basic;
				//do validation
				_basic = arguments[0];
				this.onChange('basic');
			}
		})(),
		hra : (function(){
			var _hra = 0;
			return function(){
				if (arguments.length === 0) return _hra;
				//do validation
				_hra = arguments[0]
				this.onChange('hra');
			}
		})(),
		da : (function(){
			var _da = 0;
			return function(){
				if (arguments.length === 0) return _da;
				//do validation
				_da = arguments[0]
				this.onChange('da');
			}
		})(),
		tax : (function(){
			var _tax = 0;
			return function(){
				if (arguments.length === 0) return _tax;
				//do validation
				_tax = arguments[0];
				this.onChange('tax');
			}
		})(),
		net : (function(){
			var _net = 0;
			return function(){
				if (arguments.length === 0) return _net;
				//do validation
				_net = arguments[0];
				this.onChange('net');
			}
		})()
	};
	SalaryCalculator.prototype = salaryCalculatorPrototype;
	app.SalaryCalculator = SalaryCalculator;
})()