import {FormularioRegister} from  './formulario';
import {FormBuilder} from '@angular/forms';
import { cpus } from 'os';
import { fromEventPattern } from 'rxjs';

describe('Pruebas de formulario',()=>{
    let componente: FormularioRegister;

    beforeEach(()=> {
        componente = new FormularioRegister(new FormBuilder);
    });

    it('Debe crear un formulario con 2 campos, email y password', ()=>{
        expect ( componente.form.contains('email')).toBeTruthy();
        expect ( componente.form.contains('password')).toBeTruthy();
    });

    it('EL email debe ser obligatorio', ()=>{
        
        const control = componente.form.get('email');
        control.setValue('');
        expect (control.valid).toBeFalsy();
    });

    it('EL email debe es valido', ()=>{
        const control = componente.form.get('email');
        control.setValue('marcelo_0614@hotmail.com');
        expect (control.valid).toBeTruthy();
    });
})