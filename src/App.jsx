import { Suspense } from 'react';
import './App.css'
import PricingOption from './component/pricingOptions/PricingOption'


const pricingPromise = fetch('pricingData.json').then(res => res.json());


function App() {
  return (
    <>
      <main>
        <Suspense fallback={<span className="loading loading-spinner loading-xl"></span>
        }>
          <PricingOption pricingPromise={pricingPromise}></PricingOption>
        </Suspense>
      </main>
    </>
  )
}

export default App
