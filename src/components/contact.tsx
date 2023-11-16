'use client'
import { useState } from 'react'
import { MapPin, User } from 'lucide-react'

export function Contact() {
  const [name, setName] = useState('')
  const [branch, setBranch] = useState('Parque Genibaú (Fortaleza)')

  const whatsappMessage = `Oi, sou ${name} e quero atendimento para clínica do ${branch}.`

  return (
    <div className="mx-auto w-80 rounded bg-white p-4 md:w-[671px] ">
      <p className="mb-4 text-xl text-primary">Agente uma consulta</p>
      <div className="flex flex-col items-center gap-2 md:flex-row">
        <div className="flex h-12 items-center gap-2 rounded border p-2">
          <div className="flex h-6 w-6 items-center justify-center rounded-full bg-primary/20">
            <User size={20} className="text-primary" />
          </div>
          <input
            onChange={(event) => setName(event.target.value)}
            value={name}
            className="w-full outline-none"
            placeholder="Nome completo"
            type="text"
          />
        </div>
        <div className="flex h-12 items-center gap-2 rounded border p-2">
          <div className="flex h-6 w-6 items-center justify-center rounded-full bg-primary/20">
            <MapPin size={20} className="text-primary" />
          </div>
          <select
            onChange={(event) => setBranch(event.target.value)}
            className="w-full appearance-none bg-transparent outline-none"
          >
            <option>Parque Genibaú (Fortaleza) </option>
            <option>Avenida Francisco Sá (Fortaleza) </option>
            <option>Avenida Dr Theberge (Fortaleza) </option>
            <option>Jurema (Caucaia) </option>
            <option>Cohab (Maranhão) </option>
            <option>Maiobão (Maranhão) </option>
            <option>Cidade Operária (Maranhão) </option>
            <option>Divineia (Maranhão)</option>
          </select>
        </div>
        <a
          className="flex w-full items-center justify-center whitespace-nowrap rounded bg-secundary px-2 py-3 text-white md:w-fit"
          target="_blank"
          href={`https://wa.me/558596120225?text=${whatsappMessage}`}
        >
          Quero Agendar
        </a>
      </div>
    </div>
  )
}
