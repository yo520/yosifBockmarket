var arr=[];
var newsite;

var siteName=document.getElementById("sitenameId");
var siteUrl=document.getElementById("siteurlId");



if(localStorage.getItem('sites')!=null)
{
  arr=JSON.parse(localStorage.getItem('sites'));
  display();
}

function start()
{
  if(validationSiteName() === true && validationUrl() === true)
  {
    newsite={

      siteName: siteName.value,
      siteUrl: siteUrl.value
  
    }
  
    arr.push(newsite);
  
    localStorage.setItem('sites',JSON.stringify(arr));
    clear();
    display();
  }
  else
  {
    Swal.fire({
      title: 'Site Name or URL is not valid',
      html: '<p>Please follow the rules below:</p>' +
            '<ul>' +
            '<li>Site name must contain at least 3 characters</li>' +
            '<li>Site URL must be a valid one</li>' +
            '</ul>',
      icon: 'error',
      confirmButtonText: 'OK'
    });
  }

}


function display()
{
    var content =``;


    for(var i=0;i<arr.length;i++)
    {
        content+=`
        
            <tr>
                <th scope="row">${i+1}</th>
                <td>${arr[i].siteName}</td>
                <td>
                <a href="${arr[i].siteUrl}" target="_blank" class="btn btn-visit text-white bg-success">
                  <i class="fa-solid fa-eye pe-2"></i>Visit
                </a>
                </td>
                <td>
                <button class="btn btn-delete bg-danger text-white pe-2" onclick="deletes(${i})" >
                    <i class="fa-solid fa-trash-can"></i>
                    Delete
                  </button>
                </td>
            </tr>
        
        
        `


    }
    document.getElementById("conext").innerHTML = content;

}






function deletes(index)
{
  arr.splice(index,1);
  localStorage.setItem('sites',JSON.stringify(arr));
  display(); 
}








function clear()
{
  siteName.value="";
  siteUrl.value="";
}





function validationSiteName()
{
  var text=siteName.value;
  
  var regex=/^\w{3,}(\s+\w+)*$/;
  
  if(regex.test(text))
    {
      console.log("valid");
      
      siteName.classList.remove("is-invalid");
      siteName.classList.add("is-valid");
      
      
      
      return true;
    }
    else
    {
      siteName.classList.add("is-invalid");
      siteName.classList.remove("is-valid");
      
      
      
      return false;
    }
    
    
}


function validationUrl()
{
  var text=siteUrl.value;
  
  var regex=/^(https?:\/\/)?(w{3}\.)?\w+\.\w{2,}\/?(:\d{2,5})?(\/\w+)*$/;
  
  if(regex.test(text))
  {
    
  
    siteUrl.classList.remove("is-invalid");
    siteUrl.classList.add("is-valid");
  
      
  
    return true;
  }
  else
  {

    siteUrl.classList.add("is-invalid");
    siteUrl.classList.remove("is-valid");
  
      
  
    return false;
  }
  
  
}