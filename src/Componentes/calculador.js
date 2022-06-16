import React, {useState, useEffect} from 'react'
import { Slider,InputNumber } from 'rsuite';

import Modal from 'react-bootstrap/Modal'
import { useForm } from "react-hook-form";
import axios from 'axios';
import 'rsuite/dist/rsuite.min.css';

let montoTotal=0;
export default function CalculadorFormularioLinea574() {
    const [value, setValue] = useState(0);
    const [formDatos,setFormDatos]= useState({cuotas:"12 meses"});
    const [montoCuotas,setMontoCuotas]= useState();
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    
    const onChangeFormDatos =(e)=> {
        setFormDatos({
            ...formDatos,
            [e.target.name]: e.target.value
          });
       
      };
  
      useEffect(()=>{     
        if(formDatos.cuotas == "3 meses"){
            montoTotal =Math.round((value / 3 )*1.3);
            setMontoCuotas(montoTotal);
        }
        if(formDatos.cuotas == "6 meses"){
            montoTotal =Math.round((value / 6 )*1.6);
            setMontoCuotas(montoTotal);
        }
        if(formDatos.cuotas == "9 meses"){
            montoTotal =Math.round((value / 9 )*1.9);
            setMontoCuotas(montoTotal);
        }
        if(formDatos.cuotas == "12 meses"){
            montoTotal =Math.round((value / 12 )*2.2);
            setMontoCuotas(montoTotal);
        }
      },[value,formDatos]);
    // ENVIAR FORMULARIO//
    
    const {
      register,
      formState: { errors },
      handleSubmit
    } = useForm({
      mode: "onChange"
    });
    const onSubmit = (data) => {   
        let formData = new FormData();
        formData.append("data",JSON.stringify(data))
        formData.append("value",JSON.stringify(value))
        formData.append("montoCuotas",JSON.stringify(montoCuotas))
        formData.append("cantCuotas",JSON.stringify(formDatos.cuotas))
      axios.post(`https://eugenie.com.ar/webApi/public/mail/Linea574`, formData)
      .then(function (response) {
        handleShow();
      })
      .catch(function (error) {
        console.log(error);
      });
  
      //setSubmitValue(data);
    };
  return (
    <>
     <div className='formulario-unico-linea574-background'>
        <form onSubmit={handleSubmit(onSubmit)} >
            <div className='calculador-conteiner formulario-unico-linea574'>
                
                <div className='formulario-unico-columnas'>
                    <div className='formulario-unico-col-left'>
       
                        <div className='calculador-capital'>     
                            <span>${value}</span>                  
                         </div>
        
                         <div className='calculador-slider'>
                         <Slider
                            className='slider-filtro'
                            progress      
                            step={1000}            
                            min={5000}
                            max={2000000}
                            value={value}
                            onChange={value => {
                            setValue(value);
                            }}   
                            name='montoAInvertir'
                            />  
                         </div>
                         <div className='min-and-max-text'>
                             <p>$5.000</p>
                             <p>$50.000</p>
                         </div>
                         <p className='valor-cuota'>Elegí la cantidad de cuotas</p>
                         <div className='cuotas-container'>
                             <div className='content-select'>
                                <select name="cuotas" {...register("cuotas", { required: true })} onChange ={(e)=>{onChangeFormDatos(e)}}>
                                    <option value="3 meses"> 3 meses </option>
                                    <option value="6 meses">6 meses</option>
                                    <option value="9 meses">9 meses</option>
                                    <option value="12 meses" selected={"12 meses"}>12 meses</option>
                                </select>
                                <i></i>
                            </div>
                            <p className='monto-texto-de'>de</p>
                            <div>
                                 <p className='monto-cuota'>${Math.round(montoCuotas)}</p>
                                 {/* <p className='monto-meses'>en {parseInt(formDatos.cuotas)/2 } meses</p> */}
                            </div>
                            
                         </div>
                        {/* <div className='botones-cuotas'>
                                <input id="3Cuotas" type="radio" name="cuotas" onChange={onChangeFormDatos}  value="3 meses" />
                                <label for="3Cuotas">3 meses</label>
                                <input id="6Cuotas" type="radio" name="cuotas" onChange={onChangeFormDatos}  value="6 meses" />
                                <label for="6Cuotas">6 meses</label>
                                <input id="9Cuotas" type="radio" name="cuotas" onChange={onChangeFormDatos}  value="9 meses" />
                                <label for="9Cuotas">9 meses</label>
                                <input id="12Cuotas" type="radio" name="cuotas" onChange={onChangeFormDatos} value="12 meses" defaultChecked={"12 meses"}/>
                                <label for="12Cuotas">12 meses</label>
                        </div> */}
                    </div>
                    <div className='formulario-unico-col-right'>
                        <div className='formulario-container'>
                            <div className='fila-formulario'>
                                <p className='formulario-titulo'>Completá tus datos personales <b>y listo</b></p>
                            </div>
                            <div className='fila-formulario'>
                                <div className='campo-formulario'>
                                    <input                            
                                    placeholder="Nombre y apellido"
                                    {...register("nombre", {
                                    required: "Campo obligatorio",
                                    maxLength: {
                                        value: 30,
                                        message: "Máximo 30 caracteres"
                                    }
                                    
                                    })}
                                    />
                                    {errors.nombre && <p>{errors.nombre.message}</p>}
                                </div>              
                            </div>
                            <div className='fila-formulario'>
                                <div className='campo-formulario'>
                                    <input
                                    placeholder="Télefono"
                                    type="number"
                                    {...register("telefono", {
                                    required: "Campo obligatorio",
                                    maxLength: {
                                        value: 20,
                                        message: "Máximo 20 caracteres"
                                    }
                                    })}
                                
                                    />
                                    {errors.telefono && <p>{errors.telefono.message}</p>}
                                </div>             
                            </div>
                            {/* <div className='fila-formulario'>
                                <div className='campo-formulario'>
                                        <input
                                        placeholder="Localidad"
                                        {...register("localidad", {
                                        required: "Campo obligatorio",
                                        maxLength: {
                                            value: 80,
                                            message: "Máximo 80 caracteres"
                                        }
                                        })}
                                        
                                        />
                                        {errors.localidad && <p>{errors.localidad.message}</p>}
                                    </div>                                  
                            </div> */}
                            <div className='fila-formulario'>
                                <div className='campo-formulario'>
                                    <input
                                    placeholder="DNI"
                                    type="number"
                                    {...register("dni", {
                                    required: "Campo obligatorio",
                                    maxLength: {
                                        value: 8,
                                        message: "Máximo 8 caracteres"
                                    }
                                    })}
                                    
                                    />
                                    {errors.dni && <p>{errors.dni.message}</p>}
                                </div> 
                            </div>
            
                    </div>  
                    </div>
                </div>
 
                    <input className="boton-enviar-formulario" type="submit" value="Solicitar ahora"/>             
            </div>            
        </form>
    </div>
        <Modal
        centered
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title><img src='https://res.cloudinary.com/grupo-delsud/image/upload/v1648061767/EUGENIE/ico/ico-popup_dsn1mn.svg' alt="Gracias-icon"/><span className="modal-title">¡Gracias!</span></Modal.Title>
        </Modal.Header>
        <Modal.Body>
        Tu mensaje se envió con éxito.<br/>
        Nos pondremos en contacto en las próximas horas.<br/><br/>
        Que tengas buen día
        </Modal.Body>
        </Modal>
    </>
  )
}