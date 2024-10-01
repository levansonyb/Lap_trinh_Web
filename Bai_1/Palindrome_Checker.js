function palindromeChecker(str) {
    // Loại bỏ tất cả các ký tự không phải chữ và số và chuyển tất cả thành chữ thường
    const cleanedStr = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
    
    // So sánh chuỗi đã làm sạch với chuỗi đảo ngược của nó
    return cleanedStr === cleanedStr.split('').reverse().join('');
  }
  
  // Kiểm tra với một vài ví dụ
  console.log(palindromeChecker("racecar")); // true
  console.log(palindromeChecker("RaceCar")); // true
  console.log(palindromeChecker("race CAR")); // true
  console.log(palindromeChecker("2A3*3a2")); // true
  console.log(palindromeChecker("2_A3*3#A2")); // true
  console.log(palindromeChecker("hello")); // false
  