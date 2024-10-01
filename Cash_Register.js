function checkCashRegister(price, cash, cid) {
    // Định nghĩa giá trị của các đơn vị tiền tệ
    const currencyUnit = [
      ["PENNY", 0.01],
      ["NICKEL", 0.05],
      ["DIME", 0.1],
      ["QUARTER", 0.25],
      ["ONE", 1],
      ["FIVE", 5],
      ["TEN", 10],
      ["TWENTY", 20],
      ["ONE HUNDRED", 100]
    ];
  
    let changeDue = cash - price; // Số tiền phải trả lại
    let totalCid = cid.reduce((sum, current) => sum + current[1], 0); // Tổng số tiền trong ngăn kéo
    totalCid = totalCid.toFixed(2); // Định dạng số với 2 chữ số thập phân
  
    if (totalCid < changeDue) {
      return { status: "INSUFFICIENT_FUNDS", change: [] }; // Không đủ tiền trong ngăn kéo
    } else if (totalCid == changeDue) {
      return { status: "CLOSED", change: cid }; // Đúng bằng số tiền phải trả
    }
  
    // Tạo mảng để lưu số tiền trả lại
    let changeArray = [];
  
    // Duyệt qua các đơn vị tiền tệ từ lớn đến nhỏ
    for (let i = currencyUnit.length - 1; i >= 0; i--) {
      let unitName = currencyUnit[i][0]; // Tên đơn vị tiền tệ
      let unitValue = currencyUnit[i][1]; // Giá trị của đơn vị tiền tệ
      let amountInDrawer = cid[i][1]; // Số tiền còn trong ngăn kéo cho đơn vị này
      let amountToReturn = 0;
  
      // Kiểm tra xem có thể trả lại tiền đơn vị này hay không
      while (changeDue >= unitValue && amountInDrawer > 0) {
        changeDue -= unitValue; // Trừ đi số tiền của đơn vị này
        changeDue = changeDue.toFixed(2); // Giữ 2 chữ số thập phân
        amountInDrawer -= unitValue; // Trừ tiền trong ngăn kéo
        amountToReturn += unitValue; // Tăng số tiền trả lại cho đơn vị này
      }
  
      // Nếu có trả lại đơn vị tiền tệ này thì thêm vào mảng kết quả
      if (amountToReturn > 0) {
        changeArray.push([unitName, amountToReturn]);
      }
    }
  
    // Nếu sau khi duyệt qua tất cả mà vẫn không đủ tiền để trả lại
    if (changeDue > 0) {
      return { status: "INSUFFICIENT_FUNDS", change: [] };
    }
  
    return { status: "OPEN", change: changeArray };
  }
  
  // Ví dụ kiểm tra
  console.log(checkCashRegister(19.5, 20, [
    ["PENNY", 1.01],
    ["NICKEL", 2.05],
    ["DIME", 3.1],
    ["QUARTER", 4.25],
    ["ONE", 90],
    ["FIVE", 55],
    ["TEN", 20],
    ["TWENTY", 60],
    ["ONE HUNDRED", 100]
  ])); 
  // { status: "OPEN", change: [["QUARTER", 0.5]] }
  
  console.log(checkCashRegister(3.26, 100, [
    ["PENNY", 1.01],
    ["NICKEL", 2.05],
    ["DIME", 3.1],
    ["QUARTER", 4.25],
    ["ONE", 90],
    ["FIVE", 55],
    ["TEN", 20],
    ["TWENTY", 60],
    ["ONE HUNDRED", 100]
  ]));
  // { status: "OPEN", change: [["TWENTY", 60], ["TEN", 20], ["FIVE", 15], ["ONE", 1], ["QUARTER", 0.5], ["DIME", 0.2], ["PENNY", 0.04]] }
  