<script lang="ts">
	import { onMount, SvelteComponent, tick } from "svelte";
	import Header from "./components/Header.svelte";
	import Summary from "./components/Summary.svelte";
	import Languages from "./components/Languages.svelte";
	import Projects from "./components/Projects.svelte";
	import Dynamic from "./components/Dynamic.svelte";
	import Skills from "./components/Skills.svelte";
	import Strengths from "./components/Strengths.svelte";
	import Footer from "./components/Footer.svelte";
	import * as data from "./data.json";

	const MAX_HEIGHT = 1050;
	const style = data["style"];
	const column_widths: number[] = style.column_widths;
	const left_flex = column_widths[0] * 96;
	const right_flex = column_widths[1] * 96;
	const main_color = style.main_color;
	document.documentElement.style.setProperty("--main-color", main_color);

	let components_left: Component[] = [];
	let components_right: Component[] = [];

	interface Component {
		column: "left" | "right";
		component: string;
		bullet_points?: { text: string }[];
		entries?: {
			title: string;
			institution?: string;
			start_date?: string;
			end_date?: string;
			location?: string;
			bullet_points?: { text: string }[];
			icon?: string;
			description?: string;
		};
		level_entries?: { name: string; level: number }[];
		level_groups?: {
			group: string;
			level_entries: { name: string; level: number }[];
		}[];
	}

	const component_constructor = (key: string): typeof SvelteComponent => {
		switch (key) {
			case "summary":
				return Summary;
			case "languages":
				return Languages;
			case "strengths":
				return Strengths;
			case "projects":
				return Projects;
			case "skills":
				return Skills;
			case "dynamic":
				return Dynamic;
		}
	};

	const init = async () => {
		for (const key in data) {
			const component_data = data[key];
			component_data["component"] = component_constructor(
				component_data["component_title"]
			);
			component_data["key"] = key;
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
	};

	let current_height = 0;
	let header_height: number;

	const header_height_handler = (event: { detail: { height: number } }) => {
		current_height += event.detail.height;
		header_height = event.detail.height;
	};

	//(v0.2) further investigate why length + 2 for 3rd page adjustments | 3rd+ page support
	const adjust_height = () => {
		for (let i = 1; i < components_left.length + 1; i++) {
			adjust_height_helper(i, "left-column");
		}
		current_height = header_height;
		for (let i = 1; i < components_right.length + 1; i++) {
			adjust_height_helper(i, "right-column");
		}
	};

	const adjust_height_helper = (i: number, column: string) => {
		const current_element = document.querySelector(
			`.${column} section:nth-child(${i})`
		);
		const height = window.getComputedStyle(current_element).height;
		const height_number = +height.substring(0, height.length - 2);
		current_height += height_number;
		if (current_height > MAX_HEIGHT) {
			const difference = current_height - MAX_HEIGHT;
			const abs_difference = Math.abs(height_number - difference);
			const total = Math.floor(abs_difference + 120);
			const div = document.createElement("div");
			div.style.cssText = `margin-top:${total}px`;
			current_element.parentNode.insertBefore(div, current_element);
			current_height = 0;
		}
	};

	onMount(() => {
		init();
	});

	// async function generate_pdf() {
	// 	try {
	// 		await fetch(`/pdf`);
	// 	} catch (error) {
	// 		console.error(error);
	// 	}
	// }
</script>

<!--<button on:click={generate_pdf}>Generate PDF</button>-->

<Footer />
<Header on:height={header_height_handler} />
<main style="font-family:{style.font_family}">
	<div class="left-column" style="flex: 0 0 {left_flex}%">
		{#each components_left as component_left}
			<svelte:component
				this={component_left.component}
				component_title={component_left["key"]}
			/>
		{/each}
	</div>
	<div class="right-column" style="flex: 0 0 {right_flex}%">
		{#each components_right as component_right}
			<svelte:component
				this={component_right.component}
				component_title={component_right["key"]}
			/>
		{/each}
	</div>
</main>

<style>
	main {
		display: flex;
		width: 195mm;
		color: rgb(88, 86, 86);
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
