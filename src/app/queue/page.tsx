
export default function Page() {
  return (
    <div dangerouslySetInnerHTML={{ __html: `<!-- SideNavBar -->
<aside class="h-screen fixed left-0 top-0 w-64 bg-stone-100 dark:bg-stone-900 flex flex-col py-8 z-50">
<div class="px-8 mb-12">
<h1 class="text-2xl font-black tracking-tighter text-[#74593f] dark:text-[#ffdab9]">Kurator</h1>
<p class="text-[10px] uppercase tracking-[0.2em] text-stone-500 mt-1">Premium SaaS</p>
</div>
<nav class="flex-1 space-y-1">
<a class="flex items-center gap-4 text-stone-500 dark:text-stone-400 font-medium pl-5 py-3 hover:text-[#74593f] hover:bg-orange-50 transition-colors" href="/">
<span class="material-symbols-outlined">dashboard</span>
<span>Dashboard</span>
</a>
<a class="flex items-center gap-4 text-stone-500 dark:text-stone-400 font-medium pl-5 py-3 hover:text-[#74593f] hover:bg-orange-50 transition-colors" href="/product">
<span class="material-symbols-outlined">database</span>
<span>Stammdaten</span>
</a>
<a class="flex items-center gap-4 text-[#1b1c1a] dark:text-stone-100 font-bold border-l-4 border-[#74593f] pl-4 py-3 bg-orange-50/50" href="/queue">
<span class="material-symbols-outlined">verified_user</span>
<span>Freigaben</span>
</a>
<a class="flex items-center gap-4 text-stone-500 dark:text-stone-400 font-medium pl-5 py-3 hover:text-[#74593f] hover:bg-orange-50 transition-colors" href="/machine">
<span class="material-symbols-outlined">engineering</span>
<span>MF Maschinenführer</span>
</a>
<a class="flex items-center gap-4 text-stone-500 dark:text-stone-400 font-medium pl-5 py-3 hover:text-[#74593f] hover:bg-orange-50 transition-colors" href="/users">
<span class="material-symbols-outlined">history</span>
<span>Audit-Logs</span>
</a>
<a class="flex items-center gap-4 text-stone-500 dark:text-stone-400 font-medium pl-5 py-3 hover:text-[#74593f] hover:bg-orange-50 transition-colors" href="#">
<span class="material-symbols-outlined">settings</span>
<span>Einstellungen</span>
</a>
</nav>
<div class="mt-auto px-8">
<div class="flex items-center gap-3 p-3 bg-white/50 rounded-xl">
<img alt="Benutzerprofil" class="w-10 h-10 rounded-full object-cover shadow-sm" data-alt="professional portrait of a creative director in a neutral studio setting with soft lighting" src="https://lh3.googleusercontent.com/aida-public/AB6AXuD4REJL6ozQ-QkBu_ZImCzB9eU3SuvUrdSIdaP9SlWcENnE4YNVCXiNZaDrPaRMZI0E_1vbXiwh6N5vXgCuDqsQJvOB4-YAN9BFBP9fi5YPGpjZO2gNfswFVvdY2l9Z4QPoY42DCMhoze591m-KBmVt3IVtWE9OiI_0bbvZvkX6mfkTmEjOwHyLlqCEXz2kwiL0eh2DPXBzsbYr_VElzM1ltlU5xXcI3o-FltP5APig2tQYcZl5P_Z9ekwMo17tf7bELerNPgJCph3v"/>
<div class="overflow-hidden">
<p class="text-xs font-bold truncate">Max Mustermann</p>
<p class="text-[10px] text-stone-500 truncate">Administrator</p>
</div>
</div>
</div>
</aside>
<!-- TopNavBar -->
<header class="fixed top-0 right-0 w-[calc(100%-16rem)] h-20 px-12 z-40 bg-white/80 backdrop-blur-xl flex justify-between items-center shadow-[0px_20px_40px_rgba(116,89,63,0.06)]">
<div class="flex items-center bg-surface-container-low px-4 py-2 rounded-full w-96">
<span class="material-symbols-outlined text-stone-400 mr-2">search</span>
<input class="bg-transparent border-none focus:ring-0 text-sm w-full font-label" placeholder="Suche in Freigaben..." type="text"/>
</div>
<div class="flex items-center gap-6">
<button class="text-stone-500 hover:text-primary transition-colors">
<span class="material-symbols-outlined">notifications</span>
</button>
<button class="text-stone-500 hover:text-primary transition-colors">
<span class="material-symbols-outlined">help_outline</span>
</button>
<div class="h-8 w-px bg-outline-variant/30"></div>
<span class="text-xs font-bold tracking-widest uppercase text-primary">Kurator Editorial</span>
</div>
</header>
<!-- Main Content -->
<main class="ml-64 pt-28 px-12 pb-12">
<!-- Editorial Header -->
<div class="mb-16">
<p class="text-xs font-bold tracking-[0.3em] uppercase text-primary mb-4">Qualitätssicherung</p>
<h2 class="text-6xl font-extrabold tracking-tighter text-on-surface mb-4">Freigaben-Queue</h2>
<p class="text-lg text-on-surface-variant max-w-2xl leading-relaxed">Prüfen Sie die ausstehenden Änderungen an den Produktkatalogen. Vergleichen Sie die Versionen sorgfältig vor der Veröffentlichung.</p>
</div>
<!-- Bento Grid Layout -->
<div class="grid grid-cols-12 gap-8">
<!-- Comparison View Section (Large Span) -->
<div class="col-span-12 lg:col-span-8 space-y-8">
<div class="bg-surface-container-lowest rounded-full p-12 shadow-[0px_20px_40px_rgba(116,89,63,0.04)]">
<div class="flex justify-between items-end mb-12">
<div>
<span class="inline-block px-3 py-1 bg-primary-container text-on-primary-container text-[10px] font-bold uppercase tracking-wider rounded-full mb-3">Änderungsantrag #4412</span>
<h3 class="text-3xl font-bold tracking-tight">Kaffeerösterei "Sonnenschein"</h3>
</div>
<div class="flex gap-4">
<button class="px-8 py-3 rounded-full border border-outline-variant text-sm font-bold hover:bg-stone-50 transition-all">Ablehnen</button>
<button class="px-8 py-3 rounded-full bg-gradient-to-br from-primary to-primary-fixed-dim text-on-primary text-sm font-bold shadow-lg hover:opacity-90 transition-all">Freigeben</button>
</div>
</div>
<!-- Comparison Slots -->
<div class="grid grid-cols-2 gap-12">
<!-- Before -->
<div class="space-y-6">
<div class="flex items-center gap-2 text-stone-400">
<span class="material-symbols-outlined text-sm">history</span>
<span class="text-[10px] font-bold uppercase tracking-widest">Aktueller Stand (Vorher)</span>
</div>
<div class="aspect-[4/3] rounded-full overflow-hidden grayscale opacity-60">
<img alt="Kaffee Alt" class="w-full h-full object-cover" data-alt="overhead shot of a minimalist coffee cup on a plain wooden table with soft morning light" src="https://lh3.googleusercontent.com/aida-public/AB6AXuD3SZlIHgsKnTbK8Jzte0If6mf_ul1NCl982YAZ_G8Hax5Dm8eCVlMZnq3funAKYW7xIOsA67ckoE9NM4-687CHQmH7Rmi-YYZjxeWHHXQtqFn795Ajmn_8hwjWrRF1SHpcYm8RtQ7OLXI_qGA3lnyTQ8Z8u1EbuhSTmk76a1qjSNQn3TTK7qe9BJE_7v6XZnMnfkhpm67Bva-BlOaAkVlppY8JtFglo45WarFefwsP_xYSrhB4pzs_eARzXQVT5a0uAR11LqSyThGq"/>
</div>
<div class="space-y-3">
<h4 class="text-lg font-bold text-stone-400">Produktbeschreibung</h4>
<p class="text-sm text-stone-500 leading-relaxed italic">"Ein klassischer Kaffee aus südamerikanischen Bohnen, ideal für den täglichen Genuss am Morgen."</p>
</div>
</div>
<!-- After -->
<div class="space-y-6">
<div class="flex items-center gap-2 text-primary">
<span class="material-symbols-outlined text-sm">update</span>
<span class="text-[10px] font-bold uppercase tracking-widest">Vorgeschlagene Änderung (Nachher)</span>
</div>
<div class="aspect-[4/3] rounded-full overflow-hidden shadow-2xl ring-4 ring-primary-container/30">
<img alt="Kaffee Neu" class="w-full h-full object-cover" data-alt="close-up of rich espresso being poured into a porcelain cup with perfect crema and steam" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDpcOGBE9Dlk-XMLB3mJf5uj7vucSIoUpGeCwxrKmEXU9uxABiW7mO-aN41zsY8-F2ZglBNUGpfqJZh0qeUyEXRghWjbCcmmXwNkftRsORa346OF0u27C27JZhhsFnk_UZS6LbFKhrLhPGp5G5ssGIBAT6qDAqy1xdr_aHtYcH92TU5psKKzOBemkscwGWKmgfxTpELAzKxfN_VCO7MTSd6uCSXdKsHKSlnAdOHaqAPepXJVc18hlr5W1oopleu2HZ-t7-wV5seyUmX"/>
</div>
<div class="space-y-3">
<h4 class="text-lg font-bold text-on-surface">Produktbeschreibung</h4>
<p class="text-sm text-on-surface leading-relaxed bg-primary-container/20 p-4 rounded-xl">
                                    "Handverlesene Arabica-Bohnen aus den Höhenlagen Äthiopiens. Eine Symphonie aus floralen Noten und sanfter Säure, veredelt in unserer Manufakturröstung."
                                </p>
</div>
</div>
</div>
</div>
<!-- Timeline/Notes -->
<div class="bg-surface-container-low rounded-full p-10 flex items-center justify-between">
<div class="flex items-center gap-6">
<div class="w-12 h-12 rounded-full bg-white flex items-center justify-center text-primary shadow-sm">
<span class="material-symbols-outlined">chat_bubble</span>
</div>
<div>
<p class="text-xs font-bold text-primary uppercase tracking-tighter">Anmerkung des Redakteurs</p>
<p class="text-sm text-on-surface-variant italic">"Das neue Bild unterstreicht den Premium-Charakter deutlich besser. Text wurde für SEO optimiert."</p>
</div>
</div>
<div class="text-right">
<p class="text-[10px] font-bold uppercase tracking-widest text-stone-400 mb-1">Eingereicht am</p>
<p class="text-sm font-bold">14. Okt. 2023, 11:30</p>
</div>
</div>
</div>
<!-- Queue Sidebar Section -->
<div class="col-span-12 lg:col-span-4 space-y-8">
<div class="bg-white rounded-full p-10 shadow-[0px_20px_40px_rgba(116,89,63,0.06)] border border-outline-variant/10">
<h3 class="text-xl font-bold mb-8 flex items-center gap-3">
<span class="material-symbols-outlined text-primary">list_alt</span>
                        Warteschlange (12)
                    </h3>
<div class="space-y-4">
<!-- Active Item -->
<div class="p-4 bg-primary-container/30 border-l-4 border-primary rounded-r-xl transition-all">
<div class="flex items-center justify-between mb-2">
<span class="text-[10px] font-bold text-primary">AKTUELL</span>
<span class="text-[10px] text-stone-500">Vor 12 Min.</span>
</div>
<p class="font-bold text-sm">Kaffeerösterei Sonnenschein</p>
<p class="text-xs text-on-surface-variant">Produktupdate: Äthiopien Blend</p>
</div>
<!-- Pending Items -->
<div class="p-4 hover:bg-surface-container transition-all cursor-pointer rounded-xl group">
<div class="flex items-center justify-between mb-2">
<span class="text-[10px] font-bold text-stone-400">WARTEND</span>
<span class="text-[10px] text-stone-500">Vor 1 Std.</span>
</div>
<p class="font-bold text-sm group-hover:text-primary transition-colors">Barista Tools Pro</p>
<p class="text-xs text-on-surface-variant">Preisaktualisierung Winter-Sale</p>
</div>
<div class="p-4 hover:bg-surface-container transition-all cursor-pointer rounded-xl group">
<div class="flex items-center justify-between mb-2">
<span class="text-[10px] font-bold text-stone-400">WARTEND</span>
<span class="text-[10px] text-stone-500">Vor 3 Std.</span>
</div>
<p class="font-bold text-sm group-hover:text-primary transition-colors">Vollautomat Series-X</p>
<p class="text-xs text-on-surface-variant">Neue Marketing-Assets</p>
</div>
<div class="p-4 hover:bg-surface-container transition-all cursor-pointer rounded-xl group">
<div class="flex items-center justify-between mb-2">
<span class="text-[10px] font-bold text-stone-400">DRINGEND</span>
<span class="text-[10px] text-stone-500">Gestern</span>
</div>
<p class="font-bold text-sm group-hover:text-primary transition-colors">Espresso Academy</p>
<p class="text-xs text-on-surface-variant">Stornierung Schulungstermine</p>
</div>
</div>
<button class="w-full mt-8 py-3 text-xs font-bold uppercase tracking-widest text-primary border-b-2 border-primary-container hover:bg-primary-container/10 transition-all">
                        Alle Einträge anzeigen
                    </button>
</div>
<!-- Stats Card -->
<div class="bg-primary text-on-primary rounded-full p-10 relative overflow-hidden">
<div class="relative z-10">
<p class="text-[10px] font-bold uppercase tracking-widest opacity-70 mb-4">Wochenstatistik</p>
<h4 class="text-4xl font-extrabold mb-2">84%</h4>
<p class="text-sm opacity-90 leading-snug">Ihrer Freigaben wurden ohne Beanstandung veröffentlicht.</p>
</div>
<!-- Decorative Graphic -->
<div class="absolute -right-8 -bottom-8 w-32 h-32 bg-primary-fixed-dim/20 rounded-full blur-2xl"></div>
</div>
</div>
</div>
</main>` }} />
  );
}
