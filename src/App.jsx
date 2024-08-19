import "./App.css";
import { useState, useEffect } from "react";
import ConvertCurrency from "./Components/ConvertCurrency";
import Output from "./Components/Output";
import Navbar from "./Components/Navbar";

export default function App() {
  const [amount, setAmount] = useState(null);
  const [fromCurrency, setFromCurrency] = useState("");
  const [toCurrency, setToCurrency] = useState("");
  const [displayOutput, setDisplayOutput] = useState(null);
  const [currencyOptions, setCurrencyOptions] = useState([]);

  useEffect(() => {
    async function fetchOptions() {
      const res = await fetch("https://api.frankfurter.app/latest");
      const data = await res.json();
      const currencies = data.rates;
      setCurrencyOptions(Object.keys(currencies));
    }
    fetchOptions();
  }, []);

  useEffect(() => {
    async function fetchCurrencyData() {
      try {
        if (amount && fromCurrency && toCurrency) {
          const res = await fetch(
            `https://api.frankfurter.app/latest?amount=${amount}&from=${fromCurrency}&to=${toCurrency}`
          );
          const data = await res.json();
          if (data) {
            setDisplayOutput(Object.values(data.rates)[0]);
          }
        }
      } catch (e) {
        console.log(e);
      }
    }
    fetchCurrencyData();
  });

  return (
    <div className="general">
      <div className="application">
        <Navbar />
        <ConvertCurrency
          setAmount={setAmount}
          currencyOptions={currencyOptions}
          setFromCurrency={setFromCurrency}
          setToCurrency={setToCurrency}
        />
        <Output
          amount={amount}
          toCurrency={toCurrency}
          fromCurrency={fromCurrency}
          displayOutput={displayOutput}
        />
      </div>
    </div>
  );
}
