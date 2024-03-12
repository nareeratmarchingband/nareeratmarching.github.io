function processForm(formObject) {
  const url = "https://sheet.best/api/sheets/72377391-eb7b-4832-b0cf-6ea1df82c500";

  const formData = {
    first_name: formObject.first_name.value,
    last_name: formObject.last_name.value,
    gender: formObject.gender.value,
    phone: formObject.phone.value,
    nickname: formObject.nickname.value,
    class: formObject.class.value,
    plan: formObject.plan.value
  };


  fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(formData)
  })
  .then(response => response.json())
  .then(data => {

    console.log(data);
    alert("ส่งข้อมูลการสมัครสำเร็จ!");
  })
  .catch(error => {
    console.error('Error:', error);
    alert("ไม่สามารถส่งข้อมูลได้ โปรดติดต่อ ผู้ดูแลระบบ")
  });
}
