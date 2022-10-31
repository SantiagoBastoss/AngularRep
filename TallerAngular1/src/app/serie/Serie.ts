export class Serie {

    id: number;
    nombre: string;
    canal: string;
    temporadas: string;
    descripcion: string;
    linkExterno: string;
    imagen: string;

    constructor(

      id: number,
      nombre: string,
      canal: string,
      temporadas: string,
      descripcion: string,
      linkExterno: string,
      imagen: string
    ) {
      this.id = id;
      this.nombre = nombre;
      this.canal = canal;
      this.temporadas = temporadas;
      this.descripcion = descripcion;
      this.linkExterno = linkExterno;
      this.imagen = imagen;
    }
   }
