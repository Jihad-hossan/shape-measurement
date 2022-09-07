// Area Calculator Function
const areaCal = (type, val1, val2 = null) => {
     if(type == 'rectangle'){
        return `The area of this Rectangle is <strong style="color: red;">${ val1 * val2 }</strong> m<sup>2</sup>`;
     }else if(type == 'circle'){
        return `The area of this Circle is <strong style="color: red;">${ 3.1416 * val1 }</strong> m<sup>2</sup>`;
     }else if(type == 'square'){
        return `The area of this Square is <strong style="color: red;">${ val1 * val1 }</strong> m<sup>2</sup>`;
     }else if(type == 'triangle'){
        return `The area of this Triangle is <strong style="color: red;">${.5 * val1 * val1 }</strong> m<sup>2</sup>`;
     }
}