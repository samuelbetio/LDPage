function check()
{
	var pass = document.form.pass.value;
	var cnfpass = document.form.cnfpass.value;
	if(pass != "" || cnfpass != "")
	{
		len = pass.length;
		if(len>12)
		{
			alert('Password must be less than 12 char');
			document.form.pass.value = pass.substr(0,12);
		}
		else
		{
			if(pass == cnfpass)
			{
				document.getElementById('dyn').style.color = 'green';
				document.getElementById('dyn').innerHTML = "Match";	
				document.form.valid.disabled = false;
			}
			else
			{
				document.getElementById('dyn').style.color = 'red';
				document.getElementById('dyn').innerHTML = "Not match";
				document.form.valid.disabled = true;
			}
		}
		
	}
	
}