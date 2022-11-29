import React from 'react'
import { LeapFrog} from '@uiball/loaders'


export default function Loader() {
  return (
    <div style={{display:'flex',justifyContent:'center'}}>
        <LeapFrog 
        size={300}
        speed={2.5} 
        color="black" 
        />
    </div>
  )
}

