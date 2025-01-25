document.addEventListener("scroll", () => {
  console.log("scroling 1");
  const cards1 = document.querySelector(".cards1"); // בוחר את האלמנט
  const rect = cards1.getBoundingClientRect(); // בודק את המיקום שלו יחסית למסך

  if (rect.top < window.innerHeight && rect.bottom > 0) {
    // אם האלמנט נכנס ל-viewport
    cards1.classList.add("visible");
  } else {
    // אם האלמנט יוצא מה-viewport (אופציונלי)
    cards1.classList.remove("visible");
  }
});

document.addEventListener("scroll", () => {
  console.log("scroling 2");
  const cards2 = document.querySelector(".cards2"); // בוחר את האלמנט
  const rect = cards2.getBoundingClientRect(); // בודק את המיקום שלו יחסית למסך

  if (rect.top < window.innerHeight && rect.bottom > 0) {
    // אם האלמנט נכנס ל-viewport
    cards2.classList.add("visible");
  } else {
    // אם האלמנט יוצא מה-viewport (אופציונלי)
    cards2.classList.remove("visible");
  }
});

document.addEventListener("scroll", () => {
  console.log("scroling 3");
  const jerusalemNumber = document.querySelector(".jerusalem-number"); // בוחר את האלמנט
  const rect = jerusalemNumber.getBoundingClientRect(); // בודק את המיקום שלו יחסית למסך

  if (rect.top < window.innerHeight && rect.bottom > 0) {
    // אם האלמנט נכנס ל-viewport
    jerusalemNumber.classList.add("visible");
  } else {
    // אם האלמנט יוצא מה-viewport (אופציונלי)
    jerusalemNumber.classList.remove("visible");
  }
});

document.addEventListener("scroll", () => {
  console.log("scroling 4");
  const cardLeft = document.querySelector(".cardsLeft");
  const cardRight = document.querySelector(".cardsRight");
  const rectLeft = cardLeft.getBoundingClientRect();  // שינוי: בדיקת המיקום של cardLeft במקום jerusalemNumber

  if (rectLeft.top < window.innerHeight && rectLeft.bottom > 0) {
    cardLeft.classList.add("visible");
    cardRight.classList.add("visible");
  } else {
    cardLeft.classList.remove("visible");
    cardRight.classList.remove("visible");
  }
});

const sideMenu = document.getElementById('mobile-menu');
const hamburger = document.getElementById('hamburger');
const buttonClose = document.getElementById('close');

hamburger.addEventListener('click', function() {
  // מחזירים את התפריט למצב רגיל לפני הפתיחה
  sideMenu.style.transition = 'none'; // מסירים את האנימציה הקודמת
  sideMenu.style.transform = 'translateX(0)';
  sideMenu.style.opacity = '1';

  sideMenu.style.display = 'flex';
  hamburger.style.display = 'none';
  
  // מוסיפים אנימציה מחדש לאחר רגע, כך שהיא תתבצע בזמן הבא שלפתיחה מחדש
  setTimeout(function() {
    sideMenu.style.transition = 'transform 1s, opacity 1s'; // מוסיפים את האנימציה מחדש
  }, 10);
});

buttonClose.addEventListener('click', function() {
  // מפעילים את האנימציה של החלקה החוצה
  sideMenu.style.transition = 'transform 1s, opacity 1s';
  sideMenu.style.transform = 'translateX(100%)';
  sideMenu.style.opacity = '0';

  // לאחר סיום האנימציה, נסיר את התצוגה
  setTimeout(function() {
    sideMenu.style.display = 'none'; // הסתרת התפריט לאחר האנימציה
    hamburger.style.display = 'flex'; // הצגת ההמבורגר
  }, 1000); // מחכים עד שהאנימציה תסתיים
});




