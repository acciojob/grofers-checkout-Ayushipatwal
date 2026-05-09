const getSumBtn = document.createElement("button");
getSumBtn.innerText = "Get Total Price";
document.body.appendChild(getSumBtn);

const getSum = () => {
  const prices = document.querySelectorAll(".prices");

  let total = 0;

  prices.forEach(price => {
    total += Number(price.textContent);
  });

  let ans = document.getElementById("ans");

  if (!ans) {
    ans = document.createElement("h3");
    ans.id = "ans";
    document.body.appendChild(ans);
  }

  ans.innerText = total;
};

getSumBtn.addEventListener("click", getSum);