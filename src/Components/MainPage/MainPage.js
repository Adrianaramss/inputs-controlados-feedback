import React, {useState} from 'react'
import {MainContainer} from './styles'
import NameForm from '../NameForm/NameForm'
import ConfirmationForm from '../ConfirmationForm/ConfirmationForm'

const MainPage = () => {
const [name, setName] = useState("")
const [age, setAge] = useState("")
const [email, setEmail] = useState("")
const [email2, setEmail2] = useState("")
const [formFlow, setFormFlow] = useState(1) //você não precisa mexer neste estado, ele faz parte da lógica da linha 30 do JSX

const onChangeName = (event) => {
  setName(event.target.value)
}

const onChangeAge = (event) => {
  setAge(event.target.value)
}

const onChangeEmail = (event) => {
  setEmail(event.target.value)
}


const onChangeEmail2 = (event) => {
  setEmail2(event.target.value)
}

const sendData = () => {
  //aqui deve vir uma verificação para mudar de formulario apenas se todos os requisitos tiverem sido cumpridos
if(name.length >= 10 && email === email2 && email.includes("@") && email2.includes ("@") && age >= 18  )
{
setName("")
setAge("")
setEmail("")
setEmail2("")
setFormFlow(2)
}else{
  alert("prenchimento incorreto")
}
}
  return (
    <MainContainer>
      <h2>Formulário de inscrição</h2>
      {formFlow === 1 ? <NameForm
      // insira aqui suas props
      name={name}
      age={age}
      email={email}
      email2={email2}
      sendData={sendData}
      onChangeName={onChangeName}
      onChangeEmail={onChangeEmail}
      onChangeEmail2={onChangeEmail2}
      onChangeAge={onChangeAge}
      /> : <ConfirmationForm />}
    </MainContainer>
  )
}

export default MainPage