function setAlarm(employed, vacation){
    if(employed && !vacation ) {
      return true; // true if you're employed and not on vacation
    } else {
      return false; // false otherwise
    }
  }