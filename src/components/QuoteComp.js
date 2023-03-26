// /src/components/QuoteComp.js

import { useState, useEffect } from 'react';

const Quote = () => {
  const [data, setData] = useState([]);
  const [hasError, setHasError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const url = 'https://api.api-ninjas.com/v1/quotes';

  useEffect(() => {
    fetch(url, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'X-Api-Key': 'BKClj4Dtpag57e4essMWzQ==qPsncxrminIefPX5',
      },
    }).then((res) => res.json()).then((apiData) => {
      setData(apiData);
      setIsLoading(false);
    }).catch(() => {
      setHasError(true);
    });
  }, [setData, setIsLoading]);

  if (hasError) {
    return (
      <section className="QuoteContainer">
        <blockquote>
          Hmmm... an error might have ocurred
        </blockquote>
      </section>
    );
  }
  if (isLoading) {
    return (
      <section className="QuoteContainer">
        <blockquote>
          Loading...
        </blockquote>
      </section>
    );
  }

  return (
    <section className="QuoteContainer">
      <blockquote>
        &quot;
        {data[0].quote}
        &quot;
      </blockquote>
    </section>
  );
};

export default Quote;
