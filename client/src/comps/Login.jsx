import React from 'react'
import { Button, Input, InputGroup, InputGroupText, Label } from 'reactstrap'

const buildings = ["Northview","Southview"]
const Login = (props) => {
    const {setAuthed} = props
  return (
    <div>
        <InputGroup>
            <InputGroupText>email:</InputGroupText>
            <Input placeholder='jdoe@sylvaniaschools.org' type='email' />
        </InputGroup>
        <InputGroup>
            <InputGroupText>First Name:</InputGroupText>
            <Input placeholder='Jane' type='text' />
        </InputGroup>
        <InputGroup>
            <InputGroupText>Last Name:</InputGroupText>
            <Input placeholder='Doe' type='text' />
        </InputGroup>
        <InputGroup>
            <InputGroupText>Building (Home)</InputGroupText>
            <Input type='select'>
                {buildings.map(b => 
                    <option key={b} value={b}>{b}</option>   
                )}
            </Input>
        </InputGroup>
        
        <Button>
            Login
        </Button>
        <Button>
            Verify
        </Button>
    </div>
  )
}

export default Login