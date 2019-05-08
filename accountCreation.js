function sanitizeString(username){
    var username = username.split("@")[0];
    username = username.replace(/\W/g, '_');
    username = username.replace(/\_\_+/g, '_');
    return username; 
  }
  
  function isUsernameUnique(username){
    var payload = {"username" : username}; 
    var options = {
      "method" : "POST",
      "payload" : JSON.stringify(payload),
      "contentType" : "application/json"
    }
    var userResponse = UrlFetchApp.fetch("https://auth.sonosim.com/api/info/searchusers", options).getContentText();
    var userData = JSON.parse(userResponse);
    var parsedData = JSON.parse(userData.response);
    return parsedData.length === 0;
  }
  
  function createUniqueUsername(formData){
    var email = formData.email;
    var baseUsername = sanitizeString(email);
    var username = baseUsername;
    var count = 0;
    while (!isUsernameUnique(username)){
      count++;
      username = baseUsername + "_" + count;
    } 
    return username;
  }
  
  function getFormResponseData(e){
    var formResponse = e.response;
    var itemResponses = formResponse.getItemResponses();
    return {
      "firstName" : itemResponses[0].getResponse().toString(),
      "lastName" : itemResponses[1].getResponse().toString(),
      "email" : itemResponses[2].getResponse().toString(),
      "respondentEmail" : formResponse.getRespondentEmail(),
      "date" : itemResponses[3].getResponse().toString()
    }
  }
  
  function createPassword(){
    var password = Math.floor(Math.random()*10000).toString();
    return password;
  }
  
  function getCourseDuration(formData){
    var dateString = formData.date;
    var exp = dateString.split(' ');
    var days = Number(exp[0]);
    return days;
  }  
  
  function getExpirationDate(days){
    var today = new Date();
    var expirationDate = new Date();
    expirationDate.setDate(today.getDate() + days);
    return expirationDate;
    }
  
  function createExpirationDate(formData){
    var days = getCourseDuration(formData);
    var expiration = getExpirationDate(days);
    var month = expiration.getMonth()+1;
    var day = expiration.getDate();
    var year = expiration.getFullYear()
    var expirationDate = (month + "/" + day + "/" + year);
    return expirationDate;
  }
    
  function getAccessToken(){
    var tokenPayload = { "grant_type": "client_credentials",
       "client_id": "z4j_mWrBMmexFly3fq1VUaK20XSAH4hn",
       "client_secret": "qXBsafopXpKz2kL9S1v2Hn8kTse32XoS0uNRc2nXcNkoL7XhbQaHcNS6VMrfSUkr",
       "audience": "https://sonosim.auth0.com/api/v2/" };
    var tokenOptions = {
      'method' : 'POST',
      'payload' : JSON.stringify(tokenPayload),
      'muteHttpExceptions' : true,
      'followRedirects' : false,
      "contentType" : "application/json"
    };
    var tokenResultUrl = UrlFetchApp.fetch("https://sonosim.auth0.com/oauth/token", tokenOptions).getContentText();
    var tokenData = JSON.parse(tokenResultUrl);
    return tokenData.access_token;
  }
  
  function getAllActiveCourses(){
    var options = {
    'method' : 'post'
    };
    var allCoursesResultUrl = UrlFetchApp.fetch("https://auth.sonosim.com/api/lms/courses", options).getContentText();
    var allCoursesData = JSON.parse(allCoursesResultUrl);
    var parsedData = JSON.parse(allCoursesData.response);
    var allCourseIds = [];
    for each (var data in parsedData){
      allCourseIds.push(data["C_ID"])
      }                   
    return allCourseIds;
  }
  
  function createDemoAccount(formData){
    var payload = {
      "managementToken" : formData.accessToken,
      "users" : [{
        "username" : formData.username,
        "givenName" : formData.firstName,
        "surname" : formData.lastName,
        "password" : formData.password,
        "groupTitle" : "Demos",
        "email" : formData.email,
        "expiration" : formData.expirationDate,
        "caseBuilderAccessLevel" : 0,
        "isAdmin" : false,
        "enableCME" : false,
        "courses" : getAllActiveCourses()
      }]
    };
    var options = {
      'method' : 'PATCH',
      'payload' : JSON.stringify(payload),
      'muteHttpExceptions' : true,
      'followRedirects' : false,
      "contentType" : "application/json"
    };
    var url = "https://auth.sonosim.com/api/authentication/updateuser";
    var result = UrlFetchApp.fetch(url, options);
    return result;
  }
  
  function getRespondentEmail(formData){
    return formData.respondentEmail;
  }
  
  function myFunction(e) {
    var formData = getFormResponseData(e);
    formData.password = createPassword();
    formData.username = createUniqueUsername(formData);
    formData.expirationDate = createExpirationDate(formData);
    formData.accessToken = getAccessToken();
    
    var respondentEmail = getRespondentEmail(formData);
    
    try {
      var result = createDemoAccount(formData);
      var subject = "Demo Account Created for " + formData.firstName + " " + formData.lastName;
      var emailBody = "Demo URL: https://sonosim.com/login " + "\n" + "User Account: " + formData.firstName + " " + formData.lastName + "\n" + "Username: " + formData.username + "\n" + "Password: " + formData.password + "\n" + "Expiration: " + formData.expirationDate + "\n";
      
      MailApp.sendEmail(respondentEmail, subject, emailBody);
      MailApp.sendEmail("ttlmsrequests@sonosim.com", subject, emailBody);
    } catch(ex) {
      Logger.log(ex);
      var failSubject = "Failed to Create Demo Account for " + formData.firstName + " " + formData.lastName;
      var failEmailBody = "Please contact customer support at support@sonosim.com or 855-873-7666";
      MailApp.sendEmail(respondentEmail, failSubject, failEmailBody);
      MailApp.sendEmail("support@sonosim.com", failSubject,  failEmailBody);
    } 
  }
  