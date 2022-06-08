//https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=20&q=thor&key=[YOUR_API_KEY]
const api_key="cba206b5639b31a696cac9c40d270ce2";
//const api_key="422c13495d89062b988678a9ce9b35d9"
let search =async ()=>{
    let query=document.getElementById('query').value;
    let url='https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=20&q=${query}&key=${api_key}';
    let res=await fetch(url); 
    let data=await res.json();
    append(data.item());
    console.log(data);
   // console.log(res)
};
let append =(deta)=>{
    let container=document.getElementById('results');
    //console.log(data)
    data.forEach(({id:{videoId},snippet:{title}})=>{
        //console.log(id,snippet);
        let div=document.createElement('div');
        let iframe=document.createElement('iframe');
        iframe.src="https://www.youtube.com/embed/${videoId}";
        let h3=document.createElement('h3');
        h3.innerText=title;
        div.append(iframe,h3);
        container.append(div)
    });
}
/*
<iframe width="560" height="315" src="https://www.youtube.com/embed/KVh4KtUSW3A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
*/