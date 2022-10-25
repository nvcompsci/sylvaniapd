import React from 'react'
import Session from './Session'

const Sessions = (props) => {
  const {addRank, sessions} = props
  return (
    <div>
    <h2>Sessions</h2>
      {sessions.map(s => 
          <Session
            addRank={addRank}
            id={s.id}
            title={s.title}
            presenter={s.presenter}
            role={s.role}
            desc={s.desc}
            key={s.id}
          />
      )}
    </div>
  )
}

export default Sessions