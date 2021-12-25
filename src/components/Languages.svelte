<script lang="ts">
    import Title from "../style-components/Title.svelte";
    import * as data from "../data.json";
    import Level from "../sub-components/Level.svelte";
    const language_level_mapping = {
        1: "Beginner",
        2: "Intermediate",
        3: "Advanced",
        4: "Proficient",
        5: "Native",
    };
</script>

<section>
    <Title title="Languages" />

    <div id="grid-container">
        {#each data["languages"]["entries"] as language}
            <div id="flex-container">
                <div id="left-column">
                    <b>{language.name}</b> <br />
                    <span class="language-level"
                        >{language_level_mapping[language.level]}
                    </span>
                </div>
                <div id="right-column">
                    <Level level={language.level} />
                </div>
            </div>
        {/each}
    </div>
</section>

<style>
    #grid-container {
        display: grid;
        grid-template-rows: 1fr 1fr;
        grid-template-columns: 1fr 1fr;
        row-gap: 10px;
        column-gap: 10px;
        margin: 0px 15px 15px 0px;
    }
    #flex-container {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    .language-level {
        color: #808080;
    }

    #left-column {
        flex: 0 0 50%;
    }
    #right-column {
        flex: 0 0 50%;
    }
</style>
