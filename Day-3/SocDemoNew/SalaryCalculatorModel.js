var app = app || {};
(function(){
	var salaryCalculatorBase = {
		subscribers : (function(){
			var _subscribers = {};
			function add(attrName,callback){
				if (!(_subscribers[attrName])) _subscribers[attrName] = [];
				_subscribers[attrName].push(callback);
			};
			function remove(attrName,callback){
				//yet to be implemented
			};
			function get(attrName){
				return _subscribers[attrName];
			}
			return {
				add : add,
				get : get
			};
		})(),
		calculate : function(){
			var gross = this.basic() + this.hra() + this.da(),
				taxDeductible = gross * (this.tax() / 100);
				this.net(gross - taxDeductible);
		},
		basic : (function(){
			var _basic = 0;
			return function(){
				if (arguments.length != 0) {
					_basic = arguments[0];
					if (this.subscribers.get('basic')){
						var allnetSubs = this.subscribers.get('basic');
						for(var i=0;i<allnetSubs.length;i++)
							allnetSubs[i]();
					}
					return;
				} 
				return _basic;
				
			}
		})(), 
		hra : (function(){
			var _hra = 0;
			return function(){
				if (arguments.length != 0) {
					_hra = arguments[0];
					if (this.subscribers.get('hra')){
						var allnetSubs = this.subscribers.get('hra');
						for(var i=0;i<allnetSubs.length;i++)
							allnetSubs[i]();
					}
					return;
				} 
				return _hra;
			}
		})(),
		da : (function(){
			var _da = 0;
			return function(){
				if (arguments.length != 0) {
					_da = arguments[0];
					if (this.subscribers.get('da')){
						var allnetSubs = this.subscribers.get('da');
						for(var i=0;i<allnetSubs.length;i++)
							allnetSubs[i]();
					}
					return;
				}
				return _da;
			}
		})(),
		tax : (function(){
			var _tax = 0;
			return function(){
				if (arguments.length != 0) {
					_tax = arguments[0];
					if (this.subscribers.get('tax')){
						var allnetSubs = this.subscribers.get('tax');
						for(var i=0;i<allnetSubs.length;i++)
							allnetSubs[i]();
					}
					return;
				}
				return _tax;
			}
		})(),
		net : (function(){
			var _net = 0;
			return function(){
				if (arguments.length != 0) {
					_net = arguments[0];
					if (this.subscribers.get('net')){
						var allnetSubs = this.subscribers.get('net');
						for(var i=0;i<allnetSubs.length;i++)
							allnetSubs[i]();
					}
					return;
				}
				return _net;
			}
		})()
	};
	function SalaryCalculator(){

	};
	SalaryCalculator.prototype = salaryCalculatorBase;
	app.SalaryCalculator = SalaryCalculator;
})();

