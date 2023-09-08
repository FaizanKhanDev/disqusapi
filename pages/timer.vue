<template>
    <section>
        <stop-watch v-show="isStarted || isFinished" ref="stopWatch" class="digits" :hours="false" :minutes="false"
            @start="setStartTime" @stop="setStopTime" @lap="setLapTime" />

        <button @click="$refs.stopWatch.start()">Start</button>
        <button @click="$refs.stopWatch.lap('42')">Lap</button>
        <button @click="$refs.stopWatch.stop()">Stop</button>
        <button @click="$refs.stopWatch.reset()">Reset</button>
    </section>
</template>

<script>
import StopWatch from '@/components/StopWatch.vue';

export default {
    components: {
        StopWatch
    },
    data() {
        return {
            isStarted: false,
            isFinished: false,
        };
    },
    methods: {
        setStartTime(timestamp) {
            console.log(timestamp);
        },
        setStopTime(timestamp, formattedTime) {
            console.log(timestamp, formattedTime);
        },
        setLapTime(timestamp, formattedTime, id) {
            console.log(timestamp, formattedTime, id);
        },
        pause() {
            this.isRunning = !this.isRunning
            if (this.isRunning) {
                this.startTime = performance.now()
                this.calculate(performance.now())
                this.frameId = requestAnimationFrame(this.step)
            }
            this.$emit('pause', this.isRunning, this.time)
        }
    },
};
</script>
