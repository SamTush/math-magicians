import React, { useState, useEffect } from 'react';
import './styles.scss';
import getQuote from './api-ninjas';

function Quotes() {
  const [quoteIs, setQuoteIs] = useState('');

  useEffect(() => {
    const fetchQuote = async () => {
      try {
        const quote = await getQuote();
        setQuoteIs(quote[0].quote + quote[0].author);
      } catch (e) {
        console.log('error:', e);
      }
    };
    fetchQuote();
  }, []);

  return (
    <div className="container">
      <div className="row">
        <div className="col col-12 quotes p-5">
          <p>
            {quoteIs}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Quotes;