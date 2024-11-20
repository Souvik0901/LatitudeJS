var $ = skuid.$;
var templateList = skuid.model.getModel('Templates');
var applicationList = skuid.model.getModel('Applications'); 
var smsList = skuid.model.getModel('SMSModel'); 

// Get the first record from the Applications model
var app = applicationList.data[0]; 
var appId = app.Id; 

var template;
var smsType; 

// Check if there is a template available
if (templateList.data.length > 0) {
    template = templateList.data[0]; 
    smsType = template.Template_Type__c; 
    var body = template.Template_Text__c; 

    // Prepare a new SMS record to insert into SMSModel
    var smsRecord = {
        Body__c: body, 
        From__c: 'Latitude',  
        To__c: app.Mobile_Number__c, 
        Template_Type__c: smsType,  
        isUpdated: 'No', 
    };
    
    // Insert the new SMS record into the SMSModel
    smsList.updateRow(smsList.createRow(), {
        Body__c: body, 
        From__c: 'Latitude',  
        To__c: app.Mobile_Number__c, 
        Template_Type__c: smsType,  
        isUpdated: 'No', 
    });

    
    console.log(smsRecord);
    console.log(smsList.data[0]);

    
    skuid.ui.showMessage('Twilio SMS record inserted successfully!');
} else {
   
    skuid.ui.showMessage('No templates found for sending SMS!');
}
