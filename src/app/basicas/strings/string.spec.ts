import {mensaje} from './strings';

describe('Prueba de strings',() => {
    
    it('Debe retornar un string', ()=>{
        const nombre="Marcelo";
        const resp = mensaje(nombre);
        expect(typeof resp).toBe('string');
        })

    it('Debe retornar el saludo con el nombre', ()=>{
        const nombre="Marcelo";
        const resp = mensaje(nombre);
        expect(resp).toContain("Saludos Marcelo")
        })
})