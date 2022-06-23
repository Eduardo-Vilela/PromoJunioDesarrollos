import React,{useState,useEffect} from 'react'
import{
BoxPrincipal,
SubBox,
Box1,
Box2,
Logo,
Titulo,
SubTitulo,
Container,
ContenedorForm,
TituloForm,
ContenedorInputs,
LabelInputs,
InputForm ,
ButtonForm,
SubContenedorForm,
InputSelect,
ContenedorInputRange,
BoxButton,
BoxTitulo,
LabelInputRange,
ContenedorNumeros,
NumerosSlider,
Errores ,
BoxPrincipalModal,
TituloModal,
ContenedorBoxsModal,
Box1Modal,
Box2Modal,
Box3Modal,
Box4Modal,
BoxTituloModal,
BoxButtonModal,
SubtitulosModal,
BoxImagenDesarrolloModal,
ImagenDesarrolloModal,
NumeroMonto,
ButtonModal,
Parrafito,
ButtonFormFalso,
} from './PromoElements'
import { useForm, useFormState } from "react-hook-form";
import axios from "axios";
import { Modal } from 'rsuite';
import './range.css'
import 'rsuite/dist/rsuite.min.css';
import RangeSlider from 'react-bootstrap-range-slider';
import './icono.css'

let montoTotal=0;
function PromoJunio() {

   const [value, setValue] = useState(0);
    const [formDatos,setFormDatos]= useState({cuotas:"12 meses", nombre:"", Desarrollo:""});
    const [cuotas, setCuotas] = useState();
    const [nombre, setNombre] = useState();
    const [montoCuotas,setMontoCuotas]= useState();
    const [fotoDesarrollo,setFotoDesarrollo] = useState();
    const [buttonFalso,setButtonFalso] = useState(true);



    useEffect (()=>{ 
      if(formDatos.Desarrollo == "La Escondida - Los Hornos"){
        setFotoDesarrollo(
          'https://res.cloudinary.com/grupo-delsud/image/upload/v1653595256/DESARROLLOSGRUPODELSUD/Logo-La-Escondida-fondo-transparente-con-sombra-17-1024x1024_pwiaxc.webp'
        )
      }
      if(formDatos.Desarrollo == "Las Victorias - Abasto"){
        setFotoDesarrollo(
    
          'https://res.cloudinary.com/grupo-delsud/image/upload/v1649626460/DESARROLLOSGRUPODELSUD/Group_184_j7j7rc.webp'
        
        )
      }
      if(formDatos.Desarrollo == "El Juncal - Lisandro Olmos"){
        setFotoDesarrollo(
    
          'https://res.cloudinary.com/grupo-delsud/image/upload/v1648823298/DESARROLLOSGRUPODELSUD/eljuncalLetras_xlttzf.webp'
        
        )
      }
      if(formDatos.Desarrollo == "La Campiña - Ángel Etcheverry"){
        setFotoDesarrollo(
    
          'https://res.cloudinary.com/grupo-delsud/image/upload/v1649431167/DESARROLLOSGRUPODELSUD/lacampi%C3%B1a_hdxe5y.webp'
        
        )
      }
      if(formDatos.Desarrollo == "Las Orianas - Melchor Romero"){
        setFotoDesarrollo(
    
          'https://res.cloudinary.com/grupo-delsud/image/upload/v1649692006/DESARROLLOSGRUPODELSUD/Logo-Banner-Las-Orianas_qmldsg.webp'
        
        )
      }
      if(formDatos.Desarrollo == "Latitud 34 - Los Hornos"){
        setFotoDesarrollo(
    
          'https://res.cloudinary.com/grupo-delsud/image/upload/v1649637673/DESARROLLOSGRUPODELSUD/Groupaaa_vvoggh.webp'
        
        )
      }else{
        setFormDatos(
          <h1>SELECIONE UN DESARROLLO!</h1>
        )
      }
    
      
    },[formDatos.Desarrollo])


    const onChangeFormDatos =(e)=> {
        setFormDatos({
            ...formDatos,
            [e.target.name]: e.target.value
          });
       
      };
  
      useEffect(()=>{   
          
        if(formDatos.cuotas == "12 meses"){
            montoTotal =Math.round(((3600000 - value) / 12));
            setMontoCuotas(montoTotal);
        }
        if(formDatos.cuotas == "24 meses"){
            montoTotal =Math.round(((3600000 - value) / 24));
            setMontoCuotas(montoTotal);
        }
        if(formDatos.cuotas == "36 meses"){
            montoTotal =Math.round(((3600000 - value) / 36));
            setMontoCuotas(montoTotal);
        }
        if(formDatos.cuotas == "48 meses"){
            montoTotal =Math.round(((3600000 - value) / 48));
            setMontoCuotas(montoTotal);
        }
        if(formDatos.cuotas == "60 meses"){
          montoTotal =Math.round(((3600000 - value) / 60));
          setMontoCuotas(montoTotal);
        }
        if(formDatos.cuotas == "72 meses"){
          montoTotal =Math.round(((3600000 - value) / 72));
          setMontoCuotas(montoTotal);
        }
        if(formDatos.cuotas == "84 meses"){
          montoTotal =Math.round(((3600000 - value) / 84));
          setMontoCuotas(montoTotal);
        }
        
        if(formDatos.cuotas != null){
          setCuotas(formDatos.cuotas);
        }

        if(formDatos.nombre != null){
          setNombre(formDatos.nombre);
        }
         

      },[value, formDatos]);
    // ENVIAR FORMULARIO//
    


    const {
      register,
      reset,
      formState: { errors,isValid},
      handleSubmit
    } = useForm({
      mode: "onChange"
    });
    const onSubmit = (data) => {   
      setFormDatos({nombre:data.nombre, Desarrollo: data.Desarrollo, cuotas: data.cuotas}) 
        let formData = new FormData();
        formData.append("data",JSON.stringify(data))
        formData.append("value",JSON.stringify(value))
        formData.append("montoCuotas",JSON.stringify(montoCuotas))
        formData.append("cantCuotas",JSON.stringify(formDatos.cuotas))
        formData.append("nombre",JSON.stringify(formDatos.nombre))
        
        
      axios.post(`https://promo.desarrollosdelsud.com.ar/webApi/public/FormularioPromo`, formData)
      .then(function (response) {
        reset()
      })
      .catch(function (error) {
        console.log(error);
        reset()
      });
  
       //setSubmitValue(data);
    };

    //MODAL
    const [open, setOpen] = React.useState(false);
    const [size, setSize] = React.useState();
    const handleOpen = value => {
      setSize(value);
      setOpen(true);
      setButtonFalso(false);
    };
    const handleClose = () => setOpen(false);


    console.log(buttonFalso)
  return (
    <>
    <Container>
     <BoxPrincipal>
        <SubBox>
          <Box1>
            <Logo  alt='logoPrincipal' src='https://res.cloudinary.com/grupo-delsud/image/upload/v1655306334/DESARROLLOSGRUPODELSUD/PromoJunio/desarrollo_blanco-03_1_qzwl2c.webp'/>
            <Titulo>Tu terreno propio financiado al 100% </Titulo>
            <SubTitulo>Construí recuerdos en tu propiedad</SubTitulo>
          </Box1>
          <Box2>
            <ContenedorForm className='formInputs' onSubmit={handleSubmit(onSubmit)}>
                <BoxTitulo>
                  <TituloForm>Calculá tu cuota</TituloForm>
                </BoxTitulo>
                <SubContenedorForm>
                    <ContenedorInputs>
                        <LabelInputs  htmlFor="nombre">Nombre </LabelInputs>
                        <InputForm 
                        name='nombre'
                        {...register("nombre", {
                        required: "Campo requerido",
                        maxLength: {
                            value: 40,
                        }
                        })}
                        onChange ={(e)=>{onChangeFormDatos(e)}}
                        />
                        {errors.nombre && <Errores >Campo Requerido!</Errores>}
                    </ContenedorInputs>
                    <ContenedorInputs>
                    <LabelInputs  htmlFor="phone">Teléfono </LabelInputs>
                    <InputForm 
                        type="number"
                        {...register("phone", {
                        required: "Campo requerido",
                        maxLength: {
                            value: 20,
                        }
                        })}
                        />
                        {errors.phone &&  <Errores >Campo Requerido!</Errores>}
                    </ContenedorInputs>
                </SubContenedorForm>
                <SubContenedorForm>
                    <ContenedorInputs>
                    <LabelInputs htmlFor="Desarrollo">Seleccioná el desarrollo</LabelInputs>
                    <InputSelect name='Desarrollo'
                        style={{borderRadius:'10px'}}
                        {...register("Desarrollo", { required: "*Campo requerido",})}
                        onChange ={(e)=>{onChangeFormDatos(e)}}
                        >
                        <option value="La Escondida - Los Hornos">La Escondida - Los Hornos</option>
                        <option value="Las Victorias - Abasto">Las Victorias - Abasto</option>
                        <option value="El Juncal - Lisandro Olmos">El Juncal - Lisandro Olmos</option>
                        <option value="La Campiña - Ángel Etcheverry">La Campiña - Ángel Etcheverry</option>
                        <option value="Las Orianas - Melchor Romero">Las Orianas - Melchor Romero</option>
                        <option value="Latitud 34 - Los Hornos">Latitud 34 - Los Hornos</option>
                        </InputSelect>
                        {errors.lote &&  <Errores >Campo Requerido!</Errores>}
                    </ContenedorInputs>
                    <ContenedorInputs>
                    <LabelInputs htmlFor="cuotas">Seleccioná la cantidad de cuotas</LabelInputs>
                       <InputSelect name="cuotas" {...register("cuotas", { required: true })} onChange ={(e)=>{onChangeFormDatos(e)}}>
                            <option value="12 meses"> 12 meses</option>
                            <option value="24 meses">24 meses</option>
                            <option value="36 meses">36 meses</option>
                            <option value="48 meses">48 meses</option>
                            <option value="60 meses">60 meses</option>
                            <option value="72 meses">72 meses</option>
                            <option value="84 meses" selected={"84 meses"}> 84 meses </option>
                      </InputSelect>
                        
                    </ContenedorInputs> 
                </SubContenedorForm>
                <ContenedorInputRange>
                <div className='TituloRange'>
                  <LabelInputRange htmlFor="Cuotas">Seleccioná el anticipo</LabelInputRange>
                </div>
                <div className='calculador-slider'>
                    <RangeSlider
                    // className='slider-filtro'
                    // progress      
                    // step={1000}            
                    // min={5000}
                    // max={2000000}
                    // value={value}
                    // onChange={value => {
                    //   setValue(value);
                    //   }}   
                    // name='montoAInvertir'

                            type="range"
                            className='slider-filtro'  
                            step={1000}  
                            min={0.0}
                            max={2000000}
                            value={value}
                            onChange={e => setValue(e.target.value)} 
                    />  
                </div>    
                <ContenedorNumeros>  
                      <NumerosSlider>${value}</NumerosSlider>
                      <NumerosSlider>$2.000.000</NumerosSlider>
                   </ContenedorNumeros>
                </ContenedorInputRange>
                <BoxButton>
                  <input  onClick={() => handleOpen('xs')}  type='button' className={`${buttonFalso ? "desactivar" : "activar"}`} disabled={!isValid} value='sin enviar' /> 
                  <ButtonForm className={`${buttonFalso ? "activar" : "desactivar"}`}  disabled={!isValid} type="submit" onClick={() => handleOpen('xs')} >COTIZAR / ENVIAR</ButtonForm> 
                </BoxButton>
            </ContenedorForm>
          </Box2>
        </SubBox>
     </BoxPrincipal>
     </Container>

     <Modal style={{display:'flex',flexDirection:'column',justifyContent:'center', background: '#000000c4'}} size={'lg'} open={open} onClose={handleClose}>
      <BoxPrincipalModal>
        <BoxTituloModal>
          <TituloModal> <span className="modal-title">¡Gracias {nombre}!</span></TituloModal>
        </BoxTituloModal>
        <ContenedorBoxsModal>
          <Box1Modal>
            <SubtitulosModal>Consultaste por </SubtitulosModal>
            <BoxImagenDesarrolloModal>
              <ImagenDesarrolloModal src={fotoDesarrollo}></ImagenDesarrolloModal>
            </BoxImagenDesarrolloModal>
            <SubtitulosModal>en </SubtitulosModal><NumeroMonto> {cuotas} </NumeroMonto>
          </Box1Modal>    
          <Box2Modal>
            <Box4Modal>
            <SubtitulosModal>El valor de tu cuota es de : <span></span>  </SubtitulosModal>
            </Box4Modal>
            <Box3Modal>
            <NumeroMonto>${Math.round(montoCuotas)}</NumeroMonto>
            </Box3Modal>
          </Box2Modal>     
        </ContenedorBoxsModal>
        <BoxButtonModal>
          <Parrafito>El resultado proveniente del siguiente simulador es meramente referencial, no reviste carácter contractual ni está sujeto a una futura compra. <br></br> La cuota es ajustable con el IPC registrado por el INDEC.</Parrafito>
          <br></br><br></br>
          <ButtonModal onClick={handleClose} appearance="subtle">
            VOLVER A CALCULAR
          </ButtonModal>
        </BoxButtonModal>
      </BoxPrincipalModal>  
      </Modal>
    </>
  )
}

export default PromoJunio