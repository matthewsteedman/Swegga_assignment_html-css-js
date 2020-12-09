function myFunction() {
  // called and stored the female and male quantities in a variable
  // male_quantity and female_quatity

  console.log("click");
  let male_quantity = document.getElementById("Mquantity").value;
  let female_quantity = document.getElementById("Fquantity").value;

  // stored the fixed amount of both female and male in variable
  // variable name F_amt - female fixed amount
  // variable name M_amt - male fixed amount
  // multiplied the female quantities by the fixed amount set
  // multiplied the male quantities by the fixed amount set

  let F_amt = 150.95 * female_quantity;
  let M_amt = 180.95 * male_quantity;

  // created a variable  named total
  // within the variable total i addeded the total female amount and total male amount.

  let total = F_amt + M_amt;

  // the symbol code for rands

  r = "&#82;";

  // calling the total female lablel and storing the full amount in it and moving the decimal to two places
  // calling the total male lablel and storing the full amount in it and moving the decimal to two places
  // calling the total variable created above and storing it in a lable called total_amount

  document.getElementById("total_f").innerHTML = r + F_amt.toFixed(2);
  document.getElementById("total_m").innerHTML = r + M_amt.toFixed(2);
  document.getElementById("total_amount").innerHTML = r + total.toFixed(2);
}
