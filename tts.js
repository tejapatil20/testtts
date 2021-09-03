class NiplTTS {
    
    constructor() {
        speech = new SpeechSynthesisUtterance();
        var  browserSupport;
        var voices = window.speechSynthesis.getVoices();
    }
    

   hasbrowserSupport(){
    return this.browserSupport = 'speechSynthesis' in window && 'SpeechSynthesisUtterance' in window;
   }

   init(voice,lang,volume,rate,pitch){
    this.voices=window.speechSynthesis.getVoices();
    if(this.voices.filter(function(v) { return v.name == voice})[0]){
      this.speech.voice=this.voices.filter(function(v) { return v.name == voice})[0];
    }
    else{
      throw 'Error setting voice. The voice you passed is not valid or the voices have not been loaded yet.';
    }
    this.speech.lang=lang;
    if (volume!=undefined){
      if (volume >= 0 && volume <= 1){
        this.speech.volume=volume;
      }else{
        throw 'Error setting volume. Please verify your volume value is a number between 0 and 1.';
      }
    }
    if (rate!=undefined){
      if (rate >= 0 && rate <= 10){
        this.speech.rate=rate;
      }else {
        throw 'Error setting rate. Please verify your volume value is a number between 0 and 10.';
      }
    }
    if (pitch!=undefined ){
      if (pitch >= 0 && pitch <= 2){
        this.speech.pitch=pitch;
      } else {
        throw 'Error setting pitch. Please verify your pitch value is a number between 0 and 2.';
      }
    }
  }

   speak(speechData){
    this.speech.text = speechData;
    window.speechSynthesis.speak(this.speech);
  }

   paused(){
    return speechSynthesis.paused;
  }

   speaking(){
    return speechSynthesis.speaking;
  }

   pause(){
    speechSynthesis.pause();
  }

   resume(){
    speechSynthesis.resume();
  }

   cancel(){
    speechSynthesis.cancel();
  }

}

exports.default = NiplTTS;