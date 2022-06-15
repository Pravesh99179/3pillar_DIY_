var fetchDatacats = async () => {
    try {
      var response = await fetch("https://api.thecatapi.com/v1/breeds")
      var cats = await response.json()
      var cname = [];
      for(var i=0;i<cats.length;i++){
        
        cname[i] = cats[i].name;
      }
      console.log(cats);
      console.log(cname);
      /*console.log(cname);*/
    } catch (err) {
      console.error(err)
    }
  }
fetchDatacats();