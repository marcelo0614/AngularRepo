import {Jugador} from './clases';

describe('Prueba de clase',() => {
    //const jugador=new Jugador();
    let jugador:Jugador;

    beforeAll(()=>{
      console.warn('---------------beforeAll');
    })

    beforeEach(()=>{
      console.warn('***************beforeEach');
      jugador=new Jugador();
      })

    afterAll(()=>{
        console.warn('+++++++++++++++afterAll');
      })
  
    afterEach(()=>{
        console.warn('///////////////afterEach');
        jugador=new Jugador();
        })
    

    it('Debe retornar 80 si recibe 20 de danio', ()=>{
    //const jugador=new Jugador()
    const resp = jugador.recibeDanio(20);
    expect(resp).toBe(80);
    })

    it('Debe retornar 50 si recibe 50 de danio', ()=>{
    //const jugador=new Jugador()   
    const resp = jugador.recibeDanio(50);
     expect(resp).toBe(50);
    })

    it('Debe retornar 0 si recibe 3000 de danio', ()=>{
        //const jugador=new Jugador()   
        const resp = jugador.recibeDanio(300);
         expect(resp).toBe(0);
        })
})