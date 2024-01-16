---
isPage: true
title: Contact
hero:
  surtitle: ""
  title: Contacter Guilhem
  text: J﻿e souhaite plus d'informations, démarrer un entraînement ou encore
    collaborer avec Guilhem
  align: center
  image:
    src: ""
    darken: true
    background_image: true
  cta:
    text: ""
    url: ""
    blank: false
  cta_second:
    url: ""
    blank: false
    text: ""
blocks:
  - type: form
    grid: small
    offset: center
    background: false
    name: contact
    submit: Envoyer ma demande
    items:
      - type: text
        required: true
        full: true
        label: Email
        options: []
        placeholder: "Ex: mathilde.becerra@exemple.com"
        autocomplete: email
      - type: tel
        required: true
        full: true
        label: Téléphone
        options: []
        placeholder: "Ex: 0673281028"
        autocomplete: tel
      - type: select
        required: true
        full: true
        label: Sujet
        options:
          - title: Entraînement
            value: coaching
          - title: Demande d'information
            value: demande-information
          - title: Autre
            value: autre
      - type: textarea
        required: true
        full: true
        label: Ma demande
    heading:
      title: Envoyer ma demande de contact
      text: G﻿uilhem vous répondra dans les meilleurs délais
  - type: map
    zoom: 13
    grid: large
    background: true
    heading:
      title: Où est situé Guilhem ?
      text: Situé dans le quartier du **Jardin Public**, il peux se rendre rapidement
        dans Bordeaux
    location: '{"type":"Point","coordinates":[-0.5797037,44.849067]}'
---
