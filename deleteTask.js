var $ = skuid.$;
console.log('Method called');
var applicationList = skuid.model.getModel('Application');
var taskList = skuid.model.getModel('Task');
var app = applicationList.data[0];

var taskType;
console.log('taskList==>',taskList);
console.log('taskList==>',typeof(taskList));

// const myJSON = JSON.stringify(taskList); 
// console.log('myJSON',myJSON);
// console.log('myJSON.size',myJSON.length);
for(var i=0; i<20;i++){
        if(taskList.data[i].isUpdated === 'Yes'){
             taskType = taskList.data[i].Task_Type__c;
             break;
        }
}
console.log('taskType',taskType);
if(taskType !== undefined){
   var result = sforce.apex.execute('BrTaskHandler','deleteTask',
    {   
        appId : app.Id,
        taskType : taskType
    });
    alert(result);  
}

