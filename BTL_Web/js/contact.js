$(document).ready(function(){
    function checkUserId(){
        let userID = $('#txtUserID').val();
        let userIDRegex = /^[a-zA-Z0-9]{5,12}$/;
        if(userIDRegex.test(userID)){
            return true
        }
        return false
    }
    $("#btnRegister").click(function(e){
        e.preventDefault();
        if(checkUserId()){
            $("#statusOfUserID").text('UserID hợp lệ')
            $("#statusOfUserID").css('color','blue')
        }else{
            $("#statusOfUserID").text('UserID không hợp lệ')
            $("#statusOfUserID").css('color','red')
        }
    })
})

$(document).ready(function(){
    function checkPass(){
        let passWord = $('#txtPassword').val();
        let passRegex = /^[a-zA-Z0-9]{7,12}$/;
        if(passRegex.test(passWord)){
            return true
        }
        return false
    }
    $("#btnRegister").click(function(e){
        e.preventDefault();
        if(checkPass()){
            $("#statusOfPassword").text('Password hợp lệ')
            $("#statusOfPassword").css('color','blue')
        }
        else{
            $("#statusOfPassword").text('Password không hợp lệ')
            $("#statusOfPassword").css('color','red')
        }
    })
})

$(document).ready(function(){
   
    function checkSubject(){
        let txtSubject = $('#txtSubject').val();
        let txtSubjectregex = /^[a-zA-Z]+$/;
        if(txtSubjectregex.test(txtName)){
            return true
        }
        return false
    }
    $("#btnRegister").click(function(e){
        e.preventDefault();
        if(checkSubject()){
            $("#subject_row").text('Hợp lệ')
            $("#subject_row").css('color','blue')
        }
        else{
            $("#subject_row").text('Không hợp lệ')
            $("#subject_row").css('color','red')
        }
    })
})




$(document).ready(function(){
   
    function checkPhone(){
        let txtPhone = $('#txtPhone').val();
        let txtPhoneregex = /^[0-9]+$/;
        if(txtPhoneregex.test(txtPhone)){
            return true
        }
        return false
    }
    $("#btnRegister").click(function(e){
        e.preventDefault();
        if(checkPhone()){
            $("#statusOfPhone").text('Số điện thoại hợp lệ')
            $("#statusOfPhone").css('color','blue')
        }
        else{
            $("#statusOfPhone").text('Số điện thoại không hợp lệ')
            $("#statusOfPhone").css('color','red')
        }
    })
})

$(document).ready(function(){
   
    function checkEmail(){
        let txtEmail = $('#txtEmail').val();
        let txtEmailregex = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z\-])+\.)+[a-zA-Z]{2,4}$/;
        if(txtEmailregex.test(txtEmail)){
            return true
        }
        return false
    }
    $("#btnRegister").click(function(e){
        e.preventDefault();
        if(checkEmail()){
            $("#statusOfEmail").text('Email hợp lệ')
            $("#statusOfEmail").css('color','blue')
        }
        else{
            $("#statusOfEmail").text('Email không hợp lệ')
            $("#statusOfEmail").css('color','red')
        }
    })
})


