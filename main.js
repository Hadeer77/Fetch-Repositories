let theInput = document.querySelector(".get-repos input");
let getButton = document.querySelector(".get-button");
let reposData = document.querySelector(".show-data");

getButton.onclick= function(){
    getRepos();
};
//get repos function
function getRepos(){
    if(theInput.value==""){
        reposData.innerHTML= "<span>please write github username</span>";
    }else{
        fetch(`https://api.github.com/users/${theInput.value}/repos`)
        .then((response)=>response.json())
        .then((repositories)=>{
            //empty the container
            reposData.innerHTML="";
            //loop on repositories
            repositories.forEach(repo=>{
                let mainDiv= document.createElement("div");
                let repoName = document.createTextNode(repo.name);
                mainDiv.appendChild(repoName);
                //create repo url anchor
                let theUrl= document.createElement('a');
                let theUrlText = document.createTextNode("visit");
                theUrl.appendChild(theUrlText);
                //add the hypertext reference "href"
                theUrl.href = `https://github.com/${theInput.value}/${repo.name}`;
                //set attribute blank
                theUrl.setAttribute('target','_blank');
                mainDiv.appendChild(theUrl);
                //create the stars count span
                let starsSpan = document.createElement("span");
                //create the stars count text
                let starsText = document.createTextNode(`stars ${repo.stargazers_count}`);
                starsSpan.appendChild(starsText);
                mainDiv.appendChild(starsSpan);
                //add class on mainDiv
                mainDiv.className = 'repo-box';
                reposData.appendChild(mainDiv);
            }); 
        });
    }
}