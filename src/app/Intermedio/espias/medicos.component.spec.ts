import { MedicosComponent} from './medicos.component';
import { MedicosService } from './medicos.service';
import { from, EMPTY, throwError } from 'rxjs';

describe('Medicos Component testSuit', () => {
  let component: MedicosComponent;
  const servicio = new MedicosService(null);

  beforeEach(()=>{
      component = new MedicosComponent(servicio);
  });

  it('Init: debe cargar los medicos', ()=> {
      const medicosFake = ['medico1','medico2','medico3'];
      spyOn(servicio, 'getMedicos').and.callFake(()=>{
          return from ([medicosFake])
      })
      component.ngOnInit();
      expect(component.medicos.length).toBeGreaterThan(0);
  });

  it('Init: debe cargar los medicos', ()=> {
        const medicosFake = ['medico1','medico2','medico3'];
        spyOn(servicio, 'getMedicos').and.callFake(()=>{
            return from ([medicosFake])
        })
        component.ngOnInit();
        expect(component.medicos.length).toBeGreaterThan(0);
    });

    it('Debe llamar al servicio para agregar un medico', ()=> {
       const espia = spyOn(servicio,'agregarMedico').and.callFake(medico=>{
           return EMPTY;
       })
        component.agregarMedico();
        expect(espia).toHaveBeenCalled();
    });

    it('Debe agregar a un medico al arreglo componente', ()=> {
        const medico={id:1,nombre:'Marcelo'};
        spyOn(servicio,'agregarMedico').and.returnValue(from([medico]));
         component.agregarMedico();
         expect(component.medicos.indexOf(medico)).toBeGreaterThanOrEqual(0);
     });

     it('Si falla la llamada el mensaje debe ser el mismo que del servicio', ()=> {
        const miError='No se pudo crear al medico';
        spyOn(servicio,'agregarMedico').and.returnValue(throwError(miError));
         component.agregarMedico();
         expect(component.mensajeError).toBe(miError);
     });


    it('Se debe llamar al servidor para borrar un medico',()=>{
        spyOn(window,'confirm').and.returnValue(true);
        const espia = spyOn(servicio,'borrarMedico').and.callFake(medico=>{return EMPTY;})
       component.borrarMedico('100000');
        expect(espia).toHaveBeenCalledWith('100000');
     });

    it('No debe llamar al servidor para borrar un medico cuando el confirmar sea negativo',()=>{
        spyOn(window,'confirm').and.returnValue(false);
        const espia = spyOn(servicio,'borrarMedico').and.callFake(medico=>{return EMPTY;})
        component.borrarMedico('100000');
         expect(espia).not.toHaveBeenCalledWith('100000');
     });

     // 5- DEbe llamar al servidor para borrar un medico
     // 6- No debe llamar al servidor para borrar un medico cuando el confirmar sea negativo
})