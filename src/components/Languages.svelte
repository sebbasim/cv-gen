<script lang="ts">
    import Title from "../style-components/Title.svelte";
    import * as data from "../data.json";
    const language_level_mapping = {
        1: "Beginner",
        2: "Intermediate",
        3: "Advanced",
        4: "Proficient",
        5: "Native",
    };
</script>

<Title title="Languages" />

<div id="grid-container">
    {#each data["languages"] as language}
        <div id="flex-container">
            <div id="left-column">
                <b>{language.name}</b> <br />
                <span class="language-level"
                    >{language_level_mapping[language.level]}</span
                >
            </div>

            <div id="right-column">
                <img
                    class="icon"
                    alt="GitHub"
                    src="assets/icons/circle-blue.svg"
                />

                {#if language.level > 1}
                    <img
                        class="icon"
                        alt="GitHub"
                        src="assets/icons/circle-blue.svg"
                    />
                {:else}
                    <img
                        class="icon"
                        alt="GitHub"
                        src="assets/icons/circle-black.svg"
                    />
                {/if}

                {#if language.level > 2}
                    <img
                        class="icon"
                        alt="GitHub"
                        src="assets/icons/circle-blue.svg"
                    />
                {:else}
                    <img
                        class="icon"
                        alt="GitHub"
                        src="assets/icons/circle-black.svg"
                    />
                {/if}

                {#if language.level > 3}
                    <img
                        class="icon"
                        alt="GitHub"
                        src="assets/icons/circle-blue.svg"
                    />
                {:else}
                    <img
                        class="icon"
                        alt="GitHub"
                        src="assets/icons/circle-black.svg"
                    />
                {/if}

                {#if language.level > 4}
                    <img
                        class="icon"
                        alt="GitHub"
                        src="assets/icons/circle-blue.svg"
                    />
                {:else}
                    <img
                        class="icon"
                        alt="GitHub"
                        src="assets/icons/circle-black.svg"
                    />
                {/if}
            </div>
        </div>
    {/each}
</div>

<style>
    #grid-container {
        display: grid;
        grid-template-rows: 1fr 1fr;
        grid-template-columns: 1fr 1fr;
        row-gap: 10px;
        column-gap: 10px;
        margin: 15px;
    }
    #flex-container {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    .language-level {
        color: grey;
    }
    .icon {
        width: 17px;
        color: #00bfff;
        vertical-align: middle;
    }
    img {
        margin: 0px;
        padding: 0px;
        float: left;
    }

    #left-column {
        flex: 0 0 50%;
    }
    #right-column {
        flex: 0 0 50%;
    }
</style>
