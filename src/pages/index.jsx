import Cardraza from "components/Cardraza"
import bordercollie from 'media/border-collie.jpg'
import siberiano from 'media/siberiano.jpg'

function Index() {
  return (
      <section>
          <h1>Razas de perros</h1>
          <ul className="card-container">
            <Cardraza imagen={siberiano} raza="Siberiano" />
            <Cardraza imagen={bordercollie} raza="Border-Collie" />"
          </ul>
        </section>

  )
}

export default Index

