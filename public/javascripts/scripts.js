$(function(){var r=!0;$(".switch-button").on("click",function(e){e.preventDefault(),$("input").val(""),r?(r=!1,$(".register").show("slow"),$(".login").hide()):(r=!0,$(".login").show("slow"),$(".register").hide())}),$("input").on("focus",function(){$("p.error").remove(),$("input").removeClass("error")}),$(".register-button").on("click",function(r){r.preventDefault();var e={login:$("#register-login").val(),password:$("#register-password").val(),passwordConfirm:$("#register-password-confirm").val()};$.ajax({type:"POST",data:JSON.stringify(e),contentType:"application/json",url:"/api/auth/register"}).done(function(r){r.ok?$(".register h2").after('<p class="success">Отлично!</p>'):($("p.error").remove(),$(".register h2").after('<p class="error">'+r.error+"</p>"),r.fields&&r.fields.forEach(function(r){$("input[name="+r+"]").addClass("error")}))})})});