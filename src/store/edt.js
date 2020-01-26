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
      },

      //
      // Nouvelle semaine

      {
        name: 'Stratégie de contenu',
        start: '2020-01-27 9:00',
        end: '2020-01-27 12:30',
        color: 'indigo',
        salle: 'DC S 107',
        prof: 'BERNARD Ingrid'
      },
      {
        name: 'Gestion de projet',
        start: '2020-01-27 13:30',
        end: '2020-01-27 17:00',
        color: 'indigo',
        salle: 'DC S 107',
        prof: 'AHMAD Alexandre'
      },
      {
        name: 'Stratégie de contenu',
        start: '2020-01-28 9:00',
        end: '2020-01-28 12:30',
        color: 'indigo',
        salle: 'DC S 107',
        prof: 'BERNARD Ingrid'
      },
      {
        name: 'Marketing Digital',
        start: '2020-01-28 13:30',
        end: '2020-01-28 17:00',
        color: 'indigo',
        salle: 'DC S 107',
        prof: 'VILAPLANA Katia-Maëva'
      },
      {
        name: 'Anglais',
        start: '2020-01-29 9:00',
        end: '2020-01-29 12:30',
        color: 'indigo',
        salle: 'DC S 106',
        prof: 'SIFFLET Baptiste'
      },
      {
        name: 'Plan Financier',
        start: '2020-01-29 13:30',
        end: '2020-01-29 17:00',
        color: 'indigo',
        salle: 'S 116',
        prof: 'BANCQUART François'
      },

      {
        name: 'Spé Data',
        start: '2020-01-30 9:00',
        end: '2020-01-30 12:30',
        color: 'indigo',
        salle: 'DC S 103',
        prof: 'STRELEZKI Laura'
      },
      {
        name: 'Spé Data',
        start: '2020-01-30 13:30',
        end: '2020-01-30 17:00',
        color: 'indigo',
        salle: 'DC S 103',
        prof: 'STRELEZKI Laura'
      },

      {
        name: 'Spé UX',
        start: '2020-01-30 9:00',
        end: '2020-01-30 12:30',
        color: 'blue',
        salle: 'DC S 111',
        prof: 'SCHMITT Bénédicte'
      },
      {
        name: 'Spé UX',
        start: '2020-01-30 13:30',
        end: '2020-01-30 17:00',
        color: 'blue',
        salle: 'DC S 111',
        prof: 'SCHMITT Bénédicte'
      },

      {
        name: 'Spé Brand',
        start: '2020-01-30 9:00',
        end: '2020-01-30 12:30',
        color: 'orange',
        salle: 'S 114',
        prof: 'BERNARD Ingrid'
      },
      {
        name: 'Spé Brand',
        start: '2020-01-30 13:30',
        end: '2020-01-30 17:00',
        color: 'orange',
        salle: 'S 114',
        prof: 'BERNARD Ingrid'
      },

      {
        name: 'Wordpress',
        start: '2020-01-31 9:00',
        end: '2020-01-31 12:30',
        color: 'indigo',
        salle: 'S 114',
        prof: 'ALAUX Benoit'
      },
      {
        name: 'Outils Graphique et web',
        start: '2020-01-31 13:30',
        end: '2020-01-31 17:00',
        color: 'indigo',
        salle: 'S 114',
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
