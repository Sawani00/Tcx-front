import React from 'react'
import Card from './Sub components/Card'

function why() {
  return (
    <>
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-[50px]">Pourquoi Calendly ?</h1>
        <p className='w-1/2 mx-auto text-center'>Vous disposerez de toutes les fonctionnalités pour importer vos leads Inbouds &
          Outbound en temps réel depuis votre CRM, les qualifier, prendre RDV et gagner
          des points</p>
      </div>
      <div className='flex flex-row justify-between mx-20 space-x-10'>
        <Card
          icon="../../../../public/icon1.svg"
          title="Sales metrics"
          text="Vous trouverez un dashboard contenant les KPIs les plus importantes de votre
          métier (taux de conversion, nombre de RDV, performance …) afin de faciliter le
          suivi et le reporting"
        />
        <Card
          icon="../../../../public/icon2.svg"
          title="Sales Dialer"
          text="Huntease collabore avec des opérateurs partout dans le monde afin de vous
          offrir la meilleure qualité d’appel, le tout dans un logiciel conçu pour
          optimiser le processus de prospection"
        />
        <Card
          icon="../../../../public/icon3.svg"
          title="Sales Playbook"
          text="Vous aurez toujours les bonnes questions de qualification sous les yeux.
          Créez vos guides conversationnels et partagez-les avec votre équipe en deux
          clics"
        />
      </div>
    </>
  )
}

export default why