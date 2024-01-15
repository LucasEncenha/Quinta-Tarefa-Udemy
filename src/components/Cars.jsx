import './Cars.module.css';

const Cars = ({id,marca,km,ano}) => {
  return (
    <div>
        <h3>Detalhes</h3>
        <ul>
            <li>Marca: {marca}</li>
            <li>Km: {km}</li>
            <li>Ano: {ano}</li>
        </ul>
    </div>
  )
}

export default Cars;