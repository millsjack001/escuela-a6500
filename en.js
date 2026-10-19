// English text for Escuela α6500. index.html loads this file before the app when English is chosen.
// Lesson ids, numbers and settings stay in index.html; this file only holds the words. Every camera
// menu, button and setting name is the one the α6500 shows in English (Sony's ILCE-6500 Help Guide).
// When a lesson changes in index.html, change it here too.
window.ESCUELA_EN = {units: {}, lessons: {}};

// The simulator's camera labels: Spanish name in index.html -> the camera's English name.
ESCUELA_EN.words = {
 // MENU tabs
 "Ajustes de cámara 1":"Camera Settings1", "Ajustes de cámara 2":"Camera Settings2", "Red":"Wireless", "Aplicación":"Application",
 "Reproducción":"Playback", "Configuración":"Setup", "Mi menú":"My Menu",
 // shared values
 "Activado":"On", "Desactivado":"Off", "Estándar":"Standard", "Bajo":"Low", "Medio":"Mid", "Alto":"High", "Rápido":"Fast", "Lento":"Slow",
 "Habilitar":"Enable", "Deshabilitar":"Disable", "Manual":"Manual", "Auto":"Auto", "Normal":"Normal",
 // Camera Settings1
 "Calidad":"Quality", "Extra fino":"Extra fine", "Fino":"Fine", "RAW y JPEG":"RAW & JPEG", "Tamaño imagen":"Image Size", "Relación aspecto":"Aspect Ratio",
 "RR exposición larga":"Long Exposure NR", "RR ISO alta":"High ISO NR", "Espacio color":"Color Space",
 "Modo automático":"Auto Mode", "Auto inteligente":"Intelligent Auto", "Auto superior":"Superior Auto", "Selección escena":"Scene Selection",
 "Retrato":"Portrait", "Deportes":"Sports Action", "Paisaje":"Landscape", "Puesta de sol":"Sunset", "Escena nocturna":"Night Scene",
 "Modo de avance":"Drive Mode", "Disparo único":"Single Shooting", "Disparo continuo":"Cont. Shooting", "Autodisparador":"Self-timer",
 "Ajustes horquillado":"Bracket Settings", "Recuperar":"Recall", "Memoria":"Memory",
 "Modo de enfoque":"Focus Mode", "Prior. ajuste AF-S":"Priority Set in AF-S", "Prior. ajuste AF-C":"Priority Set in AF-C", "Liberar":"Release", "Énfasis equilib.":"Balanced Emphasis",
 "Área de enfoque":"Focus Area", "Amplia":"Wide", "Zona":"Zone", "Central":"Center", "Punto flexible":"Flexible Spot", "Bloqueo AF":"Lock-on AF",
 "Iluminador AF":"AF Illuminator", "AF bloqueo central":"Center Lock-on AF",
 "Compensación exposición":"Exposure Comp.", "ISO AUTO vel. obt. mín.":"ISO AUTO Min. SS", "Modo medición":"Metering Mode", "Centro":"Center", "Puntual":"Spot",
 "Modo flash":"Flash Mode", "Flash desactivado":"Flash Off", "Flash auto":"Autoflash", "Flash de relleno":"Fill-flash", "Compens. flash":"Flash Comp.",
 "Balance blancos":"White Balance", "Luz día":"Daylight", "Sombra":"Shade", "Nublado":"Cloudy", "Incandescente":"Incandescent",
 "DRO/HDR auto":"DRO/Auto HDR", "Optimiz. gama D":"D-Range Opt.", "HDR auto":"Auto HDR",
 "Estilo creativo":"Creative Style", "Intenso":"Vivid", "Neutro":"Neutral", "B/N":"Black & White",
 "Efecto de foto":"Picture Effect", "Cámara juguete":"Toy Camera", "Color pop":"Pop Color", "Retro":"Retro Photo",
 "Perfil de imagen":"Picture Profile", "Efecto piel suave":"Soft Skin Effect",
 "Ampliador enfoque":"Focus Magnifier", "Nivel de realce":"Peaking Level", "Color de realce":"Peaking Color", "Rojo":"Red", "Amarillo":"Yellow", "Blanco":"White",
 "Detec. cara/sonrisa":"Smile/Face Detect.", "Registro de caras":"Face Registration", "Encuadre auto. obj.":"Auto Obj. Framing",
 "Más lento":"Slower", "Más rápido":"Faster",
 // Camera Settings2
 "Película/Cám. lenta":"Movie/S&Q Motion", "Programa auto.":"Program Auto", "Prioridad abertura":"Aperture Priority", "Prioridad obturador":"Shutter Priority", "Exposición manual":"Manual Exposure",
 "Formato archivo":"File Format", "Ajuste grabación":"Record Setting", "Ajustes cám. lenta":"S&Q Settings", "Grab. vídeo dual":"Dual Video REC", "Veloc. trans. AF":"AF drive speed",
 "Disparo silencioso":"Silent Shooting", "Obt. cortinilla front.e":"e-Front Curtain Shut.", "Disparar sin objetivo":"Release w/o Lens", "Disparar sin tarjeta":"Release w/o Card",
 "Ajustes SteadyShot":"SteadyShot Settings",
 "Ajuste del zoom":"Zoom Setting", "Solo zoom óptico":"Optical zoom only", "Zoom imagen clara":"On:ClearImage Zoom", "Zoom digital":"On:Digital Zoom",
 "Botón DISP":"DISP Button", "VISOR/MONITOR":"FINDER/MONITOR", "Visor (manual)":"Viewfinder(Manual)", "Monitor (manual)":"Monitor(Manual)", "Cebra":"Zebra",
 "Línea de cuadrícula":"Grid Line", "Cuadríc. regla 3 tercios":"Rule of 3rds Grid", "Cuadrícula cuadrada":"Square Grid", "Cuadríc. diag.+cuad.":"Diag. + Square Grid",
 "Guía ajuste expos.":"Exposure Set. Guide", "Visualiz. Live View":"Live View Display", "Efecto ajuste act.":"Setting Effect ON", "Efecto ajuste des.":"Setting Effect OFF",
 "Revisión auto":"Auto Review", "2 seg.":"2 Sec", "5 seg.":"5 Sec", "10 seg.":"10 Sec",
 "Tecla personaliz. (disparo)":"Custom Key(Shoot.)", "Ajustes menú función":"Function Menu Set.", "Config. dial/rueda":"Dial/Wheel Setup",
 "Rueda vel. · dial F":"SS · F/no.", "Rueda F · dial vel.":"F/no. · SS",
 "Comp. Ev dial/rueda":"Dial/Wheel Ev Comp", "Dial":"Dial", "Rueda":"Wheel", "Botón MOVIE":"MOVIE Button", "Siempre":"Always", "Solo modo película":"Movie Mode Only",
 "Bloq. dial/rueda":"Dial / Wheel Lock", "Bloquear":"Lock", "Desbloquear":"Unlock", "Señales audio":"Audio signals",
 // Wireless, Application
 "Enviar a smartphone":"Send to Smartphone", "Enviar a ordenador":"Send to Computer", "Ver en TV":"View on TV", "Una pulsación (NFC)":"One-touch(NFC)",
 "Modo avión":"Airplane Mode", "Ajustes Wi-Fi":"Wi-Fi Settings", "Ajustes Bluetooth":"Bluetooth Settings", "Ajus. enlace inf. ubic.":"Loc. Info. Link Set.",
 "Edit. nombre dispositivo":"Edit Device Name", "Restablecer ajuste red":"Reset Network Set.",
 "Lista de aplicaciones":"Application List", "Introducción":"Introduction",
 // Playback
 "Borrar":"Delete", "Modo visualización":"View Mode", "Vista de fecha":"Date View", "Vista carpeta (fija)":"Folder View(Still)", "Vista carpeta (MP4)":"Folder View(MP4)",
 "Vista XAVC S 4K":"XAVC S 4K View", "Vista XAVC S HD":"XAVC S HD View", "Índice de imágenes":"Image Index", "12 imágenes":"12 Images", "30 imágenes":"30 Images",
 "Rotación pantalla":"Display Rotation", "Presentación diapo.":"Slide Show", "Girar":"Rotate", "Ampliar imagen":"Enlarge Image", "Proteger":"Protect",
 "Clasificación":"Rating", "Especificar impresión":"Specify Printing", "Captura de foto":"Photo Capture",
 // Setup
 "Brillo de monitor":"Monitor Brightness", "Tiempo soleado":"Sunny Weather", "Brillo del visor":"Viewfinder Bright.", "Temp. color visor":"Finder Color Temp.",
 "Ajustes volumen":"Volume Settings", "Menú mosaico":"Tile Menu", "Guía selector modo":"Mode Dial Guide",
 "Hora inic. ahor. ener.":"Pwr Save Start Time", "30 min":"30 Min", "5 min":"5 Min", "2 min":"2 Min", "1 min":"1 Min",
 "Funcionamiento táctil":"Touch Operation", "Panel táctil+Pad":"Touch Panel+Pad", "Solo panel táctil":"Touch Panel Only", "Solo touchpad":"Touch Pad Only",
 "Modo demostración":"Demo Mode", "Ajustes HDMI":"HDMI Settings", "Conexión USB":"USB Connection", "Fuente alim. USB":"USB Power Supply",
 "Idioma":"Language", "Ajuste fecha/hora":"Date/Time Setup", "Configuración de zona":"Area Setting", "Formatear":"Format",
 "Número archivo":"File Number", "Serie":"Series", "Reiniciar":"Reset", "Restablecer ajuste":"Setting Reset",
 // My Menu
 "Añadir elemento":"Add Item", "Ordenar elemento":"Sort Item", "Eliminar elemento":"Delete Item", "Eliminar página":"Delete Page", "Eliminar todo":"Delete All",
 // simulator scenes
 "Sol":"Sun", "Atardecer":"Sunset", "Interior":"Indoors", "Noche":"Night"
};

Object.assign(ESCUELA_EN.units, {1:{week:"Week 1", title:"First steps"}, 2:{week:"Week 2", title:"Focus"}});
Object.assign(ESCUELA_EN.lessons, {
 preparar:{title:"Set up your camera", sub:"Battery, card, lens and language",
  evf:["BATTERY","CARD","16-50 mm"],
  goal:"Get the camera ready to use: battery charged, card formatted, lens on, and the right language, date and time.",
  body:`
<p>The box holds the camera, the <b>NP-FW50</b> battery, a micro USB cable with its power adapter, the strap and the <b>eyepiece cup</b> (the little rubber piece for the viewfinder, which comes loose). The <b>memory card is not included</b>: you need an SD card (SDHC or SDXC). If you'll record 4K video, get a <b>UHS-I U3</b> card.</p>
<p>The battery charges <b>inside the camera</b>: with the camera off, plug the USB cable into the adapter and the adapter into the wall. The small orange light next to the port means it's charging, and it goes out when it's done (about 2½ hours from empty).</p>
<p>Your lens is the <b>Sony E 16-50 mm</b>. It's motorized: it extends on its own when you turn the camera on and retracts when you turn it off. Don't force it by hand.</p>
<div class="callout c-iphone"><span class="eyebrow">Unlike the iPhone</span><p>On the iPhone the photo is always saved. Here the photo lives on the card: no card, no photo, and out of the box the camera still lets you shoot! That's why step 9 matters.</p></div>
<div class="callout c-warn"><span class="eyebrow">About menu names</span><p>This English version uses the camera's own English menu names. Set the camera's language to English ({{MENU › Setup › Language › English}}) and every name here will match your screen exactly.</p></div>`,
  steps:[
   "Open the door on the bottom. Slide the battery in, using its tip to push the little lock lever aside until it clicks into place.",
   "Charge it: camera off, USB cable into the adapter and the wall. Wait for the orange light to go out.",
   "Insert the SD card with the cut corner facing the way the drawing on the door shows, until it clicks. Close the door.",
   "Take off the body cap and the rear lens cap. Line up the two white dots and turn the lens until it clicks. Take off the front lens cap.",
   "Slide the eyepiece cup onto the viewfinder and attach the strap to the two side lugs.",
   "Turn it on with the [[ON/OFF]] switch around the shutter button. Choose English, then your area, date and time. If you already skipped past them: {{MENU › Setup › Language}}.",
   "Format the card (this erases everything on it): {{MENU › Setup › Format}}.",
   "Install Sony's free <b>Imaging Edge Mobile</b> app on the iPhone. You'll set it up in the lesson “Your photos on the iPhone”.",
   "Avoid phantom photos: {{MENU › Camera Settings2 › Release w/o Card › Disable}}."
  ],
  mission:"Turn the top dial to AUTO and take three photos of anything. Press [[▶︎]] to check that they were saved.",
  warn:"Always turn the camera off before removing the battery, the card or the lens. If the card's access light is on, wait for it to go out."
 },
 controles:{title:"Tour of the controls", sub:"Every button, wheel and dial",
  evf:["MENU","Fn","DISP","C1 C2 C3"],
  goal:"Know what every button does and find it without looking.",
  body:`
<p>Tap any part of the drawing to see what it is. Switch between the back, top and lens views.</p>
<div data-widget="camera"></div>
<h3>The two wheels you'll use most</h3>
<ul>
<li><b>Control wheel</b> (on the back, under your thumb): turn it to change values, and press its four sides like buttons. Out of the box: top is [[DISP]] (what's shown on screen), right is [[ISO]], bottom is [[±]] (exposure compensation) and left is drive mode (burst and self-timer). The center button turns on <b>Eye AF</b> (focus on the eyes).</li>
<li><b>Control dial</b> (on top, at the right): the one you turn with your thumb without letting go of the grip. In A, S and M modes it changes the aperture or the shutter speed.</li>
</ul>
<h3>MENU or Fn</h3>
<p>[[MENU]] has <b>every</b> setting, sorted into tabs. [[Fn]] opens a quick menu with 12 settings you'll use often (focus, ISO, white balance…). Rule of thumb: if you change it more than once a day, look for it in Fn.</p>
<div class="callout c-iphone"><span class="eyebrow">Unlike the iPhone</span><p>The screen is a touch screen, but only for focusing. You get around the menus with the wheel: turn to move and press the center to confirm. [[MENU]] also takes you back.</p></div>`,
  steps:[
   "Tap every part of the drawing above at least once.",
   "Turn the mode dial through all its positions and read the name that shows on the screen.",
   "Press [[DISP]] (top of the wheel) a few times and watch how the information on screen changes.",
   "Open [[MENU]]. Move between tabs with the left and right sides of the wheel. Leave with [[MENU]].",
   "Press [[Fn]], go through the settings with the wheel and leave by pressing [[Fn]] again."
  ],
  mission:"With your eyes closed, find the shutter button, the rear wheel, [[MENU]] and [[▶︎]]. Repeat until your finger gets there without looking. That's what will make you quick when the moment won't wait."
 },
 primera:{title:"Hold it and take your first photo", sub:"The two-stage shutter button",
  evf:["AUTO","AF","16 mm","50 mm"],
  goal:"Hold the camera steadily, use the viewfinder and master the most important move: half-press to focus, all the way down to shoot.",
  body:`
<h3>How to hold it</h3>
<p>Right hand on the grip, index finger on the shutter button. Your left hand goes <b>under the lens</b>, like a tray. Elbows tucked against your body. That way the camera shakes far less than with your arm stretched out.</p>
<h3>Viewfinder or screen</h3>
<p>When you bring your eye to the viewfinder, a sensor turns off the screen and turns on the viewfinder by itself. If the numbers in the viewfinder look blurry, turn the small <b>diopter-adjustment dial</b> next to the viewfinder until they're sharp. The screen tilts up and down: very handy for shots close to the ground or above people's heads.</p>
<h3>The shutter button has two stages</h3>
<ol>
<li><b>Pressed halfway:</b> the camera focuses. You'll hear a beep and see a green frame where it focused.</li>
<li><b>All the way down:</b> it takes the photo.</li>
</ol>
<p>If you keep it pressed halfway, the focus stays locked and you can <b>recompose</b>: focus on the face of someone in the center, then move the camera to put them off to one side, without letting go.</p>
<h3>The zoom</h3>
<p>Use the small lever on the side of the lens (W = wide angle, T = closer) or the ring. At <b>16 mm</b> you see roughly the same as with the iPhone's main camera. At <b>50 mm</b> it's similar to the iPhone's 3× telephoto.</p>
<div class="callout c-iphone"><span class="eyebrow">Unlike the iPhone</span><p>On the iPhone you tap and the photo happens instantly. Here you focus first (half-press) and then shoot. It feels slow at first; in a week it will be automatic.</p></div>`,
  steps:[
   "Turn the mode dial to AUTO and pick the smartest automatic mode: {{MENU › Camera Settings1 › Auto Mode › Superior Auto}}.",
   "Look through the viewfinder and adjust the diopter dial until the numbers are sharp.",
   "Turn on the rule-of-thirds grid for your composing eye: {{MENU › Camera Settings2 › Grid Line › Rule of 3rds Grid}}.",
   "Point at a nearby object, press the shutter button halfway and wait for the beep and the green frame.",
   "Without letting go, recompose so the object sits off to one side, and press all the way down.",
   "Take the same photo at 16 mm and at 50 mm."
  ],
  mission:"<b>Same size, two zooms.</b> Photograph a person at 16 mm from close up, then at 50 mm from farther away, so they're the same size in both. Compare the background: at 50 mm it looks bigger and blurrier, and the face looks more flattering."
 },
 ver:{title:"Your photos on the iPhone", sub:"Review on the camera and move photos to Photos",
  evf:["▶︎","DISP","Wi‑Fi → PHOTOS"],
  goal:"Review your photos with a critical eye and get them into the iPhone's Photos app, where you'll edit them.",
  body:`
<h3>Reviewing on the camera</h3>
<ul>
<li>Press [[▶︎]] and turn the wheel to go through your photos.</li>
<li><b>Zoom in:</b> the [[AF/MF·AEL]] button has a magnifying glass: in playback it enlarges the photo. The screen is small and fools you: <b>always zoom in on important photos</b> to check the focus.</li>
<li><b>See the settings:</b> press [[DISP]] until you see the photo's shutter speed, F-number and ISO. Looking at the settings of your good and bad photos is the fastest way to learn.</li>
<li><b>Delete:</b> the [[C3 / 🗑]] button. It can't be undone.</li>
</ul>
<h3>Moving them to the iPhone</h3>
<p>There are two ways. The photos end up in the <b>Photos</b> app, in Recents, just like the ones from your phone.</p>
<div class="table-wrap"><table>
<tr><th>Method</th><th>How it works</th><th>Best for</th></tr>
<tr><td>Wi‑Fi with the app</td><td>Sony's free <b>Imaging Edge Mobile</b> app connects to the camera's Wi‑Fi network and copies the photos you choose.</td><td>Everyday use, no cables. Transfers JPEG photos.</td></tr>
<tr><td>Card reader</td><td>An SD card reader for iPhone (USB‑C or Lightning). Put the card in and Photos offers to import.</td><td>Moving lots of photos at once, 4K video or RAW files.</td></tr>
</table></div>
<div class="callout c-warn"><span class="eyebrow">About automatic syncing</span><p>Some newer Sony cameras send each photo to your phone on their own while you shoot (“automatic background transfer”). As far as we know, the α6500 doesn't have that feature: you start the transfer yourself. If the app shows that option as available for your camera, turn it on. If not, the routine below takes less than a minute.</p></div>
<div class="callout c-iphone"><span class="eyebrow">Unlike the iPhone</span><p>Photos don't show up in your library on their own: you choose which ones to move. Use that to your advantage and move only the good ones.</p></div>`,
  steps:[
   "Press [[▶︎]], go through your photos and zoom in on one with the magnifying-glass button.",
   "Press [[DISP]] in playback until you see that photo's shutter speed, F-number and ISO.",
   "Delete a bad photo with [[🗑]].",
   "Install <b>Imaging Edge Mobile</b> from the App Store and, when it asks, give it access to Photos.",
   "In the app's settings, find the size for copied images and choose <b>Original</b> (otherwise it copies small 2 MP versions).",
   "On the camera: {{MENU › Wireless › Send to Smartphone › Select on This Device › All Images on This Date}}. The camera shows a QR code.",
   "In the app, scan the QR code. You only need to do this the first time: after that the iPhone remembers the camera's network.",
   "Open Photos and check that your photos are in Recents. Create an “α6500” album to keep them together.",
   "Try the shortcut too: with a photo on screen, press [[Fn]] (in playback it's “Send to Smartphone”) and choose This Image.",
   "Another option: {{Send to Smartphone › Select on Smartphone}} lets you see the whole card from the iPhone and choose there."
  ],
  mission:"Take 10 photos, review them on the camera by zooming in, delete the ones that missed, and move the good ones to the iPhone. Repeat the routine until it takes you less than a minute."
 },
 "modos-enfoque":{title:"Focus modes", sub:"AF-S, AF-A, AF-C, DMF and MF",
  evf:["P","AF-S","AF-C"],
  goal:"Choose whether the camera focuses once and stays put, or keeps following the subject while it moves.",
  body:`
<p>From here on, use <b>P</b> mode (Program Auto) on the dial: the camera still works out the light, but it lets you choose the focus and almost everything else. In AUTO many settings are locked.</p>
<p>Focus mode is in {{MENU › Camera Settings1 › Focus Mode}} and also in the [[Fn]] menu.</p>
<div class="table-wrap"><table>
<tr><th>Mode</th><th>What it does</th><th>Use it for</th></tr>
<tr><td>AF-S</td><td>Focuses once and locks the focus while you hold the shutter button halfway.</td><td>People posing, food, landscapes, objects.</td></tr>
<tr><td>AF-A</td><td>Decides on its own: locks if the subject is still, follows if it moves.</td><td>When you don't know what's going to happen.</td></tr>
<tr><td>AF-C</td><td>Keeps focusing the whole time you hold the shutter button halfway. No beep.</td><td>Kids, pets, sports, people walking.</td></tr>
<tr><td>DMF</td><td>Focuses on its own, then lets you fine-tune by hand with the ring.</td><td>Very close-up photos.</td></tr>
<tr><td>MF</td><td>You focus with the lens ring.</td><td>When autofocus fails (lesson “Manual focus with peaking”).</td></tr>
</table></div>
<h3>How to read the focus indicator</h3>
<p>At the bottom of the screen there's a green dot: <b>steady</b> means focused and locked; <b>blinking</b> means it couldn't focus; <b>in brackets</b> (in AF-C) means it's following the subject.</p>
<p>Autofocus struggles with dark things, smooth surfaces with no texture (a white wall), glass and reflections.</p>`,
  steps:[
   "Turn the dial to P.",
   "Set the focus mode to AF-S. Focus on a mug, keep the shutter button half-pressed and move the camera closer or farther: the focus doesn't change.",
   "Switch to AF-C. Ask someone to walk toward you and follow them with the shutter button half-pressed.",
   "Point at a plain wall and watch the indicator blink because it can't find anything to focus on."
  ],
  mission:"A person or pet walks toward you: take five photos in AF-S and five in AF-C. Zoom in on the camera: which ones are sharper?"
 },
 areas:{title:"Where it focuses: areas and touch screen", sub:"Wide, Zone, Flexible Spot and Lock-on",
  evf:["P","AF-S","[ ▢ ] FLEXIBLE SPOT"],
  goal:"Decide for yourself which part of the photo is sharp, instead of letting the camera guess.",
  body:`
<p>Focus mode says <i>when</i> it focuses. <b>Focus Area</b> says <i>where</i>. It's in {{MENU › Camera Settings1 › Focus Area}} and in [[Fn]].</p>
<div class="table-wrap"><table>
<tr><th>Area</th><th>What it does</th></tr>
<tr><td>Wide</td><td>The camera looks for the subject across the whole frame. Fast, but sometimes it picks what you didn't want (usually whatever is closest).</td></tr>
<tr><td>Zone</td><td>You pick a region of the screen and the camera chooses within it.</td></tr>
<tr><td>Center</td><td>Always focuses on the center. Perfect with the focus-and-recompose trick.</td></tr>
<tr><td>Flexible Spot</td><td>A small frame (S, M or L) that you move anywhere. Maximum control.</td></tr>
<tr><td>Expand Flexible Spot</td><td>The same, but if it can't focus on the spot, it uses the points around it.</td></tr>
<tr><td>Lock-on AF</td><td>Only with AF-C. Latches onto the subject and chases it across the screen.</td></tr>
</table></div>
<h3>Moving the spot with your finger</h3>
<p>Turn on {{MENU › Setup › Touch Operation › Touch Panel+Pad}}. Looking at the screen, <b>tap</b> where you want to focus. Looking through the viewfinder, the screen works as a <b>touchpad</b>: drag your thumb and the frame moves.</p>
<div class="callout c-iphone"><span class="eyebrow">Unlike the iPhone</span><p>It's like tapping the iPhone screen to focus. The difference is that here you then confirm with a half-press of the shutter button.</p></div>
<p class="muted">In AUTO and SCN the area is fixed at Wide. That's why you practice in P.</p>`,
  steps:[
   "Dial on P. Focus Area: Flexible Spot, size M.",
   "Turn on touch operation (Touch Panel+Pad).",
   "Tap the screen on an object that isn't in the center and press halfway: it focuses there.",
   "Look through the viewfinder and drag your thumb on the screen to move the frame.",
   "Try Wide with several objects at different distances. Which one does the camera pick?",
   "With AF-C, choose Lock-on AF and follow something that moves."
  ],
  mission:"Put three objects at different distances on a table. Without moving the camera, take three photos, focusing on a different one each time with Flexible Spot. It's your first lesson in directing the eye of whoever looks at the photo."
 },
 eyeaf:{title:"Eye AF: sharp eyes in portraits", sub:"The center button on the wheel",
  evf:["A","AF-C","EYE AF","50 mm"],
  goal:"Take portraits with the eyes perfectly in focus, because that's the first thing anyone looks at.",
  body:`
<p>In a portrait, if the eyes aren't sharp, the photo feels wrong even if everything else is fine. The α6500 has <b>Eye AF</b>: it finds the eye and focuses there.</p>
<p>Out of the box it's on the <b>center button of the wheel</b>. Here's how to use it:</p>
<ol>
<li>Point at the person's face.</li>
<li><b>Press and hold</b> the center button. A small frame appears over the eye.</li>
<li>Without letting go, take the photo.</li>
</ol>
<p>It works best in <b>AF-C</b>, because it follows the eye if the person moves a little.</p>
<p>It struggles with sunglasses, hair over the eyes, strong backlight, low light or closed eyes. If it doesn't detect the eye, it focuses on the face.</p>
<p class="muted">If the center button does nothing, someone changed what it does. Set it back in {{MENU › Camera Settings2 › Custom Key(Shoot.) › Center Button › Eye AF}}.</p>`,
  steps:[
   "Dial on P, focus mode AF-C.",
   "Point at a person 1.5 to 2 meters away with the zoom at 50 mm.",
   "Hold the center button and wait for the frame over the eye.",
   "Without letting go of the center button, take the photo.",
   "Zoom in on the photo in [[▶︎]] and check that the eyelashes look sharp."
  ],
  mission:"Portrait by a window: the person side-on to the light, zoom at 50 mm, Eye AF. Take ten photos while they talk and move. Count how many have a sharp eye."
 },
 manual:{title:"Manual focus with peaking", sub:"When autofocus gets confused",
  evf:["MF","PEAKING: MID","🔍"],
  goal:"Focus by hand when autofocus can't: through glass, at night or very close up.",
  body:`
<p>Choose {{Focus Mode › Manual Focus}}. Now the <b>lens ring focuses</b> instead of zooming (zoom stays on the W/T lever).</p>
<p>Two aids make it easy:</p>
<ul>
<li><b>MF Assist:</b> when you turn the ring, the image enlarges so you can see the detail. Press the shutter button halfway to go back to the full view.</li>
<li><b>Peaking:</b> paints the edges that are in focus with color. Turn it on in {{MENU › Camera Settings1 › Peaking Level › Mid}} and choose the color in {{Peaking Color}} (red or yellow show up well).</li>
</ul>
<h3>The AF/MF shortcut</h3>
<p>With the lever on the back set to <b>AF/MF</b>, the [[AF/MF·AEL]] button switches from autofocus to manual while you hold it. Great for a quick touch-up.</p>
<p class="muted">The 16-50 can't focus closer than about 25 cm (at 16 mm) or 30 cm (at 50 mm). If you're closer than that, no focus mode will work.</p>`,
  steps:[
   "Turn on peaking at level Mid and color Red.",
   "Set the focus mode to MF.",
   "Turn the ring slowly on a textured object and watch the colored edges appear.",
   "Press the shutter button halfway to leave the enlarged view, and take the photo.",
   "Go back to AF-S and try the shortcut: lever on AF/MF, hold the button and turn the ring."
  ],
  mission:"Photograph something through a window with raindrops, a fence or a thin curtain. First in autofocus (you'll see it focuses on the glass), then in manual, focusing on what's behind."
 }
});

Object.assign(ESCUELA_EN.units, {3:{week:"", title:"Light and exposure"}});
Object.assign(ESCUELA_EN.lessons, {
 luz:{title:"Learn to see light", sub:"Direction, quality and time of day",
  evf:["☀ SIDE","BACKLIGHT","GOLDEN HOUR"],
  goal:"Notice the light before you touch any setting, because light decides the photo more than the camera does.",
  body:`
<p>You already know how to compose. The next leap isn't in the camera: it's in <b>seeing the light</b>. Before you raise the camera, always ask yourself: <b>where is the light coming from, and what is it like?</b></p>
<h3>Direction</h3>
<div class="table-wrap"><table>
<tr><th>Light</th><th>What it does</th></tr>
<tr><td>Front</td><td>Lights everything evenly. Flat, no depth. Safe, but boring.</td></tr>
<tr><td>Side</td><td>Creates shadows that give shape and texture. The favorite for portraits with character, food and objects.</td></tr>
<tr><td>Backlight</td><td>Silhouettes, glowing hair, atmosphere. You have to decide whether you want a silhouette or a well-exposed face (lessons “Brighter or darker” and “Low light and flash”).</td></tr>
<tr><td>Overhead</td><td>Midday sun from above: hard shadows under the eyes. Look for shade.</td></tr>
</table></div>
<h3>Quality</h3>
<p><b>Hard:</b> a small or distant source (direct sun, a bare bulb). Shadows with sharp edges. <b>Soft:</b> a large source (overcast sky, open shade, a big window). Gentle shadows, flattering skin.</p>
<h3>Time of day</h3>
<p>The <b>golden hour</b> (the first and last hour of sunlight) gives warm, low, side light. The <b>blue hour</b> (just after sunset) gives deep blue skies with the city lights on.</p>
<div class="callout c-iphone"><span class="eyebrow">Unlike the iPhone</span><p>The iPhone combines several photos to brighten shadows and darken skies, so everything looks “well lit.” The α6500 takes a single photo: you'll see stronger contrast and shadows. That's not a flaw, it's the real light, and learning to use it is what will make your photos different from a phone's.</p></div>`,
  steps:[
   "Sit by a window and watch how the light falls on your hand as you turn it.",
   "Ask someone to stand facing the window, then sideways, then with their back to it. Watch their face in each position.",
   "Go outside at midday and find open shade (under a doorway or a big tree). Compare someone's face in the sun and in the shade.",
   "Look at the sky at sunset every 10 minutes for half an hour and notice how the color of the light changes."
  ],
  mission:"<b>Four lights, one object.</b> A piece of fruit or a mug by a window: light from the front, from the side, from behind and in shade. Same settings for all four photos (A mode, F5.6). Only the light changes. Which one has the most depth?"
 },
 triangulo:{title:"The exposure triangle", sub:"Aperture, shutter speed and ISO",
  evf:["P","1/125","F5.6","ISO AUTO"],
  goal:"Understand the three ways the camera can get light, and the price each one pays.",
  body:`
<p>A photo is light reaching the sensor. There are three keys that control how much gets there, and each one changes something else in the photo:</p>
<div class="table-wrap"><table>
<tr><th>Key</th><th>What it is</th><th>More light</th><th>Side effect</th></tr>
<tr><td>Aperture (F)</td><td>The size of the opening in the lens.</td><td>Lower F-number</td><td>Blurrier background</td></tr>
<tr><td>Shutter speed</td><td>How long the shutter stays open.</td><td>Longer time</td><td>Anything moving comes out blurry</td></tr>
<tr><td>ISO</td><td>How much the sensor amplifies the light.</td><td>Higher number</td><td>More noise (grain)</td></tr>
</table></div>
<p>Think of filling a glass under the tap: you can open the tap more (aperture), leave it running longer (shutter speed) or use a smaller glass (ISO). All three fill the glass.</p>
<p>Photographers talk about <b>stops</b>: one stop is double or half the light. 1/250 to 1/125 is one stop. ISO 400 to 800 is one stop. F5.6 to F4 is one too.</p>
<h3>Who decides what</h3>
<div class="table-wrap"><table>
<tr><th>Mode</th><th>You choose</th><th>The camera chooses</th></tr>
<tr><td>AUTO</td><td>Nothing</td><td>Everything</td></tr>
<tr><td>P</td><td>ISO and style</td><td>Aperture and shutter speed</td></tr>
<tr><td>A</td><td>Aperture</td><td>Shutter speed</td></tr>
<tr><td>S</td><td>Shutter speed</td><td>Aperture</td></tr>
<tr><td>M</td><td>Both</td><td>Nothing (or the ISO, if it's on AUTO)</td></tr>
</table></div>
<p>Open the simulator and play before you touch the camera. Change the scene and the mode, and watch what the camera decides.</p>`,
  steps:[
   "In the simulator, P mode: change the scene from Sun to Night and watch how the three values change.",
   "On the camera, mode dial on P. Press halfway and read the bottom of the screen: shutter speed, F and ISO.",
   "Point at a bright area and then at a dark one. Watch how the numbers change.",
   "In P, turn the control dial with the shutter button half-pressed: the P becomes P* and you change the aperture/shutter-speed pair without changing the brightness."
  ],
  mission:"Light diary: in P, write down the shutter speed, F and ISO the camera picks in four places (direct sun, shade, indoors at home and at night). You'll see that at night everything shoots up: slow shutter speed and high ISO."
 },
 apertura:{title:"Aperture and A mode", sub:"Blurry background or everything sharp",
  evf:["A","F5.6","50 mm","ISO AUTO"],
  goal:"Control how much of the photo is sharp: only the subject, or everything from front to back.",
  body:`
<p>Turn the mode dial to <b>A</b> (Aperture Priority). With the <b>control dial</b> on top you choose the F-number and the camera sets the shutter speed.</p>
<ul>
<li><b>Low F-number</b> (F3.5 to F5.6): big opening, lots of light, <b>shallow depth of field</b>: the subject sharp and the background blurred. Ideal for portraits.</li>
<li><b>High F-number</b> (F8 to F11): small opening, <b>everything sharp</b>. Ideal for landscapes and groups.</li>
</ul>
<h3>What you should know about your lens</h3>
<p>The 16-50 is <b>F3.5–5.6</b>: the lowest F depends on the zoom. At 16 mm it reaches F3.5, but at 50 mm only F5.6. For the blurriest background possible with this lens, the recipe is:</p>
<ol>
<li>Zoom to <b>50 mm</b> and the lowest F possible (F5.6).</li>
<li><b>Get close</b> to the subject (1 to 1.5 m for a head-and-shoulders portrait).</li>
<li>Keep the background <b>far</b> from the subject (several meters).</li>
</ol>
<p>Distance matters as much as aperture. A background right behind the person never blurs much.</p>
<p>The lens is sharpest around <b>F8</b>. From F16 on, the image gets a little softer because of diffraction.</p>
<div class="callout c-warn"><span class="eyebrow">If a number blinks</span><p>If the shutter speed blinks on screen, the camera can't make up for the aperture you chose (too much or too little light). Change the aperture or the ISO.</p></div>`,
  steps:[
   "In the simulator, A mode: move the aperture from F5.6 to F22 with the zoom at 50 mm and watch the background.",
   "On the camera, mode dial on A and ISO on AUTO.",
   "Zoom to 50 mm and turn the control dial to F5.6.",
   "Photograph a mug or a flower from one meter away with the background far behind.",
   "Without moving, go up to F16 and do it again."
  ],
  mission:"<b>Creamy background.</b> A head-and-shoulders portrait at 50 mm and F5.6, with the person several meters from the wall or trees behind them. Then the same photo with the person right against the wall. Compare."
 },
 velocidad:{title:"Shutter speed and S mode", sub:"Freeze or paint motion",
  evf:["S","1/1000","1/15","STEADYSHOT"],
  goal:"Decide whether motion comes out frozen or as a trail, and avoid shaky photos.",
  body:`
<p>Turn the mode dial to <b>S</b> (Shutter Priority). With the <b>control dial</b> you choose the shutter speed and the camera sets the aperture.</p>
<div class="table-wrap"><table>
<tr><th>Shutter speed</th><th>Result</th></tr>
<tr><td>1/1000 or faster</td><td>Freezes splashes, jumps and sports.</td></tr>
<tr><td>1/500</td><td>Freezes kids and pets running.</td></tr>
<tr><td>1/250</td><td>People walking come out sharp.</td></tr>
<tr><td>1/60 to 1/125</td><td>People standing still, everyday use.</td></tr>
<tr><td>1/15 to 1/2</td><td>Silky water, light trails. You need to rest the camera on something.</td></tr>
</table></div>
<h3>Camera shake or subject motion</h3>
<p>If the <b>whole</b> photo is blurry, the camera moved (camera shake). If only the moving thing is blurry, it's the subject. Rule: without stabilization, don't go slower than <b>1 / (mm × 1.5)</b>: at 50 mm, about 1/80.</p>
<p>Your α6500 has <b>SteadyShot</b> (stabilization inside the body) and the lens has its own. Together they let you go a few stops slower with still subjects. Make sure it's on: {{MENU › Camera Settings2 › SteadyShot › On}}. Turn it off only when you use a tripod.</p>
<p><b>Panning:</b> at 1/30, follow a cyclist with the camera while you shoot. The cyclist comes out sharp and the background in streaks.</p>
<div class="callout c-warn"><span class="eyebrow">If the F-number blinks</span><p>No aperture can make up for that shutter speed. In low light, raise the ISO or choose a slower shutter speed.</p></div>`,
  steps:[
   "In the simulator, S mode: set 1/2000 and then 1/15 and watch the cyclist.",
   "On the camera, mode dial on S, ISO on AUTO.",
   "Check that SteadyShot is on.",
   "Photograph someone walking at 1/500 and at 1/15.",
   "Rest the camera on a table and find the slowest shutter speed that still comes out sharp."
  ],
  mission:"<b>Water.</b> A faucet or a fountain: one photo at 1/1000 (frozen drops) and another at 1/15 or slower, with the camera resting on something (silky water). Use the 2-second self-timer if you have somewhere to rest it."
 },
 iso:{title:"ISO without fear", sub:"When to raise it and how far",
  evf:["ISO 100","ISO 6400","AUTO"],
  goal:"Use ISO to rescue photos in low light, knowing how much noise you're willing to accept.",
  body:`
<p>Press the <b>right side</b> of the control wheel ([[ISO]]). It goes from <b>ISO 100</b> to <b>51200</b>, or <b>AUTO</b>.</p>
<ul>
<li><b>100–400:</b> daytime, best quality.</li>
<li><b>800–3200:</b> indoors and sunset. Looks very clean on this camera.</li>
<li><b>6400:</b> night. Some grain, but acceptable.</li>
<li><b>12800 or more:</b> emergencies. Better a grainy photo than a shaky one.</li>
</ul>
<p><b>ISO AUTO</b> is your best friend at first: out of the box it moves between 100 and 6400. You can change that range: with ISO AUTO selected, press the right side of the wheel and set the maximum and minimum.</p>
<p>You can also tell the camera when to start raising the ISO with {{MENU › Camera Settings1 › ISO AUTO Min. SS}}. For kids and pets, choose “Faster.”</p>
<p class="muted">A trick for still scenes at night: the Multi Frame NR setting (in the ISO list) takes several photos and combines them to reduce noise. It only works with JPEG.</p>`,
  steps:[
   "Press ISO (right side of the wheel) and scroll through the values.",
   "Choose ISO AUTO and press the right side to see the minimum and maximum range.",
   "In the simulator, Indoors scene, A mode: switch between ISO 100 and AUTO and watch the shutter speed."
  ],
  mission:"Same scene indoors with the camera resting on something: ISO 100, 1600, 6400 and 25600. Zoom in on your phone. At which one does the grain start to bother you? That's your personal limit: set it as the ISO AUTO maximum."
 },
 compensacion:{title:"Brighter or darker", sub:"Exposure compensation, histogram and metering",
  evf:["A","±0.0","+0.7","HISTOGRAM"],
  goal:"Correct the brightness when the camera gets it wrong, and know how to tell if a photo is blown out.",
  body:`
<p>The camera tries to make everything a “medium” brightness. That's why snow or a white wall come out grayish, and a black cat comes out gray. You correct it with <b>exposure compensation</b>:</p>
<p>Press the <b>bottom side</b> of the wheel ([[±]]) and turn it: <b>+</b> brightens, <b>−</b> darkens. It goes from −5 to +5, in thirds of a stop. It works in P, A and S (in M, only with ISO AUTO). It isn't available in AUTO.</p>
<ul>
<li>Snow, beach, white background: <b>+0.7 to +1.3</b>.</li>
<li>Stage, black background, intense sunset: <b>−0.7 to −1.3</b>.</li>
</ul>
<h3>The histogram</h3>
<p>It's a graph of brightness: shadows on the left, highlights on the right. If the mountain hits the right edge, there are <b>blown-out</b> areas (white with no detail, and it can't be recovered). You see it by pressing [[DISP]]. If it doesn't appear, turn it on in {{MENU › Camera Settings2 › DISP Button › Monitor › Histogram}}.</p>
<h3>Metering</h3>
<p>{{MENU › Camera Settings1 › Metering Mode}}. <b>Multi</b> (the default) works well almost always. <b>Spot</b> measures only the center: useful with backlight to expose a face correctly.</p>
<p>With the lever on <b>AEL</b>, the [[AF/MF·AEL]] button locks the exposure while you hold it: meter on the face, hold, recompose and shoot.</p>`,
  steps:[
   "Mode dial on A. Press the bottom side of the wheel and turn to +1.0. Watch the screen get brighter.",
   "Go back to 0.0 (don't forget this: compensation stays set).",
   "Press [[DISP]] until you see the histogram. If it doesn't appear, turn it on in the menu.",
   "Point at a very bright window and watch the histogram hit the right edge."
  ],
  mission:"Photograph something white (a sheet of paper or a wall) in A without compensation: it will come out gray. Do it again at +1.0. Then something black at 0 and at −1.0."
 },
 manualm:{title:"M mode: you decide everything", sub:"The exposure scale",
  evf:["M","1/125","F8","ISO 100","±0.0"],
  goal:"Set aperture and shutter speed at the same time, using the scale on the screen as a guide.",
  body:`
<p>Turn the mode dial to <b>M</b>. Out of the box:</p>
<ul>
<li><b>Control wheel</b> (back): shutter speed.</li>
<li><b>Control dial</b> (top): aperture.</li>
</ul>
<p>If the ISO is fixed, a scale marked <b>MM</b> appears with a number: <b>0.0</b> is what the camera thinks is correct, <b>+</b> will come out brighter, <b>−</b> darker. The method:</p>
<ol>
<li>Choose the aperture for the depth of field you want.</li>
<li>Choose the shutter speed for the motion.</li>
<li>Adjust the ISO (or one of the other two) until the scale is close to 0.</li>
</ol>
<p><b>M with a safety net:</b> set ISO to AUTO. You choose aperture and shutter speed, and the camera adjusts the ISO. Very useful for sports or kids: a fixed fast shutter speed and a wide-open aperture.</p>
<h3>When to use M</h3>
<ul>
<li>When you want every photo in a series to have the same brightness (panoramas, product photos).</li>
<li>At night or with flash.</li>
<li>When the camera gets fooled by very bright or very dark backgrounds.</li>
</ul>
<p class="muted">If you prefer it the other way around (aperture on the back, shutter speed on top): {{MENU › Camera Settings2 › Dial/Wheel Setup}}.</p>`,
  steps:[
   "In the simulator, M mode: set F8 and 1/125, and raise and lower the ISO until the mark sits at 0.",
   "On the camera, mode dial on M, ISO on 100.",
   "Turn the back wheel (shutter speed) and the top dial (aperture) until you see 0.0 on the scale.",
   "Try ISO AUTO in M and watch the scale disappear and the ISO change on its own."
  ],
  mission:"At sunset: in M, F8 and ISO 100, adjust the shutter speed until you reach 0.0. Then take one at −1 and another at +1. Often the best is the −1, with richer colors."
 },
 decidir:{title:"From idea to settings", sub:"Think like a photographer before you shoot",
  evf:["WHAT?","MOVING?","SHARP?","LIGHT?","FEELING?"],
  goal:"Go from “which button do I press” to “what do I want to say,” and let the settings follow from that decision.",
  body:`
<p>So far you've learned what each setting does. A photographer works the other way around: <b>first they decide what they want to say</b>, then they choose the settings that get it. These five questions work for any photo. With practice they take three seconds.</p>
<div class="table-wrap"><table>
<tr><th>Question</th><th>Decides</th></tr>
<tr><td>1. What matters most?</td><td>Where you focus (area, Eye AF) and where you place it in the frame.</td></tr>
<tr><td>2. Is it moving? Frozen or with motion?</td><td>The shutter speed.</td></tr>
<tr><td>3. What should be sharp: just the subject or everything?</td><td>The aperture, the zoom and your distance.</td></tr>
<tr><td>4. Is there enough light for all that?</td><td>The ISO, resting the camera or using flash.</td></tr>
<tr><td>5. What feeling do I want?</td><td>The brightness (compensation) and the color (white balance, style).</td></tr>
</table></div>
<h3>How to choose the mode</h3>
<ul>
<li>If <b>motion</b> is what matters (question 2): <b>S</b> mode.</li>
<li>If <b>what's sharp</b> is what matters (question 3): <b>A</b> mode.</li>
<li>If <b>both</b> matter at once: <b>M with ISO AUTO</b>.</li>
<li>If nothing is moving and the background doesn't matter: <b>A at F8</b> is a good starting point.</li>
</ul>
<div class="table-wrap"><table>
<tr><th>I want to…</th><th>Priority</th><th>Settings</th></tr>
<tr><td>Isolate a person</td><td>Aperture</td><td>A, F5.6 at 50 mm, close to them and far from the background</td></tr>
<tr><td>Show the whole landscape clearly</td><td>Aperture</td><td>A, F8–F11, 16 mm</td></tr>
<tr><td>Freeze a jump</td><td>Shutter speed</td><td>S, 1/1000, AF-C, burst</td></tr>
<tr><td>Silky water</td><td>Shutter speed</td><td>S, 1/8 or slower, camera resting on something</td></tr>
<tr><td>A child running with a blurry background</td><td>Both</td><td>M, F5.6, 1/1000, ISO AUTO</td></tr>
<tr><td>The mood of a candlelit dinner</td><td>Light</td><td>A, F3.5 at 16 mm, high ISO, no flash, warm white balance</td></tr>
<tr><td>A silhouette at sunset</td><td>Brightness</td><td>Compensation −1 to −2, metering on the sky</td></tr>
</table></div>
<h3>The planner</h3>
<p>Describe the photo you want and see which settings it suggests and why. You'll also find it in the Recipes tab.</p>
<div data-widget="planner"></div>
<div class="callout c-iphone"><span class="eyebrow">When a photo doesn't work</span><p>Don't blame the camera: go back to the five questions and find the one you answered without thinking. Write it down in your notebook.</p></div>`,
  steps:[
   "Repeat the five questions out loud until you know them by heart.",
   "Use the planner with three situations from your life: your home, your work and a walk.",
   "Today, before each photo, answer the five questions in your head.",
   "In your notebook, for three photos, write what you wanted and which setting achieved it."
  ],
  mission:"<b>Three intentions, one subject.</b> Pick a person or a place and take three photos with different intentions: one that isolates it (blurry background), one that places it in its surroundings (everything sharp) and one that shows motion or the passing of time. Before each one, say out loud what you want and which setting gets it."
 }
});

Object.assign(ESCUELA_EN.units, {4:{week:"Week 4", title:"Color and editing"}, 5:{week:"Week 5", title:"Real situations"}});
Object.assign(ESCUELA_EN.lessons, {
 balance:{title:"White balance", sub:"Make white come out white",
  evf:["AWB","☀ 5500K","💡 3200K"],
  goal:"Understand why photos come out yellow or blue, and fix it or use it on purpose.",
  body:`
<p>Every light has a color: the bulb at home is orange, shade is bluish, midday is neutral. Your eyes correct it without you noticing; the camera has to guess. That's <b>white balance</b> (WB), and it's measured in degrees <b>Kelvin</b>.</p>
<p>Try it here: pick the real light in the scene, then the camera setting. The mug is white in real life.</p>
<div data-widget="wb"></div>
<p>It's in {{MENU › Camera Settings1 › White Balance}} and in [[Fn]]. Options:</p>
<ul>
<li><b>Auto (AWB):</b> gets it right almost every time outdoors.</li>
<li><b>Daylight, Shade, Cloudy, Incandescent, Fluor., Flash:</b> presets for each kind of light.</li>
<li><b>C.Temp./Filter:</b> you choose the Kelvin yourself.</li>
<li><b>Custom:</b> you photograph something white under that light and the camera learns its color. The most accurate.</li>
</ul>
<p>With any setting, press the right side of the wheel to fine-tune toward amber, blue, green or magenta.</p>
<p><b>Creative trick:</b> at sunset, Auto “corrects” the orange and dulls it. Choose <b>Daylight</b> or <b>Cloudy</b> and the sunset comes out warm, the way you saw it.</p>`,
  steps:[
   "In the demo: Bulb light with the Daylight setting. Then switch to Incandescent.",
   "On the camera, open White Balance from [[Fn]].",
   "Under a lamp at home, take one photo in Auto and another in Incandescent.",
   "Try fine-tuning: press the right side and move toward amber."
  ],
  mission:"The same scene under a yellow lamp: Auto, Incandescent and Daylight. Which one do you like best? There's no right answer: sometimes the warm color is the whole point."
 },
 estilos:{title:"Creative Style and DRO", sub:"The camera's “filter”",
  evf:["STYLE: STANDARD","DRO AUTO"],
  goal:"Adjust the look of the colors in the camera, like a filter but done right.",
  body:`
<p>{{MENU › Camera Settings1 › Creative Style}}. Pick a style and, with the sides of the wheel, adjust <b>Contrast</b>, <b>Saturation</b> and <b>Sharpness</b> from −3 to +3.</p>
<div class="table-wrap"><table>
<tr><th>Style</th><th>What it's for</th></tr>
<tr><td>Standard</td><td>Everyday use.</td></tr>
<tr><td>Vivid</td><td>More color and contrast: flowers, skies, the sea.</td></tr>
<tr><td>Neutral</td><td>Soft colors; ideal if you're going to edit.</td></tr>
<tr><td>Portrait</td><td>Softer, more natural skin.</td></tr>
<tr><td>Landscape</td><td>Rich greens and blues, crisp.</td></tr>
<tr><td>Sunset</td><td>Brings out reds and oranges.</td></tr>
<tr><td>Black &amp; White / Sepia</td><td>Monochrome. Raise the contrast for a classic look.</td></tr>
</table></div>
<p>There are also Clear, Deep, Light, Night Scene and Autumn leaves.</p>
<h3>DRO: rescuing shadows</h3>
<p>{{MENU › Camera Settings1 › DRO/Auto HDR › D-Range Opt.}}. On <b>Auto</b> it brightens the shadows in high-contrast scenes, like a backlit shot. Leave it on Auto.</p>
<p class="muted">Styles only affect JPEG photos. “Picture Effect” (Toy Camera, Partial Color, Miniature, Watercolor…) is more extreme and lives in {{MENU › Camera Settings1 › Picture Effect}}.</p>`,
  steps:[
   "Open Creative Style and scroll through the list with the wheel.",
   "Choose Black & White and raise the contrast to +2.",
   "Check that DRO is set to Auto.",
   "Go back to Standard when you're done."
  ],
  mission:"The same landscape or street in Standard, Vivid, and Black & White with contrast +2. Pick your favorite for everyday use."
 },
 rawjpeg:{title:"JPEG or RAW", sub:"Image quality and size",
  evf:["JPEG EXTRA FINE","RAW+J","24M"],
  goal:"Choose the right file type for now and know when to move to RAW.",
  body:`
<p>{{MENU › Camera Settings1 › Quality}}:</p>
<ul>
<li><b>JPEG Extra fine / Fine / Standard:</b> a photo ready to share, with the style and white balance already applied. Extra fine is the best quality.</li>
<li><b>RAW:</b> the “digital negative”: all the sensor data, unprocessed. It lets you recover much more when editing (highlights, shadows, white balance), but <b>you have to edit it</b> before sharing, and it takes up much more space.</li>
<li><b>RAW &amp; JPEG:</b> saves both. The best of both worlds, at the cost of space.</li>
</ul>
<p>Since you'll move photos with the app and edit them in the iPhone's <b>Photos</b> app, use <b>JPEG Extra fine</b>: the app transfers JPEGs, not RAW files. If someday you move photos with a card reader, try <b>RAW &amp; JPEG</b>: the Photos app also opens and edits Sony RAW files, with much more room to recover skies and shadows.</p>
<p>Leave <b>Image Size</b> on <b>L: 24M</b>, the largest. This camera's shape is <b>3:2</b>, longer than the iPhone's 4:3.</p>
<p class="muted">With RAW, Superior Auto can't combine several shots, and ISO Multi Frame NR isn't available.</p>`,
  steps:[
   "Set Quality to JPEG Extra fine.",
   "Check that Image Size is set to L.",
   "Look on the screen for how many photos fit on your card (the number at the top)."
  ],
  mission:"Find a scene with a bright sky and shadows. Take a photo, move it to the iPhone and try to recover the sky and brighten the shadows in Photos. You'll see how much room a JPEG has, and why it pays to get the exposure right in the camera."
 },
 editar:{title:"Pick and edit on the iPhone", sub:"Culling and the Photos app",
  evf:["♡ FAVORITES","CROP","HIGHLIGHTS","SHADOWS"],
  goal:"Keep only your best photos and give them a simple, clean finish in Photos.",
  body:`
<p>Professional photographers show one out of every twenty or fifty photos they take. <b>Choosing is half of photography.</b></p>
<h3>Choose in three passes</h3>
<ol>
<li><b>Toss</b> without overthinking: out of focus, blurry, eyes closed.</li>
<li>From each group of similar photos, <b>keep one</b> and mark it with the heart (♡ Favorite).</li>
<li>Of your favorites, ask yourself: <b>does this photo say what I wanted?</b> If you're unsure, take the heart away.</li>
</ol>
<h3>Edit in Photos, in this order</h3>
<p>Open the photo and tap <b>Edit</b>. Go from the general to the specific:</p>
<ol>
<li><b>Crop:</b> straighten the horizon and adjust the framing. With 24 megapixels you can crop quite a bit, but if you crop a lot, get closer next time.</li>
<li><b>Exposure:</b> overall brightness.</li>
<li><b>Highlights</b> (lower them to recover a sky) and <b>Shadows</b> (raise them to see a face better).</li>
<li><b>Contrast</b> and <b>Black Point</b>: add punch without looking fake.</li>
<li><b>Warmth</b> and <b>Tint</b>: the color of the light (lesson “White balance”).</li>
<li><b>Vibrance</b> rather than Saturation: livens up dull colors without turning skin orange.</li>
<li><b>Definition</b> or <b>Sharpness</b>: a little, never all the way.</li>
</ol>
<p><b>Consistent series:</b> on an edited photo tap the <b>•••</b> menu › Copy Edits, and on another, ••• › Paste Edits. <b>Everything can be undone</b> with Revert.</p>
<div class="callout c-iphone"><span class="eyebrow">Class rule</span><p>Edit to get closer to what you saw or felt, not to rescue a poorly thought-out photo. If you have to edit a lot, write in your notebook which camera setting would have avoided it.</p></div>
<p class="muted">Setting names may vary slightly depending on your iOS version.</p>`,
  steps:[
   "Move 20 photos from the last few days to the iPhone.",
   "Do the three passes and keep 5 favorites.",
   "Edit one photo following the seven steps in order.",
   "Compare before and after by tapping the photo while you edit.",
   "Copy that photo's edits and paste them onto a similar one."
  ],
  mission:"Choose 3 photos and edit them so they look like the same series: similar brightness, contrast and color. Put them together in an album and check that they look like a set."
 },
 rafaga:{title:"Burst and self-timer", sub:"Drive mode",
  evf:["Hi+","AF-C","⏱ 10 s","⏱ 2 s"],
  goal:"Catch the exact moment in action, and get yourself in the photos too.",
  body:`
<p>Press the <b>left side</b> of the wheel (Drive Mode).</p>
<div class="table-wrap"><table>
<tr><th>Mode</th><th>What it's for</th></tr>
<tr><td>Single Shooting</td><td>One photo per press. The normal one.</td></tr>
<tr><td>Continuous Shooting: Hi+</td><td>Up to 11 photos per second. The screen doesn't show the live scene between shots.</td></tr>
<tr><td>Continuous Shooting: Hi / Mid / Lo</td><td>A bit slower, but you see the scene live: easier to follow your subject.</td></tr>
<tr><td>Self-timer 10 / 5 / 2 sec.</td><td>10 or 5 sec. to get into the photo. 2 sec. so you don't shake the camera when you press.</td></tr>
<tr><td>Self-timer(Cont)</td><td>After the countdown, it takes several photos: perfect for groups (someone always blinks).</td></tr>
<tr><td>Bracket</td><td>Several photos with different brightness, white balance or DRO. For tricky scenes.</td></tr>
</table></div>
<p>For action, combine burst with <b>AF-C</b>: the camera refocuses between shots. Use Hi if you want to see your subject while you shoot.</p>
<p>After a burst, the access lamp blinks while it saves. You can keep shooting.</p>
<p class="muted">You can also use the iPhone as a remote control with Imaging Edge Mobile.</p>`,
  steps:[
   "Press the left side of the wheel and choose Continuous Shooting: Hi.",
   "Set AF-C and follow someone moving while you hold the shutter button down.",
   "Choose Self-timer 10 sec., rest the camera on something and get into the photo.",
   "Go back to Single Shooting when you're done."
  ],
  mission:"<b>The jump.</b> Someone jumps: S mode at 1/1000, AF-C, Continuous Shooting: Hi. Pick the best photo of the bunch. Then a group photo with Self-timer(Cont) at 10 sec. and 3 shots."
 },
 pocaluz:{title:"Low light and flash", sub:"Night without fear",
  evf:["A","F3.5","ISO 6400","⚡ SLOW SYNC."],
  goal:"Take sharp photos in low light, and use the flash without the photo looking like a flash photo.",
  body:`
<h3>Without flash, in this order</h3>
<ol>
<li><b>Open the aperture:</b> zoom to 16 mm to get F3.5.</li>
<li><b>Raise the ISO:</b> up to 6400 without fear.</li>
<li><b>Rest the camera</b> on something and trust SteadyShot for still subjects.</li>
<li><b>Superior Auto</b> or {{SCN › Hand-held Twilight}}: they take several photos and combine them, with less noise.</li>
</ol>
<h3>The flash</h3>
<p>It doesn't pop up on its own: press the [[⚡]] button on the back to raise it. To put it away, push it down with your finger. Modes are in {{MENU › Camera Settings1 › Flash Mode}}:</p>
<ul>
<li><b>Flash Off</b> / <b>Autoflash</b> / <b>Fill-flash</b> (always fires).</li>
<li><b>Fill-flash in daylight:</b> with backlight, it lights up a face in shadow. One of the best uses of the flash.</li>
<li><b>Slow Sync.:</b> the flash lights the person and a slow shutter speed picks up the lights in the background. The night portrait with the city behind.</li>
<li><b>Rear Sync.:</b> the flash fires at the end, for natural motion trails.</li>
</ul>
<p>With {{MENU › Camera Settings1 › Flash Comp.}} you lower its power (−1 usually looks more natural). Stay <b>more than 1 meter</b> from your subject. The flash isn't used for video.</p>
<p class="muted">A trick many owners of this camera use: with the flash up, gently tilt it back with a finger so the light bounces off a white ceiling. The light comes out much softer.</p>`,
  steps:[
   "Raise the flash with the [[⚡]] button.",
   "Photograph a person indoors with Fill-flash, then without flash at ISO 3200.",
   "Try Flash Comp. at −1.",
   "Put the flash away by pushing it down."
  ],
  mission:"A night portrait with city lights or a tree of lights behind: one photo with normal flash and another with Slow Sync., with the camera resting on something and asking the person not to move."
 },
 video:{title:"Video basics", sub:"4K, shutter speed and touch focus",
  evf:["● REC","4K 30p","1/60","AF-C"],
  goal:"Record sharp clips with a cinematic look.",
  body:`
<p>The red [[MOVIE]] button records from any mode. Press it again to stop. That way it records with automatic settings.</p>
<p>To control exposure, turn the dial to <b>Movie</b> (the film-strip icon). There you choose P, A, S or M for video in {{MENU › Camera Settings2 › Movie/S&amp;Q Motion}}.</p>
<h3>Recommended settings</h3>
<ul>
<li>{{MENU › Camera Settings2 › File Format}}: <b>XAVC S 4K</b> for the best quality, or XAVC S HD for lighter files.</li>
<li>{{MENU › Camera Settings2 › Record Setting}}: <b>30p</b> for general use; <b>60p</b> (in HD) for smooth slow motion. 4K at 100M needs a U3 card.</li>
<li><b>Shutter speed = double the frame rate:</b> 1/60 for 30p, 1/125 for 60p. Motion looks natural, like in the movies.</li>
<li><b>AF-C</b> focus, and tap the screen to shift focus from one subject to another while you record.</li>
</ul>
<p>The screen tilts: recording from waist height or down at ground level gives shots very different from a phone's.</p>
<p class="muted">In strong sun, 1/60 can be too much light even at F22: ISO doesn't go below 100. Videographers use an ND filter (“sunglasses” for the lens, 40.5 mm thread). Clips stop at about 30 minutes.</p>`,
  steps:[
   "Press [[MOVIE]], record 10 seconds and stop.",
   "Turn the dial to Movie and choose the A exposure mode.",
   "Check File Format and Record Setting.",
   "While recording, tap the screen on a nearby object and then on a faraway one."
  ],
  mission:"A 15-second clip for social media: an object up close and a person in the background. Start focused on the object and, by tapping the screen, shift focus to the person."
 },
 personaliza:{title:"Make it yours", sub:"Fn menu, C buttons and memory",
  evf:["Fn","C1","C2","MR 1·2"],
  goal:"Set up the camera for the way you shoot, with your favorite settings one button away.",
  body:`
<h3>The Fn menu</h3>
<p>Choose which 12 settings appear when you press [[Fn]]: {{MENU › Camera Settings2 › Function Menu Set.}}. Put what you use most at the top.</p>
<h3>Custom buttons</h3>
<p>[[C1]], [[C2]], [[C3]], [[AF/MF·AEL]], the center button and three sides of the wheel can do whatever you want: {{MENU › Camera Settings2 › Custom Key(Shoot.)}}. First check what they do now. A suggestion to start with:</p>
<ul>
<li>[[C1]]: Focus Area.</li>
<li>[[C2]]: Focus Mode.</li>
<li>Center: Eye AF (as it already is).</li>
</ul>
<h3>Memories 1 and 2 on the dial</h3>
<p>Save a complete setup and bring it back by turning the dial to <b>1</b> or <b>2</b>. Set the camera up however you like and save it in {{MENU › Camera Settings1 › Memory}}, choosing 1 or 2.</p>
<p>Two memories that work really well:</p>
<ul>
<li><b>1 · Portrait:</b> A, F5.6, ISO AUTO, AF-C, Flexible Spot, Portrait style.</li>
<li><b>2 · Action:</b> S, 1/1000, ISO AUTO, AF-C, Zone, Continuous Shooting: Hi.</li>
</ul>
<p class="muted">If the camera ever does strange things and you don't know why: {{MENU › Setup › Setting Reset}} goes back to factory settings (without deleting your photos if you choose Camera Settings Reset).</p>`,
  steps:[
   "Open Function Menu Set. and change at least one item in the Fn menu.",
   "Check what C1, C2 and C3 do and assign them something useful.",
   "Set up your Memory 1 (Portrait) and save it.",
   "Set up your Memory 2 (Action) and save it.",
   "Turn the dial to 1 and to 2 and check that everything changes on its own."
  ],
  mission:"Go out for an hour using only your memories 1 and 2. Every time the situation changes, decide in a second which one fits. That's how the camera ends up set up your way."
 }
});

ESCUELA_EN.think = {
 "modos-enfoque":[
  ["A birthday party: your nephew runs toward you holding a balloon.","<b>AF-C</b>, Zone or Wide area, and continuous shooting. In AF-S the focus would stay where the boy was when you pressed halfway, and he’d come out blurry."],
  ["A plate of food at a restaurant.","<b>AF-S</b> with a small Flexible Spot on the most appetizing part. Nothing is moving and you want precision."]],
 "areas":[
  ["A portrait with the person on one side and a bright window on the other.","<b>Flexible Spot</b> on their face (or Eye AF). In Wide, the camera might pick the window frame, which has more contrast."],
  ["A dog running in the park.","<b>AF-C</b> with <b>Zone</b> or <b>Lock-on AF</b>, and continuous shooting. A small spot is hard to keep on something that moves fast."]],
 "eyeaf":[
  ["Two friends, one in front of the other, and you want both sharp.","Eye AF will focus on only one of them. Ask them to stand at the same distance from you, or stop down to <b>F8</b> for more depth."]],
 "manual":[
  ["A shop window at night, shooting through the glass.","Put the lens close to the glass to avoid reflections and use <b>MF with peaking</b>: autofocus would go for the glass or the reflected lights."]],
 "luz":[
  ["You want to photograph someone at noon in a plaza in full sun.","Take them into <b>open shade</b> (a doorway, a big tree): soft light and no harsh shadows on the eyes. If there’s no shade, put the sun behind them and use <b>Fill-flash</b> or +0.7 exposure compensation."],
  ["A cup of coffee, showing its texture and steam.","<b>Side light</b> from a window, or backlight so the steam shows. Avoid front light: it flattens everything."]],
 "triangulo":[
  ["A party at home with people dancing and not much light.","First, make sure they don’t come out blurry: a <b>shutter speed</b> of at least 1/125. Then a wide-open aperture (F3.5 at 16 mm) and let ISO rise as much as it needs. Some grain is better than a blurry photo."]],
 "apertura":[
  ["A landscape with a flower in the foreground and mountains in the background.","You want everything sharp: <b>A, F8–F11</b>, 16 mm, focusing about a third of the way into the scene (not on the flower or the mountains)."],
  ["A portrait on a street full of distracting people.","Isolate her: <b>50 mm, F5.6</b>, get close and find an angle where the crowd is far behind."]],
 "velocidad":[
  ["A fountain in a park.","First decide what you want to say. The power of the water? <b>1/1000</b>, frozen drops. The calm of the place? <b>1/8 or slower</b>, camera resting on something, silky water."],
  ["A kid rides past you on a bike.","<b>Panning</b>: S at 1/30, follow him with the camera while shooting a burst. He’ll be sharp and the background streaked, with a feeling of speed."]],
 "iso":[
  ["A museum with no flash allowed, in front of a dimly lit painting.","Open all the way (F3.5 at 16 mm), keep the shutter speed at 1/60 or faster by bracing your elbows, and let <b>ISO</b> climb to 6400. A little grain doesn’t matter; a blurry photo does."]],
 "compensacion":[
  ["Someone in a white shirt at the beach on a sunny day.","The camera will darken the scene because of all the white: <b>+0.7 to +1.0</b>. Check the histogram so the shirt doesn’t blow out."],
  ["A silhouette against the sunset.","You want the person black and the sky full of color: <b>−1 to −2</b>, pointing at the sky to meter."]],
 "manualm":[
  ["A concert with spotlights that keep changing color and brightness.","<b>M with ISO AUTO</b>: set 1/250 to freeze the musician and a wide-open F to let light in. The camera adjusts ISO every time the lights change."],
  ["Three photos to stitch into a panorama later.","<b>M</b> with everything fixed (F8, shutter speed and ISO), so all three have the same brightness and join without jumps."]],
 "decidir":[
  ["Your friend on a terrace at sunset, with the city lights coming on behind her.","What matters is her: Eye AF. Want the city recognizable? F8. Just pretty lights? F5.6 at 50 mm. Light is low: ISO AUTO. If her face is dark, <b>Fill-flash with Slow Sync.</b> at −1."],
  ["A market full of people, and you want to convey the bustle.","Movement leads: <b>S at 1/15–1/30</b> with the camera resting on something. The stalls come out sharp and the people as streaks. Focus on a stall."],
  ["Your grandmother’s hands while she cooks.","The hands are what matter: A at 50 mm, F5.6, up close, a small Flexible Spot on them. If they move fast, raise the ISO AUTO minimum shutter speed to “Faster”."]],
 "balance":[
  ["A candlelit dinner and you want it to feel intimate.","Don’t fully “correct” it: <b>Auto</b> already leaves a warm touch. If it comes out too orange, try Incandescent and fine-tune toward amber. The warmth of the light is the story."]],
 "rafaga":[
  ["A little girl blows out the candles on her cake.","<b>Continuous Shooting: Hi</b>, start shooting just before she blows and hold the shutter button down. Raise ISO so the shutter speed doesn’t drop below 1/125."]],
 "pocaluz":[
  ["A night portrait with the city lights behind.","Two options: <b>flash with Slow Sync.</b> (lit face, background with lights) or no flash, F3.5 and ISO 3200–6400, with the person next to a light source like a shop window."]]
};

ESCUELA_EN.gloss = [
 ["Aperture (F)","The size of the opening in the lens. Low F-number = more light and a blurrier background."],
 ["Shutter speed","How long light comes in. Fast (1/1000) freezes; slow (1/15) leaves streaks."],
 ["ISO","How much the camera amplifies the light. Higher = brighter, but with more grain."],
 ["Exposure","How much light the photo gets: whether it comes out bright, dark or just right."],
 ["Stop","Double or half the light. 1/250 → 1/125 is one stop."],
 ["Depth of field","The part of the photo that looks sharp, from front to back."],
 ["Exposure compensation (±)","Asking the camera for a brighter (+) or darker (−) photo than it calculates."],
 ["Histogram","A graph of brightness: shadows on the left, highlights on the right."],
 ["Blown out","An area so bright it turns white with no detail. It can’t be recovered."],
 ["White balance (WB)","The setting that makes white come out white, depending on the color of the light."],
 ["Kelvin (K)","The unit for the color of light: low = orange (light bulb), high = blue (shade)."],
 ["AF-S","Single-shot AF: focuses once and stays locked. For still subjects."],
 ["AF-C","Continuous AF: keeps following the subject. For movement."],
 ["MF","Manual focus, using the ring on the lens."],
 ["Eye AF","The camera finds and focuses on a person’s eye."],
 ["Peaking","Colors the edges that are in focus when you use manual focus."],
 ["Focus Area","The part of the frame where the camera looks for focus."],
 ["A mode","Aperture Priority: you choose the F-number and the camera picks the shutter speed."],
 ["S mode","Shutter Priority: you choose the shutter speed and the camera picks the F-number."],
 ["M mode","Manual Exposure: you choose aperture and shutter speed."],
 ["P mode","Program Auto: the camera picks aperture and shutter speed, you choose the rest."],
 ["Camera shake","A blurry photo because the camera moved when you took it."],
 ["SteadyShot","The camera’s image stabilizer. It reduces camera shake."],
 ["Panning","Following a moving subject with a slow shutter speed: the subject sharp, the background streaked."],
 ["RAW","A file with all the sensor data, unprocessed. More room when editing."],
 ["JPEG","A photo that’s already processed and ready to share."],
 ["Burst","Several photos in a row while you hold the shutter button down."],
 ["Focal length (mm)","The zoom: 16 mm sees wide, 50 mm brings things closer."],
 ["Hard / soft light","Hard: sharp-edged shadows (direct sun). Soft: diffuse shadows (overcast, window)."],
 ["Golden hour","The first and last hour of sunlight: warm, low, side light."]
];

ESCUELA_EN.recipes = [
 {t:"Portrait with a blurry background", evf:["A","F5.6","50 mm","ISO AUTO"], d:[["Mode","A, lowest F possible (F5.6 at 50 mm)"],["Focus","AF-C + Eye AF (center button)"],["Distance","Person 1.5–2 m away; background several meters behind"],["Style","Portrait"]], tip:"Look for open shade or side light from a window. Avoid direct sun on the face.", l:"eyeaf"},
 {t:"Landscape", evf:["A","F8","16 mm","ISO 100"], d:[["Mode","A, F8"],["ISO","100"],["Focus","AF-S, Flexible Spot a third of the way into the scene"],["Extra","Level via DISP, D-Range Optimizer: Auto, Landscape style"]], tip:"Put the horizon on a grid line, not in the middle.", l:"apertura"},
 {t:"Food and objects on the table", evf:["A","F5.6","35–50 mm","ISO AUTO"], d:[["Mode","A, F5.6"],["Zoom","35–50 mm, about 30–40 cm away"],["Focus","AF-S, Flexible Spot S on the most important part"],["Light","Window from the side; no flash"]], tip:"The lens can’t focus closer than 25–30 cm. If it won’t focus, back up a little.", l:"areas"},
 {t:"Kids and pets on the move", evf:["S","1/500","ISO AUTO","Hi"], d:[["Mode","S, 1/500 (1/1000 if they’re running)"],["Focus","AF-C, Zone or Lock-on AF"],["Drive","Continuous Shooting: Hi"],["ISO","AUTO"]], tip:"Get down to their height, with the screen tilted.", l:"rafaga"},
 {t:"Indoors in low light", evf:["A","F3.5","16 mm","ISO ≤6400"], d:[["Mode","A, F3.5 (zoom at 16 mm)"],["ISO","AUTO, maximum 6400"],["Focus","AF-S"],["Stability","Elbows tucked in or camera resting on something; SteadyShot on"]], tip:"Move closer to whatever light there is (a lamp, a window) instead of using direct flash.", l:"pocaluz"},
 {t:"Sunset and backlight", evf:["A","F8","−0.7","WB ☀"], d:[["Mode","A, F8, ISO 100"],["Exposure","−0.7 to −1.0"],["White balance","Daylight or Cloudy (not Auto)"],["Extra","D-Range Optimizer: Auto; Sunset style; Fill-flash if there’s a person"]], tip:"Check the histogram: it shouldn’t hit the right edge.", l:"balance"},
 {t:"City at night without a tripod", evf:["SCN","HAND-HELD TWILIGHT"], d:[["Easy option","SCN › Hand-held Twilight, or Superior Auto"],["Manual option","A, F3.5, ISO 3200–6400"],["Focus","AF-S on a light or a high-contrast edge"]], tip:"Lean against a wall or a lamppost and breathe out before you shoot.", l:"pocaluz"},
 {t:"Silky water", evf:["S","1/8","ISO 100","⏱ 2 s"], d:[["Mode","S, between 1/15 and 1/2"],["ISO","100"],["Stability","Camera resting on something + 2 s self-timer"],["Extra","Best in shade or at sunset"]], tip:"If the F-number blinks, there’s too much light: find shade or wait for the sun to go down.", l:"velocidad"},
 {t:"Group photo", evf:["A","F8","16–24 mm","⏱ 10 s ×3"], d:[["Mode","A, F8 so every face comes out sharp"],["Drive","Self-timer(Cont), 10 s, 3 images"],["Focus","AF-S on a face in the middle row"]], tip:"Camera at eye level or a bit higher, never from below.", l:"rafaga"},
 {t:"Video for social media", evf:["● REC","4K 30p","1/60","AF-C"], d:[["Mode","Mode dial on Movie, Aperture Priority exposure"],["Format","XAVC S 4K, 30p"],["Shutter speed","1/60 (double the frame rate)"],["Focus","AF-C, tap the screen to shift focus"]], tip:"Short 3–5 second shots, moving slowly.", l:"video"}
];

ESCUELA_EN.parts = {
 back:[
  {id:"visor", n:"Viewfinder", en:"Viewfinder", d:"A small, very high-quality screen. When you bring your eye close, the eye sensor turns off the rear monitor and turns the viewfinder on. You see exactly how the photo will come out, even in bright sun.", tip:"Attach the rubber eyepiece cup from the box: it blocks light and is more comfortable."},
  {id:"dioptria", n:"Diopter-adjustment dial", en:"Diopter-adjustment dial", d:"A little dial next to the viewfinder that adapts it to your eyesight. Turn it until the numbers in the viewfinder look sharp.", tip:"If you wear glasses, adjust it with them on or off, but always the same way."},
  {id:"flashbtn", n:"Flash pop-up button", en:"Flash pop-up button", d:"Raises the built-in flash. The flash never pops up on its own. To put it away, push it down with your finger.", tip:"Lesson “Low light and flash”: fill flash in backlight is its best use."},
  {id:"pantalla", n:"Monitor", en:"Monitor", d:"Shows the image, the menus and your photos. It tilts up and down. It’s touch-sensitive only for focusing: tap where you want focus. While you look through the viewfinder it works as a touch pad.", tip:"The menus aren’t touch: you use the wheel."},
  {id:"menu", n:"MENU button", en:"MENU button", d:"Opens all the camera settings, in tabs: Camera Settings1 and 2, Wireless, Playback, Setup and My Menu. It also takes you back.", tip:"My Menu (the star) keeps your favorite menu settings."},
  {id:"afmf", n:"AF/MF/AEL switch lever", en:"AF/MF/AEL switch lever", d:"With the lever on AF/MF, the button switches between autofocus and manual focus. On AEL, it locks exposure while you hold it. In playback, this button enlarges the photo.", tip:"Enlarging photos when you review them is the habit that improves your results the most."},
  {id:"movie", n:"MOVIE button", en:"MOVIE button", d:"Starts and stops video recording from any mode.", tip:"It sits on the edge, so it’s easy to press by accident. If you see a red REC, press it again."},
  {id:"fn", n:"Fn (Function) button", en:"Fn (Function) button", d:"A quick menu with 12 common settings: focus, ISO, white balance, style… When shooting, move around with the wheel. In playback, this button sends the photo to your phone.", tip:"Lesson “Make it yours”: you choose what appears in the Fn menu."},
  {id:"rueda", n:"Control wheel", en:"Control wheel", d:"Turn it to change values and press its sides like buttons. Top: DISP (screen information). Right: ISO. Bottom: exposure compensation (±). Left: Drive Mode (burst and self-timer).", tip:"In M mode, the wheel changes the shutter speed."},
  {id:"centro", n:"Center button", en:"Center button", d:"Confirms in menus. When shooting, by default it turns on Eye AF: hold it down to focus on a person’s eye.", tip:"Lesson “Eye AF: sharp eyes in portraits”."},
  {id:"c3", n:"C3 button / Delete button", en:"C3 button / Delete button", d:"When shooting, it’s a custom button (C3). In playback, it deletes the photo you’re looking at.", tip:"Deleted photos can’t be recovered."},
  {id:"play", n:"Playback button", en:"Playback button", d:"Shows your photos and videos. Press it again or press the shutter button halfway to go back to shooting.", tip:"Pressing the shutter button halfway always takes you back to shooting, wherever you are."}
 ],
 top:[
  {id:"zapata", n:"Multi Interface Shoe", en:"Multi Interface Shoe", d:"For connecting an external flash, a microphone or other accessories.", tip:"Turn the camera off before attaching or removing accessories."},
  {id:"flash", n:"Flash", en:"Flash", d:"A small flash that pops up with its button on the back. Short range: use it at more than 1 meter.", tip:"You can tilt it back with your finger to bounce the light off a white ceiling."},
  {id:"dial", n:"Mode dial", en:"Mode dial", d:"Chooses who decides the exposure. AUTO: fully automatic. P (Program Auto): automatic with control. A (Aperture Priority): you choose the aperture. S (Shutter Priority): you choose the shutter speed. M (Manual Exposure): you choose everything. 1/2 (Memory recall): your saved settings. Movie/S&Q Motion: video with control. Sweep Panorama. SCN (Scene Selection): scenes (portrait, sports, night…).", tip:"To learn, live in A and S. For a quick photo without thinking, AUTO."},
  {id:"dialcontrol", n:"Control dial", en:"Control dial", d:"The top dial you turn with your thumb without letting go of the grip. In A it changes the aperture, in S the shutter speed, in M the aperture, and in P it shifts the aperture/shutter speed pair.", tip:"It’s the control you’ll use most in A and S."},
  {id:"disparador", n:"Shutter button", en:"Shutter button", d:"Two stages: halfway focuses (beep and green frame), all the way takes the photo. Holding it halfway locks focus so you can recompose.", tip:"Pressing it halfway also wakes the camera and exits the menus."},
  {id:"onoff", n:"ON/OFF (Power) switch", en:"ON/OFF (Power) switch", d:"The lever around the shutter button. When you turn it on, the 16-50 lens extends by itself.", tip:"Turn it off before changing the battery, card or lens."},
  {id:"c1", n:"C1 button (Custom button 1)", en:"C1 button (Custom button 1)", d:"A custom button. You can assign it the setting you use most.", tip:"Suggestion: Focus Area."},
  {id:"c2", n:"C2 button (Custom button 2)", en:"C2 button (Custom button 2)", d:"Another custom button.", tip:"Suggestion: Focus Mode."}
 ],
 lens:[
  {id:"liberacion", n:"Lens release button", en:"Lens release button", d:"Hold it down and turn the lens to remove it. With the camera off.", tip:"Always put the body cap on if the camera is left without a lens."},
  {id:"palanca", n:"Zoom lever", en:"Zoom lever", d:"Push toward T to zoom in (50 mm) and toward W to see wider (16 mm). Push it a little and the zoom goes slowly; all the way, fast.", tip:"16 mm ≈ the iPhone’s main camera. 50 mm ≈ the 3× telephoto."},
  {id:"anillo", n:"Zoom/focus ring", en:"Zoom/focus ring", d:"In autofocus, the ring zooms. In manual focus (MF), it focuses.", tip:"Zooming with the ring is smoother for video."},
  {id:"frontal", n:"Front lens element (40.5 mm thread)", en:"Front lens element (40.5 mm thread)", d:"The front glass. Its 40.5 mm thread takes filters (protector, polarizer, ND).", tip:"Clean it with a microfiber cloth, never with your T-shirt. And put the cap on when you store it."}
 ]
};
