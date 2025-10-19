let theinput = document.querySelector('.get-repos input');
let getbutton = document.querySelector('.get-button');
let reposdata = document.querySelector('.show-data'); // بعرض فيه البيانات بتاعتي

getbutton.onclick = function () {
     getrepos();
}

function getrepos() {
     if (theinput.value == "") {
          reposdata.innerHTML = '<span> plz write github username. </span>'
     }
     else {

          fetch(`https://api.github.com/users/${theinput.value}/repos`)
               .then((res) => res.json())  // عشان الرد بييجي من السيرفر على هي~ة بروميس ف انا هنا بقوله اني عايزه الداتا او الاوبجكتس اللي جواه
               .then((data => {

                    reposdata.innerHTML = '';

                    data.forEach(item => {
                         let mainDiv = document.createElement('div');
                         let reponame = document.createTextNode(item.name);
                         mainDiv.appendChild(reponame);
                         let theURL = document.createElement('a');
                         let urltext = document.createTextNode("Visit")
                         theURL.appendChild(urltext);
                         theURL.href = `https://github.com/${theinput.value}/${item.name}`;
                         theURL.setAttribute('target', '_blank');
                         mainDiv.appendChild(theURL);
                         let starspan = document.createElement('span');
                         let startstext = document.createTextNode(`stars ${item.stargazers_count}`);
                         starspan.appendChild(startstext);
                         mainDiv.appendChild(starspan);
                         mainDiv.className = 'repoBox';
                         reposdata.appendChild(mainDiv);
                    });
               }))
     }


}



