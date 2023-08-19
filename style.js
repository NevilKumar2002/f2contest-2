const students = [
    {
      ID: 1,
      name: 'Alice',
      age: 21,
      grade: 'A',
      degree: 'Btech',
      email: 'alice@example.com'
    },
    {
      ID: 2,
      name: 'Bob',
      age: 22,
      grade: 'B',
      degree: 'MBA',
      email: 'bob@example.com'
    },
    {
      ID: 3,
      name: 'Charlie',
      age: 20,
      grade: 'C',
      degree:'Arts',
      email: 'charlie@example.com'
    }
  ]; 

  const form=document.getElementsByTagName("form")[0];
  const table= document.getElementById("table");
  const edit=document.getElementById("edit-button1");
  let index=1;
  form.addEventListener("submit",(event)=>  {
    event.preventDefault();
    const name=form["name"].value;
    const email=form["email"].value;
    const gpa=form["gpa"].value;
    const age=form["age"].value;
    const degree=form["degree"].value;
    const ID=document.createElement("span")
    ID.innerText=index;
    const tableRow= document.createElement("tr");
    const nameCell=document.createElement("td");
    nameCell.innerText=name;
    const emailCell=document.createElement("td");
    emailCell.innerText=email;
    const gpaCell=document.createElement("td");
    gpaCell.innerText=gpa;
    const ageCell=document.createElement("td");
    ageCell.innerText=age;
    const degreeCell=document.createElement("td");
    degreeCell.innerText=degree;
    
    
    tableRow.append(ID,nameCell,emailCell,ageCell,gpaCell,degreeCell);
    

    table.appendChild(tableRow);
    
   
   
    

   index++;
   
  })
//   const editimage=documnet.getElementById("edit-image");
//   const deleteimage=documnet.getElementById("delete-image");

  
 function remove() {
    let ID=1;
        document.getElementsByTagName("tr")[ID].remove();
        ID++;
    }


    function clickme()
    {
      edit.style.display="block";
    }
    form.addEventListener("edit-image",(event)=>  {
      event.preventDefault();
      const name=form["name"].value;
      const email=form["email"].value;
      const gpa=form["gpa"].value;
      const age=form["age"].value;
      const degree=form["degree"].value;
      const ID=document.createElement("span")
      ID.innerText=index;
      const tableRow= document.createElement("tr");
      const nameCell=document.createElement("td");
      nameCell.innerText=name;
      const emailCell=document.createElement("td");
      emailCell.innerText=email;
      const gpaCell=document.createElement("td");
      gpaCell.innerText=gpa;
      const ageCell=document.createElement("td");
      ageCell.innerText=age;
      const degreeCell=document.createElement("td");
      degreeCell.innerText=degree;
      
      
      tableRow.append(ID,nameCell,emailCell,ageCell,gpaCell,degreeCell);
      
  
      table.appendChild(tableRow);
      
     
     
      
  
     index++;
     
    })






