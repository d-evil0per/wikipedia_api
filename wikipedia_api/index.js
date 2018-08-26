

// Function to Retrieve Data using Wikipedia API Through Ajax  
function retrieve(keyword)
{
  // Wikipedia API URL
   var url="https://en.wikipedia.org/w/api.php";

  $.ajax({
             type:"GET",
             url:url,
             data:{action:"opensearch",format:"json",search:keyword},
             dataType:"jsonp",
             success: function (data)
                        {
                            var arr=data;
                            $("#showdata").show();
                            $("#res_row").empty();
                            $("#res_row").append("<tr>");
                              
                            for (i=1;i<arr.length;i++)
                                    {
                                        var list="<ul>";
                                        arr[i].forEach(function(element)
                                             {
                                                if(isURL(element))
                                                    {
                                                       list+="<li><a target='_blank' href='"+element+"'>"+element+"</a></li>";
                                                    }
                                                else
                                                    {
                                                       list+="<li>"+element+"</li>";
                                                    }
                                         
                                              });
                                        list+="</ul>";
                                        $("#res_row").append("<td>"+list+"</td>");
                                   }

                            $("#res_row").append("</tr>");
                        },
              error: function (error) 
                        {
                            alert(JSON.stringify(error));
                        }
                         
                          });

 }
 
function search()
{
  var fetch= $("#fetch").val();
  retrieve (fetch);
 }


function isURL(str)
 {
     var regex = /(http|https):\/\/(\w+:{0,1}\w*)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%!\-\/]))?/;
      if(!regex .test(str))
       {
          return false;
       } 
      else
       {
        return true;
       }
}