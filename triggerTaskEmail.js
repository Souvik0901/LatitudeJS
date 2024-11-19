var $ = skuid.$;
var scModels = skuid.model.getModel('AssignBackToBroker');
console.log('scModels',scModels);
var scRow = scModels.data[0];
console.log('Snippet called');
console.log('scRow',scRow.Id);

$.blockUI({
    message: 'Processing...',
    onBlock:function(){
        var result = sforce.apex.execute('NotificationManager','sendTaskNotifMail',
        {   
            appId : scRow.Id,
            emailTemp : 'Broker Task Email Template'
            
        });
        console.log('result',result);
        $.unblockUI();
        alert(result + ' Email sent');
        window.location.reload();
   }
});
console.log('Successful');
