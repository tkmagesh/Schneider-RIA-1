var app = app || {};
(function(){
	function TaskStorage(){
		this.storage = window.localStorage;
	}

	var taskStorageProto = {
		getAllTasks: function(){
			var result = [];
			for(var i=0;i<this.storage.length;i++){
				var taskId = this.storage.key(i);
				var taskName = this.storage.getItem(taskId);
				result.push({taskId : taskId, taskName: taskName});
			}
			return result;
		},

		addTask: function(taskName){
			var taskId = new Date().getTime().toString();
			this.storage.setItem(taskId,taskName);
			return taskId;
		}, 
		removeTask: function(taskId){
			this.storage.removeItem(taskId);
		}
	}
	TaskStorage.prototype = taskStorageProto;
	app.TaskStorage = TaskStorage;
})();













