// ১. নতুন একটা স্ক্রিপ্ট ফাইল খুলবে। সেটাকে index.html এর সাথে কানেক্ট করতে পারো কিনা?
console.log("hello");

// ২. যতগুলা ইলিমেন্টে h2 ট্যাগ আছে সেগুলাকে সিলেক্ট করে তার লেখাগুলার কালার lightblue করেদিতে পারো কিনা।

const h2 = document.getElementsByTagName("h2");
for (const h2Element of h2) {
  h2Element.style.color = "darkblue";
}

// ৩. ওই ওয়েবসাইট এ backpack আইডি দিয়ে একটা সেকশন আছে। সেই সেকশনের ব্যাকগ্রাউন্ড কালার tomato করে দিতে পারো কিনা।

const backpack = document.getElementById("backpack");
backpack.style.backgroundColor = "lightblue";

// ৪. card ক্লাস যতগুলা জায়গায় ইউজ করা হয়েছে সবগুলা কার্ড এর বর্ডার রেডিয়াস ৩০px করে দিতে পারো কিনা
const cards = document.getElementsByClassName("card");
for (const card of cards) {
  card.style.borderRadius = "30px";
}

// ৫. কোন একটা ফাংশন লিখো। সেটার ভিতরে কনসোল লগ হবে। এবং সেই ফাংশন টা ক্লিক হ্যান্ডলার হিসেবে কোন একটা বাটনে যোগ করো

function handleBtn() {
  document.body.style.backgroundColor = "lightblue";
  document;
}

// ৬. এইবার নতুন করে সবগুলা buy now বাটনে এমন একটা ইভেন্ট হ্যান্ডলার যোগ করো। যাতে যেকোন একটা buy now বাটনে চাপ দিলে সেটা ওয়েবসাইট থেকে রিমুভ হয়ে যায়। একটু চিন্তা করে করার চেষ্টা করো।
const buttons = document.getElementsByClassName("hide-button");
for (const button of buttons) {
  button.addEventListener("click", function () {
    button.style.display = "none";
  });
}

// ৭. একদম নিচে একটা LET'S STAY IN TOUCH নামে একটা জিনিস আছে। সেখানে তুমি submit বাটনটা disable করে ফেলবে। তারপর কেউ যদি উপরে input ফিল্ডে যদি একজাক্টলি email শব্দটা লিখে। তাহলে বাটন একটিভ হবে। আর যদি অন্য কিছু লিখে তাহলে বাটনটা একটিভ হবে না।

const deleteConfirm = document.getElementById("delete-confirm");
const submitButton = document.getElementById("submit-button");
deleteConfirm.addEventListener("keyup", function (event) {
  if (event.target.value == "email") {
    submitButton.removeAttribute("disabled");
  } else {
    submitButton.setAttribute("disabled", true);
  }
});

// ৮. (অপশনাল) একটা মজার চ্যালেঞ্জ। কোন একটা ইমেজ এর উপরে mouseenter করলে সেই ইমেজটা চেইঞ্জ হয়ে যাবে। একটু গুগলে সার্চ দিয়ে দেখো। জিনিসটা কিভাবে করা যেতে পারে।
//
// ------------- with id---------------
// const changeImg = document.getElementById("change-img");
// changeImg.addEventListener("mouseenter", function () {
//   changeImg.src = "images/pexels-photo-4164086.jpeg";
// });

// changeImg.addEventListener("mouseout", function () {
//   changeImg.src = "images/bags/bag-1.png";
// });

//------------------- with class---------------

const images = document.getElementsByClassName("card-img-top");
for (const image of images) {
  image.addEventListener("mouseenter", function () {
    image.src = "images/pexels-photo-5063324.jpeg";
  });

  image.addEventListener("mouseout", function () {
    image.src = "images/pexels-photo-320014.jpeg";
  });
}
// ৯. (অপশনাল) নিচের যে LET'S STAY IN TOUCH আছে সেখানে কোন খালি জায়গায় ডাবল ক্লিক করলে ঐটার পিছনের কালার চেইঞ্জ হয়ে যাবে।

const subscribeSection = document.getElementById("subscribe");
console.log(subscribeSection);

subscribeSection.addEventListener("dblclick", function () {
  subscribeSection.style.backgroundColor = "lightcoral";
});
