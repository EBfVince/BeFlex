<template>
  <div>
    <v-card class="mb-10">
      <v-img
        src="https://images.unsplash.com/photo-1575015642299-5b92fcbd0ba4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=80"
        height="200"
        class="grey darken-4"
      ></v-img>
      <v-card-title class="title">Crée ton compte</v-card-title>
    </v-card>
    <v-form ref="form" v-model="valid" lazy-validation>
      <v-text-field
        v-model="prenom"
        label="Prénom"
        append-icon="mdi-account"
        outlined
        required
      ></v-text-field>

      <v-text-field
        v-model="nom"
        label="Nom"
        append-icon="mdi-account-outline"
        outlined
        required
      ></v-text-field>

      <v-btn :disabled="!valid" color="success" class="mr-4" @click="validate">
        Validate
      </v-btn>

      <v-btn color="error" class="mr-4" @click="reset">
        Reset Form
      </v-btn>

      <v-btn color="warning" @click="resetValidation">
        Reset Validation
      </v-btn>
    </v-form>
  </div>
</template>

<style>
.salut {
  max-width: 300px;
}
</style>
