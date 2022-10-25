import React from 'react'
import { useState } from 'react'
import { Button, Spinner } from 'reactstrap'
//https://docs.google.com/forms/d/e/1FAIpQLSdbHWW1jvs66rJTF2IWIn7T3MKIAJaxvOdiCgLXtv6CyGdi8Q/viewform?usp=pp_url&entry.402860983=John&entry.856483639=Word&entry.204626006=Northview&entry.930584962=Substance+Abuse&entry.239377929=Trauma/Brain&entry.1146985588=Anxiety&entry.1395481470=Gratitude&entry.466491785=Optimal+Health
const url = 'https://docs.google.com/forms/d/e/1FAIpQLSdbHWW1jvs66rJTF2IWIn7T3MKIAJaxvOdiCgLXtv6CyGdi8Q/viewform?usp=pp_url'
const formEntries = [
'&entry.930584962='
,'&entry.239377929='
,'&entry.1146985588='
,'&entry.1395481470='
,'&entry.466491785='
]
//https://docs.google.com/forms/d/e/1FAIpQLSdbHWW1jvs66rJTF2IWIn7T3MKIAJaxvOdiCgLXtv6CyGdi8Q/viewform?usp=pp_url&entry.930584962=Trauma/Brain&entry.239377929=Anxiety&entry.1146985588=Gratitude&entry.1395481470=Optimal+Health&entry.466491785=undefined
const SavedRanks = ({rankings}) => {
    console.info(rankings)
    const [link,setLink] = useState("")
    const genLink = () => {
        const ids = rankings.map(r => r.id.replace(" ","+"))
        const readyEntries = formEntries.map((e,i) => e + ids[i])
        setLink(url + readyEntries.join(''))
    }
  return (
    <div>
        {
            rankings.length >= 5 ?
            <Button onClick={genLink} color="primary">Prepare Google Form to Submit</Button>
            : <Button disabled={true} color="secondary">Prepare Google Form to Submit</Button>
        }
        <br />
        {link ? <><Spinner type="grow" color="primary"/>
            <a href={link} target="_blank"><Button>Continue to Submit Requests</Button></a></> : ""}
    </div>
  )
}

export default SavedRanks