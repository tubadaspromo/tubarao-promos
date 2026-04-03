import { useMemo, useState } from 'react'
import logo from './assets/logo.png'
import ml from './assets/mercadolivre.png'
import shopee from './assets/shopee.png'
import magalu from './assets/magalu.png'
import casas from './assets/casas.png'
import amazon from './assets/amazon.png'

export default function App() {
  const [loading, setLoading] = useState(false)

  const TELEGRAM = 'https://t.me/tubadaspromo'
  const CANAL = 'https://whatsapp.com/channel/0029Vb8TAvwHwXbKlDM83c3c'

  const grupos = useMemo(
    () => [
      { link: 'https://chat.whatsapp.com/LKLD8lRWEZuK3uIhC0xv39', ativo: true },
      { link: 'https://chat.whatsapp.com/Fnz7E5KFjBP7iKp6ap4IxN', ativo: true },
      { link: 'https://chat.whatsapp.com/LOYGyPNLcpUGKziWlYfL96', ativo: true },
      { link: 'https://chat.whatsapp.com/ElvschKh32H8w9leHcfpLu', ativo: true },
      { link: 'https://chat.whatsapp.com/DDwSkSlqKtGLJhW3HGfeTP', ativo: true },
      { link: 'https://chat.whatsapp.com/DiZ1YrbSnZW5jHR4hxap2O', ativo: true },
      { link: 'https://chat.whatsapp.com/KAT7L7DcVVRDWm6yJ1bXmw', ativo: true },
      { link: 'https://chat.whatsapp.com/IaMAJnR9Eko5v1TKyxxeob', ativo: true },
      { link: 'https://chat.whatsapp.com/IImeC6YZ5E3LiUxKGMt8rB', ativo: true },
      { link: 'https://chat.whatsapp.com/LolKSuFw1vzAoT0BSFBsFT', ativo: true },
      { link: 'https://chat.whatsapp.com/Dsyb40EACt4Bv9v6sQxHcw', ativo: true },
      { link: 'https://chat.whatsapp.com/DmEVhdCQoIH8fH4uTHYxdo', ativo: true },
      { link: 'https://chat.whatsapp.com/LiYxuUuatV3CadSfpFiG4a', ativo: true },
      { link: 'https://chat.whatsapp.com/ISjSt7Otc8PGbYPlvFUM3j', ativo: true },
      { link: 'https://chat.whatsapp.com/DY8uGMMuLVb6o8HSBDCDhz', ativo: true },
      { link: 'https://chat.whatsapp.com/Dp41yOiRTyK98X6O6XM5Yv', ativo: true },
      { link: 'https://chat.whatsapp.com/EC7oUgzRluO1m758GlpTYn', ativo: true },
      { link: 'https://chat.whatsapp.com/LRqG9VRmWJJLIoRgUqQCxm', ativo: true },
      { link: 'https://chat.whatsapp.com/DpsJMqkAwkz3EMGH9YMefi', ativo: true },
      { link: 'https://chat.whatsapp.com/FProIuu0XTTKOpi8uf3XVm', ativo: true },
      { link: 'https://chat.whatsapp.com/COd0dILNzQfLZ2pdZCH7qc', ativo: true },
      { link: 'https://chat.whatsapp.com/GytR4R8CwYV78VHlU8mCGB', ativo: true },
      { link: 'https://chat.whatsapp.com/CtHu6KB87n08p7qolDGKGR', ativo: true },
      { link: 'https://chat.whatsapp.com/Jmmz5yThODz5rdCbZJQP5x', ativo: true },
      { link: 'https://chat.whatsapp.com/HZU99CnCz282NkRa1OYKSO', ativo: true },
      { link: 'https://chat.whatsapp.com/GIlr54Yg37a5y4MRJBYgPj', ativo: true },
      { link: 'https://chat.whatsapp.com/ESYLAnyqVerDWbU0go56rA', ativo: true },
      { link: 'https://chat.whatsapp.com/J4R6Zko00qmGTiK6nCRg9T', ativo: true },
      { link: 'https://chat.whatsapp.com/F4uOcR69AG8D8jQFmEMweP', ativo: true },
      { link: 'https://chat.whatsapp.com/EYAWx5IbvnF9wu9nIpIFJH', ativo: true },
    ],
    []
  )

  function trackEvent(eventName) {
    if (typeof window !== 'undefined' && typeof window.fbq === 'function') {
      window.fbq('track', eventName)
    }
  }

  function getProximoGrupo() {
    const ativos = grupos.filter((g) => g.ativo)

    if (ativos.length === 0) return null

    const chave = 'rotacao_grupos'
    const ultimo = Number(localStorage.getItem(chave) || '-1')
    const proximo = (ultimo + 1) % ativos.length

    localStorage.setItem(chave, proximo)
    return ativos[proximo]
  }

  function entrarNoGrupo() {
    const grupo = getProximoGrupo()

    if (!grupo) {
      alert('Nenhum grupo ativo disponível.')
      return
    }

    trackEvent('Lead')
    setLoading(true)

    const novaAba = window.open('', '_blank')

    if (!novaAba) {
      setLoading(false)
      alert('O navegador bloqueou a abertura da aba. Libere pop-ups para este site.')
      return
    }

    novaAba.location.href = grupo.link

    setTimeout(() => {
      setLoading(false)
    }, 700)
  }

  function abrirTelegram() {
    trackEvent('Contact')
    window.open(TELEGRAM, '_blank', 'noopener,noreferrer')
  }

  function abrirCanal() {
    trackEvent('Contact')
    window.open(CANAL, '_blank', 'noopener,noreferrer')
  }

  return (
    <div className="min-h-screen bg-zinc-100 flex items-center justify-center px-4 py-10">
      <div className="w-full max-w-md bg-white rounded-[28px] shadow-xl p-6 text-center relative">
        <div className="mb-6 rounded-full bg-[#BFE8FF] text-[#0B4F7A] text-sm font-bold py-3 px-4">
          🦈 AS MELHORES PROMOÇÕES TODOS OS DIAS 🦈
        </div>

        <img
          src={logo}
          alt="Tubarão das Promo"
          className="w-28 mx-auto mb-5"
        />

        <h2 className="text-3xl font-extrabold text-zinc-900">
          ⚠️ QUER ECONOMIZAR? ⚠️
        </h2>

        <p className="mt-3 text-zinc-600">
          Entre nos grupos e aproveite as melhores promoções.
        </p>

        <p className="font-bold mt-2 text-lg text-zinc-900">
          100% GRÁTIS!
        </p>

        <div className="mt-6">
          <p className="text-sm text-zinc-700 font-semibold mb-2">
            🔥 Mais de 22.800 pessoas economizando todos os dias
          </p>

          <button
            onClick={entrarNoGrupo}
            className="w-full bg-green-500 hover:bg-green-600 text-white font-extrabold py-4 rounded-xl text-lg transition"
          >
            🔥 ENTRAR NO GRUPO AGORA
          </button>

          <p className="mt-2 text-xs text-red-500 font-semibold">
            ⚠️ Vagas podem ser limitadas a qualquer momento
          </p>
        </div>

        <div className="mt-5">
          <button
            onClick={abrirTelegram}
            className="w-full bg-sky-500 hover:bg-sky-600 text-white font-bold py-4 rounded-xl transition"
          >
            ✈️ Entrar no Canal do Telegram
          </button>
        </div>

        <div className="mt-4">
          <button
            onClick={abrirCanal}
            className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-4 rounded-xl transition"
          >
            📢 Canal do WhatsApp
          </button>
        </div>

        <div className="mt-8 pt-6 border-t border-zinc-200">
          <h3 className="font-bold text-xl text-zinc-900">
            Postamos promoções das melhores lojas do Brasil!
          </h3>

          <div className="mt-5 flex flex-wrap justify-center gap-3">
            <Logo img={amazon} alt="Amazon" />
            <Logo img={ml} alt="Mercado Livre" />
            <Logo img={shopee} alt="Shopee" />
            <Logo img={magalu} alt="Magalu" />
            <Logo img={casas} alt="Casas Bahia" />
          </div>
        </div>

        {loading && (
          <div className="absolute inset-0 bg-white/95 rounded-[28px] flex flex-col items-center justify-center">
            <div className="w-10 h-10 border-4 border-blue-300 border-t-blue-600 rounded-full animate-spin" />
            <p className="mt-4 font-bold">
              Conectando você ao melhor grupo...
            </p>
          </div>
        )}
      </div>
    </div>
  )
}

function Logo({ img, alt }) {
  return (
    <div className="h-14 w-14 rounded-full bg-white shadow-sm flex items-center justify-center p-2">
      <img src={img} alt={alt} className="max-h-7 object-contain" />
    </div>
  )
}