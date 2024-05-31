import Aos from "aos";
import "aos/dist/aos.css"
import { useEffect } from "react";
import Review from "../component/Review";
const Dashboard = () => {
  
  useEffect(() => {
    Aos.init({duration: 1000});
  })

  const Jacket = () => {
    alert("Coming Soon...")
  }

  return (
    <div>
    {/* announcement */}
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
        href="Owner">
        <button>
          Tentang Owner
        </button>
        </a>
        
      </div>
    </div>
  </div>
</header>
 {/* header end */}

 {/* lANDING PAGE */}

<section class="bg-gray-50">
  <div class="p-8 md:p-12 lg:px-16 lg:py-24">
    <div class="mx-auto max-w-lg text-center">
      <h2 class="text-2xl font-bold text-gray-900 md:text-3xl">
        Koleksi Barang Murah dan Langka
      </h2>

      <p class="hidden text-gray-500 sm:mt-4 sm:block">
      Selamat datang Di 3 Second Store , Tersedia banyak barang pilihan dan langka yang membuat anda
     ketagihan untuk Berbelanja disini.. TUNGGU APALAGI CHECK OUT SEKARANG...
      </p>
    </div>

    <div class="mx-auto mt-8 max-w-xl">
      <form action="#" class="sm:flex sm:gap-4">
        <div class="sm:flex-1">
          <input
            type="text"
            placeholder="Cari barang"
            class="w-full rounded-md border-gray-200 bg-white p-3 text-gray-700 shadow-sm transition focus:border-white focus:outline-none focus:ring focus:ring-indigo-400"
          />
        </div>

        <button
          type="submit"
          class="group mt-4 flex w-full items-center justify-center gap-2 rounded-md bg-indigo-500 px-5 py-3 text-white transition focus:outline-none focus:ring focus:ring-yellow-400 sm:mt-0 sm:w-auto"
        >
          <span class="text-sm font-medium"> Cari barang </span>

          <svg
            class="size-5 rtl:rotate-180"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M17 8l4 4m0 0l-4 4m4-4H3"
            />
          </svg>
        </button>
      </form>
    </div>
  </div>
</section>

{/* LANDING PAGE END */}

{/* Content Card  */}
<div className="container grid sm:grid-cols-2 lg:grid-cols-3 gap-4 max-W-xl mx-auto sm:px-6 sm:py-12 mt-2">

    <a class="group relative block sm:container" data-aos= "fade-up">
  <div class="relative h-[350px] sm:h-[450px]">
    <img
      src="https://images.unsplash.com/photo-1523381210434-271e8be1f52b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
      alt=""
      class="absolute inset-0 h-full w-full object-cover opacity-100 group-hover:opacity-0"
    />

    <img
      src="https://images.unsplash.com/photo-1523381140794-a1eef18a37c7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwcm9maWxlLXBhZ2V8MjQ2fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60"
      alt=""
      class="absolute inset-0 h-full w-full object-cover opacity-0 group-hover:opacity-100"
    />
  </div>

  <div class="absolute inset-0 flex flex-col items-start justify-end p-6">
    <h3 class="text-xl font-medium text-white"> Limited edition Sports trainer </h3>

    <p class="mt-1.5 text-pretty text-xs text-white">
      Harga Mulai dari Rp 350.000
    </p>

    <span
      class="mt-3 inline-block bg-gray-500 px-5 py-3 text-xs font-medium uppercase tracking-wide text-white cursor-pointer"
      onClick={Jacket}
    >
      Shop Now
    </span>
  </div>
    </a>

    <a class="group relative block sm:container" data-aos= "fade-up">
  <div class="relative h-[350px] sm:h-[450px]">
    <img
      src="https://images.unsplash.com/photo-1521223890158-f9f7c3d5d504?q=80&w=1360&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      alt=""
      class="absolute inset-0 h-full w-full object-cover opacity-100 group-hover:opacity-0"
    />

    <img
      src="https://plus.unsplash.com/premium_photo-1673734625279-2738ecf66fa1?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      alt=""
      class="absolute inset-0 h-full w-full object-cover opacity-0 group-hover:opacity-100"
    />
  </div>

  <div class="absolute inset-0 flex flex-col items-start justify-end p-6">
    <h3 class="text-xl font-medium text-white">Black Jacket Limited Edition</h3>

    <p class="mt-1.5 text-pretty text-xs text-white">
      Harga Mulai dari Rp 380.000
    </p>

    <span 
      class="mt-3 inline-block bg-gray-500 px-5 py-3 text-xs font-medium uppercase tracking-wide text-white cursor-pointer"
      onClick={Jacket}
    >
      Shop Now
    </span>
  </div>
    </a>

    <a class="group relative block sm:container" data-aos = "fade-up">
  <div class="relative h-[350px] sm:h-[450px]">
    <img
      src="https://images.unsplash.com/photo-1539533113208-f6df8cc8b543?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      alt=""
      class="absolute inset-0 h-full w-full object-cover opacity-100 group-hover:opacity-0"
    />

    <img
      src="https://images.unsplash.com/photo-1539533018447-63fcce2678e3?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      alt=""
      class="absolute inset-0 h-full w-full object-cover opacity-0 group-hover:opacity-100"
    />
  </div>

  <div class="absolute inset-0 flex flex-col items-start justify-end p-6">
    <h3 class="text-xl font-medium text-white">Brown Coat Women Edition</h3>

    <p class="mt-1.5 text-pretty text-xs text-white">
     Harga mulai dari Rp.400.000
    </p>

    <span
      class="mt-3 inline-block bg-gray-500 px-5 py-3 text-xs font-medium uppercase tracking-wide text-white cursor-pointer"
      onClick={Jacket}
    >
      Shop Now
    </span>
  </div>
    </a>

  <a class="group relative block sm:container" data-aos = "fade-up">
  <div class="relative h-[350px] sm:h-[450px]">
    <img
      src="https://images.unsplash.com/photo-1593795899768-947c4929449d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2672&q=80"
      alt=""
      class="absolute inset-0 h-full w-full object-cover opacity-100 group-hover:opacity-0"
    />

    <img
      src="https://images.unsplash.com/photo-1593795899630-b6033c0fa58d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
      alt=""
      class="absolute inset-0 h-full w-full object-cover opacity-0 group-hover:opacity-100"
    />
  </div>

  <div class="absolute inset-0 flex flex-col items-start justify-end p-6">
    <h3 class="text-xl font-medium text-white">Skinny Jeans Blue</h3>

    <p class="mt-1.5 text-pretty text-xs text-white">
      Harga Mulai dari Rp 400.000
    </p>

    <span
      class="mt-3 inline-block bg-gray-500 px-5 py-3 text-xs font-medium uppercase tracking-wide text-white cursor-pointer"
      onClick={Jacket}
    >
      Shop Now
    </span>
  </div>
    </a>

    <a class="group relative block sm:container" data-aos = "fade-up">
  <div class="relative h-[350px] sm:h-[450px]">
    <img
      src="https://images.unsplash.com/photo-1581655353564-df123a1eb820?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDExfHx8ZW58MHx8fHx8"
      alt=""
      class="absolute inset-0 h-full w-full object-cover opacity-100 group-hover:opacity-0"
    />

    <img
      src="https://images.unsplash.com/photo-1564859228273-274232fdb516?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      alt=""
      class="absolute inset-0 h-full w-full object-cover opacity-0 group-hover:opacity-100"
    />
  </div>

  <div class="absolute inset-0 flex flex-col items-start justify-end p-6">
    <h3 class="text-xl font-medium text-white">White Shirt Beach Edition</h3>

    <p class="mt-1.5 text-pretty text-xs text-white">
      Harga Mulai dari Rp 200.000
    </p>

    <span
      class="mt-3 inline-block bg-gray-500 px-5 py-3 text-xs font-medium uppercase tracking-wide text-white cursor-pointer"
      onClick={Jacket}
    >
      Shop Now
    </span>
  </div>
    </a>

    <a class="group relative block sm:container" data-aos = "fade-up">
  <div class="relative h-[350px] sm:h-[450px]">
    <img
      src="https://images.unsplash.com/photo-1536830220630-ce146cccac84?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      alt=""
      class="absolute inset-0 h-full w-full object-cover opacity-100 group-hover:opacity-0"
    />

    <img
      src="https://images.unsplash.com/photo-1463100099107-aa0980c362e6?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      alt=""
      class="absolute inset-0 h-full w-full object-cover opacity-0 group-hover:opacity-100"
    />
  </div>

  <div class="absolute inset-0 flex flex-col items-start justify-end p-6">
    <h3 class="text-xl font-medium text-white">Converse Black and White Edition</h3>

    <p class="mt-1.5 text-pretty text-xs text-white">
      Harga Mulai dari Rp 700.000
    </p>

    <span
      class="mt-3 inline-block bg-gray-500 px-5 py-3 text-xs font-medium uppercase tracking-wide text-white cursor-pointer"
      onClick={Jacket}
    >
      Shop Now
    </span>
  </div>
    </a>




</div>

{/* Content Card end */}

{/* Card Collection */}
<section>
  <div class="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
    <header>
      <h2 class="text-xl font-bold text-gray-900 sm:text-3xl">Product Collection</h2>
      <p class="mt-4 max-w-md text-gray-500">
        Beberapa Koleksi yang dimiliki oleh 3 Second Store
      </p>
    </header>

    <div class="mt-8">
      <p class="text-sm text-gray-500">Showing <span> 4 </span> of 4</p>
    </div>

    <ul class="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-4 group block overflow-hidden">
      <li data-aos = "fade-right">
        <a href="#" class="group block overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1668603145964-f00e1665a959?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
            class="h-[350px] w-full object-cover transition duration-500 group-hover:scale-105 sm:h-[450px]"
          />
        </a>
      </li>

      <li data-aos = "fade-right">
        <a href="#" class="group block overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1583744946564-b52ac1c389c8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c2hpcnQlMjBnaXJsfGVufDB8fDB8fHww"
            alt=""
            class="h-[350px] w-full object-cover transition duration-500 group-hover:scale-105 sm:h-[450px]"
          />
        </a>
      </li>

      <li data-aos = 'fade-left'>
        <a href="#" class="group block overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1542925554-2ec208930b5b?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
            class="h-[350px] w-full object-cover transition duration-500 group-hover:scale-105 sm:h-[450px]"
          />
        </a>
      </li>

      <li data-aos = 'fade-left'>
        <a href="#" class="group block overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1617667239596-1db3c1600ff3?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
            class="h-[350px] w-full object-cover transition duration-500 group-hover:scale-105 sm:h-[450px]"
          />

        </a>
      </li>
    </ul>

    
  </div>
</section>
{/* Card Collection end */}

{/* Review customer */}
<Review/>
{/* Review */}

{/* footer */}
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

export default Dashboard;