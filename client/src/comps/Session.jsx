import React from 'react'
import { Button, Card } from 'reactstrap'

const Session = (props) => {
  const {id,title,presenter,role,desc,addRank} = props
  const handleAdd = () => {
    addRank({id,title})
  }
  return (
    <Card
      style={{marginTop: '10px', backgroundColor: '#B0703C'}}
    >
      <h5>{title}</h5>
      <h6>{presenter} | <em>{role}</em></h6>
      <p>{desc}</p>
      <Button 
        style={{
          width: '100px',
          margin: '10 auto',
          backgroundColor: '#755330'
        }}
        onClick={handleAdd}
      >
        Add
      </Button>
    </Card>
  )
}

export default Session