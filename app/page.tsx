// src/pages/index.tsx

import PandemiasSection from './components/secaoPandemia/pandemias'
import { Pandemia } from './types/api';
interface HomeProps {
  pandemias: Pandemia[];
}

export default function Home({ pandemias }: HomeProps) {
  return (
    <div className="min-h-screen bg-gray-50">
      
      <main className="container mx-auto py-12 space-y-20">
        <PandemiasSection pandemias={pandemias} />
        
      </main>
      
    </div>
  );
}


