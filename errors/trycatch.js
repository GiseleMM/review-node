const fs =require('fs');// por q no estamos trabajando con npm 
try {
    const data=fs.readFileSync("/jdsdj");
    console.log(data);
    
} catch (error) {
    console.log(error);
    
}