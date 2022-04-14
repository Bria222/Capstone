/* eslint-disable no-undef */
/* eslint-disable camelcase */
let price; let snacks_price;
let total = 0;
function GetTicket(name, T__size, snacks, topping, total) {
  this.name = name;
  this.T__size = T__size;
  this.snacks = snacks;
  this.topping = topping;
  this.total = total;
}

// proceed button
$(document).ready(() => {
  // $("button.proceed").click(function(){
  //   $("button.proceed").hide();
  //   $("#information").hide();
  //   $("div.choise").slideDown(1000);

  // });
  $('button.proceed').attr('class','btn btn-success');
  $('button.proceed').click((event) => {
   const pT__size = $('#T__size option:selected').val();
    const psnacks = $('#snacks option:selected').val();
    const ptopping = [];
    $.each($("input[name='toppings']:checked"), function () {
      ptopping.push($(this).val());
    });
    console.log(ptopping.join(', '));

    switch (pT__size) {
      case '0':
        price = 0;
        break;
      case 'VVIP':
        price = 1200;

        break;
      case 'VIP':
        price = 850;
        console.log(`The price is ${price}`);
        break;
      case 'REGULAR':
        price = 600;
        break;
      default:
        console.log('error');
    }
    switch (psnacks) {
      case '0':
        snacks_price = 0;
        break;
      case 'soda':
        snacks_price = 200;
        break;
      case 'biscuits':
        snacks_price = 250;
        break;
      case 'crips-free':
        snacks_price = 180;
        break;
      default:
        console.log('No price');
    }
    const topping_value = ptopping.length * 50;
    console.log(`toppins value${topping_value}`);

    if ((pT__size === '0') && (psnacks === '0')) {
      console.log('nothing selected');
      $('button.proceed').show();
      $('#information').show();
      $('div.choise').hide();
      alert('Please select your ticket type');
    } else {
      $('button.proceed').hide();
      $('#information').hide();
      $('div.choise').slideDown(1000);
    }

    total = price + snacks_price + topping_value;
    console.log(total);
    let checkoutTotal = 0;
    checkoutTotal += total;

    $('#person').html($('.name option:selected').val());
    $('#ticket-type').html($('#T__size option:selected').val());
    $('#favourite-snack').html($('#snacks option:selected').val());
    $('#topping').html(ptopping.join(', '));
    $('#totals').html(total);

    // Add ticket button
    $('button.repeatTransaction').click(() => {
      const pname = $('.name option:selected').val();
      const pT__size = $('#T__size option:selected').val();
      const psnacks = $('#snacks option:selected').val();
      const ptopping = [];
      $.each($("input[name='toppings']:checked"), function () {
        ptopping.push($(this).val());
      });
      console.log(ptopping.join(', '));
      switch (pT__size) {
        case '0':
          price = 0;
          break;
        case 'VVIP':
          price = 1200;

          break;
        case 'VIP':
          price = 850;
          console.log(`The price is ${price}`);
          break;
        case 'REGULAR':
          price = 600;
          break;
        default:
          console.log('error');
      }
      switch (psnacks) {
        case '0':
          snacks_price = 0;
          break;
        case 'soda':
          snacks_price = 200;
          break;
        case 'biscuits':
          snacks_price = 150;
          break;
        case 'crips-free':
          snacks_price = 180;
          break;
        default:
          console.log('No price');
      }
      const topping_value = ptopping.length * 50;
      console.log(`toppins value${topping_value}`);
      total = price + snacks_price + topping_value;
      console.log(total);

      checkoutTotal += total;
      console.log(checkoutTotal);
      // constractor function
      const newOrder = new GetTicket(pname, pT__size, psnacks, ptopping, total);

      $('#ordersmade').append(`<tr><td id="person">${newOrder.name}</td><td id="ticket-type">${newOrder.T__size}</td><td id="favourite-snack">${newOrder.snacks}</td><td ">${newOrder.topping}</td><td id="totals">${newOrder.total}</td></tr>`);
      console.log(newOrder);
    });
    // Checkout button
    $('button#checkout').click(() => {
      $('button#checkout').hide();
      $('button.repeatTransaction').hide();
      $('button.deliver').slideDown(1000);
      $('#addedprice').slideDown(1000);
      console.log(`Your total bills is sh. ${checkoutTotal}`);
      $('#pizzatotal').append(`Your bill is sh. ${checkoutTotal}`);
    });

    // home delivery button
    $('button.deliver').click(() => {
      $('.ticket-details').hide();
      $('.choise h2').hide();
      $('.delivery').slideDown(1000);
      $('#addedprice').hide();
      $('button.deliver').hide();
      $('#pizzatotal').hide();
      const deliceryamount = checkoutTotal + 10;
      console.log(`You will pay sh. ${deliceryamount} on delivery`);
      $('#totalbill').append(`Your bill plus delivery fee is: ${deliceryamount}`);
    });

    // when one clicks place order button
    $('button#final-order').click((event) => {
      event.preventDefault();

      $('#pizzatotal').hide();
      $('.delivery').hide();
      $('button#final-order').hide();
      const deliceryamount = checkoutTotal + 150;
      console.log(`Final Bill is: ${deliceryamount}`);
      const person = $('input#name').val();

      // eslint-disable-next-line eqeqeq
      if ($('input#name').val() && $('input#phone').val() && $('input#ticket').val() != '') {
        $('#finallmessage').append(`${person}, We have recieved your  application please pay due  amount of   ${deliceryamount}`);
        $('#totalbill').hide();
        $('#finallmessage').slideDown(1200);
      } else {
        alert('Please fill ticket delivery details!');
        $('.delivery').show();
        $('button#final-order').show();
      }
    });
    event.preventDefault();
  });
});