import React from "react";
import "../Style/Style.css";
import envelope from "../SVG/envelope.svg"
import Swal from "sweetalert2";
const Rekrut = () => {
  const [result, setResult] = React.useState("");

  const Submit = async(event) => {
   event.preventDefault();
   setResult("Sendingg..");

    const Formdata = new FormData(event.target)

    Formdata.append('access_key', "dffccda4-1ad3-4be6-93b8-f4ad84675aab");

    const response = await fetch('https://api.web3forms.com/submit' , {
      method: "POST",
      body: Formdata
    })

    const data = await response.json();
 
      if(data.success) {
        setResult(() => {
          Swal.fire({
                  title: "Apakah kamu yakin?",
                  text: "semua dokument yang dimasukkan sudah lengkap?",
                  icon: "warning",
                  showCancelButton: true,
                  confirmButtonColor: "#3085d6",
                  cancelButtonColor: "#d33",
                  confirmButtonText: "Ya, sudah"
          
          
          }).then((result) => {
            if(result.isConfirmed) {
              Swal.fire({
                title: "Good job!",
                text: "semoga keterima ya di 3 Second Store ",
                icon: "success"
              });
              event.target.reset();
            }

          })

        })

      } else {
        setResult(() => {
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "data gagal terkirim silahkan coba lagi..",
        })
        event.target.reset();
        })

      }
    
  }
 return(
    <div>
       {/* headers */}
     <header class="bg-white">
  <div class="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
    <div class="sm:flex sm:items-center sm:justify-between">
      <div class="text-center sm:text-left">
        <h1 class="text-2xl font-bold text-gray-900 sm:text-3xl"> 3 Second Store</h1>

        <p class="mt-1.5 text-sm text-gray-500">Belanja Murah dan Langka</p>
      </div>

      <div class="mt-4 flex flex-col gap-4 sm:mt-0 sm:flex-row sm:items-center">
      <a class="inline-flex items-center justify-center gap-1.5 rounded-lg border border-gray-200 bg-indigo-500 px-5 py-3 text-white-500 transition hover:text-gray-700 focus:outline-none focus:ring text-white "
          type="button" href="Join">
        
        <span class="text-sm font-medium">Home</span>
        </a>
        
      </div>
    </div>
  </div>
         </header>
       {/* headers */}

       {/* Content */}

    <div className="div-content">
<div className="content-image">
<img src={envelope} alt="envelope" className="gambar"/>
</div>
<div class="container-rekrut">
  <form onSubmit={Submit}>
  <div class="row">
    <div class="col-25">
      <label for="fname">Name</label>
    </div>
    <div class="col-75">
      <input type="text" id="fname" name="Name" placeholder="Masukkan Nama anda"/>
    </div>
  </div>

  <div class="row">
    <div class="col-25">
      <label for="lname">Email</label>
    </div>
    <div class="col-75">
      <input type="text" id="email" name="email" placeholder="Masukkan Email anda disinii" required/>
    </div>
  </div>

  <div class="row">
    <div class="col-25">
      <label for="lname">Kota</label>
    </div>
    <div class="col-75">
      <input type="text" id="lname" name="Kota" placeholder="Masukkan Kota anda disini" required/>
    </div>
  </div>

  <div class="row">
    <div class="col-25">
      <label for="country">Job</label>
    </div>
    <div class="col-75">
      <select id="country" name="Job Hire">
        <option value="Development Team">Development Team</option>
        {/* <option value="Financial officer">Financial Officer</option>
        <option value="Admin Website">Admin Website</option>
        <option value="Admin Media Sosial">Admin Media Sosial</option> */}
      </select>
    </div>
  </div>
  <div class="row">
    <div class="col-25">
      <label for="subject">Subject</label>
    </div>
    <div class="col-75">
      <textarea id="subject" name="docs" placeholder="Input Link Gdrive anda disini.." ></textarea>
    </div>
  </div>
  <br></br>
  <div class="row">
    <input type="submit" value="Submit" id="Submitclick"/>
  </div>

  <span>{result}</span>
  </form>
</div>

       {/* Content end */}
    </div>

    {/* content end */}
    <footer class="bg-white-50">
  <div class="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 lg:px-8">
    <div class="sm:flex sm:items-center sm:justify-between">
      <div class="flex justify-center text-teal-600 sm:justify-start">
      </div>

      <p class="mt-4 text-center text-sm text-gray-500 lg:mt-0 lg:text-right">
        Copyright &copy; 2022. All rights reserved.
      </p>
    </div>
  </div>
</footer>
    </div>
 )
}

export default Rekrut;