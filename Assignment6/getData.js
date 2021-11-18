const api_url = 'http://api.open-notify.org/astros.json'
        async function getISS() {
           const response = await fetch(api_url);
           const data = await response.json();
           const { number, people } = data;
    
           var nameElements = document.getElementsByClassName('name')
           var locationElements = document.getElementsByClassName('location')
           for(var i=0; i<nameElements.length; i++){
               console.log(people[i]);
               nameElements[i].append(people[i].name);
               locationElements[i].append(people[i].craft);
           }
        } 

        getISS();