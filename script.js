var input = document.getElementById("writespace")

input.addEventListener("keyup", (event) => {
  if(event.keyCode === 13 && input.value !== "") { // la tecla 13 es el enter y si el input no esta vacio
    // event.preventDefault();
    // document.getElementById("btn").click();
    if(input.value.includes(";")) {
      Swal.fire({
        toast: true,
        icon: "error",
        title: "No puedes poner ';'",
        position: 'top',
        showConfirmButton: false,
        timer: 1500,
        timerProgressBar: true
      })
      document.getElementById("writespace").value = "";
    } else {
      AddTask(input.value)
      Swal.fire({
        toast: true,
        icon: "success",
        title: "Tarea agregada exitosamente!",
        position: 'top',
        showConfirmButton: false,
        timer: 1500,
        timerProgressBar: true
      })
      document.getElementById("writespace").value = "";
    }
    /* console.log("Enter key pressed"); */
  } else if(event.keyCode === 13 && input.value === "") {
    // alert("Please enter something to proceed")
    Swal.fire({
      icon: "error",
      title: "Porfavor ingresa algo para continuar!",
      position: "top"
    })
  }
})

// Agregar evento click al botón
document.getElementById("btn").addEventListener("click", (event) => {
    if(input.value === "") {
      // alert("Please enter something to proceed")
      Swal.fire({
        icon: "error",
        title: "Porfavor ingresa algo para continuar!",
        position: "top"
      })
    } else {
      AddTask(input.value)
      Swal.fire({
        toast: true,
        icon: "success",
        title: "Tarea agregada exitosamente!",
        position: 'top',
        showConfirmButton: false,
        timer: 1500,
        timerProgressBar: true
      })
      document.getElementById("writespace").value = "";
    }
})