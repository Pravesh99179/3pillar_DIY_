var fetchData = async () => {
    try {
      var response = await fetch("https://restcountries.com/v2/all")
      var countries = await response.json()
      var cname = [];
      for(var i=0;i<countries.length;i++){
        
        cname[i] = countries[i].name;
      }
      console.log(countries);
      console.log(cname);
    } catch (err) {
      console.error(err)
    }
  }
fetchData();