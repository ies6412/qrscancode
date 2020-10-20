
export class Registro{
    public format: string;
    public text: string;
    public type: string;
    public icon: string;
    public created: Date;


    constructor(format: string, text: string){
        this.format = format;
        this.text = text;
        this.created = new Date();
        this.DeterminarType();

    }
    private DeterminarType(){
       const tipo = this.text.substr(0, 4);
       console.log('tipo', tipo);
       switch (tipo){
           case 'http':
               this.type = tipo;
               this.icon = 'globe';
               break;
           case 'geo:':
                this.type = tipo;
                this.icon = 'pin';
                break;
            default:
                this.type = 'NO RECONOCIDO';
                this.icon = 'create'  ;



       }



    }
}
