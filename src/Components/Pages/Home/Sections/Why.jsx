import React from 'react'
import Card from './Sub components/Card'

function why() {
  return (
    <>
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-[50px] font-[Gilroybold] text-[#023E8A] my-8">Why DocOrganizer ?</h1>
        <p className='w-1/2 mx-auto text-center font-[Gilroy] text-[#ababa9]'>You will have all the features to import your Inbound & Outbound leads in real-time from your CRM, qualify them, schedule appointments, and earn points</p>
      </div>
      <div className='flex flex-row justify-between mx-20 space-x-10'>
        <Card
          icon="../../../../public/icon1.svg"
          title="Efficient Management"
          text="Vous trouverez un dashboard contenant les KPIs les plus importantes de votre
          métier (taux de conversion, nombre de RDV, performance …) afin de faciliter le
          suivi et le reporting"
        />
        <Card
          icon="../../../../public/icon2.svg"
          title="Time-saving"
          text="Huntease collabore avec des opérateurs partout dans le monde afin de vous
          offrir la meilleure qualité d’appel, le tout dans un logiciel conçu pour
          optimiser le processus de prospection"
        />
        <Card
          icon="../../../../public/icon3.svg"
          title="User friendly"
          text="Vous aurez toujours les bonnes questions de qualification sous les yeux.
          Créez vos guides conversationnels et partagez-les avec votre équipe en deux
          clics"
        />
      </div>
    </>
  )
}

export default why