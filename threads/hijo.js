process.on("message",mensaje=>{
      //El proceso secundario está escuchando los mensajes del proceso principal
      process.send(mensaje.data +" hijo 🦄");//envia al principal .data por q es el valor q le pusimos en el proceso principal
      process.exit();
});