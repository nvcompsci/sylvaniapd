import 'bootstrap/dist/css/bootstrap.min.css'
import {Container} from 'reactstrap'
import RankSelect from './comps/RankSelect';
import Sessions from './comps/Sessions';
import Login from './comps/Login';
import SavedRanks from './comps/SavedRanks';
import { useState, useEffect } from 'react';
import './App.css'
import getSessions from './sessions.js'

//let api = 'https://script.google.com/a/macros/sylvaniaschools.org/s/AKfycbwBgsnP-NnQ5hkPMpHZFZB6bjP51wyxZ-1Zad01nJY/dev'
//api = 'https://script.google.com/a/macros/sylvaniaschools.org/s/AKfycbwwIMtOzcZOI79h9nHRoqAElKRI1n0Bdpd-oo_cqZbflCem10bmS_dmM5sXDVvHBF8Yig/exec'

const _sessions = getSessions()

function App() {
  const [isAuthed,setAuthed] = useState(false)
  const [rankings,setRankings] = useState([])
  const [savedData,setSavedData] = useState({})
  const [sessions,setSessions] = useState(_sessions)

  const addRank = (newRank) => {
    if (rankings.some(r => r.id == newRank.id)) return false;

    setRankings([...rankings,newRank])
  }
  const changeRank = (i, promote) => {
    if (i == 0 && promote) return false;
    else if (i == rankings.length-1 && !promote) return false;

    if (promote) {
      const swapped = [rankings[i],rankings[i-1]]
      rankings.splice(i-1,2,swapped[0],swapped[1])
      setRankings([...rankings])
    }
    else {
      const swapped = [rankings[i+1],rankings[i]]
      rankings.splice(i,2,swapped[0],swapped[1])
      setRankings([...rankings])
    }
  }
  const deleteRank = (i) => {
    rankings.splice(i,1)
    setRankings([...rankings])
  }

  return (
    <Container style={{backgroundColor: '#997C67'}}>
      <header>
        <h1>Nov. 8th Professional Development</h1>
      </header>
      <SavedRanks savedData={savedData} rankings={rankings}/>
      <RankSelect changeRank={changeRank} rankings={rankings} deleteRank={deleteRank} />
      <Sessions addRank={addRank} sessions={sessions} />
    </Container>
  );
}

export default App;
