function initialState() {
  return {
    planning: [
      {
        name: 'Projet Conférence',
        start: '2020-01-06 9:30',
        end: '2020-01-06 12:30',
        color: 'indigo',
        salle: 'S 106',
        prof: 'SAILHAN Virginie'
      },
      {
        name: 'Stratégie de Communication',
        start: '2020-01-06 13:30',
        end: '2020-01-06 17:00',
        color: 'indigo',
        salle: 'S 106',
        prof: 'BASTIDE Marie'
      },

      {
        name: 'DC Camp Branding - S106',
        start: '2020-01-07 9:00',
        end: '2020-01-07 12:30',
        color: 'indigo',
        salle: 'S 112',
        prof: 'GARCIA Alexandre'
      },
      {
        name: 'DC Meet Plan Financier',
        start: '2020-01-07 13:30',
        end: '2020-01-07 17:00',
        color: 'indigo',
        salle: 'S 112',
        prof: 'BANCQUART François'
      },

      {
        name: 'Marketing Digital',
        start: '2020-01-08 9:00',
        end: '2020-01-08 12:30',
        color: 'indigo',
        salle: 'S 106',
        prof: 'VILAPLANA Katia-Maëva'
      },
      {
        name: 'Culture Digitale',
        start: '2020-01-08 13:30',
        end: '2020-01-08 17:00',
        color: 'indigo',
        salle: 'S 116',
        prof: 'BONNEMAINS CAROLE'
      },
      {
        name: 'Réunion Evaluation Qualité',
        start: '2020-01-08 17:00',
        end: '2020-01-08 18:00',
        color: 'indigo'
      },

      {
        name: 'Spé Data',
        start: '2020-01-09 9:00',
        end: '2020-01-09 12:30',
        color: 'indigo',
        salle: 'S 111',
        prof: 'OTTAVIANONI Guillaume'
      },
      {
        name: 'Spé UX',
        start: '2020-01-09 9:00',
        end: '2020-01-09 12:30',
        color: 'blue',
        salle: 'S 113',
        prof: 'SCHMITT Bénédicte'
      },
      {
        name: 'Spé Brand',
        start: '2020-01-09 9:00',
        end: '2020-01-09 13:00',
        color: 'orange',
        salle: 'S 104',
        prof: 'BERNARD Ingrid'
      },
      {
        name: 'Spé Data',
        start: '2020-01-09 13:30',
        end: '2020-01-09 17:00',
        color: 'indigo',
        salle: 'S 111',
        prof: 'OTTAVIANONI Guillaume'
      },
      {
        name: 'Spé UX',
        start: '2020-01-09 13:30',
        end: '2020-01-09 17:00',
        color: 'blue',
        salle: 'S 113',
        prof: 'SCHMITT Bénédicte'
      },
      {
        name: 'Spé Brand',
        start: '2020-01-09 14:00',
        end: '2020-01-09 17:00',
        color: 'orange',
        salle: 'S 104',
        prof: 'BERNARD Ingrid'
      },

      {
        name: 'WordPress',
        start: '2020-01-10 9:00',
        end: '2020-01-10 12:30',
        color: 'indigo',
        salle: 'S 219',
        prof: 'ALAUX Benoit'
      },
      {
        name: 'Outils Graphiques et Web',
        start: '2020-01-10 13:30',
        end: '2020-01-10 17:00',
        color: 'indigo',
        salle: 'LISAA M 109',
        prof: 'PEPIN Emmanuel'
      }
    ]
  }
}

export const state = initialState

export const getters = {
  planning: (state) => {
    return state.planning
  }
}
