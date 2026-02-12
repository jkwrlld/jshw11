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
