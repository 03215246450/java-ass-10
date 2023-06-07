alert("Enter roll no between 1001 - 10012  ")

function checkrollno() {
 
    var studentsarray = [
              {
                rollnumber: 1001 ,
              },
              {
                rollnumber: 1002,
              },
              {
                rollnumber: 1003,
              },
              {
                rollnumber:1004 ,
              },
              {
                rollnumber: 1005 ,
              },
              {
                rollnumber: 1006,
              },
              {
                rollnumber:1007 ,
              },
              {
                rollnumber: 1008,
              },
              {
                rollnumber:1009 ,
              },
              {
                rollnumber:10010 ,
              },
              {
                rollnumber:10011 ,
              },
              {
                rollnumber:10012 ,
              },
        
        
            ];
  
    var inp = document.getElementById("inp").value;
    var found = false;
  
    for (let i = 0; i < studentsarray.length; i++) {
      if (studentsarray[i].rollnumber == inp) {
        found = true;
        break;
      }
    }
  
    if (found) {
      alert("Found");
    } else {
      alert("Not found");
    }

    var inp = document.getElementById("inp").value = "";
   
 


  }
  