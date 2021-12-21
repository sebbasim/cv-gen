<script lang="ts">
	import Header from "./components/Header.svelte";
	import Summary from "./components/Summary.svelte";
	import Experience from "./components/Experience.svelte";
	import Education from "./components/Education.svelte";
	import Languages from "./components/Languages.svelte";
</script>

<Header name="Sebastiaan Simons" job_title="Full-stack engineer" />

<main>
	<div class="left-column">
		<Summary />
		<Experience />
		<Languages />
	</div>
	<div class="right-column">
		<Education />
	</div>
</main>

<style>
	/* column styling has a lot of duplicate entities*/
	main {
		font-family: "Roboto", sans-serif;
		display: flex;
		width: 210mm;
	}
	.left-column {
		display: flex;
		flex-direction: column;
		padding: 1em;
		flex: 0 0 60%;
	}
	.right-column {
		display: flex;
		flex-direction: column;
		padding: 1em;
		flex: 0 0 40%;
	}
	@page {
		size: A4;
		margin: 0;
	}
</style>
