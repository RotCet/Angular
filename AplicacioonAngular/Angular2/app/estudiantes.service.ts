export class EstudiantesService{
    listaEstudiantes(universidad):Array<string>{
        if(universidad=="Universidad Nacional KBAE"){
             return ['Karina','Lupita'];
         }
         else{
            return ['Juan Paulo','Ruben'];
         }
 }
}