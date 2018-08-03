$(document).ready(function(){

var vars = {};
    var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi,    
    function(m,key,value) {
      vars[key] = value;
    });
console.log("vars "+vars['id'])

var id=vars['id'];
var name=vars['name'];

var templateId='someId';

 $("#submitId").click(function(){
	 var score= $("#id_score").val();
	 var word=$("#id_word").val();
	 
	 
	
 $.ajax({
            method: 'POST',
            url: _config.api.invokeUrl + '/template/answerSurvey/',
            headers: {
                'access-control-allow-origin': '*'
            },
            contentType: 'application/json',
			  data: JSON.stringify({
                'templateId':id,
				'score':score,
				'word':word
				
            }),
			crossDomain: true,
   
            success:  function completeRequest(resp) {
        console.log('Response submitted successfully. You may close the browser ', resp);
       //displayUpdate(result+" is generated");
	     },
            error: function ajaxError( errorThrown) {
                console.error('Error requesting ride:  ', errorThrown);
                alert(errorThrown);
            }
        });

	
 });
 
/*  function completeRequest(resp) {
        console.log('Response submitted successfully. You may close the browser ', resp);
       //displayUpdate(result+" is generated");
	   
    
   } */


});