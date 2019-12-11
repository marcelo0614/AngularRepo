import { incremental } from './numeros';

describe ('pruebas de numeros', () => {
   it('Debe retornar 100 el numero es mayor a 100', ()=>{
       const res= incremental(300);
       expect(res).toBe(100);
   })

   it('Debe retornar el numero +1 si no es mayor a 100', ()=>{
    const numero=50;
    const res= incremental(numero);
    expect(res).toBe(numero+1);
})
 
})