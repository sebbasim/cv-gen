<script lang="ts">
	import Summary from "./components/Summary.svelte";
</script>

<main>
	<div class="column-1">
		<Summary />
		<Summary />
	</div>
	<div class="column-2">
		<Summary />
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
	.column-1 {
		display: flex;
		flex-direction: column;
		padding: 1em;
		flex: 0 0 60%;
		border: 1px solid black; 
	}
	.column-2 {
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
	@media print {
		html,
		body {
			width: 210mm;
			height: 297mm;
		}
	}
</style>
