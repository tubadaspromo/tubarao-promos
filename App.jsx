import { useState } from 'react'
import { GROUPS } from './groups'
import logo from './assets/logo-tuba-car.webp'
import amazon from './assets/amazon.png'
import mercadolivre from './assets/mercadolivre.png'
import shopee from './assets/shopee.png'
import magalu from './assets/magalu.png'
import casas from './assets/casas.png'
import './App.css'

const LOJAS = [
  { nome: 'Amazon', img: amazon },
  { nome: 'Mercado Livre', img: mercadolivre },
  { nome: 'Shopee', img: shopee },
  { nome: 'Magalu', img: magalu },
  { nome: 'Casas Bahia', img: casas },
]

const CATEGORIAS = ['Pneus', 'Óleos', 'Sons', 'Acessórios', 'Ferramentas']

function trackLead(group) {
  if (typeof window !== 'undefined' && typeof window.fbq === 'function') {
    window.fbq('track', 'Lead', { content_name: group.nome })
  }
}

function WhatsAppIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="wa-icon">
      <path
        fill="currentColor"
        d="M17.47 14.38c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.16-.17.2-.35.22-.64.08-.3-.15-1.26-.46-2.39-1.47-.88-.79-1.48-1.76-1.65-2.06-.17-.3-.02-.46.13-.6.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.03-.52-.07-.15-.67-1.61-.92-2.2-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.8.37-.27.3-1.04 1.02-1.04 2.48s1.07 2.88 1.21 3.07c.15.2 2.1 3.2 5.08 4.49.7.3 1.26.49 1.69.62.71.23 1.36.2 1.87.12.57-.08 1.76-.72 2-1.41.25-.7.25-1.29.17-1.41-.07-.13-.27-.2-.57-.35M12.05 21.8h-.01a9.87 9.87 0 0 1-5.03-1.38l-.36-.21-3.74.98 1-3.65-.24-.37a9.86 9.86 0 0 1-1.51-5.26c0-5.45 4.44-9.88 9.89-9.88 2.64 0 5.12 1.03 6.99 2.9a9.82 9.82 0 0 1 2.89 6.99c0 5.45-4.44 9.88-9.88 9.88M20.46 3.49A11.8 11.8 0 0 0 12.05 0C5.5 0 .16 5.34.16 11.89c0 2.1.55 4.14 1.59 5.95L.06 24l6.3-1.65a11.9 11.9 0 0 0 5.68 1.45h.01c6.55 0 11.89-5.34 11.89-11.89 0-3.18-1.24-6.17-3.48-8.42"
      />
    </svg>
  )
}

export default function App() {
  const [abrindo, setAbrindo] = useState(null)

  function entrar(e, group) {
    e.preventDefault()
    if (abrindo) return
    setAbrindo(group.id)
    trackLead(group)
    window.setTimeout(() => {
      window.location.href = group.url
    }, 450)
  }

  return (
    <main className="page">
      <div className="card">
        <p className="pill">Promoções automotivas todos os dias</p>
        <p className="gratuito">100% gratuito</p>

        <img className="logo" src={logo} alt="Tuba Car, o tubarão das promoções automotivas" width="900" height="785" />

        <h1>Economize com seus produtos automotivos.</h1>
        <p className="lead">Entre no grupo e receba as melhores ofertas de acessórios, cuidados e ferramentas.</p>

        <div className="grupos">
          {GROUPS.map((g, i) =>
            g.status === 'ativo' ? (
              <a
                key={g.id}
                href={g.url}
                className={`btn ${i === 0 ? 'btn-principal' : 'btn-secundario'}`}
                onClick={(e) => entrar(e, g)}
                aria-busy={abrindo === g.id}
              >
                <WhatsAppIcon />
                <span>{abrindo === g.id ? 'Abrindo o WhatsApp…' : g.cta}</span>
              </a>
            ) : (
              <div key={g.id} className="btn btn-breve" aria-disabled="true">
                <span>{g.nome}</span>
                <small>Em breve</small>
              </div>
            )
          )}
        </div>
        <p className="aviso">O grupo é gratuito e as vagas do WhatsApp são limitadas.</p>
        <p className="membros"><strong>Mais de 30 mil membros</strong> economizando todos os dias</p>
        <ul className="temas">
          {CATEGORIAS.map((c) => <li key={c}>{c}</li>)}
        </ul>

        <hr />

        <h2>Postamos ofertas das melhores lojas do Brasil</h2>
        <ul className="lojas">
          {LOJAS.map((l) => (
            <li key={l.nome}><img src={l.img} alt={l.nome} loading="lazy" /></li>
          ))}
        </ul>
      </div>

      <p className="rodape">© {new Date().getFullYear()} Tuba Car</p>
    </main>
  )
}
