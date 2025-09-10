export function Footer() {
    return (
        <footer className="bg-black text-white py-10 px-6 md:px-16 grid grid-cols-1 md:grid-cols-3 gap-12 text-center flex items-center justify-center md:text-left flex jus">
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