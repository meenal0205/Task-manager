showNotes();
let taskinput= document.getElementById('addTxt');
let addBtn = document.getElementById("addBtn");
addBtn.addEventListener("click", function (e) {
  let addTxt = document.getElementById("addTxt");
  let notes = localStorage.getItem("notes");

  if (notes == null) notesObj = [];
  else notesObj = JSON.parse(notes);

  notesObj.push(addTxt.value);
  localStorage.setItem("notes", JSON.stringify(notesObj));
  addTxt.value = "";
  let notesElm = document.getElementById("box");
  notesElm.innerHTML = "";

  showNotes();
});

function showNotes() {
  let notesElm = document.getElementById("box");
  notesElm.innerHTML="";

  let notes = localStorage.getItem("notes");

  if (notes == null) notesObj = [];
  else notesObj = JSON.parse(notes);

  let html = " ";

  notesObj.forEach(function (element, index) {
    html += `<div >
                <div >
                    
                    <p > 
                        ${index+1}. ${element}
                    </p>
   
                  <button id="${index}" onclick="deleteNote(this.id)" >
                    Delete
                    </button>
                    <button id="${index}" onclick="update(${index})" >
                    Update 
                    </button>
                    <button id="${index}" onclick="markAsDone(this.id)" >
                    Done
                </button>

                </div>
            </div>`;
    });

    

  if (notesObj.length != 0) notesElm.innerHTML += html;
}

function deleteNote(index) {
  let notes = localStorage.getItem("notes");

  if (notes == null) notesObj = [];
  else notesObj = JSON.parse(notes);

  notesObj.splice(index, 1);

  localStorage.setItem("notes", JSON.stringify(notesObj));

  let notesElm = document.getElementById("box");
  notesElm.innerHTML = "";

  showNotes();
  showDone();
}


function markAsDone(index){
    let notes=localStorage.getItem("notes");
    let doneWork=localStorage.getItem("doneWork");

    if (notes == null) notesObj = [];
    else notesObj = JSON.parse(notes);
    
    if (doneWork == null) doneobj = [];
    else doneobj = JSON.parse(doneWork);
  
    let donenote=notesObj.splice(index, 1);
  
    doneobj.push(donenote[0]);
    localStorage.setItem("doneWork", JSON.stringify(doneobj));
    addTxt.value = "";
    localStorage.setItem("doneWork", JSON.stringify(doneobj));
    localStorage.setItem("notes", JSON.stringify(notesObj));

  
    let notesElm = document.getElementById("box");
    notesElm.innerHTML = "";
  
    showNotes();
    showDone();

}

function showDone() {
    let notes = localStorage.getItem("doneWork");
  
    if (notes == null) notesObj = [];
    else notesObj = JSON.parse(notes);
  
    let html = " ";
  
    notesObj.forEach(function (element, index) {
      html += `<div >
                  <div >
                  <p > 
                  ${index+1}. ${element}
              </p>
                      <button id="${index}" onclick="deleteDone(this.id)" >
                      Delete Note
                    </button>
                  </div>
              </div>`;
      });
  
      let notesElm = document.getElementById("noteSection");
  
       if (notesObj.length != 0) notesElm.innerHTML = html;
       notesElm.innerHTMl="";

    showNotes();
  

  }

function deleteDone(index){
  let done = localStorage.getItem("doneWork");

  if (done == null) doneobj = [];
  else doneobj= JSON.parse(done);

  doneobj.splice(index, 1);

  localStorage.setItem("doneWork", JSON.stringify(doneobj));

  let notesElm = document.getElementById("noteSection");
  notesElm.innerHTML = "";
 
  showNotes();
  showDone();
}

function update(index){
  
  let saveindex = document.getElementById("editText");
  let addtaskbtn = document.getElementById("addBtn");
  let savetaskbtn = document.getElementById("editChange");
  saveindex.value = index;
  let webtask = localStorage.getItem("notes");
  let taskObj = JSON.parse(webtask); 
  
  taskinput.value = taskObj[index];
  addtaskbtn.style.display="none";
  savetaskbtn.style.display="inline-block";
}

let savetaskbtn = document.getElementById("editChange");
savetaskbtn.addEventListener("click", function(){
   let webtask = localStorage.getItem("notes");
   let taskObj = JSON.parse(webtask); 
   let saveindex = document.getElementById("editText").value;
   taskObj[saveindex]=taskinput.value;
   localStorage.setItem("notes",JSON.stringify(taskObj));
   showNotes();
   
})
