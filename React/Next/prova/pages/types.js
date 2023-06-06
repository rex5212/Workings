import React from 'react'
import BasePage from '../components/BasePage'
import apiArt from '../services/apiArt'
import 'bootstrap/dist/css/bootstrap.min.css'


const types = ({ArtTypes}) => {
  return (
    <BasePage mainTitle='Tipos de Obras'>
      <ul>
        {ArtTypes.map(item => (
          <li>{item.title}</li>
        ))}
      </ul>
    </BasePage>
  )
}

export default types

export async function getServerSideProps(context) {

  const resultado = await apiArt.get('/artwork-types')
  const ArtTypes = resultado.data.data
  console.log(ArtTypes)

  return {
      props: { ArtTypes, },
  }
}