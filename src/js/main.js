// modal창
const register = document.querySelector(".user-add-btn");
const modal = document.querySelector(".modal");

register.addEventListener("click", () => {
  modal.style.display = "block";
});

window.addEventListener("click", (cursor) => {
  if (cursor.target === modal) {
    modal.style.display = "none";
  }
});

//input date 오늘 날짜 까지
const uploadBirthday = document.querySelector(".upload-birthday");
let offset = new Date().getTimezoneOffset() * 60000;
let today = new Date(Date.now() - offset).toISOString().split("T")[0];
uploadBirthday.setAttribute("max", today);

//이미지 미리보기
const profileImage = document.getElementById("image-upload");
const preview = document.querySelector(".image-preview");
profileImage.addEventListener("change", () => {
  const file = profileImage.files[0];
  preview.style.backgroundImage = "";
  const reader = new FileReader();

  reader.onload = function (e) {
    const imageData = e.target.result;
    preview.style.backgroundImage = `url("${imageData}")`;
    preview.style.backgroundSize = "cover";
  };
  reader.readAsDataURL(file);
});

//로컬스토리지
const uploadBtn = document.querySelector(".upload-btn");
uploadBtn.addEventListener("click", () => {
  const file = profileImage.files[0];
  const nameInput = document.querySelector(".upload-name");
  const name = nameInput.value;
  const groupInput = document.querySelector(".upload-group");
  const group = groupInput.value;
  const birthdayInput = document.querySelector(".upload-birthday");
  const birthday = birthdayInput.value;
  if (file && name && group && birthday) {
    const reader = new FileReader();

    //이미지 압축
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

        //저장
        const data = {
          name: name,
          image: imageDataBase64,
          group: group,
          birthday: birthday,
        };

        localStorage.setItem(name, JSON.stringify(data));

        alert("등록되었습니다.");
        location.reload(true);
      };
    };

    reader.readAsDataURL(file);
  } else {
    alert("정보를 입력해주세요.");
  }
});

//무한 스크롤
const list = document.querySelector(".list");
let start = 0;
let dataEnd = false;
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting && !dataEnd) {
        for (let i = start; i < start + 8; i++) {
          const key = localStorage.key(i);
          if (!key) {
            dataEnd = true;
            break;
          }
          const data = JSON.parse(localStorage.getItem(key));
          profileLoad(key, data, list);
        }
        start += 8;

        //마지막 프로필로 관찰 요소 변경
        const link = document.querySelectorAll(".profile-link");
        const lastLink = link[link.length - 1];
        if (lastLink && !dataEnd) {
          observer.observe(lastLink);
        }
      }
    });
  },
  { threshold: 0.7 }
);

observer.observe(list);

//프로필 생성, 로드
function profileLoad(key, data, list) {
  const link = document.createElement("a");
  link.classList.add("profile-link");
  link.href = "../../profile.html?key=" + key;

  const skeleton = document.createElement("div");
  skeleton.classList.add("skeleton");
  link.appendChild(skeleton);

  const top = document.createElement("div");
  top.classList.add("top");

  const checkbox = document.createElement("input");
  checkbox.classList.add("check");
  checkbox.type = "checkbox";
  checkbox.name = key;

  const image = document.createElement("img");
  image.src = data.image;
  image.alt = "profile image";

  top.append(checkbox, image);

  const bottom = document.createElement("div");
  bottom.classList.add("bottom");

  const name = document.createElement("h1");
  name.classList.add("name");
  name.textContent = data.name;

  const bottomContents = document.createElement("div");
  bottomContents.classList.add("bottom-contents");

  const groupLabel = document.createElement("div");
  groupLabel.textContent = "group";

  const group = document.createElement("div");
  group.classList.add("group");
  group.textContent = data.group;

  const birthdayLabel = document.createElement("div");
  birthdayLabel.textContent = "Birthday";

  const birthday = document.createElement("div");
  birthday.classList.add("birthday");
  birthday.textContent = data.birthday;

  bottomContents.append(groupLabel, group, birthdayLabel, birthday);
  bottom.append(name, bottomContents);
  link.append(top, bottom);
  list.append(link);

  setTimeout(() => {
    link.removeChild(skeleton);
  }, 3000);
}

//검색
const searchInput = document.querySelector(".search");
searchInput.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    const list = document.querySelector(".list");
    list.innerHTML = "";
    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i);
      const data = JSON.parse(localStorage.getItem(key));

      if (data.name === searchInput.value) {
        profileLoad(key, data, list);
      } else if (searchInput.value === "") {
        //공백이면 전체 리스트
        profileLoad(key, data, list);
      }
    }
  }
});

//삭제
const deleteBtn = document.querySelector(".user-del-btn");
deleteBtn.addEventListener("click", () => {
  const check = document.querySelectorAll(".check");
  if (confirm("정말 삭제하시겠습니까?")) {
    for (let i = 0; i < check.length; i++) {
      if (check[i].checked) {
        const key = check[i].name;
        localStorage.removeItem(key);
      }
    }
    location.reload(true);
  }
});
