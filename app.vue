<script setup lang="ts">
	useHead({
		script: [
			{
				innerHTML: `
                window.dataLayer = window.dataLayer || [];
                function gtag() {
                    dataLayer.push(arguments);
                }
                gtag("js", new Date());

                gtag("config", "G-LM3GD3X5XL", { anonymize_ip: true });`,
			},
		],
	});
</script>

<template>
	<div>
		<NuxtPage />
	</div>
</template>
