$(document).ready(function(){
  var settings = {
  "url": "http://platformapi.immdemo.net/api/v1/Shopper?MemberId=1",
  "method": "GET",
  "timeout": 0,
  "headers": {
    "username": "imemine@usa.com",
    "Password": "123456",
    "Content-Type": "application/x-www-form-urlencoded",
    "ClientID": "1",
    "Authorization": "Bearer Bearer {Token}"
  },
  "data": {
    "grant_type": "password"
  }
};

$.ajax(settings).done(function (response) {
  console.log(response);
   var data = response.message;
   var showdata = "";
    
    for(var i=0; i<data.length;i++) 
    {
     
      $(".shopper_id").append(data[i].ShopperID);
      $("#email").append(data[i].Email);
      $(".firs_name").append(data[i].Firstname)+" "+$("#lastName").append(data[i].Lastname);
      $("#phone").append(data[i].Phone);
      $("#dob").append(data[i].DOB);
      $("#address1").append(data[i].Address1);
      $("#address2").append(data[i].Address2); 
      $("#city").append(data[i].City+" "+data[i].StateName+" "+data[i].Zip );
      $("#store").append(data[i].store); 
    }
     
});
});