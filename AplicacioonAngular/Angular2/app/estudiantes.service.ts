export class EstudiantesService{
    listaEstudiantes(universidad:any):Array<string>{
        if(universidad=="Universidad Nacional KBAE"){
             return ['Karina','Lupita'];
         }
         else{
            return ['Juan Paulo','Ruben'];
         }
 }
}