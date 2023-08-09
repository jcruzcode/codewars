function past(h, m, s){
    let convertHours = 3600000; // 1 hr = 3,600,000 ms (milliseconds)
    let convertMin = 60000; // 1 min = 60,000 ms
    
    // Compute sum and return time since midnight in ms
    return h*convertHours + m*convertMin + s*1000;
  }