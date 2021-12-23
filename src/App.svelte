<script lang="ts">
	import Header from "./components/Header.svelte";
	import Summary from "./components/Summary.svelte";
	import Experience from "./components/Experience.svelte";
	import Education from "./components/Education.svelte";
	import Languages from "./components/Languages.svelte";
	import Projects from "./components/Projects.svelte";
	import Volunteering from "./components/Volunteering.svelte";
	import Skills from "./components/Skills.svelte";
	import Strengths from "./components/Strengths.svelte";
	import * as data from "./data.json";
	let style = data["style"];
	let column_widths: number[] = style.column_widths;
	let left_flex = column_widths[0] * 96; 
	let right_flex = column_widths[1] * 96; 
</script>

<Header />
<main style="font-family:{style.font_family}">
	<div class="left-column" style="flex: 0 0 {left_flex}%">
		<Summary />
		<Experience />
		<Languages />
		<div style="height:98px" />
		<Strengths />
		<Projects />
	</div>
	<div class="right-column" style="flex: 0 0 {right_flex}%">
		<Education />
		<Skills />
		<div style="height:179px" />
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
		display: flex;
		width: 195mm;
	}
	.left-column {
		display: flex;
		flex-direction: column;
		padding-right: 30px;
	}
	.right-column {
		display: flex;
		flex-direction: column;
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
