import Kelompok3 from "../Assets/Kelompok3.jpeg"
const Admin = () => {
 return(
    <div>
        {/* Announcemenet */}
        <div class="bg-indigo-600 px-4 py-3 text-white">
     <p class="text-center text-sm font-medium">
       Promo baju diskon 60%?
    <a href="#" class="inline-block underline"> Check out Sekarang..!</a>
  </p>
 </div>
 {/* announcement end */}

 {/* header */}
 <header class="bg-gray-50">
  <div class="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
    <div class="sm:flex sm:items-center sm:justify-between">
      <div class="text-center sm:text-left">
        <h1 class="text-2xl font-bold text-gray-900 sm:text-3xl"> 3 Second Store</h1>

        <p class="mt-1.5 text-sm text-gray-500">Belanja Murah dan Langka</p>
      </div>

      <div class="mt-4 flex flex-col gap-4 sm:mt-0 sm:flex-row sm:items-center">
      <a class="inline-flex items-center justify-center gap-1.5 rounded-lg border border-gray-200 bg-white px-5 py-3 text-gray-500 transition hover:text-gray-700 focus:outline-none focus:ring"
          type="button" href="Carabelanja">
        
        <span class="text-sm font-medium"> Cara belanja</span>
        </a>
        <a class="block rounded-lg bg-indigo-600 px-5 py-3 text-sm font-medium text-white transition hover:bg-indigo-700 focus:outline-none focus:ring text-center" type="button"
        href="/">
        <button>
         Home
        </button>
        </a>
        
      </div>
    </div>
  </div>
</header>
 {/* header end */}

 {/* content */}
<section class="overflow-hidden bg-gray-50 sm:grid sm:grid-cols-2 sm:items-center">
  <div class="p-8 md:p-12 lg:px-16 lg:py-24">
    <div class="mx-auto max-w-xl text-center ltr:sm:text-left rtl:sm:text-right">
      <h2 class="text-2xl font-bold text-gray-900 md:text-3xl">
      JOINN USS!!
      </h2>

      <p class="hidden text-gray-500 md:mt-4 md:block">
        Ingin Menjadi Bagian dari 3 Second Gank, Tunggu apalagi Apply Cv Kalian dan bergabung bersama kami
        dalam Mengembangkan 3 Second Store <br/>
        WE ARE WAITINGG🤩🤩
      </p>

      <div class="mt-4 md:mt-8">
        <a
          href="/Join"
          class="inline-block rounded bg-indigo-500 px-12 py-3 text-sm font-medium text-white transition hover:bg-emerald-700 focus:outline-none focus:ring focus:ring-yellow-400"
        >
           JOIN 
        </a>
      </div>
    </div>
  </div>

  <img
    alt=""
    src={Kelompok3}
    class="h-full w-full object-cover sm:h-[calc(100%_-_2rem)] sm:self-end sm:rounded-ss-[30px] md:h-[calc(100%_-_4rem)] md:rounded-ss-[60px]"
  />
</section>
 {/* content end */}

 {/* footer */}
 <footer class="bg-gray-50">
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
 {/* footer end */}
    </div>
 )
}

export default Admin;