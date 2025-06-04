import React from 'react'
import {Hero} from '../Components/Hero/Hero'
import { Popular } from '../Components/popular/Popular'
import { Offers } from '../Components/offers/Offers'
import { NewCollection } from '../Components/NewCollections/NewCollection'
import { NewsLetter } from '../Components/NewsLetter/NewsLetter'

export const Shop = () => {
  return (
    <div>
        <Hero />
        <Popular />
        <Offers />s
        <NewCollection />
        <NewsLetter />
    </div>
  )
}
