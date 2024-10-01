function telephoneCheck(str) {
    // Biểu thức chính quy để kiểm tra tính hợp lệ của số điện thoại Mỹ
    const regex = /^(1\s?)?(\(\d{3}\)|\d{3})[\s-]?\d{3}[\s-]?\d{4}$/;
    
    // Kiểm tra chuỗi đầu vào với regex và trả về true nếu hợp lệ, ngược lại false
    return regex.test(str);
  }
  
  // Ví dụ kiểm tra
  console.log(telephoneCheck("555-555-5555")); // true
  console.log(telephoneCheck("(555)555-5555")); // true
  console.log(telephoneCheck("(555) 555-5555")); // true
  console.log(telephoneCheck("555 555 5555")); // true
  console.log(telephoneCheck("5555555555")); // true
  console.log(telephoneCheck("1 555 555 5555")); // true
  console.log(telephoneCheck("123**&!!asdf#")); // false
  console.log(telephoneCheck("5555555")); // false
  console.log(telephoneCheck("1 555)555-5555")); // false
  console.log(telephoneCheck("2 (757) 622-7382")); // false
  