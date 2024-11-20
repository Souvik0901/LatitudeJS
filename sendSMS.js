var $ = skuid.$;
var templateList = skuid.model.getModel('Templates');
var applicationList = skuid.model.getModel('Applications'); 
var smsList = skuid.model.getModel('SMSModel'); 

// Get the first record from the Applications model
var app = applicationList.data[0]; 
var appId = app.Id; 

var template;
var smsType;
var body;

for(let i=0; i<3; i++){  
    template = templateList.data[i];
    smsType = templateList.data[i].Template_Type__c;   
}


body = template.Template_Text__c; 

// Prepare a new SMS record to insert into SMSModel
// var smsRecord = {
//     Body__c: template.Template_Text__c, 
//     From__c: 'Latitude',  
//     To__c: app.Mobile_Number__c, 
//     Template_Type__c:smsType,  
//     isUpdated: 'No', 
// };

// Insert the new SMS record into the SMSModel
smsList.updateRow(smsList.createRow(), {
    genesis__Application__c:appId, 
    Body__c: template.Template_Text__c, 
    From__c: 'Latitude',  
    To__c: app.Mobile_Number__c, 
    Template_Type__c:smsType,  
    isUpdated: 'No', 
});


console.log(smsRecord);
console.log(smsList.data);
