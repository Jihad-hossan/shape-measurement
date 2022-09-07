// get elements
const area_form = document.getElementById('area_form');
const area_type = document.getElementById('area-type');
const msg_details = document.querySelector('.msg-details');
const rec = document.querySelector('.rec');
const square = document.querySelector('.square');
const triangle = document.querySelector('.triangle');
const circle = document.querySelector('.circle');

area_type.onchange = () => {
    if(area_type.value == 'rectangle'){
        rec.style.display = 'block';
    }else{
        rec.style.display = '';
    }

    if(area_type.value == 'circle'){
        circle.style.display = 'block';
    }else{
        circle.style.display = '';
    }

    if(area_type.value == 'square'){
        square.style.display = 'block';
    }else{
        square.style.display = '';
    }
    
    if(area_type.value == 'triangle'){
        triangle.style.display = 'block';
    }else{
        triangle.style.display = '';
    }
}

// Onsubmit action
area_form.onsubmit = (event) => {
    event.preventDefault();
    
    // Using Function
    if(area_type.value == 'rectangle'){
        let length = area_form.querySelector('input[name="length"]').value;
        let width = area_form.querySelector('input[name="width"]').value;

        msg_details.innerHTML = areaCal(area_type.value, length, width);
    }else if(area_type.value == 'circle'){
            let radius = area_form.querySelector('input[name="radius"]').value;
           
            msg_details.innerHTML = areaCal(area_type.value, radius);
    }else if(area_type.value == 'square'){
        let side = area_form.querySelector('input[name="side"]').value;
       
        msg_details.innerHTML = areaCal(area_type.value, side);
    }else if(area_type.value == 'triangle'){
        let base = area_form.querySelector('input[name="base"]').value;
        let height = area_form.querySelector('input[name="height"]').value;
       
        msg_details.innerHTML = areaCal(area_type.value, base, height);
    }

    // Without using function
    // if(area_type.value == 'rectangle'){
    //     let length = area_form.querySelector('input[name="length"]').value;
    //     let width = area_form.querySelector('input[name="width"]').value;
    //     let rec_area = length * width;
    //     msg_details.innerHTML = `${ rec_area } m<sup>2</sup>`;
    // }else if(area_type.value == 'circle'){
    //     let radius = area_form.querySelector('input[name="radius"]').value;
    //     let cir_area = 3.1416 * radius * radius;
    //     msg_details.innerHTML = `${ cir_area } m<sup>2</sup>`;
    // }else if(area_type.value == 'square'){
    //     let side = area_form.querySelector('input[name="side"]').value;
    //     let sqr_area = side * side;
    //     msg_details.innerHTML = `${ sqr_area } m<sup>2</sup>`;
    // }else if(area_type.value == 'triangle'){
    //     let base = area_form.querySelector('input[name="base"]').value;
    //     let height = area_form.querySelector('input[name="height"]').value;
    //     let tri_area = .5 * base * height;

    //     msg_details.innerHTML = `${ tri_area } m<sup>2</sup>`;
    // }
}
