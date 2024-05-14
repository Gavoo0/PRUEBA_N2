$(document).ready(function(){
    $("#enviar").click(function(){
      var valcor= true;
      var nombre=$("#itNombre").val();
      var correo=$("#itCorreo").val();
      var contrasena=$("#itContrasena").val();
      var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if(!emailRegex.test(correo)){
          $("#itCorreo").css("border-color","red");
          $("#mensajeCorreo2").fadeIn();
          valcor=false;
          return false;
          event.preventDefault(); // Evita que se envíe el formulario
      }
      if(correo==""){
        $("#itCorreo").css("border-color","red");
        $("#mensajeCorreo").fadeIn();
        return false;
      }else{
        if(valcor){
          $("#itCorreo").css("border-color","#ced4da");
          $("#mensajeCorreo").fadeOut();
        }
      }
      if(nombre==""){
        $("#itNombre").css("border-color","red");
        $("#mensajeNombre").fadeIn();
        return false;
      }else{
        $("#itNombre").css("border-color","#ced4da");
        $("#mensajeNombre").fadeOut();
      }
      if(contrasena==""){
        $("#itContrasena").css("border-color","red");
        $("#mensajeContrasena").fadeIn();
        return false;
      }else{
        $("#itContrasena").css("border-color","#ced4da");
        $("#mensajeContrasena").fadeOut();
      }
    })
  })
  $("#itCorreo").change(function(){
    $("#itCorreo").css("border-color","#ced4da");
    $("#mensajeCorreo").fadeOut();
    $("#mensajeCorreo2").fadeOut();
  })
  $("#itContrasena").change(function(){
    $("#itContrasena").css("border-color","#ced4da");
    $("#mensajeContrasena").fadeOut();
  })
  $("#itNombre").change(function(){
    $("#itNombre").css("border-color","#ced4da");
    $("#mensajeNombre").fadeOut();
  })