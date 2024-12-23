var params = arguments[0],
$ = skuid.$;
var app=skuid.model.getModel('FieldsForAmortization');
var applicationData=app.getFirstRow();

var displayMessage = function (message, severity) {
    console.log(message);
    console.log(severity);

    var pageTitle = $('#summaryTab'); 
    console.log(pageTitle);
    var editor = pageTitle.data('object').editor;
    console.log(editor);
    
    editor.messages.empty();
    editor.handleMessages([
        {
            message: message,
            severity: severity.toUpperCase()
        }
    ]);

    return false;
};

///*********************************************** FOR LMAU -1720 ******************************************/
if(applicationData.Insurance_Rebate_Amount__c !== null && applicationData.Insurance_Rebate_Amount__c !== undefined){
   if((applicationData.Top_Up__c === true) && ((applicationData.Top_Up_Payout_Amount__c).toFixed(2) !== ((applicationData.CL_Contract__r.loan__Pay_Off_Amount_As_Of_Today__c - applicationData.Insurance_Rebate_Amount__c + 100).toFixed(2)))){
    return displayMessage('Please Refresh Top Up Payout Amount prior changing Top Up Amount', 'ERROR');
   } 
}else if((applicationData.Top_Up__c === true) && ((applicationData.Top_Up_Payout_Amount__c).toFixed(2) !== ((applicationData.CL_Contract__r.loan__Pay_Off_Amount_As_Of_Today__c + 100).toFixed(2)))){
    return displayMessage('Please Refresh Top Up Payout Amount prior changing Top Up Amount', 'ERROR');
}

///*********************************************** FOR LMAU -1938 ******************************************/
if((applicationData.Top_Up__c === true )
    && (applicationData.CL_Contract__r.loan__Pay_Off_Amount_As_Of_Today__c !== null) 
    && ((applicationData.CL_Contract__r.loan__Pay_Off_Amount_As_Of_Today__c + applicationData.Top_Up_Amount__c) < 5000) ){
        return displayMessage('The total loan amount (excluding the Loan Establishment Fee) must be at least $5,000. Please adjust the top-up amount if you wish to proceed.', 'ERROR');
}



/////////////// FOR LMAU-3278 //////////////////
if(applicationData.genesis__Loan_Amount__c >0 && applicationData.broker_fee__c >650){
    return displayMessage('Hereeee we go', 'ERROR');
}
