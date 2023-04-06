import React, { useState, useEffect } from 'react';
import './styles.scss';
import getQuote from './api-ninjas';

function Quotes() {
  const [quoteIs, setQuoteIs] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchQuote = async () => {
      try {
        const quote = await getQuote();
        setQuoteIs(`${quote[0].quote}  - ${quote[0].author}`);
        setIsLoading(false);
      } catch (error) {
        throw error;
      }
    };
    fetchQuote();
  }, []);

  return (
    <div className="container mb-5 mt-5">
      <div className="row">
        <div className="col col-12 quotes p-5">
          <p>
            {isLoading ? (
              <p>Please wait ......</p>
            ) : (
              <p className="quote">
                {quoteIs}
              </p>
            )}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Quotes;
