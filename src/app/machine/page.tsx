
export default function Page() {
  return (
    <div dangerouslySetInnerHTML={{ __html: `<!-- SideNavBar Shell -->
<aside class="bg-stone-100 dark:bg-stone-900 h-screen fixed left-0 top-0 w-64 flex flex-col py-8 z-50">
<div class="px-8 mb-12">
<h1 class="text-2xl font-black tracking-tighter text-[#74593f] dark:text-[#ffdab9]">Kurator</h1>
<p class="text-[10px] uppercase tracking-[0.2em] font-bold text-stone-400 mt-1">Premium SaaS</p>
</div>
<nav class="flex-1 space-y-2">
<!-- Dashboard -->
<a class="flex items-center gap-4 text-stone-500 dark:text-stone-400 font-medium pl-5 py-3 hover:text-[#74593f] transition-colors hover:bg-orange-50" href="/">
<span class="material-symbols-outlined" data-icon="dashboard">dashboard</span>
<span class="text-sm">Dashboard</span>
</a>
<!-- Stammdaten -->
<a class="flex items-center gap-4 text-stone-500 dark:text-stone-400 font-medium pl-5 py-3 hover:text-[#74593f] transition-colors hover:bg-orange-50" href="/product">
<span class="material-symbols-outlined" data-icon="database">database</span>
<span class="text-sm">Stammdaten</span>
</a>
<!-- Freigaben -->
<a class="flex items-center gap-4 text-stone-500 dark:text-stone-400 font-medium pl-5 py-3 hover:text-[#74593f] transition-colors hover:bg-orange-50" href="/queue">
<span class="material-symbols-outlined" data-icon="verified_user">verified_user</span>
<span class="text-sm">Freigaben</span>
</a>
<!-- MF Maschinenführer (ACTIVE) -->
<a class="flex items-center gap-4 text-[#1b1c1a] dark:text-stone-100 font-bold border-l-4 border-[#74593f] pl-4 py-3 transition-all translate-x-1" href="/machine">
<span class="material-symbols-outlined text-[#74593f]" data-icon="engineering" style="font-variation-settings: 'FILL' 1;">engineering</span>
<span class="text-sm">MF Maschinenführer</span>
</a>
<!-- Audit-Logs -->
<a class="flex items-center gap-4 text-stone-500 dark:text-stone-400 font-medium pl-5 py-3 hover:text-[#74593f] transition-colors hover:bg-orange-50" href="/users">
<span class="material-symbols-outlined" data-icon="history">history</span>
<span class="text-sm">Audit-Logs</span>
</a>
<!-- Einstellungen -->
<a class="flex items-center gap-4 text-stone-500 dark:text-stone-400 font-medium pl-5 py-3 hover:text-[#74593f] transition-colors hover:bg-orange-50" href="#">
<span class="material-symbols-outlined" data-icon="settings">settings</span>
<span class="text-sm">Einstellungen</span>
</a>
</nav>
<div class="px-8 pt-8 border-t border-stone-200/50">
<div class="flex items-center gap-3">
<img alt="Benutzerprofil" class="w-10 h-10 rounded-full object-cover" data-alt="professional headshot of a mature businessman in a neutral studio setting with soft lighting and professional attire" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBtqIXq2p-0OHT2zGB14bxiclPw--kCHElJ9n7jodCpYQ04wFpgEgvZvx7RRSwLSqozBZrVaAqCOzPHVBVeYL-_ChxxHGfV4S9nYEZdYRfMQ4bx-gw0cxbGRCVk6mQsQWARpNRh-2ryn4oMBlXZXbvnEDTFwAQOSmVuIz0CFZ5bRAiyMY_w7FAGSvoaBIn76uJ0GeBSTs6o8Oi_ihzAvKe5s60mxaI2SEtMtbFfQUpyMma12WLAsvCcCtGCZGfF6cb1MqMTO2gKetGV"/>
<div class="overflow-hidden">
<p class="text-sm font-bold truncate">Markus Weber</p>
<p class="text-[10px] text-stone-400">Obermeister</p>
</div>
</div>
</div>
</aside>
<!-- TopNavBar Shell -->
<header class="fixed top-0 right-0 w-[calc(100%-16rem)] z-40 bg-white/80 dark:bg-stone-950/80 backdrop-blur-xl flex justify-between items-center h-20 px-12">
<div class="flex items-center gap-6">
<div class="relative">
<span class="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-stone-400" data-icon="search">search</span>
<input class="bg-surface-container-low border-none rounded-xl pl-10 pr-6 py-2.5 text-sm w-80 focus:ring-2 focus:ring-primary/20 transition-all" placeholder="Suche nach Maschinen oder Personal..." type="text"/>
</div>
</div>
<div class="flex items-center gap-8">
<button class="relative hover:opacity-80 transition-opacity">
<span class="material-symbols-outlined text-stone-600" data-icon="notifications">notifications</span>
<span class="absolute -top-1 -right-1 w-2 h-2 bg-primary rounded-full"></span>
</button>
<button class="hover:opacity-80 transition-opacity">
<span class="material-symbols-outlined text-stone-600" data-icon="help_outline">help_outline</span>
</button>
<div class="h-8 w-[1px] bg-stone-200"></div>
<div class="flex items-center gap-3">
<span class="text-xs font-bold uppercase tracking-widest text-stone-400">Werk 04</span>
<div class="w-2 h-2 rounded-full bg-emerald-500"></div>
</div>
</div>
</header>
<!-- Main Content Canvas -->
<main class="ml-64 pt-28 pb-12 px-12 min-h-screen">
<!-- Editorial Header Section -->
<section class="mb-12">
<div class="flex items-end justify-between">
<div>
<span class="text-primary font-bold text-sm tracking-[0.2em] uppercase mb-4 block">Produktionsübersicht</span>
<h2 class="text-[3.5rem] font-extrabold tracking-tighter leading-none mb-4">Maschinenführer.</h2>
<p class="text-stone-500 max-w-lg body-lg">Verwalten Sie Ihre qualifizierten Fachkräfte und weisen Sie diese den aktiven Produktionslinien für die Röstung und Verpackung zu.</p>
</div>
<div class="flex gap-4">
<button class="bg-primary-container text-on-primary-container px-6 py-4 rounded-xl font-bold flex items-center gap-2 hover:opacity-90 transition-all">
<span class="material-symbols-outlined" data-icon="person_add">person_add</span>
                        Neuer Eintrag
                    </button>
</div>
</div>
</section>
<!-- Bento Grid Layout -->
<div class="grid grid-cols-12 gap-8">
<!-- Left Column: Featured Operator -->
<div class="col-span-8 space-y-8">
<!-- Main Status Card -->
<div class="bg-surface-container-lowest rounded-full p-8 shadow-[0px_20px_40px_rgba(116,89,63,0.06)] overflow-hidden relative group">
<div class="absolute top-0 right-0 p-8">
<span class="bg-emerald-100 text-emerald-800 px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest">Aktiv am Werk</span>
</div>
<div class="flex gap-10 items-center">
<div class="relative">
<img class="w-48 h-48 rounded-xl object-cover shadow-xl" data-alt="close-up of a skilled coffee roaster in a leather apron looking thoughtfully at green coffee beans in a sunlit industrial warehouse" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDdSKOK6Sa1Fj2MJhi0bbgcfSOcfZgT-LITz7lJnizexR3ep0p4je_0wPJocAOwCJbPaitXW1kPeBBPecZ4KWyiyyNubke8lTgDdHP5biTUZ8wb60VgEZSFzVkPLv7ZDVdJosxerDR8zb1MRSTQJyqihz5onI32V30Kyhkkwq0-_CWIDnIv8ciIKjYGIUS_qBpJ_glgIUV_4l-hW8kjJZPFTsWFF6GUX0fyCGAcAx-xKJ-cOwEQw0bZPiL68qQkbnZPCtY4EryAwjrj"/>
<div class="absolute -bottom-4 -right-4 w-16 h-16 bg-primary rounded-xl flex items-center justify-center text-white shadow-lg">
<span class="material-symbols-outlined text-3xl" data-icon="coffee_maker">coffee_maker</span>
</div>
</div>
<div class="flex-1">
<h3 class="text-3xl font-black mb-2">Johannes Müller</h3>
<p class="text-stone-400 font-medium mb-6">Senior Röstmeister • Zertifiziert Stufe 4</p>
<div class="grid grid-cols-3 gap-6">
<div class="bg-surface-container-low p-4 rounded-xl">
<p class="text-[10px] uppercase font-bold text-stone-400 mb-1">Maschine</p>
<p class="text-sm font-bold">Probat G120</p>
</div>
<div class="bg-surface-container-low p-4 rounded-xl">
<p class="text-[10px] uppercase font-bold text-stone-400 mb-1">Charge</p>
<p class="text-sm font-bold">Äthiopien Sidamo</p>
</div>
<div class="bg-surface-container-low p-4 rounded-xl">
<p class="text-[10px] uppercase font-bold text-stone-400 mb-1">Temperatur</p>
<p class="text-sm font-bold text-primary">204.5 °C</p>
</div>
</div>
</div>
</div>
</div>
<!-- List of Operators - Editorial Style -->
<div class="bg-white rounded-full p-10">
<div class="flex justify-between items-center mb-10">
<h4 class="text-xl font-bold">Personalübersicht</h4>
<div class="flex gap-2">
<button class="w-10 h-10 rounded-full border border-stone-200 flex items-center justify-center text-stone-400 hover:border-primary hover:text-primary transition-all">
<span class="material-symbols-outlined" data-icon="filter_list">filter_list</span>
</button>
</div>
</div>
<div class="space-y-6">
<!-- Table-like row 1 -->
<div class="group flex items-center justify-between p-4 rounded-xl hover:bg-surface-container-low transition-all cursor-pointer">
<div class="flex items-center gap-6">
<img class="w-14 h-14 rounded-full object-cover" data-alt="portrait of a focused worker in a clean modern production facility wearing a white lab coat and hairnet" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBfHxUxXqQ-HmhCIw8jkOhgx79TJvKrUtVjFyr2Ja6Zmh6pbASBGeNk35zi4gfh8I-aOj0IOXGE9u7yl8NF5f4AlTD9Leh4ugfdO0FTL7-jqBAKQ_4FZmXIDidSiszUdQIXaJIKMYINELPUn2D2PDWkqDJT29IwiRh-pAM3hy5me2n4BFNuN5P8Q-cF_frT4rSDvffhNKf7sZJki-8QzrIsnajIJFL2AJd_5GqBptAQxCoil3GUwaNGgx0Nmo1fFAedjBjTaD0q0QHY"/>
<div>
<p class="font-bold text-lg">Stefan Krämer</p>
<p class="text-xs text-stone-400 uppercase tracking-widest font-bold">Verpackungstechniker</p>
</div>
</div>
<div class="flex items-center gap-12">
<div>
<p class="text-[10px] uppercase font-bold text-stone-400 mb-1">Zuweisung</p>
<p class="text-sm font-medium">Linie 04 (Doypack)</p>
</div>
<div>
<p class="text-[10px] uppercase font-bold text-stone-400 mb-1">Schicht</p>
<p class="text-sm font-medium">Früh (06:00 - 14:00)</p>
</div>
<span class="material-symbols-outlined text-stone-300 group-hover:text-primary transition-colors" data-icon="chevron_right">chevron_right</span>
</div>
</div>
<!-- Table-like row 2 -->
<div class="group flex items-center justify-between p-4 rounded-xl hover:bg-surface-container-low transition-all cursor-pointer">
<div class="flex items-center gap-6">
<img class="w-14 h-14 rounded-full object-cover" data-alt="headshot of a smiling female engineer in a modern industrial setting with metallic machinery in background" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCH95gnJ86VxaiOl_jmaPQakJfHnXo6thNnJsk5W1myOoZ89-8CArTmAEguCOtF5HLpOiuYXdJZXXcn-_y7NBKJYwj6kr8bzgwKr6TlGujbzCUqvx5bOyZRyhucXyLqFRG5_wpEH2Eb4CT-tr6etLvV6Eg_uChDsLsTQqDRsB4wOaP9GT2KwrD3LVSFnNy-N9cd2qLATumFrh60tZ98PItLLKT52xeOGUtuxqr1qLO56VKNFGP-MAvy4UHWoIT0nZTGSvcod12ublnk"/>
<div>
<p class="font-bold text-lg">Elena Fischer</p>
<p class="text-xs text-stone-400 uppercase tracking-widest font-bold">Qualitätssicherung</p>
</div>
</div>
<div class="flex items-center gap-12">
<div>
<p class="text-[10px] uppercase font-bold text-stone-400 mb-1">Zuweisung</p>
<p class="text-sm font-medium">Labor (Sensorik)</p>
</div>
<div>
<p class="text-[10px] uppercase font-bold text-stone-400 mb-1">Schicht</p>
<p class="text-sm font-medium">Spät (14:00 - 22:00)</p>
</div>
<span class="material-symbols-outlined text-stone-300 group-hover:text-primary transition-colors" data-icon="chevron_right">chevron_right</span>
</div>
</div>
<!-- Table-like row 3 -->
<div class="group flex items-center justify-between p-4 rounded-xl hover:bg-surface-container-low transition-all cursor-pointer">
<div class="flex items-center gap-6">
<div class="w-14 h-14 rounded-full bg-secondary-fixed flex items-center justify-center text-primary font-black text-xl">LS</div>
<div>
<p class="font-bold text-lg">Lukas Schmidt</p>
<p class="text-xs text-stone-400 uppercase tracking-widest font-bold">Auszubildender</p>
</div>
</div>
<div class="flex items-center gap-12">
<div>
<p class="text-[10px] uppercase font-bold text-stone-400 mb-1">Zuweisung</p>
<p class="text-sm font-medium text-stone-400">Keine Zuweisung</p>
</div>
<div>
<p class="text-[10px] uppercase font-bold text-stone-400 mb-1">Schicht</p>
<p class="text-sm font-medium">Bereitschaft</p>
</div>
<span class="material-symbols-outlined text-stone-300 group-hover:text-primary transition-colors" data-icon="chevron_right">chevron_right</span>
</div>
</div>
</div>
</div>
</div>
<!-- Right Column: Visuals & Quick Stats -->
<div class="col-span-4 space-y-8">
<!-- Coffee Visual Card -->
<div class="relative rounded-full overflow-hidden aspect-[4/5] shadow-2xl group">
<img class="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" data-alt="rich dark roasted coffee beans falling into a silver metallic cooling tray with subtle steam and warm dramatic lighting" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCM3IqoeHXPCvAlbZwQ1Lt8jRfwCyfcfgl1Au5umii3jPUTo2WjsFL5d8e1zsrRMecWrbwLim56cFQSqSHVKnp8VkJQEvEakDxxCuuYPvcMg2Rn4-n_a9dDS_BOfthQGmH6XjLcqMZ4fXbKmehjmwfqgiOykYUjwaGhR5Lp_xO5P-SJR7bRT4mH0zXoW8cE1FMLqIgQTfUsi1WZ1YsxaAva3jJcpt4Ag6zo0Hc0SFtDkT3u3HYhGmYnbYy6uU_gLUNx_XMvoZnZfbKL"/>
<div class="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
<div class="absolute bottom-0 left-0 p-8 text-white">
<p class="text-primary-fixed text-sm font-bold uppercase tracking-widest mb-2">Aktuelle Röstung</p>
<h4 class="text-3xl font-black mb-4">Dark Roast Blend</h4>
<div class="flex items-center gap-4">
<div class="flex flex-col">
<span class="text-[10px] text-stone-400 uppercase font-bold">Fortschritt</span>
<span class="text-xl font-bold">84%</span>
</div>
<div class="flex-1 h-[2px] bg-white/20 relative">
<div class="absolute left-0 top-0 h-full bg-primary-fixed" style="width: 84%"></div>
</div>
</div>
</div>
</div>
<!-- Quick Controls Card (iPad Friendly) -->
<div class="bg-surface-container-low rounded-full p-8">
<h5 class="text-sm font-bold uppercase tracking-widest text-stone-400 mb-6">Schnellzugriff</h5>
<div class="grid grid-cols-2 gap-4">
<button class="bg-white p-6 rounded-2xl flex flex-col items-center gap-3 hover:bg-primary-container hover:text-on-primary-container transition-all">
<span class="material-symbols-outlined text-3xl" data-icon="timer">timer</span>
<span class="text-xs font-bold">Schichtwechsel</span>
</button>
<button class="bg-white p-6 rounded-2xl flex flex-col items-center gap-3 hover:bg-primary-container hover:text-on-primary-container transition-all">
<span class="material-symbols-outlined text-3xl" data-icon="assignment_turned_in">assignment_turned_in</span>
<span class="text-xs font-bold">Abnahme</span>
</button>
<button class="bg-white p-6 rounded-2xl flex flex-col items-center gap-3 hover:bg-primary-container hover:text-on-primary-container transition-all">
<span class="material-symbols-outlined text-3xl" data-icon="report_problem">report_problem</span>
<span class="text-xs font-bold">Störung</span>
</button>
<button class="bg-white p-6 rounded-2xl flex flex-col items-center gap-3 hover:bg-primary-container hover:text-on-primary-container transition-all">
<span class="material-symbols-outlined text-3xl" data-icon="description">description</span>
<span class="text-xs font-bold">Logbuch</span>
</button>
</div>
</div>
<!-- Summary Stats -->
<div class="bg-[#74593f] text-white rounded-full p-8 flex justify-between items-center">
<div>
<p class="text-white/60 text-xs font-bold uppercase tracking-widest">Tagesleistung</p>
<p class="text-3xl font-black">1.240 <span class="text-lg font-light text-white/60">kg</span></p>
</div>
<div class="w-14 h-14 bg-white/10 rounded-xl flex items-center justify-center">
<span class="material-symbols-outlined text-2xl" data-icon="trending_up">trending_up</span>
</div>
</div>
</div>
</div>
</main>
<!-- FAB Suppression: Not rendered on details/management screen as per rules -->` }} />
  );
}
