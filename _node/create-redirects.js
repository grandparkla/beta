
'use strict'

let fs = require('fs')
let mkdirp = require('mkdirp')
let yaml = require('js-yaml')

function createMarkdownFile(filename) {

  let data = {}

  data.title = "This page has moved"
  data.permalink = `/${filename}/`
  data.redirect = `https://classic.grandparkla.org/${filename}/`
  data.canonical_url = `https://classic.grandparkla.org/${filename}/`
  data.layout = "redirect"

  // console.dir(data)
  let writePath = '../redirects';

  // https://www.npmjs.com/package/js-yaml#safedump-object---options-
  let output =
`---
${yaml.safeDump(data)}---
`

  mkdirp(writePath, function (err) {
    if (err) {
      console.error(err)
    } else {
      fs.writeFileSync(writePath + '/' +  filename + '.markdown', output, 'utf8', (err) => {
        if (err) {
          console.log(err)
        }
      })
    }
  })
}

function createRedirects(list) {
  for (let index = 0; index < list.length; index++) {
    createMarkdownFile(list[index])
  }
}

const redirectList = [
  '5-years-together',
  '6-essential-things-you-need-bring-to-a-music-festival',
  '8-tips-to-help-the-environment-this-earth-day',
  '2018-artists-for-nyela',
  '2018-big-l-a-portrait-gallery',
  '2018-grand-park-downtown-dia-de-los-muertos-participating-artists-and-orgs',
  'a-message-to-grand-park-yogis',
  'a-truly-angeleno-winter',
  'aint-no-half-steppin-at-grand-park',
  'beat-swap-meet-at-grand-park',
  'big-ups-on-city-hall',
  'caldergreenwood',
  'callforartist',
  'choosenow',
  'common-roots-a-conversation-with-diane-rodriguez',
  'county-park-visuals',
  'deconstructingemilyblog',
  'dont-be-jelly-we-jammed',
  'downtowndia',
  'event',
  'event-calendar',
  'fall-and-winter-in-grand-park',
  'fallandwintermagic',
  'fun-family-activities-around-grand-ave',
  'getting-here',
  'go-4th-dtla',
  'grand-park-block-party',
  'grand-park-inaugural-weekend',
  'grand-parks-first-summer',
  'grand-parks-style-squad',
  'grand-parks-style-squad-putting-on-your-sunday-best',
  'hairspray',
  'heart-beatz-of-nyela',
  'la-artists-on-grand-parks-little-libraries',
  'las-taco-time',
  'lastory-at-nyela',
  'literary-la-places-spaces-and-faces',
  'little-libraries',
  'littlelibraries',
  'loverslane',
  'master-altar-maker-ofelia-esparza-las-national-treasure',
  'media',
  'media-contact',
  'meet-the-staff',
  'meet-the-staff-jobs',
  'n-y-e-l-a-countdown-to-2019-featured-artists',
  'national-dance-day-celebration',
  'nyela',
  'paperairplanes',
  'paperairplanetakesflight',
  'park-media-day-final',
  'park-proud',
  'reading-over-bookfest',
  'ron-smith-mesmerizing-you-july-4th',
  'sign-up',
  'spring-is-for-our-l-a-voices',
  'springtime2016',
  'springtimereads',
  'summer',
  'summer-jamathon',
  'taco-gladness',
  'the-gringos-guide-to-salsa-swagger',
  'the-plant-life-of-grand-park-designers-talk-their-favorites',
  'to-live-and-dance-in-la',
  'viva-dtla',
  'wanted-you-think-you-can-dance-in-grand-park',
]

createRedirects(redirectList)

