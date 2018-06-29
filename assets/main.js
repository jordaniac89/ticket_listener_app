$(function() {

    let client = ZAFClient.init();

    client.invoke( 'app.hide' );
    
    //hide or disable specified fields
    doHideDisableFields();

    function doHideDisableFields(){
      for(let field in MODIFY_FIELDS){
        client.invoke(
          'ticketFields:' +  getCustomFieldName(MODIFY_FIELDS[field]['fieldName'])
          + '.' + getCustomFieldName(MODIFY_FIELDS[field]['modifyAction'])
        );
      }
    }
});
