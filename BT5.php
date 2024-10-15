<?php
// Kết nối đến MySQL
$servername = "localhost"; // hoặc địa chỉ IP máy chủ MySQL
$username = "root"; // tên người dùng MySQL
$password = "0000"; // mật khẩu MySQL
$dbname = "sinhvien_db";

$conn = new mysqli($servername, $username, $password, $dbname);

// Kiểm tra kết nối
if ($conn->connect_error) {
    die("Kết nối thất bại: " . $conn->connect_error);
}

// Xử lý dữ liệu form gửi lên
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $mssv = $_POST["mssv"];
    $hoten = $_POST["hoten"];

    // Chuẩn bị và thực thi câu lệnh SQL
    $stmt = $conn->prepare("INSERT INTO sinhvien (mssv, hoten) VALUES (?, ?)");
    $stmt->bind_param("ss", $mssv, $hoten);

    if ($stmt->execute()) {
        echo "Thêm sinh viên thành công!";
    } else {
        echo "Lỗi: " . $stmt->error;
    }
    $stmt->close();
}
?>

<?php
// Kết nối lại đến MySQL (nếu đã đóng kết nối)
$conn = new mysqli($servername, $username, $password, $dbname);

// Kiểm tra kết nối
if ($conn->connect_error) {
    die("Kết nối thất bại: " . $conn->connect_error);
}

// Lấy danh sách sinh viên từ cơ sở dữ liệu
$sql = "SELECT mssv, hoten FROM sinhvien";
$result = $conn->query($sql);
?>

<h2>Danh Sách Sinh Viên</h2>
<table border="1">
    <tr>
        <th>MSSV</th>
        <th>Họ Tên</th>
    </tr>
    <?php
    if ($result->num_rows > 0) {
        // Hiển thị từng dòng dữ liệu
        while ($row = $result->fetch_assoc()) {
            echo "<tr><td>" . $row["mssv"] . "</td><td>" . $row["hoten"] . "</td></tr>";
        }
    } else {
        echo "<tr><td colspan='2'>Không có sinh viên nào</td></tr>";
    }
    ?>
</table>

<?php
$conn->close(); // Đóng kết nối
?>


<!DOCTYPE html>
<html lang="vi">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Thêm Sinh Viên</title>
</head>
<body>
    <h1>Nhập Thông Tin Sinh Viên</h1>
    <form method="post" action="">
        <label for="mssv">MSSV:</label>
        <input type="text" id="mssv" name="mssv" required><br><br>
        <label for="hoten">Họ Tên:</label>
        <input type="text" id="hoten" name="hoten" required><br><br>
        <input type="submit" value="Thêm Sinh Viên">
    </form>
</body>
</html>
