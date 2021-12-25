<script lang="ts">
	// onMount App => count children in left and right column, then switch in height messaging function
	// dynamically insert svelte components based on json output
	// scss support (variables) | rm duplicate css
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
	import { onMount, SvelteComponent } from "svelte";
	let style = data["style"];
	let column_widths: number[] = style.column_widths;
	let left_flex = column_widths[0] * 96;
	let right_flex = column_widths[1] * 96;
	// let max_height = 500;
	// let current_height = 0;
	// let difference;
	// let count_children = 0;
	// function handle_message(event) {
	// 	count_children++;
	// 	current_height += event.detail.height;
	// 	if (current_height > max_height) {
	// 		difference = current_height - max_height;
	// 		var div = document.createElement("div");
	// 		div.style.cssText = `margin-top:${difference}px`;
	// 		let current_element = document.querySelector(
	// 			`.left-column div:nth-child(${count_children})`
	// 		);
	// 		current_element.parentNode.insertBefore(
	// 			div,
	// 			current_element.nextSibling
	// 		);
	// 	}
	// }

	const component_constructor = (key: string): typeof SvelteComponent => {
		switch (key) {
			case "summary":
				return Summary;
			case "experience":
				return Experience;
			case "education":
				return Education;
			case "languages":
				return Languages;
			case "strengths":
				return Strengths;
			case "projects":
				return Projects;
			case "skills":
				return Skills;
			case "volunteering":
				return Volunteering;
		}
	};

	let components_left = [];
	let components_right = [];

	function init(): void {
		for (const key in data) {
			const component_data = data[key];
			component_data["component"] = component_constructor(key);;
			if (component_data["column"] === "left") {
				components_left = [...components_left, component_data];
			} else if (component_data["column"] === "right") {
				components_right = [...components_right, component_data];
			}
		}
	}

	onMount(() => {
		init();
	});
</script>

<Header />
<main style="font-family:{style.font_family}">
	<div class="left-column" style="flex: 0 0 {left_flex}%">
		{#each components_left as component_left}
			<svelte:component this={component_left.component} />
		{/each}
	</div>
	<div class="right-column" style="flex: 0 0 {right_flex}%">
		{#each components_right as component_right}
			<svelte:component this={component_right.component} />
		{/each}
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
