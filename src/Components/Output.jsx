export default function Output({
  displayOutput,
  amount,
  fromCurrency,
  toCurrency,
}) {
  return (
    <p>
      {displayOutput
        ? amount + " " + fromCurrency + " = " + displayOutput + " " + toCurrency
        : null}
    </p>
  );
}
