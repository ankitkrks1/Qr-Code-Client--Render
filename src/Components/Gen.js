import React from 'react'
import {QRCodeSVG, QRCodeCanvas} from 'qrcode.react'

const Gen = ({txt}) => {
  return (
    <div>
      <QRCodeCanvas value={txt} style={{margin:'5%'}}/>
    </div>
  )
}

export default Gen
