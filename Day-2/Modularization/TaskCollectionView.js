define(['TaskView','jquery','text!taskCollectionTemplate.tpl'], function(TaskView,$,taskCollectionTemplate){
	console.log(taskCollectionTemplate);
	return function TaskCollectionView(collection){
		this.tasks = collection;
		var $root = this.$root = $("<div></div>");
		this.initialize = function(){
			/*UI Events*/
			$root.on("click","#btnAddTask",function(){
				var taskName = $("#txtTask",$root).val();
				collection.add(taskName);
			});

			$root.on("click","#btnRemoveCompleted",function(){
				collection.removeCompleted();
			});

			/*Collection Events*/
			collection.addChangeSubscriber("add",function(newTask){
				var tv = new TaskView(newTask);
				tv.initialize();
				tv.render().$root.appendTo($("#ulTaskList",$root));
			});
		}	
		this.render = function(){
			$root.append(taskCollectionTemplate);
			return this;
		}
	}
});
