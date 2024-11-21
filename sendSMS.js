// on preview SMS List and Template list are showing
var $ = skuid.$;
var templateList = skuid.model.getModel('Templates');
var applicationList = skuid.model.getModel('Applications'); 
var smsList = skuid.model.getModel('SMSModel'); 


var app = applicationList.data[0]; 
var appId = app.Id; 

var template;
var smsType;
var body;


for(let i=0;i<3;i++){
    if(templateList.data[i].isUpdated === 'Yes'){
        template = templateList.data[i];
    }
}


body = template.Template_Text__c; 
console.log(body);

smsList.updateRow(smsList.createRow(), {
    genesis__Application__c:appId, 
    Application__c: appId,
    Body__c: body,
    From__c: 'Latitude',  
    To__c: app.Mobile_Number__c, 
});




You need to change on actions also hiting the button:



// console.log(smsRecord);
console.log(smsList);
