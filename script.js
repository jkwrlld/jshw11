// Створіть об'єкт "bankAccount" з властивостями "ownerName", "accountNumber", "balance". Додайте до об'єкту метод "deposit", який дозволяє додавати гроші на рахунок, та метод "withdraw", який дозволяє знімати гроші з рахунку. Використайте cofirm() щоб поповнити рахунок або отримати готівку та prompt() щоб дізнатися сумму. Після проведення операції виводити повідомлення про залишок на рахунку.

const bankAccount = {
  ownerName: "1",
  currency: "ERO",
  balance: 100000,

  withDraw(money) {
    if (bankAccount.balance < money) {
      console.error("помилка");
      return;
    }

    bankAccount.balance -= money;
    alert(`Баланс гаманця:${bankAccount.balance}`);
  },
  deposit(sum) {
    bankAccount.balance += sum;
    alert(`Баланс гаманця:${bankAccount.balance}`);
  },
};
const questionAboutDeposit = confirm("поповнити гаманець");
if (questionAboutDeposit) {
  const questionMany = Number(prompt("cкількі"));
  bankAccount.deposit(questionMany);
  console.log(bankAccount);
}

console.log(questionAboutDeposit);

const questionAboutWithDraw = confirm("зняти кошти");
if (questionAboutWithDraw) {
  const question = prompt("скільки коштів хочете зняти?");
  bankAccount.withDraw(Number(question));
}

// Створіть об'єкт "weather" з властивостями "temperature", "humidity", "windSpeed". Додайте до об'єкту метод, який повертає "true", якщо температура нижче 0 градусів Цельсія, та "false", якщо температура вище або рівна 0 градусів Цельсія. Температуру потрібно отримати з prompt(). Якщо метод повернув "true" вивести повідомлення “температура нижче 0 градусів Цельсія” і навпаки

const weather = {
  temperature: 11,
  humidity: 0.7,
  windSpeed: 3.5,
  gradCelcius(grad) {
    if (grad < 0) {
      return true;
    } else if (grad == 0) {
      return "Температура 0 градусів";
    } else {
      return false;
    }
  },
};
const usetemp = Number(prompt("Введіть температуру вашої погоди"));
if (weather.gradCelcius(usetemp)) {
  console.log("Температура нище 0 aбо 0");
} else {
  console.log("Температура вище 0");
}

// Створіть об’єкт "user", який буде мати властивості "name", "email", "password". Додайте метод "login", який буде перевіряти правильність введеного email та password.

const user = {
  name: "python",
  password: "1234",
  email: "1234",

  login(inputemail, inputpassword) {
    if (inputemail === this.email && inputpassword === this.password) {
      console.log("ласкаво просимо");
      return true;
    } else {
      console.log("нет");
    }
  },
};
const login = prompt("логін");
const password = prompt("пароль");
user.login(login, password);

// Створіть об'єкт "movie" з властивостями "title", "director", "year", "rating". Додайте до об'єкту метод, який повертає "true", якщо рейтинг фільму вище 8, та "false", якщо рейтинг фільму 8 або нижче. Вивести значення властивостей в консоль.

const movie = {
  title: "Spider-Man:No Way Home",
  director: "Jon Watts",
  year: "2021",
  rating: "8.1",
  ratingBig() {
    if (movie.rating > 8) {
      return true;
    } else {
      return false;
    }
  },
};

const questionCheck = confirm("Хочете перевірити, чи рейтинг більше 8?");
if (questionCheck) {
  if (movie.ratingBig()) {
    alert("True, рейтинг > 8");
  } else {
    alert("False, рейтинг < 8");
  }
}

console.log(`Ваш фільм ${movie.title}, його рейтинг складає ${movie.rating}`);
console.log(questionCheck);
