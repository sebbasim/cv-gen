<script lang="ts">
	import Summary from "./components/Summary.svelte";
	import Experience from "./components/Experience.svelte";
</script>

<main>
	<div class="left-column">
		<Summary />
		<Experience />
	</div>
	<div class="right-column">
		<Summary />
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
		border: 1px solid black;
	}
	.right-column {
		display: flex;
		flex-direction: column;
		padding: 1em;
		flex: 0 0 40%;
		border: 1px solid black;
	}
	@page {
		size: A4;
		margin: 0;
	}
</style>
