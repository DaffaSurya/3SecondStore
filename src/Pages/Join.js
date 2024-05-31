import Dev from "../Assets/DEV.jpg";
import admin from "../Assets/Admin.jpg";
import Financial from "../Assets/Financial.jpg";
import website from "../Assets/website.jpg";
import Aos from "aos";
import { useEffect } from "react";
const Join = () => {
  useEffect(() => {
    Aos.init({duration: 500});
  })
 return (
    <div>
        {/* Announcement */}
        <div class="bg-indigo-600 px-4 py-3 text-white">
        <p class="text-center text-sm font-medium">
        Promo baju diskon 60%?
        <a href="#" class="inline-block underline"> Check out Sekarang..!</a>
        </p>
        </div>
        {/* announcement end */}

        {/* headers */}
           {/* header */}
    <header class="bg-white">
  <div class="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
    <div class="sm:flex sm:items-center sm:justify-between">
      <div class="text-center sm:text-left">
        <h1 class="text-2xl font-bold text-gray-900 sm:text-3xl"> 3 Second Store</h1>

        <p class="mt-1.5 text-sm text-gray-500">Belanja Murah dan Langka</p>
      </div>

      <div class="mt-4 flex flex-col gap-4 sm:mt-0 sm:flex-row sm:items-center">
      <a class="inline-flex items-center justify-center gap-1.5 rounded-lg border border-gray-200 bg-white px-5 py-3 text-gray-500 transition hover:text-gray-700 focus:outline-none focus:ring"
          type="button" href="/">
        
        <span class="text-sm font-medium">Home</span>
        </a>
        <a class="block rounded-lg bg-indigo-600 px-5 py-3 text-sm font-medium text-white transition hover:bg-indigo-700 focus:outline-none focus:ring text-center" type="button"
        href="https://docs.google.com/document/d/11aZBY7x0IJjdLaI3QEstXCjq8nYjQf3H0PDx8XVsQOI/edit?usp=sharing">
        <button>
         Download File Recruitment
        </button>
        </a>
        
      </div>
    </div>
  </div>
    </header>
        {/* header end */}

    {/* card job vacancies */}
<div>
    <div className="container grid sm:grid-cols-2 lg:grid-cols-4 gap-4 max-W-xl mx-auto sm:px-6 sm:py-12 mt-2">
<article class="overflow-hidden rounded-lg border border-gray-100 bg-white shadow-sm" data-aos="fade-up">
  <img
    alt=""
    src={Dev}
    class="h-56 w-full object-cover"
  />

  <div class="p-4 sm:p-6">
    <a href="#">
      <h3 class="text-lg font-medium text-gray-900">
        Development team
      </h3>
    </a>

    <p class="mt-2 line-clamp-3 text-sm/relaxed text-gray-500">
    Bertanggung jawab atas pengembangan situs website serta memastikan performanya stabil dan baik
    </p>

    <a href="/Recruit" class="group mt-4 inline-flex items-center gap-1 text-sm font-medium text-blue-600">
      Apply 

      <span aria-hidden="true" class="block transition-all group-hover:ms-0.5 rtl:rotate-180">
        &rarr;
      </span>
    </a>
  </div>
</article>


<article class="overflow-hidden rounded-lg border border-gray-100 bg-white shadow-sm" data-aos = "fade-up">
  <img
    alt=""
    src={admin}
    class="h-56 w-full object-cover"
  />

  <div class="p-4 sm:p-6">
    <a href="#">
      <h3 class="text-lg font-medium text-gray-900">
       Admin Media Sosial
      </h3>
    </a>

    <p class="mt-2 line-clamp-3 text-sm/relaxed text-gray-500">
    Bertanggung jawab atas pengelolaan media sosial dengan membuat konten kreatif dan inovatif serta menganalisis performa media sosial
    </p>

    <a href="/Adminmedsos" class="group mt-4 inline-flex items-center gap-1 text-sm font-medium text-blue-600">
        Apply

      <span aria-hidden="true" class="block transition-all group-hover:ms-0.5 rtl:rotate-180">
        &rarr;
      </span>
    </a>
  </div>
</article>



<article class="overflow-hidden rounded-lg border border-gray-100 bg-white shadow-sm" data-aos = "fade-up">
  <img
    alt=""
    src= {Financial}
    class="h-56 w-full object-cover"
  />

  <div class="p-4 sm:p-6">
    <a href="#">
      <h3 class="text-lg font-medium text-gray-900">
      Financial Officer
      </h3>
    </a>

    <p class="mt-2 line-clamp-3 text-sm/relaxed text-gray-500">
    menjalankan tugas dari chief atau CEO. selain itu, financial officer bertanggung jawab atas pengelolaan
    keuangan sekaligus mengelola atau mengawasi kinerja para officer.
    </p>

    <a href="/Financial" class="group mt-4 inline-flex items-center gap-1 text-sm font-medium text-blue-600">
    Apply

      <span aria-hidden="true" class="block transition-all group-hover:ms-0.5 rtl:rotate-180">
        &rarr;
      </span>
    </a>
  </div>
</article>

<article class="overflow-hidden rounded-lg border border-gray-100 bg-white shadow-sm" data-aos = "fade-up">
  <img
    alt=""
    src= {website}
    class="h-56 w-full object-cover"
  />

  <div class="p-4 sm:p-6">
    <a href="#">
      <h3 class="text-lg font-medium text-gray-900">
      Admin Website
      </h3>
    </a>

    <p class="mt-2 line-clamp-3 text-sm/relaxed text-gray-500">
    Bertanggung jawab untuk merespon umpan balik, pertanyaan serta menyortir lamaran kerja yang masuk.
    </p>

    <a href="/Adminwebsite" class="group mt-4 inline-flex items-center gap-1 text-sm font-medium text-blue-600">
     Apply

      <span aria-hidden="true" class="block transition-all group-hover:ms-0.5 rtl:rotate-180">
        &rarr;
      </span>
    </a>
  </div>
</article>
    </div>
    {/* card job vacancies end */}
 </div>

 {/* footer  */}
 <footer class="bg-gray-50">
  <div class="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 lg:px-8">
    <div class="sm:flex sm:items-center sm:justify-between">
      <div class="flex justify-center text-teal-600 sm:justify-start">
      </div>

      <p class="mt-4 text-center text-sm text-gray-500 lg:mt-0 lg:text-right">
        Copyright &copy; 2024. All rights reserved.
      </p>
    </div>
  </div>
</footer>
 {/* footer end */}
</div>
 )
}

export default Join;