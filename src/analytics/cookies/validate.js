const fs = require('fs')
const path = require('path')
const template = fs.readFileSync(path.join(__dirname, 'banner.html'), 'utf-8')

function hasAnalyticsConsent() {

}

function showBannerIfConsentNotSet() {
  console.log(`showing banner ${template}`)
}

module.exports = { hasAnalyticsConsent, showBannerIfConsentNotSet }
