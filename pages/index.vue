<script setup lang="ts">
	// const { gtag, grantConsent, revokeConsent } = useGtag();
	useHead({
		title: "Drulab.net",
		meta: [{ name: "description", content: "Drulab.net - Tailored code solutions" }],
		// bodyAttrs: {
		// 	class: "test",
		// },
		htmlAttrs: {
			lang: "en",
		},
		// script: [{ innerHTML: "console.log('Hello world')" }],
	});

	// useSeoMeta({
	// 	title: "Drulab.net - Tailored code for businesses",
	// 	// ogTitle: "My Amazing Site",
	// 	description: "Drulab.net - Tailored code for businesses",
	// 	// ogDescription: "This is my amazing site, let me tell you all about it.",
	// 	// ogImage: "https://example.com/image.png",
	// 	// twitterCard: "summary_large_image",
	// });
</script>

<template>
	<div class="druuu-1 druuu-main">
		<div class="druuu-1 druuu-gradient"></div>

		<div>
			<h1 class="logo">Drulab</h1>
			<h2 class="sublogo">Tailored coding + Blockchain + AI + Web + Business Automation</h2>
			<h3 class="main-text">Home to everything that's food for the mind in the tech space.</h3>
			<!-- <button @click="grantConsent()">Accept Tracking</button> -->
		</div>
	</div>
</template>

<style scoped>
	@import "~/assets/css/style-std.css";
</style>
