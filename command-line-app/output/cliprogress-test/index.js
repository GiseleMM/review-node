const cliProgress=require("cli-progress");
const  colors  =  require ( 'ansi-colors' ) ; //npm i ansi-colors
//creo barra de progreso 
const bar1= new  cliProgress . SingleBar ( { 
    format: 'CLI Progress |'  +  colors . cyan ( '{bar}' )  +  '| {percentage}% || {value}/{total} Chunks || Speed: {speed}' , 
    barCompleteChar : '\u2588' , 
    barIncompleteChar : '\u2591' , 
    hideCursor : true 
} ) ;
//Inicializo el token de carga bar.start(total,inicial,{objeto})
bar1.start(200,0,{speed:"N/A"});
//aumenta el valor actual  en una cantidad especificada y si no se pasa se incrementa en 1
bar1.increment();

//Actulizar el valor del progreso actual
bar1.update(50);// no agrega si no q fija como valor total
bar1.increment();// 51

//Establece el valor de progreso total mientras la barra de progreso está activa.Util para gestionar tareas dinamicas
bar1.setTotal(51);

//detengo barra de progreso
bar1.stop();



const bar2= new  cliProgress . SingleBar ( { 
    format: 'CLI Progress 👉​'  +  colors .red ( '{bar}' )  +  '🏁​ {percentage}% || {value}/{total} 💣​ || Speed: {speed}' , 
    barCompleteChar : '\u2588' , 
    barIncompleteChar : '\u2591' , 
    hideCursor : true 
} ) ;

bar2.start(300,0,{speed:"N/A"});
bar2.increment();
bar2.update(70);// no agrega si no q fija como valor total
bar2.increment();// 51


bar2.stop();