import React from 'react'

import { Layout } from '../components/Layout'

export default function Home() {
  return (
    <Layout>
      <div
        className="
        px-0 gap-0
        grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4"
      >
        {[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]
        .map((num, index) => (
          <div
            className="bg-stone-200"
          >
            <img src={`https://picsum.photos/800?random=${index}`} alt="rand 1"/>
          </div>
        ))}
      </div>
    </Layout>
  )
}
