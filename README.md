Speech synthesis made easy - Browser based text to speech (TTS)
===

## Installation

```bash
npm install ttslib
```

## Description

Speech synthesis (tts) for the browser. Wrapping the browser Speech Synthesis API (https://developer.mozilla.org/en-US/docs/Web/API/SpeechSynthesis) and providing a similar interface, it improves it by :
-> init()  has optional paramters for volume,rate and pitch
-> speak() converts the text into speech with specified voice
- handling the fact that Chrome load voices in an asynchronous manner when others browsers don't
-> voice list supoort browser specific voice
- throwing specific exceptions: explicit exceptions will be thrown if you pass parameters with incompatible values to any of the methods

Work in Chrome, Edge and Mozila. 
See browser support here : http://caniuse.com/#feat=speech-synthesis

## Usage

Import the library :

```javascript
import Speech from 'speak-tts' // es6
// var Speech = require('speak-tts') //if you use es5
```

Check for browser support :

```javascript
const speech = new Speech() // will throw an exception if not browser supported
if(speech.hasBrowserSupport()) { // returns a boolean
	console.log("speech synthesis supported")
}
```

Init the speech component :

```javascript
init(paremters)
```
You can pass the following properties to the init function:

- voice : the voice to use // default is chosen by your browser if not provided
- lang // default is determined by your browser if not provided
- volume // optional default is 1
- rate // optional default 1
- pitch //  optional default 1

```javascript
// Example with full conf 
init('Microsoft Zira - English (United States)','en-US',1,1);
```

Read a text :

```javascript
tts.speak{
	text: 'Hello, how are you today ?'}
```

You can pass the following properties to the speak function:
- text: text to be spoken

Pause talking in progress:

```javascript
Speech.pause()
```

Resume talking in progress:

```javascript
Speech.resume()
```

Cancel talking in progress:

```javascript
Speech.cancel()
```

Get boolean indicating if the utterance queue contains as-yet-unspoken utterances:

```javascript
Speech.pending()
```

Get boolean indicating if talking is paused:

```javascript
Speech.paused()
```

Get boolean indicating if talking is in progress:

```javascript
Speech.speaking()
```

## Supported languages (list may be incomplete and depends on your browser)
```
ar-SA
cs-CZ
da-DK
de-DE
el-GR
en
en-AU
en-GB
en-IE
en-IN
en-US
en-ZA
es-AR
es-ES
es-MX
es-US
fi-FI
fr-CA
fr-FR
he-IL
hi-IN
hu-HU
id-ID
it-IT
ja-JP
ko-KR
nb-NO
nl-BE
nl-NL
pl-PL
pt-BR
pt-PT
ro-RO
ru-RU
sk-SK
sv-SE
th-TH
tr-TR
zh-CN
zh-HK
zh-TW
```
