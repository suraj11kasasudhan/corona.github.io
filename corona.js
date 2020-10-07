function getdata(i)
{
  
  

  fetch("https://api.covid19api.com/summary").
  then
  (
  (apidata)=>{
    return apidata.json();}
  ). 
  then
  (
  (actualdata)=>
  {
    
    const date=actualdata.Countries[i].Date;
    
    document.getElementById("date").innerHTML=date;

    const total=actualdata.Countries[i].TotalConfirmed;
    
    document.getElementById("total").innerHTML=total;
     


    const caser=actualdata.Countries[i].NewConfirmed;
    
    document.getElementById("caser").innerHTML=caser;

    const death=actualdata.Countries[i].NewDeaths;
    
    document.getElementById("death").innerHTML=death;

    const recover=actualdata.Countries[i].NewRecovered;
    
    document.getElementById("recover").innerHTML=recover;


  
  
  
  }
  );

}


  function countryselect()
  {
    var sel = document.getElementById('country');
    function getSelectedOption(sel) 
    {
      var opt;
      for ( var i = 0, len = sel.options.length; i < len; i++ )
       {
          opt = sel.options[i];
          if ( opt.selected === true ) 
          {
              break;
          }
        }
      return opt;
     }
  const cname=sel.value;
  
  if(cname=="India")
  {
    getdata(76)

  } 
  else
  if(cname=="srilanka")
  {
    getdata(159);
  }
  else 
  if(cname=="spain")
  {
     getdata(158);
  }
  else 
  if(cname=="Australia")
  {
      getdata(8);
  }
  else 
  if( cname=="spain")
  {
     getdata( 158);
  }
  else 
  if(cname=="Switzerland")
  { 
     getdata(164);

  }
  else 
  if(cname=="Africa")
  {
     getdata(156);
  }
  else 
  if(cname=="Nepal")
  {
    getdata(119);
  }
  else 
  if(cname=="Newzealand")
  {
    getdata(121);
  }
  else
  if(cname=="Japan")
  {
    getdata(84);
  }
 }


 function again()
 {
  window.location.reload();
 }






  









 
  












