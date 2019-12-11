import { obtenerPersonas } from './arreglos';

describe ('pruebas de arreglos', () => {
   it('Debe retornar al menos 3 personas', ()=>{
       const res= obtenerPersonas();
       expect(res.length).toBeGreaterThanOrEqual(3);
   })
   
   it('Debe Existir Marcelo', ()=>{
    const res= obtenerPersonas();
    expect(res).toContain('Marcelo');
})
})