function boolToWord( bool ){
    // Make sure input is a boolean
    bool = Boolean(bool);
    
    // Ternary operator - If bool is true, return "Yes". Otherwise, false and return "No".
    return bool ? "Yes": "No";
  }