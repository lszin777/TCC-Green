import "./Footer.css"

export function Footer() {
    return (
        <footer className="bg-black text-white py-10 px-6 md:px-20 grid grid-cols-1 md:grid-cols-3 gap-45 text-center md:text-left">
        <div>
          <p className="font-bold">📞 Contato</p>
          <p className="text-gray-400">+55 (61) 99999-9999</p>
        </div>
        <div>
          <p className="font-bold">✉️ Email</p>
          <p className="text-gray-400">green@guardian.com</p>
        </div>
        <div>
          <p className="font-bold">📍 Localização</p>
          <p className="text-gray-400">São Paulo - SP, Brasil</p>
        </div>
      </footer>
    )
}