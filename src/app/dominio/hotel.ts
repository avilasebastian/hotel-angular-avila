export const ASSET_FOLDER = '/assets/imagenes/'
export class Hotel{
    id:number
    nombre:string
    lugar:string
    estrellas:number
    habitaciones:Habitacion[] = []
    servicios:Servicio[] = []

    image() {
        return ASSET_FOLDER + 'hotel'+ this.id +'.jpg'
    }

    init(data:any):void{
        this.id = data.id
        this.nombre = data.nombre
        this.lugar = data.lugar
        this.estrellas = data.estrellas
        this.habitaciones = data.habitaciones
        this.servicios = data.servicios
    }

    habitacionMasBarata(){
        const list = []
        this.habitaciones.forEach(elemento=>list.push(elemento.precio))
        return  Math.min.apply(null,list)
    }
    
}


export class Servicio{
    constructor(public nombre:string, public precio:number){}
} 

export class Habitacion extends Servicio{
    fechaInicial:Date = new Date()
    fechaFinal:Date = new Date()
}


export class Usuario{
    reservas = []
    constructor(public nombre:string){}
    
    reservar(habitacion:Habitacion){
        this.reservas.push(habitacion)
    }
}