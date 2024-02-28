import React from 'react'
import {useParams} from 'react-router-dom'

export default function Profil() {

  const Params = useParams ()
  console.log(Params);
  return (
    <div>
        <h1>
            Votre profil
        </h1>
    </div>
  )
}
