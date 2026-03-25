import { Suspense } from 'react';
import './App.css'
import PriceCard from './component/PriceCard';

const pricingPromise = fetch('pricingData.json').then(res => res.json());


function App() {
  return (
    <>
      <main>
        <Suspense fallback={<span className="loading loading-spinner loading-xl"></span>
        }>

          <PriceCard pricingPromise={pricingPromise}></PriceCard>

        </Suspense>
      </main>
    </>
  )
}

export default App
