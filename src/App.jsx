import { useState } from 'react'
import { FaCheck,FaTimes } from "react-icons/fa";
import './App.css'
import PriceCard from './Components/PriceCard'
import './Components/Cards/Card.css';



function App() {
  const features = {
   listItems : [
    {list : 'Single User', status: true},
    {list : '5GB Storage', status: true},
    {list : 'Unlimited Public Projects', status: true},
    {list : 'Community Access', status: true},
    {list : 'Unlimited Private Projects', status: false},
    {list : 'Dedicated Phone Support', status: false},
    {list : 'Free Subdomain ', status: false},
    {list : 'Monthly Status Reports', status: false}],

  }

  const features2 = {
    listItems : [
     {list : '5 User', status: true},
     {list : '50GB Storage', status: true},
     {list : 'Unlimited Public Projects', status: true},
     {list : 'Community Access', status: true},
     {list : 'Unlimited Private Projects', status: true},
     {list : 'Dedicated Phone Support', status: true},
     {list : 'Free Subdomain ', status: true},
     {list : 'Monthly Status Reports', status: false}],
 
   }

   const features3 = {
    listItems : [
     {list : 'Unlimited User', status: true},
     {list : '150GB Storage', status: true},
     {list : 'Unlimited Public Projects', status: true},
     {list : 'Community Access', status: true},
     {list : 'Unlimited Private Projects', status: true},
     {list : 'Dedicated Phone Support', status: true},
     {list : 'unlimited Free Subdomain ', status: true},
     {list : 'Monthly Status Reports', status: true}],
 
   }

 
  
  const names = {
    pack1 : 'Free',
    pack2 : 'Plus',
    pack3 : 'pro',
  }

  const prices = {
    cost1 : '$0',
    cost2 : '$9',
    cost3 : '$49',
  }
 
  const list = features.listItems.map(item => <li key={Math.random().toString()}>{item.status ? <FaCheck/> : <FaTimes/>} {item.list}</li>)
 
  const list2 = features2.listItems.map(item => <li key={Math.random().toString()}>{item.status ? <FaCheck/> : <FaTimes/>} {item.list}</li>)

  const list3 = features3.listItems.map(item => <li key={Math.random().toString()}>{item.status ? <FaCheck/> : <FaTimes/>} {item.list}</li>)

  
  return (
    <div className="container">
      <PriceCard lis={list} package = {names.pack1} priceLists = {prices.cost1}/>
      <PriceCard lis={list2} package = {names.pack2} priceLists = {prices.cost2}/>
      <PriceCard lis={list3} package = {names.pack3} priceLists = {prices.cost3}/>
    </div>
  )
}

export default App
