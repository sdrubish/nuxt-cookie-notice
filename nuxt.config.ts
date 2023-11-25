// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	app: {
		head: {
			charset: "utf-8",
			viewport: "width=device-width, initial-scale=1",
			script: [
				{ id: "cookieyes", type: "text/javascript", src: "https://cdn-cookieyes.com/client_data/1b0e6eaeda7e2c8638f40b84/script.js" },
				{ async: true, src: "https://www.googletagmanager.com/gtag/js?id=G-LM3GD3X5XL" },
			],
		},
	},
	css: ["~/assets/css/style-std.css"],
	devtools: { enabled: true },
	// modules: ["@dargmuesli/nuxt-cookie-control", "nuxt-gtag"],
	// cookieControl: {
	// 	barPosition: "bottom-left",
	// 	closeModalOnClickOutside: false,
	// 	locales: ["en"],
	// 	cookies: {
	// 		necessary: [
	// 			{
	// 				//if multilanguage
	// 				name: {
	// 					en: "Default Cookies",
	// 				},
	// 				//else
	// 				name: "Default Cookies",
	// 				//if multilanguage
	// 				description: {
	// 					en: "Used for cookie control.",
	// 				},
	// 				//else
	// 				description: "Used for cookie control.",
	// 				cookies: ["cookie_control_consent", "cookie_control_enabled_cookies"],
	// 			},
	// 		],
	// 		optional: [
	// 			{
	// 				name: "Google Analitycs",
	// 				//if you don't set identifier, slugified name will be used
	// 				identifier: "ga",
	// 				//if multilanguage
	// 				description: {
	// 					en: "Google GTM is ...",
	// 				},
	// 				//else
	// 				description: "Google GTM is...",

	// 				initialState: true,
	// 				src: "https://www.googletagmanager.com/gtag/js?id=<API-KEY>",
	// 				async: true,
	// 				cookies: ["_ga", "_gat", "_gid"],
	// 				accepted: () => {
	// 					window.dataLayer = window.dataLayer || [];
	// 					window.dataLayer.push({
	// 						"gtm.start": new Date().getTime(),
	// 						event: "gtm.js",
	// 					});
	// 				},
	// 				declined: () => {},
	// 			},
	// 		],
	// 	},
	// 	text: {
	// 		locale: {
	// 			en: {
	// 				accept: "Accetta",
	// 				acceptAll: "Accetta tutto",
	// 				bannerDescription:
	// 					"Utilizziamo cookie propri e di terzi per mostrarvi la pagina web e capire come la utilizzate, nonch\xE9 per migliorare i servizi che offriamo. Se continuate a navigare, consideriamo che accettate il loro utilizzo.",
	// 				bannerTitle: "Cookies",
	// 				close: "Chiudi",
	// 				cookiesFunctional: "Cookie funzionali",
	// 				cookiesNecessary: "Cookie necessari",
	// 				cookiesOptional: "Cookie opzionali",
	// 				decline: "Accetto il necessario",
	// 				declineAll: "Cancella tutto",
	// 				here: "qui",
	// 				iframeBlocked: "Per vedere questo, si prega di abilitare i cookie funzionali",
	// 				manageCookies: "Gestisci i cookie",
	// 				save: "Salva",
	// 				settingsUnsaved: "Ci sono impostazioni non salvate",
	// 			},
	// 		},

	// 		//this will override locale text
	// 		barTitle: "Override Title",
	// 	},
	// 	localeTexts: {
	// 		en: {
	// 			accept: "Accetta",
	// 			acceptAll: "Accetta tutto",
	// 			bannerDescription:
	// 				"Utilizziamo cookie propri e di terzi per mostrarvi la pagina web e capire come la utilizzate, nonch\xE9 per migliorare i servizi che offriamo. Se continuate a navigare, consideriamo che accettate il loro utilizzo.",
	// 			bannerTitle: "Cookies",
	// 			close: "Chiudi",
	// 			cookiesFunctional: "Cookie funzionali",
	// 			cookiesNecessary: "Cookie necessari",
	// 			cookiesOptional: "Cookie opzionali",
	// 			decline: "Accetto il necessario",
	// 			declineAll: "Cancella tutto",
	// 			here: "qui",
	// 			iframeBlocked: "Per vedere questo, si prega di abilitare i cookie funzionali",
	// 			manageCookies: "Gestisci i cookie",
	// 			save: "Salva",
	// 			settingsUnsaved: "Ci sono impostazioni non salvate",
	// 		},
	// 	},

	// 	// accept: "Accetta",
	// 	// acceptAll: "Accetta tutto",
	// 	// bannerDescription: "Utilizziamo cookie propri e di terzi per mostrarvi la pagina web e capire come la utilizzate, nonch\xE9 per migliorare i servizi che offriamo. Se continuate a navigare, consideriamo che accettate il loro utilizzo.",
	// 	// bannerTitle: "Cookies",
	// 	// close: "Chiudi",
	// 	// cookiesFunctional: "Cookie funzionali",
	// 	// cookiesNecessary: "Cookie necessari",
	// 	// cookiesOptional: "Cookie opzionali",
	// 	// decline: "Accetto il necessario",
	// 	// declineAll: "Cancella tutto",
	// 	// here: "qui",
	// 	// iframeBlocked: "Per vedere questo, si prega di abilitare i cookie funzionali",
	// 	// manageCookies: "Gestisci i cookie",
	// 	// save: "Salva",
	// 	// settingsUnsaved: "Ci sono impostazioni non salvate"
	// },
	// gtag: {
	// 	id: "G-LM3GD3X5XL",
	// 	initialConsent: false,
	// },
});
