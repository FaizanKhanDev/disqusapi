<template>
    <div>
        <h1>Stopwatch</h1>
        <div>
            <p v-if="isRunning">Running...</p>
            <p v-else>Stopped</p>
            <p>Start Time: {{ startTime }}</p>
            <p>End Time: {{ endTime }}</p>
        </div>
        <v-btn @click="start" :disabled="isRunning">Start</v-btn>
        <v-btn @click="end" :disabled="!isRunning">End</v-btn>
    </div>
</template>

<script>
export default {
    data() {
        return {
            isRunning: false,
            startTime: null,
            endTime: null,
        };
    },
    methods: {
        start() {
            this.isRunning = true;
            console.log("fired")
            this.startTime = new Date().toLocaleTimeString();
        },
        end() {
            this.isRunning = false;
            this.endTime = new Date().toLocaleTimeString();
        },
    },
};
</script>
