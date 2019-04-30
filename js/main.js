const search = document.getElementById('search');
const matchList = document.getElementById('match-list');


// Search and filter capitals.json

const searchCaps = async searchText => {
    const res = await fetch('../data/capitals.json');
    const caps = await res.json();
    console.log(caps);


    // Get matches to current text input
    let matches = caps.filter(cap => {
        const regex = new RegExp(`^${searchText}`, 'gi');
        return cap.country.match(regex) || cap.city.match(regex);
    });

if(searchText.length === 0)
{
    matches = [];
    matchList.innerHTML = '';
}
outputHtml(matches);
};

// Html display function
const outputHtml = matches => {
    if(matches.length > 0){
        const html = matches.map(match => `
        <div class=
        <h3>${match.country} </h3>
        <h4>${match.city} </h4>
        </div>
        `).join(''); // converts to string
        matchList.innerHTML = html;
    }
    if(matches.length === 0)
    {
        matches = [];
        matchList.innerHtml = '';
    }
};

search.addEventListener('input', () => searchCaps(search.value));