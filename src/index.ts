// Question 1
const createCheckDigit = (membershipId: string): any => {
  let sum: number = 0;
  let parsed: number = parseInt(membershipId, 10);

  if (parsed > 9) {
    for (let i = 0; i <= membershipId.length - 1; i++) {
      let selected = membershipId.slice(i, i + 1);
      sum += parseInt(selected, 10);
    }
    if (sum > 9) {
      return createCheckDigit(sum.toString());
    } else return sum;
  }
};
// console.log(createCheckDigit("111111111111"));

// Question 2
let testObj = { name: "amine", age: 23 };

const removeProperty = (obj: any, prop: any): boolean => {
  if (obj[prop]) {
    delete obj[prop];
    return true;
  } else return false;
};
// console.log(removeProperty(testObj, "name"));

// Question 3: format from M/D/YYYY to YYYYMMDD
const formatDate = (userDate: string): string => {
  const str = userDate.split("/");

  let Month: string = "";
  let Day: string = "";
  let Year: string = str[2];

  if (str[0].length !== 2) {
    Month = "0" + str[0];
  } else Month = str[0];

  if (str[1].length !== 2) {
    Day = "0" + str[1];
  } else Day = str[1];

  return `${Year}${Month}${Day}`;
};
// console.log(formatDate("1/1/2020"));

// Question 4
const setup = () => {
  const parent = document.getElementsByClassName("image")[0];
  parent.remove();
};

// Example case.
document.body.innerHTML = `
<div class="image">
  <img src="https://goo.gl/kjzfbE" alt="First">
  <button class="remove">X</button>
</div>
<div class="image">
  <img src="https://goo.gl/d2JncW" alt="Second">
  <button class="remove">X</button>
</div>`;

// setup();

const el: HTMLButtonElement = document.getElementsByClassName("remove")[0];

el.onclick = () => {
  setup();
};

// console.log(document.body.innerHTML);
