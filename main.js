const aadhar = document.getElementById("aadhar")
aadhar.addEventListener('change', (event) => {
    const fileList = event.target.files;
    console.log(fileList);
  });