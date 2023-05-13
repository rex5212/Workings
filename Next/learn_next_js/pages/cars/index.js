import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';
import BasePage from '../../components/BasePage';


const index = () => {

  const pessoa = [
    { endereco: "qnp 19", numero: '(61) 515154512' },
    { endereco: "qnp 09", numero: '(61) 986548695' }
  ]

  /*     const testaainda = [
    {orion: {endereco:"qnp 09", numero: ['(61) 986548695', '(61) 986548695', '(61) 986548695']}},
    {renato: {endereco:"qnp 09", numero: '(61) 986548695'}}
  ] */

  /* 
  pessoa tem:
  orion (chave) = endereço (chave) = qnp 09 e numero (chave) = (61) 986548695
  renato (chave) = endereço (chave) = qnp 09 e numero (chave) = (61) 986548695
  */

  const carros = [
    { marca: "Ferrari", modelo: "esporte", ano: "", cor: "", img: 'https://revistacarro.com.br/wp-content/uploads/2022/05/Ferrari-SP48-Unica_3.jpg' },
    { marca: "VW", modelo: "esporte", ano: "", cor: "", img: 'https://s2.glbimg.com/76wdVIxrAIFMenjVDa2BrBSkZUI=/1200x/smart/filters:cover():strip_icc()/i.s3.glbimg.com/v1/AUTH_cf9d035bf26b4646b105bd958f32089d/internal_photos/bs/2020/p/8/4fMBgHRCWsFzd7uvmAQQ/2014-10-02-xl.jpg' },
    { marca: "Bugati", modelo: "esporte", ano: "", cor: "", img: 'https://cdn.autopapo.com.br/box/uploads/2017/12/13101833/bugattit.jpg' },
    { marca: "BMW", modelo: "esporte", ano: "", cor: "", img: 'https://cdn.motor1.com/images/mgl/P33J9G/s3/2022-bmw-3er-limousine.jpg' },
    { marca: "Mercedes", modelo: "esporte", ano: "", cor: "", img: 'https://conteudo.imguol.com.br/c/entretenimento/5d/2021/08/31/mercedes-amg-gt-black-series-de-valtteri-bottas-1630425058497_v2_900x506.jpg' },
    { marca: "Lambrogine", modelo: "esporte", ano: "", cor: "", img: 'https://carmagazine.com.br/site/wp-content/uploads/2021/02/Miura-1-1.jpg' }
  ]

  const style = {
    /*         width: '100%',
       color: '#00ff00' */
    rodape: { widht: '100%', color: '#0000ff !important' }
  }

  return (
      <BasePage mainTitle="cars">
        <Container>
          {/*                 <ol>
                    {carros.map(item => (
                        <li>{item.marca}</li>
                        ))}
                </ol> */}

          {carros.map(item => (
            <div>
              <h1>{item.marca}</h1>
              <p>{item.modelo}</p>
              <p>{item.ano}</p>
              <p>{item.cor}</p>
              <img src={item.img} style={{ height: '350px' }} />
            </div>
          ))}

          {/*             {testaainda.map(item => (
                <div>
                  {item}
                  <br/>
                </div>
            ))} */}
        </Container>
      </BasePage>
  )
}

export default index