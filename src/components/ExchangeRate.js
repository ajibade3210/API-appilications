
const ExchangeRate = ({exchangeData}) => {
    return (
      <div className="exchange-rate">
      <h3>Exchange Rate</h3>
        <h1>{exchangeData.exchangeRate}</h1> <span></span>
        <p> <span className="primary">{exchangeData.primaryName}</span> to <span className="secondary">{exchangeData.secondaryName}</span> </p>
        <p><span className="primary">{exchangeData.primaryCurrency}</span> - <span className="secondary">{exchangeData.secondaryCurrency}</span> </p>
      </div>
    );
  }
  
  export default ExchangeRate;
