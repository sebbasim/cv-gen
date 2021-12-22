<script lang="ts">
	import Header from "./components/Header.svelte";
	import Summary from "./components/Summary.svelte";
	import Experience from "./components/Experience.svelte";
	import Education from "./components/Education.svelte";
	import Languages from "./components/Languages.svelte";
	import Projects from "./components/Projects.svelte";
	import Volunteering from "./components/Volunteering.svelte";
	import Skills from "./components/Skills.svelte";
</script>

<Header />
<main>
	<div class="left-column">
		<Summary />
		<Experience />
		<Languages />
		<div style="height:250px" />
		<Projects />
	</div>
	<div class="right-column">
		<Education />
		<Skills />
		<div style="height:345px" />
		<Volunteering />
	</div>
</main>

<div class="footer">
	Developed with <i class="fa fa-heart" style="color:red" /> and Svelte by yours
	truly :)
</div>

<style>
	/* column styling has a lot of duplicate entities*/
	main {
		font-family: "Roboto", sans-serif;
		display: flex;
		width: 195mm;
	}
	.left-column {
		display: flex;
		flex-direction: column;
		padding-right: 30px;
		flex: 0 0 58%;
	}
	.right-column {
		display: flex;
		flex-direction: column;
		flex: 0 0 38%;
	}
	.footer {
		position: absolute;
		left: 220px;
		top: 1100px;
		color: grey;
	}
	@page {
		size: A4;
		margin: 0;
	}
</style>
