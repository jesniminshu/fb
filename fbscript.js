$(document).ready(function(){
    $("#signup-form").validate({
        rules:{
            firstname:{
                required:true,
                minlength:4,
                maxlength:6

            },
            secondname:{
                required:true,
                minlength:4,
                maxlength:6

            },
            emailaddress:{
                required:true,
                email:true
            },
            password:{
                required:true,
                minlength:6
            },
            day:{
                required:true
            },
            month:{
                required:true
            },
            year:{
                required:true
            },
            gender:{
                required:true
            }

        },
        messages:{
            firstname:{
                required:"Enter first name",
                minlength:"enter atleast 4 characters"
            }
        }
    })
})