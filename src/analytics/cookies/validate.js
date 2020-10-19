const fs = require('fs')

// eslint-disable-next-line node/no-path-concat
const template = fs.readFileSync(`${__dirname}/banner.html`, 'utf-8')

function hasAnalyticsConsent() {

}

function showBannerIfConsentNotSet() {
  console.log(`showing banner ${template}`)
}

module.exports = { hasAnalyticsConsent, showBannerIfConsentNotSet }
