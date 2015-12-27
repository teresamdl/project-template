var app = angular.module('app', []);
app.controller('MainCtrl',function(&getJSON){
	
	$.getJSON('docdata.json', function(data) 
                {
                    $.each(data,function(i,obj)
                    {
                        if(obj.user == form.username.value && obj.pass == form.password.value)
                        {
                            checkval = true; 
                            return false;
                        }
                    });
                     if(checkval == true)
                    {
                        window.open('NextPage.html','_self');
                    }
                else
                    {
                        alert("Invalid Password or Username");
                    }
            
                });
	
}