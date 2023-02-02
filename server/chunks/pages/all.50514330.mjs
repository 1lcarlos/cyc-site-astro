/* empty css                           */import { c as createAstro, a as createComponent, r as renderTemplate, m as maybeRenderHead, b as renderComponent, d as addAttribute, e as renderHead } from '../astro.6ec743f2.mjs';
import 'html-escaper';

const $$Astro$7 = createAstro("https://1lcarlos.github.io");
const $$Navbar = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$7, $$props, $$slots);
  Astro2.self = $$Navbar;
  return renderTemplate`${maybeRenderHead($$result)}<div class="barra astro-5KNYCIEN">
  <a href="/" class="astro-5KNYCIEN">
    <img id="logo" src="/cyc-site-astro/CyC_SERVICIOs.png" alt="logo cyc servicios catastrales" class="astro-5KNYCIEN">
  </a>
  <nav class="navbar astro-5KNYCIEN">
    <a href="acercaDe" class="astro-5KNYCIEN">Acerca</a>
    <a href="servicios" class="astro-5KNYCIEN">Servicios</a>
    <a href="#" class="astro-5KNYCIEN">Contacto</a>
  </nav>
</div>`;
}, "D:/cyc/desarrollo/paginaWeb/cyc-site-astro/src/components/navbar.astro");

const $$Astro$6 = createAstro("https://1lcarlos.github.io");
const $$Header = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$6, $$props, $$slots);
  Astro2.self = $$Header;
  return renderTemplate`${maybeRenderHead($$result)}<div class="contenedor astro-HPNW4VWY">
    ${renderComponent($$result, "Navbar", $$Navbar, { "class": "astro-HPNW4VWY" })}
    <h1 class="text-3xl astro-HPNW4VWY">C&C Servicios Catastrales</h1>
    <button class="astro-HPNW4VWY">ver mas</button>
    <h3 class="astro-HPNW4VWY">Soluciones inteligentes a los probelmas de gobernanza del territorio</h3>
</div>`;
}, "D:/cyc/desarrollo/paginaWeb/cyc-site-astro/src/components/header.astro");

const $$Astro$5 = createAstro("https://1lcarlos.github.io");
const $$Acerca = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$Acerca;
  return renderTemplate`${maybeRenderHead($$result)}<section class="main astro-63AULYF2">
  <h2 class="astro-63AULYF2">Nosotros</h2>
  <div class="center astro-63AULYF2">
    <img src="/cyc-site-astro/6.svg" alt="" class="astro-63AULYF2">
    <!-- <img src="/7.svg" alt="" />
    <img src="/8.svg" alt="" />
    <img src="/5.svg" alt="" /> -->
  </div>
  <div class="flex justify-around astro-63AULYF2">
    <img class="hidden lg:inline astro-63AULYF2" src="/cyc-site-astro/7.svg" alt="">
    <p class="astro-63AULYF2">
      Nuestra empresa cuenta con amplia trayectoria y experiencia en diferentes
      proyectos catastrales, topográficos, cartográficos, sensores
      remotos,desarrollo de aplicaciones web y móviles, por un lado enfocados en
      las políticas del catastro multipropósito y toda las herramientas que nos
      brinda el sistema de administración de territorio SAT y por otro llevando
      a los usuarios soluciones técnicas y tecnológicas que ayuden a mejorar su
      comprensión y la forma de tomar decisiones con respecto al territorio que
      habitan.
    </p>
    <img class="hidden lg:inline astro-63AULYF2" src="/cyc-site-astro/8.svg" alt="">
  </div>
  <div class="center astro-63AULYF2">
    <img src="/cyc-site-astro/5.svg" alt="" class="astro-63AULYF2">
  </div>
</section>`;
}, "D:/cyc/desarrollo/paginaWeb/cyc-site-astro/src/components/acerca.astro");

const $$Astro$4 = createAstro("https://1lcarlos.github.io");
const $$Separador = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$Separador;
  return renderTemplate`${maybeRenderHead($$result)}<div class="separador astro-W6KNCN6M">
    <img src="/cyc-site-astro/separador.png" alt="Separador " class="astro-W6KNCN6M">
</div>`;
}, "D:/cyc/desarrollo/paginaWeb/cyc-site-astro/src/components/separador.astro");

const $$Astro$3 = createAstro("https://1lcarlos.github.io");
const $$Card = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$Card;
  const { title } = Astro2.props;
  const { img } = Astro2.props;
  return renderTemplate`${maybeRenderHead($$result)}<div class="tarjeta astro-HPDUDSTH">
  <div class="servicios-img astro-HPDUDSTH">
    <img${addAttribute(img, "src")} alt="" class="astro-HPDUDSTH">
    <h3 class="astro-HPDUDSTH">${title}</h3>
  </div>
  
  
</div>`;
}, "D:/cyc/desarrollo/paginaWeb/cyc-site-astro/src/components/card.astro");

const $$Astro$2 = createAstro("https://1lcarlos.github.io");
const $$NuevoComponente = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$NuevoComponente;
  return renderTemplate`${maybeRenderHead($$result)}<main class="astro-TH5U7WFE">
  <h2 class="text-3xl astro-TH5U7WFE">Servicios</h2>
  <h2 class="text-2xl my-5 astro-TH5U7WFE">Catastro</h2>
  <article class="flex flex-col items-center lg:flex lg:flex-row lg:justify-around lg:items-stretch astro-TH5U7WFE">
    ${renderComponent($$result, "Card", $$Card, { "title": "Avaluos Propiedades Planta y Equipo", "img": "/cyc-site-astro/avaluo_icon.svg", "class": "astro-TH5U7WFE" })}
    ${renderComponent($$result, "Card", $$Card, { "title": "Tramites Notariales y Registrales", "img": "/cyc-site-astro/tramites_nyr_icon.svg", "class": "astro-TH5U7WFE" })}
    ${renderComponent($$result, "Card", $$Card, { "title": "Englobes y Desenglobes", "img": "/cyc-site-astro/englobes_icon.svg", "class": "astro-TH5U7WFE" })}
    ${renderComponent($$result, "Card", $$Card, { "title": "Levantamientos Topograficos", "img": "/cyc-site-astro/topografia_icon.svg", "class": "astro-TH5U7WFE" })}
    ${renderComponent($$result, "Card", $$Card, { "title": "Ventas de Inmuebles", "img": "/cyc-site-astro/ventas_icon.svg", "class": "astro-TH5U7WFE" })}
  </article>
  <h2 class="text-2xl my-5 astro-TH5U7WFE">Soluciones Geoespaciales</h2>
  <article class="flex flex-col items-center lg:flex lg:flex-row lg:justify-around lg:items-stretch astro-TH5U7WFE">
    ${renderComponent($$result, "Card", $$Card, { "title": "Desarrollo de Aplicativos Web y M\xF3viles", "img": "/cyc-site-astro/desarrollo_icon.svg", "class": "astro-TH5U7WFE" })}
    ${renderComponent($$result, "Card", $$Card, { "title": "Gesti\xF3n de Datos Geogr\xE1ficos", "img": "/cyc-site-astro/geografia_icon.svg", "class": "astro-TH5U7WFE" })}
    ${renderComponent($$result, "Card", $$Card, { "title": "An\xE1lisis de Datos y ETL- Extract Transform and Load", "img": "/cyc-site-astro/analisis_icon.svg", "class": "astro-TH5U7WFE" })}
    ${renderComponent($$result, "Card", $$Card, { "title": "Estructuraci\xF3n de Bases de Datos-Modelo LADM-COL", "img": "/cyc-site-astro/Bases_icon.svg", "class": "astro-TH5U7WFE" })}
    ${renderComponent($$result, "Card", $$Card, { "title": "Sensores Remotos e Interpretacion de Imagenes", "img": "/cyc-site-astro/sensores_icon.svg", "class": "astro-TH5U7WFE" })}
  </article>
</main>`;
}, "D:/cyc/desarrollo/paginaWeb/cyc-site-astro/src/components/nuevoComponente.astro");

const $$Astro$1 = createAstro("https://1lcarlos.github.io");
const $$Contacto = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Contacto;
  return renderTemplate`${maybeRenderHead($$result)}<h2 class="astro-EZTZSZ44">Contacto</h2>
<div class="flex flex-col items-center lg:flex lg:flex-row lg:justify-around lg:items-stretch astro-EZTZSZ44">
  
  <div class="contenedor-info astro-EZTZSZ44">
    <img src="/cyc-site-astro/whatsapp_icon.svg" alt="" class="astro-EZTZSZ44">
    <p class="astro-EZTZSZ44">Numeros telefonicos: 3152201117 - 322 7261940</p>
  </div>
  <div class="contenedor-info astro-EZTZSZ44">
    <img src="/cyc-site-astro/gmail_icon.svg" alt="" class="astro-EZTZSZ44">
    <p class="astro-EZTZSZ44">cycservicioscatastrales@gmail.com</p>
  </div>
  <div class="contenedor-info astro-EZTZSZ44">
    <a href="https://www.facebook.com/CC-Servicios-Catastrales-SAS-106667389000846" class="astro-EZTZSZ44">
      <img src="/cyc-site-astro/facebook_icon.svg" alt="" class="astro-EZTZSZ44">
    </a>
    
    <p class="astro-EZTZSZ44">C&C Servicios Catastrales</p>
  </div>
  <div class="contenedor-info astro-EZTZSZ44">
    <img src="/cyc-site-astro/linkedin_icon.svg" alt="" class="astro-EZTZSZ44">
    <p class="astro-EZTZSZ44">C&C Servicios Catastrales</p>
  </div>
</div>`;
}, "D:/cyc/desarrollo/paginaWeb/cyc-site-astro/src/components/contacto.astro");

const $$Astro = createAstro("https://1lcarlos.github.io");
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  return renderTemplate`<html lang="en" class="astro-J7PV25F6">
  <head>
    <meta charset="utf-8">
    <link rel="icon" type="image/svg+xml" href="/favicon.svg">
    <meta name="viewport" content="width=device-width">
    <meta name="generator"${addAttribute(Astro2.generator, "content")}>
    <title>CyC Servicios Catastrales</title>
  ${renderHead($$result)}</head>
  <body class="astro-J7PV25F6">
    ${renderComponent($$result, "Header", $$Header, { "class": "astro-J7PV25F6" })}
    ${renderComponent($$result, "Separador", $$Separador, { "class": "astro-J7PV25F6" })}
    ${renderComponent($$result, "Acerca", $$Acerca, { "class": "astro-J7PV25F6" })}
    ${renderComponent($$result, "Separador", $$Separador, { "class": "astro-J7PV25F6" })}
    ${renderComponent($$result, "Servicios", $$NuevoComponente, { "class": "astro-J7PV25F6" })}
    ${renderComponent($$result, "Separador", $$Separador, { "class": "astro-J7PV25F6" })}
    ${renderComponent($$result, "Contacto", $$Contacto, { "class": "astro-J7PV25F6" })}

  </body></html>`;
}, "D:/cyc/desarrollo/paginaWeb/cyc-site-astro/src/pages/index.astro");

const $$file = "D:/cyc/desarrollo/paginaWeb/cyc-site-astro/src/pages/index.astro";
const $$url = "/cyc-site-astro";

const _page0 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { _page0 as _ };
