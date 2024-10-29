import React, { useEffect, useState } from 'react'
import InputBox from './components/InputBox'
import useCurrencyConvertor from './hooks/useCurrencyConvertor'


function App() {
  const [inputCurrency, setInputCurrency] = useState("inr")
  const data = useCurrencyConvertor(inputCurrency)
  
  const [inputAmount, setInputAmount] = useState(0)  
  const [outputCurrency, setOutputCurrency] = useState("inr")
  const [outputAmount, setOutputAmount] = useState(0)

  useEffect(()=>{
    // console.log(inputAmount);
    // console.log(inputCurrency)
    // console.log("the exchange rate is: "+ Number(data[inputCurrency]));
    
    setOutputAmount(inputAmount*Number(data[outputCurrency]))
  }, [data, inputAmount, outputCurrency])

  return (
    <div className=' h-screen w-screen flex flex-col gap-y-8 flex-wrap content-center justify-center'>
      <InputBox currency={inputCurrency} 
      currencyList={data} onSelectChange={(e)=>{
        setInputCurrency(e.target.value)
      }} 
      onInputChange={(e)=>{
        setInputAmount(e.target.value)
      }}
      amount={inputAmount}/>
      <InputBox currency={outputCurrency} 
      currencyList={data} onSelectChange={(e)=>{
        setOutputCurrency(e.target.value)
      }} 
      onInputChange={(e)=>{
        setOutputAmount(e.target.value)
      }}
      amount={outputAmount}
      disabled={true}/>
    </div>
  )
}

export default App