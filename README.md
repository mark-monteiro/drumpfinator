# Drumpfinator

[![Code Climate](https://codeclimate.com/github/mark-monteiro/drumpfinator/badges/gpa.svg)](https://codeclimate.com/github/mark-monteiro/drumpfinator)

Tired of seeing Donald Trump's name everywhere on the internet?
Now you don't have to!

Available for download on the [Chrome Web Store](https://chrome.google.com/webstore/detail/drumpfinator/bjimekmhhbmpblaifnbeingfpbipbppg) and [addons.mozilla.org](https://addons.mozilla.org/en-US/firefox/addon/drumpfinator-plus/).

## Development

### Testing Locally

To load the extension in Chrome, navigate to the [extensions settings page](chrome://extensions/) and click the `Load unpacked extension...` button. Navigate to and select the root folder of this repository to load the extension. The extension will appear in the list below. After any code changes you will need to return to this page and click the 'Reload' link below the extension in the list.

### Packaging

The source code in this repository can be packaged into an extesion .zip package using the `package.rb` script in the repository root.

Running this script required the following dependencies:

* Ruby + RubyGems: https://rubyinstaller.org/downloads/
* rubyzip gem (v 1.1.0): `gem install rubyzip -v 1.1.0`

To run the script:

```bash
ruby package.rb
```
