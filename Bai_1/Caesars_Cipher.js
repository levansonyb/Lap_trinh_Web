function rot13(str) {
    // Chuỗi kết quả để lưu chuỗi đã giải mã
    let decodedStr = '';
  
    // Duyệt qua từng ký tự trong chuỗi đầu vào
    for (let i = 0; i < str.length; i++) {
      let char = str[i];
  
      // Kiểm tra xem ký tự có phải là chữ cái không (A-Z)
      if (/[A-Z]/.test(char)) {
        // Chuyển đổi ký tự theo ROT13
        let charCode = str.charCodeAt(i); // Lấy mã ASCII của ký tự
        let newCharCode = ((charCode - 65 + 13) % 26) + 65; // Tính toán mã ASCII mới
        decodedStr += String.fromCharCode(newCharCode); // Thêm ký tự đã giải mã vào chuỗi kết quả
      } else {
        // Nếu không phải chữ cái, giữ nguyên ký tự
        decodedStr += char;
      }
    }
  
    return decodedStr;
  }
  
  // Ví dụ kiểm tra
  console.log(rot13("SERR PBQR PNZC")); // FREE CODE CAMP
  console.log(rot13("SERR CVMMN!"));    // FREE PIZZA!
  console.log(rot13("GUR DHVPX OEBJA QBT WHZCRQ BIRE GUR YNML SBK.")); // THE QUICK BROWN DOG JUMPED OVER THE LAZY FOX.
  