import Swal from "sweetalert2";

export function  deletePostulante(){
    return Swal.fire({
        toast: true,
        position: 'top-end',
        icon: 'warning',
        title: 'Postulante eliminado',
        timerProgressBar: true,
        showConfirmButton: false,
        timer: 3000
      })
    }

    export function  addPostulante(){
        return Swal.fire({
            toast: true,
            position: 'top-end',
            icon: 'success',
            title: 'Postulante agregado correctamente',
            timerProgressBar: true,
            showConfirmButton: false,
            timer: 3000
          })
        }