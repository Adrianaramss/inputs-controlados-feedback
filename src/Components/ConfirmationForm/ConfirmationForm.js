import React from 'react'
import { Form} from '../MainPage/styles'

const ConfirmationForm = () => {

  function click() {
    alert('Parabéns, você se inscreveu com sucesso')
  }
  return (
    <Form>
     <label>
      Data de nascimento:
      <input type="date"/>
     </label>  

     <label>
      Número de telefone 
      <input type="tel"/>
     </label>

     <label>
      Gênero: <select>
     <option value= "1" >Homem Cisgênero</option>
     <option value= "2" >Mulher cisgênero</option>
     <option value= "3" >Homem trans</option>
     <option value= "4" >Mulher trans</option>
     <option value= "5" >Pessoa não binária</option>
     <option value= "6" >Prefiro não dize</option>
      </select>
     </label>
    
     <label>
      Qual a cor que você se identifica: <select>
     <option value= "1" >Negro</option>
     <option value= "2" >branco</option>
     <option value= "3" >pardo</option>
     <option value= "4" > amarelo</option>
     <option value= "5" >indígena</option>
     <option value= "6" >Prefiro não dize</option>
      </select>
     </label>

   <label>
   <input type="radio"/>
    Curso Integral Web fullstack
   
   </label>
   <label>
   <input type="radio"/>
    Curso Noturno web fullstack
    
   </label>


      <button onClick= {click}>Enviar dados</button>
      </Form>
  )
}

export default ConfirmationForm