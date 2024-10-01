function convertToRoman(num) {
    // Bảng quy đổi từ số sang chữ số La Mã
    const romanNumerals = [
      { roman: 'M', value: 1000 },
      { roman: 'CM', value: 900 },
      { roman: 'D', value: 500 },
      { roman: 'CD', value: 400 },
      { roman: 'C', value: 100 },
      { roman: 'XC', value: 90 },
      { roman: 'L', value: 50 },
      { roman: 'XL', value: 40 },
      { roman: 'X', value: 10 },
      { roman: 'IX', value: 9 },
      { roman: 'V', value: 5 },
      { roman: 'IV', value: 4 },
      { roman: 'I', value: 1 }
    ];
  
    // Chuỗi kết quả để lưu chữ số La Mã
    let result = '';
  
    // Duyệt qua bảng quy đổi và trừ giá trị khỏi num cho đến khi hết
    for (let i = 0; i < romanNumerals.length; i++) {
      while (num >= romanNumerals[i].value) {
        result += romanNumerals[i].roman;
        num -= romanNumerals[i].value;
      }
    }
  
    return result;
  }
  
  // Ví dụ kiểm tra
  console.log(convertToRoman(36)); // XXXVI
  console.log(convertToRoman(944)); // CMXLIV
  console.log(convertToRoman(1987)); // MCMLXXXVII
  