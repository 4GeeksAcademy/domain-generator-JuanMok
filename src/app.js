let pronoun = ['the', 'our', 'his'];
let adj = ['great', 'big', 'amazing' ];
let noun = ['jogger', 'racoon', 'dog', 'merchant', 'driver'];

// generating the domains
let domains = [];
for(let i = 0; i < pronoun.length; i++) {
  for(let j = 0; j < adj.length; j++) {
    for(let k = 0; k < noun.length; k++) {
      let domain = pronoun[i] + adj[j] + noun[k]+'.com';
      domains.push(domain);
      console.log(domain); 
    }
  }
}

document.body.innerHTML += '<div class="container mt-5"><h2>Generated Domains:</h2><ul id="domains-list"></ul></div>';
domains.forEach(domain => {
  const li = document.createElement('li');
  li.textContent = domain;
  document.getElementById('domains-list').appendChild(li);
});