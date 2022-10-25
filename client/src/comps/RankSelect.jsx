import React from 'react'
import { Button, Input, InputGroup, InputGroupText } from 'reactstrap'

const Ranking = ({title,ind,deleteRank,changeRank}) => {
  const onDown = () => {
    changeRank(ind,false)
  }
  const onDelete = () => {
    deleteRank(ind)
  }
  const onUp = () => {
    changeRank(ind,true)
  }
  return (
    <InputGroup style={
      {
        marginTop: '10px'
      }
    }>
      <Button 
        color='secondary'
        size='sm'
      >
        {ind+1}
      </Button>
      <InputGroupText>{title}</InputGroupText>
      <Button color='success' size='sm'
        onClick={onUp}
      >
        🔼
      </Button>
      <Button color='warning' size='sm'
        onClick={onDown}
      >
        🔽
      </Button>
      <Button 
        color='danger'
        size='sm'
        onClick={onDelete}
      >
        ❌
      </Button>
    </InputGroup>
  )
}

const RankSelect = ({changeRank, rankings, deleteRank}) => {
  
  return (
    <div>
      <h3>Rankings</h3>
      <p>Please select a total of 5 sessions from the list below.
         Rank the sessions by using the up and down arrows with one being your top choice.
         There will be three sessions, and please also choose two back ups.
      </p>
      <div>
        {rankings.map((r,i) => 
          <Ranking 
            title={r.title}
            key={i}
            ind={i}
            deleteRank={deleteRank}
            changeRank={changeRank}
            
          />
        )}
      </div>
    </div>
  )
}

export default RankSelect