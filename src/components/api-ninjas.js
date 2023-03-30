const url = 'https://api.api-ninjas.com/v1/quotes?category=computers';
const apikey = 'W/N7bB2EdTBiF6hUUpq1QQ==YfLG2YMVwwoGgq4F';
const getQuote = async () => {
  try {
    const response = await fetch(url, {
      headers: {
        'X-Api-key': apikey,
        'Content-Type': 'application/json',
      },
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.log('Error fetching data', error);
    throw error;
  }
};

export default getQuote;
