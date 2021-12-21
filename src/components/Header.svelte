<script lang="ts">
    // import * as data from "../data.json";
    export let name: string;
    export let job_title: string;
</script>

<div id="flex-container">
    <div>
        <h1>{name}</h1>
        <h2>{job_title}</h2>
        <br />
        <div id="grid-container">
            <span
                ><img
                    class="icon"
                    alt="smartphone"
                    src="assets/icons/phone.svg"
                />&nbsp; + some mobile number</span
            >
            <span
                ><img
                    class="icon"
                    alt="GitHub"
                    src="assets/icons/github.svg"
                />&nbsp; github.com/SebastiaanSimons</span
            >
            <span
                ><img
                    class="icon"
                    alt="inbox"
                    src="assets/icons/inbox.svg"
                />&nbsp; sebastiaansimons@outlook.com</span
            >
            <span
                ><img
                    class="icon"
                    alt="location"
                    src="assets/icons/map-marker.svg"
                />&nbsp; Antwerp, Belgium</span
            >
        </div>
    </div>
    <div>
        <img
            class="profile-picture"
            src="assets/images/profile_picture.jpg"
            alt="profile"
        />
    </div>
</div>

<style>
    .profile-picture {
        width: 150px;
        border-radius: 100px;
    }
    .icon {
        width: 15px;
        color: #00bfff;
        vertical-align: middle;
    }
    #flex-container {
        display: flex;
        justify-content: space-between;
        margin: 10px 10px 0px 0px;
        width: 210mm;
    }
    #grid-container {
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-template-rows: 1fr 1fr;
        margin-left: 25px;
        column-gap: 30px;
    }
    h1 {
        text-transform: uppercase;
        font-size: 2.2em;
        font-weight: 600;
        font-family: "Roboto", sans-serif;
        margin: 10px 10px 0px 25px;
    }
    h2 {
        text-transform: uppercase;
        font-size: 1em;
        font-weight: 800;
        font-family: "Roboto", sans-serif;
        margin: 0px 10px 0px 25px;
        color: #00bfff;
    }
</style>
