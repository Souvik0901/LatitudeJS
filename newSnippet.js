var $ = skuid.$;
var conditionList = skuid.model.getModel('Conditions');
var applicationList = skuid.model.getModel('Application');
var brokerUserList = skuid.model.getModel('BrokerUser');
var taskList = skuid.model.getModel('Task');
var app = applicationList.data[0];
var broker = brokerUserList.data[0];
var appId = app.Id;
var brokerId = broker.Id;

//var condition = conditionList.data[0];
var condition;
var data1;
var data2;
var taskType;
const noInputList = ['Bank Statements','Tax return','Dealer Invoice','Previous job payslip'];
for(let i=0;i<11;i++){
    if(conditionList.data[i].isUpdated === 'Yes'){
        taskType = conditionList.data[i].Task_Type__c;
        condition = conditionList.data[i];
    }
}
for(let i=0;i<11;i++){
    if(conditionList.data[i].InputData1 !== undefined && conditionList.data[i].InputData1 !== null ){
        data1 = conditionList.data[i].InputData1;
        data2 = conditionList.data[i].InputData2;
        condition = conditionList.data[i];
        taskType = conditionList.data[i].Task_Type__c;
        var isUpdated = conditionList.data[i].dummyCheck ;
        break;
    }
    
}
var subject = condition.Condition_text__c;
var mergefield1 = condition.Input_field_1__c;
var mergefield2 = condition.Input_field_2__c;
var subjectLine = subject.replace(mergefield1, data1);
subjectLine = subjectLine.replace(mergefield2, data2);
taskList.updateRow(taskList.createRow(),{OwnerId:brokerId, genesis__Application__c:appId, Subject:subjectLine, Priority:'Normal', whatId:appId, Approval_Task__c:true,Task_Type__c:taskType});
