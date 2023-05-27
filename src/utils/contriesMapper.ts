export const mapCitiesData = (data: {}) => {
    const mappedData = [];
  
    for (const [country, cities] of Object.entries(data)) {
      for (const city of cities) {
        mappedData.push({ city, country });
      }
    }
  
    return mappedData;
  };