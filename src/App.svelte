<script lang="ts">
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
	import { onMount, SvelteComponent, tick } from "svelte";
	import Footer from "./components/Footer.svelte";

	const MAX_HEIGHT = 1050;
	const style = data["style"];
	const column_widths: number[] = style.column_widths;
	let left_flex = column_widths[0] * 96;
	let right_flex = column_widths[1] * 96;

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

	async function init() {
		for (const key in data) {
			const component_data = data[key];
			component_data["component"] = component_constructor(key);
			if (component_data["column"] === "left") {
				components_left = [...components_left, component_data];
			} else if (component_data["column"] === "right") {
				components_right = [...components_right, component_data];
			}
		}
		// Updating our components_left / components_right arrays doesn't immediately update the DOM.
		// It's batched together with other changes and updates in the next update cycle.
		// To wait for the state changes to apply, we wait for the promise returned from tick() to be resolved.
		await tick();
		adjust_height();
	}

	let current_height = 0;
	let header_height: number;

	function header_height_handler(event) {
		current_height += event.detail.height;
		header_height = event.detail.height;
	}

	// further investigate why length + 2 for 3rd page adjustments
	function adjust_height() {
		for (let i = 1; i < components_left.length + 1; i++) {
			adjust_height_helper(i, "left-column");
		}
		current_height = header_height;
		for (let i = 1; i < components_right.length + 1; i++) {
			adjust_height_helper(i, "right-column");
		}
	}

	function adjust_height_helper(i: number, column: string) {
		let current_element = document.querySelector(
			`.${column} section:nth-child(${i})`
		);
		let height = window.getComputedStyle(current_element).height;
		let height_number = parseInt(height.substring(0, height.length - 2));
		current_height += height_number;
		if (current_height > MAX_HEIGHT) {
			let difference = current_height - MAX_HEIGHT;
			let abs_difference = Math.abs(height_number - difference);
			let total = abs_difference + 120;
			let div = document.createElement("div");
			div.style.cssText = `margin-top:${total}px`;
			current_element.parentNode.insertBefore(div, current_element);
			current_height = 0;
		}
	}

	onMount(() => {
		init();
	});
	// @ts-ignore
	let main_color = style.main_color; 
	$: document.documentElement.style.setProperty('--main-color', main_color); 

</script>
<Footer />
<Header on:height={header_height_handler} />
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

	@page {
		size: A4;
		margin: 0;
	}
	:global(:root) {
		/* blue: #00bfff; */
		--main-color: var(--main_color);
	}
</style>
