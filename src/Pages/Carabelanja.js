import React, { useState } from "react"
import Swal from "sweetalert2";


export default function Carabelanja() {
  const [result , setresult] = React.useState("");

  const onsubmit = async(event) => {
    event.preventDefault();
    setresult('Sending...');

    const Formdata = new FormData(event.target);

    Formdata.append('access_key', 'dffccda4-1ad3-4be6-93b8-f4ad84675aab');

    const response = await fetch('https://api.web3forms.com/submit', {
      method: "POST",
      body: Formdata
  })
    const data = await response.json();
    
    if(data.success) {
      setresult(() => {
        Swal.fire({
          title: "Good job!",
          text: "Terima kasih atas Sarannya untuk 3 Second Store",
          icon: "success"
        });
      }
      );
      event.target.reset();
    } else {
      console.log("error" , data)
      setresult(data.message)
    }

  }

  
 return(
    <div>
        {/* announcement */}
      <div class="bg-indigo-600 px-4 py-3 text-white">
     <p class="text-center text-sm font-medium">
       Promo baju diskon 60%?
     <a href="#" class="inline-block underline"> Check out Sekarang..!</a>
     </p>
   </div>
   {/* announcement */}

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
          type="button" href="/">
        
        <span class="text-sm font-medium"> Home</span>
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

   {/* headers */}
   <div class="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
  <header class="text-center">
    <h2 class="text-xl font-bold text-gray-900 sm:text-3xl"> Q & A To Customer</h2>

    <p class="mx-auto mt-4 max-w-md text-gray-500">
     Beberapa pertanyaan dan jawaban yang disediakan untuk customer
    </p>
  </header>
  </div>
   {/* headers Q N A */}

   {/* Headers Q N A END */}
   
   {/* Q N A */}
   <div className="container grid mt-6 mx-auto ">
   <div class="divide-y divide-gray-100 rounded-xl border border-gray-100 bg-gray-100 ">
    <details class="group p-6 [&_summary::-webkit-details-marker]:hidden" open>
    <summary class="flex cursor-pointer items-center justify-between gap-1.5 text-gray-900">
      <h2 class="text-lg font-medium">Bagaimana Cara Belanja di 3 Second Store??</h2>

      <span class="relative size-5 shrink-0">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="absolute inset-0 size-5 opacity-100 group-open:opacity-0"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          stroke-width="2"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>

        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="absolute inset-0 size-5 opacity-0 group-open:opacity-100"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          stroke-width="2"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      </span>
    </summary>

    <p class="mt-4 leading-relaxed text-gray-700">
    Untuk Cara belanja Sendiri Customer bisa Mencari barang yang diinginkan , lalu tekan barang yang ingin dibeli lalu nanti arahkan ke arah 
    Whatsapp admin untuk membeli barang
    </p>
    </details>

    <details class="group p-6 [&_summary::-webkit-details-marker]:hidden">
    <summary class="flex cursor-pointer items-center justify-between gap-1.5 text-gray-900">
      <h2 class="text-lg font-medium">Apakah Pembayaran di 3 Second Store bisa Menggunakan Kartu kredit dan QRIS??</h2>

      <span class="relative size-5 shrink-0">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="absolute inset-0 size-5 opacity-100 group-open:opacity-0"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          stroke-width="2"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>

        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="absolute inset-0 size-5 opacity-0 group-open:opacity-100"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          stroke-width="2"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      </span>
    </summary>

    <p class="mt-4 leading-relaxed text-gray-700">
    Tentu saja bisa Kita di 3 Second store bisa melayani semua jenis pembayaran..
    </p>
    </details>

    <details class="group p-6 [&_summary::-webkit-details-marker]:hidden">
    <summary class="flex cursor-pointer items-center justify-between gap-1.5 text-gray-900">
      <h2 class="text-lg font-medium">Bagaimana cara memulai membuka bisnis online shop?</h2>

      <span class="relative size-5 shrink-0">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="absolute inset-0 size-5 opacity-100 group-open:opacity-0"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          stroke-width="2"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>

        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="absolute inset-0 size-5 opacity-0 group-open:opacity-100"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          stroke-width="2"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      </span>
    </summary>

    <p class="mt-4 leading-relaxed text-gray-700">
    
    </p>
    </details>

    <details class="group p-6 [&_summary::-webkit-details-marker]:hidden">
    <summary class="flex cursor-pointer items-center justify-between gap-1.5 text-gray-900">
      <h2 class="text-lg font-medium">Reseller dan dropshipper sama atau beda?</h2>

      <span class="relative size-5 shrink-0">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="absolute inset-0 size-5 opacity-100 group-open:opacity-0"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          stroke-width="2"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>

        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="absolute inset-0 size-5 opacity-0 group-open:opacity-100"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          stroke-width="2"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      </span>
    </summary>

    <p class="mt-4 leading-relaxed text-gray-700">
    Dropshipper akan menginfokan kepada supplier saat ada pembeli yang memesan produk. Kemudian supplier akan mengirimkan barang tersebut kepada pembeli. Reseller saat menerima pesanan dari pembeli, ia akan membeli barang dari produsen atau supplier sesuai dengan pemesanan yang telah disepakati dengan pembeli.
    </p>
    </details>

    <details class="group p-6 [&_summary::-webkit-details-marker]:hidden">
    <summary class="flex cursor-pointer items-center justify-between gap-1.5 text-gray-900">
      <h2 class="text-lg font-medium">Apakah bisa jualan jasa di marketplace?</h2>

      <span class="relative size-5 shrink-0">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="absolute inset-0 size-5 opacity-100 group-open:opacity-0"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          stroke-width="2"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>

        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="absolute inset-0 size-5 opacity-0 group-open:opacity-100"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          stroke-width="2"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      </span>
    </summary>

    <p class="mt-4 leading-relaxed text-gray-700">
    Bisa. Namun kamu perlu memastikan kategori yang dipilih sudah sesuai.
    </p>
    </details>

    <details class="group p-6 [&_summary::-webkit-details-marker]:hidden">
    <summary class="flex cursor-pointer items-center justify-between gap-1.5 text-gray-900">
      <h2 class="text-lg font-medium">Apakah bisa jualan jasa di marketplace?</h2>

      <span class="relative size-5 shrink-0">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="absolute inset-0 size-5 opacity-100 group-open:opacity-0"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          stroke-width="2"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>

        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="absolute inset-0 size-5 opacity-0 group-open:opacity-100"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          stroke-width="2"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      </span>
    </summary>

    <p class="mt-4 leading-relaxed text-gray-700">
    Bisa. Namun kamu perlu memastikan kategori yang dipilih sudah sesuai.
    </p>
    </details>

    <details class="group p-6 [&_summary::-webkit-details-marker]:hidden">
    <summary class="flex cursor-pointer items-center justify-between gap-1.5 text-gray-900">
      <h2 class="text-lg font-medium">Bagaimana cara membangun kepercayaan pelanggan? </h2>

      <span class="relative size-5 shrink-0">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="absolute inset-0 size-5 opacity-100 group-open:opacity-0"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          stroke-width="2"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>

        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="absolute inset-0 size-5 opacity-0 group-open:opacity-100"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          stroke-width="2"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      </span>
    </summary>

    <p class="mt-4 leading-relaxed text-gray-700">
    Meningkatkan kepercayaan pembeli gambar yang ditampilkan di toko online harus sama dengan kondisi yang sebenarnya.
    </p>
    </details>

    <details class="group p-6 [&_summary::-webkit-details-marker]:hidden">
    <summary class="flex cursor-pointer items-center justify-between gap-1.5 text-gray-900">
      <h2 class="text-lg font-medium">Apakah barang yang telah dibeli dapat dikembalikan bila cacat/rusak? </h2>

      <span class="relative size-5 shrink-0">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="absolute inset-0 size-5 opacity-100 group-open:opacity-0"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          stroke-width="2"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>

        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="absolute inset-0 size-5 opacity-0 group-open:opacity-100"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          stroke-width="2"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      </span>
    </summary>

    <p class="mt-4 leading-relaxed text-gray-700">
    Barang dapat dikembalikan ketika dalam kondisi rusak. Dengan syarat memberikan bukti video unboxing.
    </p>
    </details>


    <details class="group p-6 [&_summary::-webkit-details-marker]:hidden">
    <summary class="flex cursor-pointer items-center justify-between gap-1.5 text-gray-900">
      <h2 class="text-lg font-medium">Apakah barang yang telah dibeli dapat dikembalikan bila cacat/rusak? </h2>

      <span class="relative size-5 shrink-0">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="absolute inset-0 size-5 opacity-100 group-open:opacity-0"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          stroke-width="2"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>

        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="absolute inset-0 size-5 opacity-0 group-open:opacity-100"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          stroke-width="2"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      </span>
    </summary>

    <p class="mt-4 leading-relaxed text-gray-700">
    Barang dapat dikembalikan ketika dalam kondisi rusak. Dengan syarat memberikan bukti video unboxing.
    </p>
    </details>

    <details class="group p-6 [&_summary::-webkit-details-marker]:hidden">
    <summary class="flex cursor-pointer items-center justify-between gap-1.5 text-gray-900">
      <h2 class="text-lg font-medium">Apakah barang yang telah dibeli dapat dikembalikan bila cacat/rusak? </h2>

      <span class="relative size-5 shrink-0">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="absolute inset-0 size-5 opacity-100 group-open:opacity-0"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          stroke-width="2"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>

        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="absolute inset-0 size-5 opacity-0 group-open:opacity-100"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          stroke-width="2"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      </span>
    </summary>

    <p class="mt-4 leading-relaxed text-gray-700">
    Bisa. Karena supplier akan mempacking dan mengirimkan barang sesuai data pembeli. Dengan kata lain dropshipper hanyalah seorang perantara.
    </p>
    </details>

    <details class="group p-6 [&_summary::-webkit-details-marker]:hidden">
    <summary class="flex cursor-pointer items-center justify-between gap-1.5 text-gray-900">
      <h2 class="text-lg font-medium">Berapa modal yang dibutuhkan untuk memulai bisnis online?</h2>

      <span class="relative size-5 shrink-0">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="absolute inset-0 size-5 opacity-100 group-open:opacity-0"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          stroke-width="2"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>

        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="absolute inset-0 size-5 opacity-0 group-open:opacity-100"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          stroke-width="2"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      </span>
    </summary>

    <p class="mt-4 leading-relaxed text-gray-700">
    Tidak membutuhkan modal. Karena, hanya perlu konsisten promosi untuk menarik perhatian pembeli. Pembeli menggunakan uang yang telah dibayarkan pembeli untuk mengambil barang dari supplier dan kirimkan barang tersebut ke pembeli.
    </p>
    </details>


    </div>
    </div>
    {/* Q N A end */}

    {/* Kotak Saran */}

<div class="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
  <div class="mx-auto max-w-lg">
    <h1 class="text-center text-2xl font-bold text-indigo-600 sm:text-3xl">Rating dan Saran</h1>

    <p class="mx-auto mt-4 max-w-md text-center text-gray-500">
    Pengunjung bisa memberikan Penilaian dan Ulasannya untuk 3 second Store
    </p>

    <form class="mb-0 mt-6 space-y-4 rounded-lg p-4 shadow-lg sm:p-6 lg:p-8" onSubmit={onsubmit}>
      <div>
        <label for="Nama" class="sr-only">Nama</label>

        <div class="relative">
          <input
            type="text"
            class="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
            placeholder="Masukkan Nama Lengkap anda"
            name="nama"
          />

        </div>
      </div>

      <div>
        <label for="email" class="sr-only">email</label>

        <div class="relative">
          <input
            type="email"
            class="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
            placeholder="Masukkan Email anda"
            name="email"
            required
          />

        </div>
      </div>

      <div>
        <label for="kota" class="sr-only">kota</label>

        <div class="relative">
          <input
            type="text"
            class="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
            placeholder="Masukkan kota anda tinggal"
            name="kota"
            required
          />

        </div>
      </div>
      
      {/* text message */}
      <div>
        <label class="sr-only" for="message">Message</label>

        <textarea
          class="w-full rounded-lg border-gray-200 p-3 text-sm"
          placeholder="Message"
          rows="8"
          name="message"
          required
        ></textarea>
      </div>
   {/* text messages */}
      <button
        type="submit"
        class="block w-full rounded-lg bg-indigo-600 px-5 py-3 text-sm font-medium text-white"
      >
        Kirim
      </button>
    </form>
    <span>{result}</span>
  </div>
</div>

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