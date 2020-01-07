<template>
  <v-layout column justify-center align-center>
    <v-col>
      <v-sheet>
        <v-toolbar flat color="white">
          <v-btn @click="setToday" outlined class="mr-4" color="grey darken-2">
            Today
          </v-btn>
          <v-btn @click="prev" fab text small color="grey darken-2">
            <v-icon small>mdi-chevron-left</v-icon>
          </v-btn>
          <v-btn @click="next" fab text small color="grey darken-2">
            <v-icon small>mdi-chevron-right</v-icon>
          </v-btn>

          <v-toolbar-title>{{ title }}</v-toolbar-title>

          <v-spacer></v-spacer>

          <v-menu bottom right>
            <template v-slot:activator="{ on }">
              <v-btn v-on="on" outlined color="grey darken-2">
                <span>{{ typeToLabel[type] }}</span>
                <v-icon right>mdi-menu-down</v-icon>
              </v-btn>
            </template>

            <v-list>
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
          :events="events"
          :event-color="getEventColor"
          :type="type"
          :weekdays="weekdays"
          @click:event="showEvent"
          @click:more="viewDay"
          @change="updateRange"
          color="primary"
        ></v-calendar>
        <v-menu
          v-model="selectedOpen"
          :close-on-content-click="false"
          :activator="selectedElement"
          offset-x
        >
          <v-card color="grey lighten-4" min-width="250px" flat>
            <v-toolbar :color="selectedEvent.color" dark>
              <v-toolbar-title v-html="selectedEvent.name"></v-toolbar-title>
              <v-spacer></v-spacer>
              <v-btn @click="selectedOpen = false" icon>
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
export default {
  data() {
    return {
      focus: '',
      type: 'week',
      typeToLabel: {
        month: 'Mois',
        week: 'Semaine'
      },
      start: null,
      end: null,
      selectedEvent: {},
      selectedElement: null,
      selectedOpen: false,
      events: [],
      weekdays: [1, 2, 3, 4, 5]
    }
  },
  computed: {
    title() {
      const { start, end } = this
      if (!start || !end) {
        return ''
      }

      const startMonth = this.monthFormatter(start)
      const endMonth = this.monthFormatter(end)
      const suffixMonth = startMonth === endMonth ? '' : endMonth

      const startYear = start.year
      const endYear = end.year
      const suffixYear = startYear === endYear ? '' : endYear

      const startDay = start.day + this.nth(start.day)
      const endDay = end.day + this.nth(end.day)

      switch (this.type) {
        case 'month':
          return `${startMonth} ${startYear}`
        case 'week':
          return `${startMonth} ${startDay} ${startYear} - ${suffixMonth} ${endDay} ${suffixYear}`
      }
      return ''
    },
    monthFormatter() {
      return this.$refs.calendar.getFormatter({
        timeZone: 'UTC',
        month: 'long'
      })
    }
  },
  mounted() {
    this.$refs.calendar.scrollToTime({ hour: 7, minute: 30 })
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
      /* const events = []

      const min = new Date(`${start.date}T00:00:00`)
      const max = new Date(`${end.date}T23:59:59`)
      const days = (max.getTime() - min.getTime()) / 86400000
      const eventCount = this.rnd(days, days + 20)

      for (let i = 0; i < eventCount; i++) {
        const allDay = this.rnd(0, 3) === 0
        const firstTimestamp = this.rnd(min.getTime(), max.getTime())
        const first = new Date(firstTimestamp - (firstTimestamp % 900000))
        const secondTimestamp = this.rnd(2, allDay ? 288 : 8) * 900000
        const second = new Date(first.getTime() + secondTimestamp)

        events.push({
          name: this.names[this.rnd(0, this.names.length - 1)],
          start: this.formatDate(first, !allDay),
          end: this.formatDate(second, !allDay),
          color: this.colors[this.rnd(0, this.colors.length - 1)]
        })
      } */
      const events = []
      events.push({
        name: 'Projet Conférence',
        start: '2020-01-06 9:30',
        end: '2020-01-06 12:30',
        color: 'indigo',
        salle: 'S 106',
        prof: 'SAILHAN Virginie'
      })
      events.push({
        name: 'Stratégie de Communication',
        start: '2020-01-06 13:30',
        end: '2020-01-06 17:00',
        color: 'indigo',
        salle: 'S 106',
        prof: 'BASTIDE Marie'
      })

      events.push({
        name: 'DC Camp Branding - S106',
        start: '2020-01-07 9:00',
        end: '2020-01-07 12:30',
        color: 'indigo',
        salle: 'S 112',
        prof: 'GARCIA Alexandre'
      })
      events.push({
        name: 'DC Meet Plan Financier',
        start: '2020-01-07 13:30',
        end: '2020-01-07 17:00',
        color: 'indigo',
        salle: 'S 112',
        prof: 'BANCQUART François'
      })

      events.push({
        name: 'Marketing Digital',
        start: '2020-01-08 9:00',
        end: '2020-01-08 12:30',
        color: 'indigo',
        salle: 'S 106',
        prof: 'VILAPLANA Katia-Maëva'
      })
      events.push({
        name: 'Culture Digitale',
        start: '2020-01-08 13:30',
        end: '2020-01-08 17:00',
        color: 'indigo',
        salle: 'S 116',
        prof: 'BONNEMAINS CAROLE'
      })
      events.push({
        name: 'Réunion Evaluation Qualité',
        start: '2020-01-08 17:00',
        end: '2020-01-08 18:00',
        color: 'indigo'
      })

      events.push({
        name: 'Spé Data',
        start: '2020-01-09 9:00',
        end: '2020-01-09 12:30',
        color: 'indigo',
        salle: 'S 111',
        prof: 'OTTAVIANONI Guillaume'
      })
      events.push({
        name: 'Spé UX',
        start: '2020-01-09 9:00',
        end: '2020-01-09 12:30',
        color: 'blue',
        salle: 'S 113',
        prof: 'SCHMITT Bénédicte'
      })
      events.push({
        name: 'Spé Brand',
        start: '2020-01-09 9:00',
        end: '2020-01-09 13:00',
        color: 'orange',
        salle: 'S 104',
        prof: 'BERNARD Ingrid'
      })
      events.push({
        name: 'Spé Data',
        start: '2020-01-09 13:30',
        end: '2020-01-09 17:00',
        color: 'indigo',
        salle: 'S 111',
        prof: 'OTTAVIANONI Guillaume'
      })
      events.push({
        name: 'Spé UX',
        start: '2020-01-09 13:30',
        end: '2020-01-09 17:00',
        color: 'blue',
        salle: 'S 113',
        prof: 'SCHMITT Bénédicte'
      })
      events.push({
        name: 'Spé Brand',
        start: '2020-01-09 14:00',
        end: '2020-01-09 17:00',
        color: 'orange',
        salle: 'S 104',
        prof: 'BERNARD Ingrid'
      })

      events.push({
        name: 'WordPress',
        start: '2020-01-10 9:00',
        end: '2020-01-10 12:30',
        color: 'indigo',
        salle: 'S 219',
        prof: 'ALAUX Benoit'
      })
      events.push({
        name: 'Outils Graphiques et Web',
        start: '2020-01-10 13:30',
        end: '2020-01-10 17:00',
        color: 'indigo',
        salle: 'LISAA M 109',
        prof: 'PEPIN Emmanuel'
      })

      this.start = start
      this.end = end
      this.events = events
    },
    nth(d) {
      return d > 3 && d < 21
        ? 'th'
        : ['th', 'st', 'nd', 'rd', 'th', 'th', 'th', 'th', 'th', 'th'][d % 10]
    },
    rnd(a, b) {
      return Math.floor((b - a + 1) * Math.random()) + a
    },
    formatDate(a, withTime) {
      return withTime
        ? `${a.getFullYear()}-${a.getMonth() +
            1}-${a.getDate()} ${a.getHours()}:${a.getMinutes()}`
        : `${a.getFullYear()}-${a.getMonth() + 1}-${a.getDate()}`
    }
  },
  middleware: 'securePage'
}
</script>
