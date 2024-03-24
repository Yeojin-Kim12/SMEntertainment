const urlParams = new URL(location.href).searchParams;
const key = urlParams.get("key");
console.log(key);

const imgValue = document.querySelector("#img-value");
const nameVlaue = document.querySelector("#name-value");
const groupValue = document.querySelector("#group-value");
const birthdayValue = document.querySelector("#birthday-value");
window.addEventListener("load", () => {
  const data = JSON.parse(localStorage.getItem(key));
  imgValue.src = data.image;
  nameVlaue.value = data.name;
  groupValue.value = data.group;
  birthdayValue.value = data.birthday;
});

const update = document.querySelector(".update");
const containerImage = document.querySelector(".container-image");
const imageFile = document.querySelector("#imageFile");
update.addEventListener("click", () => {
  //있으면 수정사항 저장, 없으면 수정 칸으로 변경
  if (update.classList.contains("edit")) {
    //수정 저장
    const file = imageFile.files[0];

    if (file) {
      const reader = new FileReader();
      reader.onload = (base64) => {
        const imageData = new Image();
        imageData.src = base64.target.result;

        imageData.onload = (e) => {
          const $canvas = document.createElement(`canvas`);
          const ctx = $canvas.getContext(`2d`);

          $canvas.width = e.target.width;
          $canvas.height = e.target.height;

          ctx.drawImage(e.target, 0, 0);

          const imageDataBase64 = $canvas.toDataURL("image/jpeg", 0.7);
          const data = {
            name: nameVlaue.value,
            image: imageDataBase64,
            group: groupValue.value,
            birthday: birthdayValue.value,
          };

          localStorage.setItem(key, JSON.stringify(data));

          alert("수정되었습니다.");
          location.reload(true);
        };
      };
      reader.readAsDataURL(file);
    } else {
      //이미지 파일 없으면 전 이미지 사용
      const data = {
        name: nameVlaue.value,
        image: imgValue.src,
        group: groupValue.value,
        birthday: birthdayValue.value,
      };
      localStorage.setItem(key, JSON.stringify(data));

      alert("수정되었습니다.");
      location.reload(true);
    }

    imageFile.style.display = "none";
    nameVlaue.disabled = true;
    groupValue.disabled = true;
    birthdayValue.disabled = true;
  } else {
    imageFile.style.display = "block";
    nameVlaue.disabled = false;
    groupValue.disabled = false;
    birthdayValue.disabled = false;
  }
  update.classList.toggle("edit");
});

//date 날짜
let offset = new Date().getTimezoneOffset() * 60000;
let today = new Date(Date.now() - offset).toISOString().split("T")[0];
birthdayValue.setAttribute("max", today);

//이미지 미리보기
imageFile.addEventListener("change", () => {
  const file = imageFile.files[0];
  imgValue.style.backgroundImage = "";
  const reader = new FileReader();

  reader.onload = function (e) {
    const imageData = e.target.result;
    imgValue.src = imageData;
  };
  reader.readAsDataURL(file);
});
