require(['TaskCollection','TaskCollectionView','jquery'], function(TaskCollection, TaskCollectionView, $){
	$(function(){
		var tasks = new TaskCollection();
		var tasksView = new TaskCollectionView(tasks);
		tasksView.initialize();
		tasksView.render().$root.appendTo(document.body);
	});	
})
