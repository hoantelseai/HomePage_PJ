let scrollPosition = 0;

function saveScrollPosition() {
  scrollPosition = window.scrollY;
}

function restoreScrollPosition() {
  window.scrollTo(0, scrollPosition);
}

// Get the modal
const myModal = document.getElementById("menuModal");
const modal = document.querySelectorAll(".modal");
const modalContent = document.querySelector(".modal-content");
// Lấy danh sách các nút mở modal
const btns = document.querySelectorAll(".myBtn");

// When the user clicks on the button, open the modal
btns.forEach((btns, index) => {
  btns.onclick = function () {
    saveScrollPosition();
    // document.body.style.top = `-${scrollPosition}px`;
    modal[index].style.display = "block";
    document.body.style.overflow = "hidden";
  };
});

modal.forEach((modal) => {
  const span = modal.querySelector(".menu-closebtn");
  span.onclick = function () {
    modal.style.display = "none";
    document.body.style.overflow = "";
    restoreScrollPosition();
    // window.scrollTo(0, scrollPosition);
  };
});

const menuItems = [
  {
    name: "アメリカンコーヒー",
    price: "$450",
    description: "A classic hot coffee",
    photo: "image/23020092_s.jpg",
  },
  {
    name: "ブレンドコーヒー",
    price: "$500",
    description: "A smooth blend of coffee beans",
    photo: "image/23157161_s.jpg",
  },
  {
    name: "カフェオレ",
    price: "$600",
    description: "Hot coffee with milk",
    photo: "image/23158347_s.jpg",
  },
  {
    name: "カフェモカ",
    price: "$600",
    description: "Coffee with chocolate",
    photo: "image/23558520_s.jpg",
  },
  {
    name: "カフェラテ",
    price: "$600",
    description: "Espresso with steamed milk",
    photo: "image/4488713_s.jpg",
  },
  {
    name: "カプチーノ",
    price: "$700",
    description: "Equal parts espresso, milk, foam",
    photo: "image/22698480_s.jpg",
  },
  {
    name: "ミルク",
    price: "$500",
    description: "Plain milk",
    photo: "image/23123882_s.jpg",
  },
  {
    name: "ココア",
    price: "$700",
    description: "Hot chocolate drink",
    photo: "image/748481_s.jpg",
  },
  {
    name: "オレンジジュース",
    price: "$500",
    description: "Fresh orange juice",
    photo: "image/4446754_s.jpg",
  },
  {
    name: "コーラ",
    price: "$500",
    description: "Carbonated cola drink",
    photo: "image/23466585_s.jpg",
  },
  {
    name: "フレンチトースト",
    price: "$900",
    description: "French toast dish",
    photo: "image/142772_s.jpg",
  },

  {
    name: "ピザトースト",
    price: "$800",
    description: "Pizza toast dish",
    photo: "image/23158355_s.jpg",
  },

  {
    name: "日本のケーキ",
    price: "$600",
    description: "Japanese cake dish",
    photo: "image/23396792_s.jpg",
  },

  {
    name: "サラダ",
    price: "$500",
    description: "Fresh and crisp salad",
    photo: "image/23169633_s.jpg",
  },

  {
    name: "モーニングセット",
    price: "$1000",
    description: "Breakfast set with assorted items",
    photo: "image/23157889_s.jpg",
  },

  {
    name: "ランチセット",
    price: "$1100",
    description: "Set meal for lunchtime",
    photo: "image/23584947_s.jpg",
  },
];

document.addEventListener("DOMContentLoaded", () => {
  const menuName = document.getElementById("menuName");
  const menuDescription = document.getElementById("menuDescription");
  const menuPrice = document.getElementById("menuPrice");
  const menuImage = document.getElementById("menuImage");

  btns.forEach((btn) => {
    btn.addEventListener("click", function () {
      const itemName = btn.getAttribute("data-name");
      const item = menuItems.find((i) => i.name === itemName);

      if (item) {
        menuName.textContent = item.name;
        menuDescription.textContent = item.description;
        menuPrice.textContent = item.price;
        menuImage.src = item.photo;
        menuModal.style.display = "block";
        document.body.style.overflow = "hidden";
      }
    });
  });
});
