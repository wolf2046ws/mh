
export default function Page() {
  return (
    <div dangerouslySetInnerHTML={{ __html: `<!-- Sidebar Wrapper -->
<aside class="h-screen fixed left-0 top-0 w-64 bg-stone-100 dark:bg-stone-900 flex flex-col py-8 z-50">
<div class="px-8 mb-12">
<h1 class="text-2xl font-black tracking-tighter text-[#74593f] dark:text-[#ffdab9]">Kurator</h1>
<p class="text-[10px] tracking-[0.2em] uppercase font-bold text-stone-400 mt-1">Premium SaaS</p>
</div>
<nav class="flex-1 flex flex-col space-y-1">
<!-- Stammdaten Active -->
<a class="flex items-center gap-4 text-stone-500 dark:text-stone-400 font-medium pl-5 py-3 hover:text-[#74593f] transition-colors hover:bg-orange-50 dark:hover:bg-stone-800/50" href="/">
<span class="material-symbols-outlined">dashboard</span>
<span class="text-sm">Dashboard</span>
</a>
<a class="flex items-center gap-4 text-[#1b1c1a] dark:text-stone-100 font-bold border-l-4 border-[#74593f] pl-4 py-3 transition-all translate-x-1" href="/product">
<span class="material-symbols-outlined">database</span>
<span class="text-sm">Stammdaten</span>
</a>
<a class="flex items-center gap-4 text-stone-500 dark:text-stone-400 font-medium pl-5 py-3 hover:text-[#74593f] transition-colors hover:bg-orange-50 dark:hover:bg-stone-800/50" href="/queue">
<span class="material-symbols-outlined">verified_user</span>
<span class="text-sm">Freigaben</span>
</a>
<a class="flex items-center gap-4 text-stone-500 dark:text-stone-400 font-medium pl-5 py-3 hover:text-[#74593f] transition-colors hover:bg-orange-50 dark:hover:bg-stone-800/50" href="/machine">
<span class="material-symbols-outlined">engineering</span>
<span class="text-sm">MF Maschinenführer</span>
</a>
<a class="flex items-center gap-4 text-stone-500 dark:text-stone-400 font-medium pl-5 py-3 hover:text-[#74593f] transition-colors hover:bg-orange-50 dark:hover:bg-stone-800/50" href="/users">
<span class="material-symbols-outlined">history</span>
<span class="text-sm">Audit-Logs</span>
</a>
<a class="flex items-center gap-4 text-stone-500 dark:text-stone-400 font-medium pl-5 py-3 hover:text-[#74593f] transition-colors hover:bg-orange-50 dark:hover:bg-stone-800/50" href="#">
<span class="material-symbols-outlined">settings</span>
<span class="text-sm">Einstellungen</span>
</a>
</nav>
<div class="px-8 mt-auto pt-8 border-t border-stone-200/50">
<div class="flex items-center gap-3">
<div class="w-10 h-10 rounded-full bg-primary-container flex items-center justify-center text-primary font-bold">JD</div>
<div>
<p class="text-sm font-bold">Admin Profil</p>
<p class="text-xs text-stone-400">Premium Plan</p>
</div>
</div>
</div>
</aside>
<!-- Top Navigation Bar -->
<header class="fixed top-0 right-0 w-[calc(100%-16rem)] z-40 bg-white/80 backdrop-blur-xl flex justify-between items-center h-20 px-12 shadow-[0px_20px_40px_rgba(116,89,63,0.06)]">
<div class="flex items-center bg-surface-container rounded-full px-5 py-2.5 w-96">
<span class="material-symbols-outlined text-stone-400 mr-3">search</span>
<input class="bg-transparent border-none focus:ring-0 text-sm w-full placeholder:text-stone-400" placeholder="Suche in Kurator..." type="text"/>
</div>
<div class="flex items-center gap-6">
<button class="text-stone-500 hover:text-primary transition-colors relative">
<span class="material-symbols-outlined">notifications</span>
<span class="absolute top-0 right-0 w-2 h-2 bg-primary rounded-full border-2 border-white"></span>
</button>
<button class="text-stone-500 hover:text-primary transition-colors">
<span class="material-symbols-outlined">help_outline</span>
</button>
<div class="h-8 w-[1px] bg-stone-200 mx-2"></div>
<img alt="Benutzerprofil" class="w-10 h-10 rounded-full object-cover ring-2 ring-primary-container" data-alt="Close-up portrait of a professional businessman in a studio with neutral soft lighting looking confident and calm" src="https://lh3.googleusercontent.com/aida-public/AB6AXuD4XYGKb9c4YWJj1Fj6tP0OX73xxbn2EC55jCpH5t2DU892ygXj2JBfbW7cmrBNgC7wqazGIkN6DihcGCRRlbCfALQHDXEIPTvWxSMK4WnMT52rjacwCpOn_7z3Ul0pvu77AT6ZRkPtvFuxRm2rqQ2lpXxi1BPgzlwjbMnGN2sQ8J8I5L-ahXu50367LOObw0iswWOV4xgffA7s1mkIZAjGFIo1b8X9e6WvQT-FaYlM39nOM9H4x1Ucf0ocq0SZweGWMW17ohKR2uYU"/>
</div>
</header>
<!-- Main Content Canvas -->
<main class="ml-64 pt-20 h-screen overflow-y-auto bg-background">
<div class="p-12 max-w-[1400px] mx-auto">
<!-- Breadcrumb & Header -->
<div class="mb-12">
<nav class="flex gap-2 text-xs font-bold tracking-widest text-stone-400 uppercase mb-4">
<a class="hover:text-primary" href="#">Stammdaten</a>
<span>/</span>
<a class="hover:text-primary" href="#">Produkte</a>
<span>/</span>
<span class="text-primary">Premium Kaffeeröstung</span>
</nav>
<div class="flex justify-between items-end">
<div>
<h2 class="text-[3.5rem] font-bold tracking-tighter leading-tight text-on-surface">Premium Kaffeeröstung</h2>
<p class="text-lg text-stone-500 mt-2 font-medium">Art-Nr: CUR-882-CPH | Saison 2024</p>
</div>
<div class="flex gap-4 pb-2">
<button class="px-6 py-3 rounded-xl border border-outline-variant text-primary font-bold hover:bg-stone-50 transition-all flex items-center gap-2">
<span class="material-symbols-outlined text-xl">edit</span>
                            Bearbeiten
                        </button>
<button class="px-8 py-3 rounded-xl bg-gradient-to-br from-primary to-[#5a422a] text-white font-bold shadow-lg shadow-primary/20 hover:opacity-90 transition-all flex items-center gap-2">
<span class="material-symbols-outlined text-xl">publish</span>
                            Veröffentlichen
                        </button>
</div>
</div>
</div>
<!-- Bento Grid Details -->
<div class="grid grid-cols-12 gap-8">
<!-- Main Product Identity Card -->
<div class="col-span-8 bg-surface-container-lowest rounded-xl p-10 shadow-[0px_20px_40px_rgba(116,89,63,0.04)]">
<div class="flex justify-between mb-10">
<h3 class="text-xs font-black tracking-[0.2em] uppercase text-stone-400">Produktbeschreibung</h3>
<span class="px-3 py-1 bg-primary-container text-on-primary-container text-[10px] font-black uppercase rounded-full">Aktiv</span>
</div>
<p class="text-xl leading-relaxed text-on-surface-variant mb-12">
                        Eine exquisite Komposition aus handverlesenen Arabica-Bohnen aus den Hochlagen Äthiopiens. 
                        Sanft trommelgeröstet für ein vollmundiges Aroma mit Noten von dunkler Schokolade und einem 
                        Hauch von Zitrusfrüchten. Perfektioniert für die anspruchsvolle Gastronomie.
                    </p>
<div class="grid grid-cols-3 gap-12 pt-10 border-t border-stone-50">
<div>
<p class="text-[10px] font-black tracking-widest uppercase text-stone-400 mb-2">Herkunft</p>
<p class="text-lg font-bold">Sidamo, Äthiopien</p>
</div>
<div>
<p class="text-[10px] font-black tracking-widest uppercase text-stone-400 mb-2">Röstgrad</p>
<div class="flex items-center gap-1">
<div class="w-4 h-4 rounded-full bg-[#3d2b1f]"></div>
<div class="w-4 h-4 rounded-full bg-[#3d2b1f]"></div>
<div class="w-4 h-4 rounded-full bg-[#3d2b1f]"></div>
<div class="w-4 h-4 rounded-full bg-stone-200"></div>
<div class="w-4 h-4 rounded-full bg-stone-200"></div>
<span class="ml-2 text-sm font-bold">Medium-Dark</span>
</div>
</div>
<div>
<p class="text-[10px] font-black tracking-widest uppercase text-stone-400 mb-2">Zertifikate</p>
<div class="flex gap-2">
<span class="material-symbols-outlined text-green-600" title="Bio">eco</span>
<span class="material-symbols-outlined text-primary" title="Fairtrade">handshake</span>
</div>
</div>
</div>
</div>
<!-- Secondary Stats Card -->
<div class="col-span-4 flex flex-col gap-8">
<div class="bg-primary-container rounded-xl p-8 flex-1">
<h3 class="text-xs font-black tracking-[0.2em] uppercase text-on-primary-container/60 mb-6">Lagerbestand</h3>
<div class="flex items-baseline gap-2">
<span class="text-5xl font-black text-on-primary-container tracking-tighter">1.240</span>
<span class="text-xl font-bold text-on-primary-container/80">Einheiten</span>
</div>
<div class="mt-8 bg-white/30 h-2 rounded-full overflow-hidden">
<div class="bg-primary h-full w-3/4 rounded-full"></div>
</div>
<p class="mt-4 text-xs font-bold text-on-primary-container/70 flex items-center gap-2">
<span class="material-symbols-outlined text-sm">trending_up</span>
                            +12% gegenüber Vormonat
                        </p>
</div>
<div class="bg-surface-container-low rounded-xl p-8 border border-white/50">
<h3 class="text-xs font-black tracking-[0.2em] uppercase text-stone-400 mb-6">Logistik Info</h3>
<div class="space-y-4">
<div class="flex justify-between items-center">
<span class="text-sm font-medium text-stone-500">Gewicht Brutto</span>
<span class="text-sm font-bold">520g</span>
</div>
<div class="flex justify-between items-center">
<span class="text-sm font-medium text-stone-500">Palettenplatz</span>
<span class="text-sm font-bold">Regal B-12</span>
</div>
<div class="flex justify-between items-center text-primary">
<span class="text-sm font-bold">Nächste Lieferung</span>
<span class="text-sm font-black">12. Okt</span>
</div>
</div>
</div>
</div>
<!-- Product Gallery Section - NO PEOPLE -->
<div class="col-span-12 mt-4">
<div class="flex justify-between items-center mb-8">
<h3 class="text-[1.75rem] font-bold tracking-tight">Muster Fotos &amp; Verpackung</h3>
<button class="text-primary font-bold text-sm flex items-center gap-1 hover:underline">
                            Alle 24 Fotos ansehen
                            <span class="material-symbols-outlined text-sm">arrow_forward</span>
</button>
</div>
<div class="grid grid-cols-4 gap-6">
<!-- Image 15: Coffee Bag -->
<div class="group relative aspect-square overflow-hidden rounded-xl bg-stone-200">
<img alt="Kaffeebeutel Design" class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" data-alt="Minimalist matte black coffee pouch standing on a wooden table with soft morning sunlight casting long shadows" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCvf7SnXJfnn90dSXcA1q-WusNZnbTsO8fTQoKuk3P-j1STf6T3PJDtsxQnEKd4ICUni-PdsEF5DotwrxHfWZtQD0wKzLsMdTjn1viirU2KzkUW_IjvU-btPFGmoqw8KLf_2eRmfGDuqnh1rQLhx1abqOec_O_37PqNgKHhebiuJK_SNyvpniyfZIwsRztRJ-bXTSxjnpDdjXjkysuUA9Ud7osbw6VCF2hpv5-sDud_erpvZw8LREJUwb3_U08XkuJDHa0bmYXCd164"/>
<div class="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all flex items-center justify-center">
<span class="material-symbols-outlined text-white opacity-0 group-hover:opacity-100 scale-50 group-hover:scale-100 transition-all">visibility</span>
</div>
</div>
<!-- Image 22: Pouch Detail -->
<div class="group relative aspect-square overflow-hidden rounded-xl bg-stone-200">
<img alt="Nahaufnahme Verpackung" class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" data-alt="Macro shot of a high-quality Kraft paper stand-up pouch with eco-friendly texture and premium minimalist typography" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDy_xloYwvGg5HzMdpQcYtIqlbpI8y-7AmVlltbfVMVh1PYtZUyyKFZCBHOcQ7eKICRd6YvCojq9LK6ikKshSciSz-5Gip1zHuMDIarZ4IACABB1UBmH7aOpGhe7RkOxSA4sdg5s5lHgxgnrKuWnzIa8YKMgGY400ZRdsVMmowfyZO8vNRlF46t4RPFLWAoOiwNH3nYEZtntzk1raFsygUgfVNP-sOQJF85DOB4Dc8esSYjZnLcLLgrJ5kd_rLBJcjeg50UqDF2NONZ"/>
<div class="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all flex items-center justify-center">
<span class="material-symbols-outlined text-white opacity-0 group-hover:opacity-100 scale-50 group-hover:scale-100 transition-all">visibility</span>
</div>
</div>
<!-- Image 9: Carton Box -->
<div class="group relative aspect-square overflow-hidden rounded-xl bg-stone-200">
<img alt="Versandkarton Premium" class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" data-alt="Stack of clean premium brown cardboard shipping boxes with custom brand tape in a bright airy studio environment" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDH9tnckpg4_66XGloHPuoJ8AI-uGHCf0xi2-PF7BaZb9s9dk6Hnuefh9FjubNce-8Kxfy1vRa1jSOc5GtKY0FDA6yvhAif9DBNT-UoQeVay9P9FOWQj8EzJ5x_6zz_4zji7fHLxnXDCZ0kvTKbsMuycwk4KBdZwm4Wslc_oQ_OlzWR0SLqX6qXa0wKObe5iqY4A_8J-4Z1xxvmFxP3j6huQghego4RAUveXyu0aKfdUTHxq-ZhsB-4qt44EejHGw9E4PkqMSyc_OCT"/>
<div class="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all flex items-center justify-center">
<span class="material-symbols-outlined text-white opacity-0 group-hover:opacity-100 scale-50 group-hover:scale-100 transition-all">visibility</span>
</div>
</div>
<!-- Image 18: Bulk Packaging -->
<div class="group relative aspect-square overflow-hidden rounded-xl bg-stone-200">
<img alt="Großgebinde Verpackung" class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" data-alt="Professional flat lay of various sizes of premium coffee pouches and retail boxes in a curated aesthetic arrangement" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDBCzCT8Y2cNTvA7zrIgm6C1gb1wP6uyIz_NcCDCaQm0sfyjnQUgNo17inpC2EAcggopza-vjndhoCF3L48iO6VDtVof2hOPhbvQZvL6JCbveS-Bi0z1idf0VWQl5-7r0KGBfhx2MXsVHU_0SoXW28elSXmtyKAA4-X9yLkHnFnMQKBsebWGZEbuD-7U9DPZg3CiaT1Zpg_ZuYlMx8wIrGsedq2CsdPf04jH1EGVEYE0BQWwKJbr-0WHnyOlVpFS0EvbHP2U3ytz2H2"/>
<div class="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all flex items-center justify-center">
<span class="material-symbols-outlined text-white opacity-0 group-hover:opacity-100 scale-50 group-hover:scale-100 transition-all">visibility</span>
</div>
</div>
</div>
</div>
<!-- Specification Section -->
<div class="col-span-12 grid grid-cols-2 gap-8 mt-4">
<div class="bg-surface-container-lowest rounded-xl p-10 border border-stone-100">
<h4 class="text-xs font-black tracking-[0.2em] uppercase text-stone-400 mb-8">Nährwertangaben &amp; Inhaltsstoffe</h4>
<div class="space-y-6">
<div class="flex justify-between border-b border-stone-50 pb-4">
<span class="text-on-surface-variant font-medium">Bohnenart</span>
<span class="font-bold">100% Arabica</span>
</div>
<div class="flex justify-between border-b border-stone-50 pb-4">
<span class="text-on-surface-variant font-medium">Aufbereitung</span>
<span class="font-bold">Gewaschen</span>
</div>
<div class="flex justify-between border-b border-stone-50 pb-4">
<span class="text-on-surface-variant font-medium">Aromaprofil</span>
<span class="font-bold">Schokolade, Beeren, Karamell</span>
</div>
<div class="flex justify-between">
<span class="text-on-surface-variant font-medium">Koffeingehalt</span>
<span class="font-bold">Normal (ca. 1.2%)</span>
</div>
</div>
</div>
<div class="bg-surface-container-lowest rounded-xl p-10 border border-stone-100">
<h4 class="text-xs font-black tracking-[0.2em] uppercase text-stone-400 mb-8">Dokumente &amp; Zertifikate</h4>
<div class="flex flex-col gap-4">
<div class="flex items-center gap-4 p-4 rounded-lg bg-surface-container-low border border-stone-50 hover:border-primary/30 transition-all cursor-pointer">
<div class="w-10 h-10 rounded bg-red-100 flex items-center justify-center text-red-600">
<span class="material-symbols-outlined">description</span>
</div>
<div class="flex-1">
<p class="text-sm font-bold">Produktdatenblatt.pdf</p>
<p class="text-[10px] text-stone-400 uppercase font-black">2.4 MB • Aktualisiert vor 2 Tagen</p>
</div>
<span class="material-symbols-outlined text-stone-300">download</span>
</div>
<div class="flex items-center gap-4 p-4 rounded-lg bg-surface-container-low border border-stone-50 hover:border-primary/30 transition-all cursor-pointer">
<div class="w-10 h-10 rounded bg-green-100 flex items-center justify-center text-green-600">
<span class="material-symbols-outlined">verified</span>
</div>
<div class="flex-1">
<p class="text-sm font-bold">Bio-Zertifikat_2024.pdf</p>
<p class="text-[10px] text-stone-400 uppercase font-black">1.1 MB • Gültig bis 12/2024</p>
</div>
<span class="material-symbols-outlined text-stone-300">download</span>
</div>
</div>
</div>
</div>
</div>
</div>
<!-- Footer Spacer -->
<div class="h-24"></div>
</main>` }} />
  );
}
