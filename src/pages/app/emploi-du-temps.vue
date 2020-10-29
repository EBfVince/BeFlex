<template>
  <v-layout column justify-center align-center>
    <v-col>
      <v-sheet>
        <v-toolbar flat color="white">
          <v-btn fab text small color="grey darken-2" @click="prev">
            <v-icon small>mdi-chevron-left</v-icon>
          </v-btn>
          <!--
          <v-btn @click="setToday" outlined class="mr-4" color="grey darken-2">
            Aujourd'hui
          </v-btn>
          -->
          <v-btn fab text small color="grey darken-2" @click="next">
            <v-icon small>mdi-chevron-right</v-icon>
          </v-btn>

          <v-toolbar-title>{{ title }}</v-toolbar-title>

          <v-spacer></v-spacer>

          <v-menu bottom right>
            <template v-slot:activator="{ on }">
              <v-btn outlined color="grey darken-2" v-on="on">
                <span>{{ typeToLabel[type] }}</span>
                <v-icon right>mdi-menu-down</v-icon>
              </v-btn>
            </template>

            <v-list>
              <v-list-item @click="type = 'day'">
                <v-list-item-title>Jour</v-list-item-title>
              </v-list-item>
              <v-list-item @click="type = 'week'">
                <v-list-item-title>Semaine</v-list-item-title>
              </v-list-item>
              <v-list-item @click="type = 'month'">
                <v-list-item-title>Mois</v-list-item-title>
              </v-list-item>
            </v-list>
          </v-menu>
        </v-toolbar>
      </v-sheet>
      <v-sheet height="600">
        <v-calendar
          ref="calendar"
          v-model="focus"
          :events="planning"
          :event-color="getEventColor"
          :type="type"
          :weekdays="weekdays"
          color="primary"
          @click:event="showEvent"
          @click:more="viewDay"
          @change="updateRange"
        ></v-calendar>
        <v-menu
          v-model="selectedOpen"
          :close-on-content-click="false"
          :activator="selectedElement"
          offset-x
          max-width="300px"
        >
          <v-card color="grey lighten-4">
            <v-toolbar :color="selectedEvent.color" dark>
              <v-toolbar-title v-html="selectedEvent.name"></v-toolbar-title>
              <v-spacer></v-spacer>
              <v-btn icon @click="selectedOpen = false">
                <v-icon>mdi-close</v-icon>
              </v-btn>
            </v-toolbar>

            <v-card-text>
              <p v-if="selectedEvent.salle">
                Salle : <b>{{ selectedEvent.salle }}</b>
              </p>
              <p v-if="selectedEvent.prof">
                Prof : <b>{{ selectedEvent.prof }}</b>
              </p>
            </v-card-text>
          </v-card>
        </v-menu>
      </v-sheet>
    </v-col>
  </v-layout>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  data() {
    return {
      focus: '',
      type: 'week',
      typeToLabel: {
        month: 'Mois',
        week: 'Semaine',
        day: 'Jour',
      },
      start: null,
      end: null,
      selectedEvent: {},
      selectedElement: null,
      selectedOpen: false,
      weekdays: [1, 2, 3, 4, 5],
    }
  },
  computed: {
    ...mapGetters({
      planning: 'edt/planning',
    }),
    title() {
      const { start, end } = this
      if (!start || !end) {
        return ''
      }

      const startMonth = this.monthFormatter(start)
      const endMonth = this.monthFormatter(end)
      const suffixMonth = startMonth === endMonth ? '' : endMonth

      const suffixYear = start.year === end.year ? '' : end.year

      switch (this.type) {
        case 'month':
          return `${startMonth} ${start.year}`
        case 'week':
          return `${start.day} ${startMonth} ${start.year} - ${end.day} ${suffixMonth} ${suffixYear}`
        case 'day':
          return `${start.day} ${startMonth} ${start.year}`
      }
      return ''
    },
    monthFormatter() {
      return this.$refs.calendar.getFormatter({
        timeZone: 'UTC',
        month: 'long',
      })
    },
  },
  mounted() {
    this.$refs.calendar.scrollToTime({ hour: 8, minute: 30 })
    this.$refs.calendar.checkChange()
  },
  methods: {
    viewDay({ date }) {
      this.focus = date
      this.type = 'day'
    },
    getEventColor(event) {
      return event.color
    },
    setToday() {
      this.focus = '' // this.today
    },
    prev() {
      this.$refs.calendar.prev()
    },
    next() {
      this.$refs.calendar.next()
    },
    showEvent({ nativeEvent, event }) {
      const open = () => {
        this.selectedEvent = event
        this.selectedElement = nativeEvent.target
        setTimeout(() => (this.selectedOpen = true), 10)
      }

      if (this.selectedOpen) {
        this.selectedOpen = false
        setTimeout(open, 10)
      } else {
        open()
      }

      nativeEvent.stopPropagation()
    },
    updateRange({ start, end }) {
      this.start = start
      this.end = end
      // this.events = events
    },
  },
  middleware: 'securePage',
}
</script>
