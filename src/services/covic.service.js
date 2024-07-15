


/**
 * this function is called to fetch data from covid-19 API
 * @returns data about covid-19
 */
export async function getCovidHistory() {
    return new Promise(function(resolve, reject) {
        const data = null;

        const xhr = new XMLHttpRequest();
        xhr.withCredentials = true;
    
        xhr.addEventListener('readystatechange', function () {
            if (this.readyState === this.DONE) {
                resolve(JSON.parse(this.responseText));
            }
        });
    
        xhr.addEventListener('error', reject)
        xhr.open('GET', 'https://covid-19-data.p.rapidapi.com/country/code?format=json&code=it');
        xhr.setRequestHeader('x-rapidapi-key', 'f69828cd5emsh93687abfc7cc86bp1d8e9fjsnc57d5e4857ab');
        xhr.setRequestHeader('x-rapidapi-host', 'covid-19-data.p.rapidapi.com');
        
        xhr.send(data);
    })
 
}