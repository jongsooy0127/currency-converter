export default function ConvertCurrency({
  setAmount,
  setFromCurrency,
  currencyOptions,
  setToCurrency,
}) {
  return (
    <div className="data">
      <label className="label">Input the amount: </label>
      <input type="number" onChange={(e) => setAmount(e.target.value)} />
      <label className="label">Choose your currency: </label>
      <select onChange={(e) => setFromCurrency(e.target.value)}>
        {currencyOptions.map((item) => (
          <option value={item} key={item}>
            {item}
          </option>
        ))}
      </select>
      <label className="label">Choose your selected currency: </label>
      <select onChange={(e) => setToCurrency(e.target.value)}>
        {currencyOptions.map((item) => (
          <option value={item} key={item}>
            {item}
          </option>
        ))}
      </select>
    </div>
  );
}
