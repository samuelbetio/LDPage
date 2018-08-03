/*global WildRydes _config*/

var WildRydes = window.WildRydes || {};
WildRydes.map = WildRydes.map || {};

(function rideScopeWrapper($) {
	 var poolData = {
        UserPoolId: _config.cognito.userPoolId,
        ClientId: _config.cognito.userPoolClientId
    };
	var userPool;
    var authToken;
    WildRydes.authToken.then(function setAuthToken(token) {
        if (token) {
            authToken = token;
			 userPool = new AmazonCognitoIdentity.CognitoUserPool(poolData);
			 console.log("token is "+token);
        } else {
            window.location.href = '/signin.html';
        }
    }).catch(function handleTokenError(error) {
        alert(error);
        window.location.href = '/signin.html';
    });
    

    

    // Register click handler for #request button
    $(function onDocReady() {
        //$('#request').click(handleCreateTemplate);
        //$(WildRydes.map).on('pickupChange', handlePickupChanged);

        WildRydes.authToken.then(function updateAuthMessage(token) {
            if (token) {
                displayUpdate('You are authenticated. Click to see your <a href="#authTokenModal" data-toggle="modal">auth token</a>.');
                //$('.authToken').text(token);
				
            }
        });

        if (!_config.api.invokeUrl) {
            $('#noApiMessage').show();
        }
    });
	
	 $('#request').click(function (){
		  var templateName = $('#id_team_name').val();
       var cognitoUseremail = userPool.getCurrentUser().username;
	   console.log("cognitoUseremail "+ cognitoUseremail);
        $.ajax({
            method: 'POST',
            url: _config.api.invokeUrl + '/template',
            headers: {
                Authorization: authToken
            },
            data: JSON.stringify({
                'userid':'cognitoUseremail',
				'templateName' :templateName
            }),
            contentType: 'application/json',
            success: completeRequest,
            error: function ajaxError(jqXHR, textStatus, errorThrown) {
                console.error('Error requesting ride: ', textStatus, ', Details: ', errorThrown);
                console.error('Response: ', jqXHR.responseText);
                alert('An error occured when requesting your unicorn:\n' + jqXHR.responseText);
            }
        });
	 });

    
	 function handleCreateTemplate(event) {
        var templateName = $('#id_team_name').val();
       var cognitoUseremail = userPool.getCurrentUser().username;
	   console.log("cognitoUseremail "+ cognitoUseremail);
        $.ajax({
            method: 'POST',
            url: _config.api.invokeUrl + '/template',
            headers: {
                Authorization: authToken
            },
            data: JSON.stringify({
                'userid':'cognitoUseremail',
				'templateName' :templateName
            }),
            contentType: 'application/json',
            success: completeRequest,
            error: function ajaxError(jqXHR, textStatus, errorThrown) {
                console.error('Error requesting ride: ', textStatus, ', Details: ', errorThrown);
                console.error('Response: ', jqXHR.responseText);
                alert('An error occured when requesting your unicorn:\n' + jqXHR.responseText);
            }
        });
    }
   function completeRequest(result) {
        console.log('Response received from API: ', result);
       displayUpdate(result+" is generated");
    }
   

    

    function displayUpdate(text) {
        $('#updates').append($('<li>' + text + '</li>'));
    }
}(jQuery));
