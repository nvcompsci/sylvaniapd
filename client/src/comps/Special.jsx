import React from 'react'
import { Button, Label } from 'reactstrap'

const Special = ({addSpecial}) => {
  return (
    <div>
        <h3>Special Cases</h3>
        <Label>Click PROFESSIONAL if you will be attending PD outside of the district on Nov. 8th. Please also follow the typical process through MySCVIEW.</Label>
        <br />
        <Button onClick={() => {addSpecial('PROFESSIONAL')}}>
            PROFESSIONAL
        </Button>
        <br />
        <Label>Click ABSENT if you know you will have a personal/sick day on Nov. 8th. Please also follow the typical process through AESOP.</Label>
        <br />
        <Button onClick={() => {addSpecial('ABSENT')}}>
            ABSENT
        </Button>
    </div>
  )
}

export default Special