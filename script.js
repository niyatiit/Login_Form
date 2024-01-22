const btn1 = document.querySelector('#btn1');
const btn2 = document.querySelector('#btn2');
const btn3 = document.querySelector('#btn3');
const btn4 = document.querySelector('#btn4');

const box1 = document.querySelector('#box');
const box2 = document.querySelector('#sec_box');

const conform = document.querySelector('#conform');
btn1.addEventListener("click", () => {
    box1.style.display = 'block';
    box2.style.display = 'none';

})

function showsecondBox() {
    btn2.addEventListener("click", () => {
        box1.style.display = 'none';
        box2.style.display = 'block';
    })

}
showsecondBox();


btn3.addEventListener("click", () => {
    const input = document.querySelector('.firstInput').value;
    const input2 = document.querySelector('.firstInput2').value;
    if (input === "") {
        alert("Please Fill up the Form ")
    }
    else if (input2 == "") {
        alert("Please Enter the Password");
    }
    else {
        conform.innerHTML = "You are Succesfully Login Account";
    }
})


btn4.addEventListener("click", () => {
    const second_input1 = document.querySelector('.second_input1').value;
    const second_input2 = document.querySelector('.second_input2').value;
    const second_input3 = document.querySelector('.second_input3').value;
    const second_input4 = document.querySelector('.second_input4').value;

    const Main_final = document.querySelector('#main_Final');

    if (second_input1 == "") {
        alert("Please Enter the Name ")
    }
    else if (second_input2 == "") {
        alert("Please Enter the Emial")
    }
    else if (second_input3 == "") {
        alert("Please Enter the Password ")
    }
    else if (second_input4 == "") {
        alert("Please Enter the Confirm Password")

    }
    else {
        if (second_input3 == second_input4) {
            Main_final.innerHTML = "You Are Final Login "
            box2.style.display = 'none';
        }
        else {
            alert("Please Enter the Corect Password because Confirm Password Dose not exit ");
        }

    }
})


