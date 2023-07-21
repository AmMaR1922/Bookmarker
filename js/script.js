var sitename = document.getElementById('name')
var siteurl = document.getElementById('url')
var urllist;


if (localStorage.getItem('url') === null) {
    urllist = [];
} else {
    urllist = JSON.parse(localStorage.getItem('url'));
    display();
}


function addurl() {


    var sites = {
        name: sitename.value,
        url: siteurl.value,
    }
    urllist.push(sites);
    localStorage.setItem('url', JSON.stringify(urllist));
    Reset()
    display()



}

function Reset() {
    sitename.value = '';
    siteurl.value = '';

}
function display() {
    var trs = ``;
    for (var i = 0; i < urllist.length; i++) {
        trs +=
            `
    <tr>
    <td >${i + 1}</td>
    <td>${urllist[i].name}</td>
    
    <td><button class="btn-visit  "  onclick ="window.location.href='https:${urllist[i].url}';"><i class="fa-solid fa-eye"></i>  Visit</button></td>
    <td><button class="btn-delete" onclick ="delte(${i})"  ><i class="fa-solid fa-trash-can"></i> Delete</button> </td> 
    </tr>
    `
    }
    document.getElementById('tableBody').innerHTML = trs;
}

function delte(index) {
    urllist.splice(index, 1);
    localStorage.setItem('url',JSON.stringify(urllist))
    display();
}
function urlvalidate() {
    var urlregex = /^(http|https):\/\/[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?$/;
    var url = siteurl.value
    if (urlregex.test(url)) {
        
        return true;
    }
    else {
  
        return false;
    }
}


 
    var repeation=true;
    for(var i=0;i<urllist.length;i++){
        if(urllist[i].name==sitename.value){
            repeation=false;
            break;

        }
    }

 btn.onclick=function(){
    if(urlvalidate==true&&repeation==true){
        addurl() 
    }
    else
    {
        window.alert('gcbjhd')
    }

    } 



    
