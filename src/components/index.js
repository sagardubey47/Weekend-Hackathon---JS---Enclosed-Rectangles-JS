// var rec = {
// 	top: '25px',
// 	left: '96px',
// 	width: '64px',
// 	height: '96px',
//      children: [] 
// }

function updateStructure(rec1,rec2){
	//write your code
	
	 if(includes(rec1, rec2)) {
           const relativeDim = relative(rec1, rec2);
           return { ...rec1, children: [relativeDim]};
      } else if(includes(rec2, rec1)) {
           const relativeDim = relative(rec2, rec1);
           return { ...rec2, children: [relativeDim]};
      } else {
           return {...rec1};
      }
}

function includes(rec1, rec2) {
     const rec1A = normalise(rec1);
     const rec2B = normalise(rec2);

     if(
         rec1A.x1 <= rec2B.x1 &&
         rec1A.y1 <= rec2B.y1 &&
         rec1A.x2 >= rec2B.x2 &&
         rec1A.y2 >= rec2B.y2
     ) {
        return true;
     } else {
        return false;
     }
}

function relative(rec1, rec2) {
    const rec1A = normalise(rec1);
    const rec2B = normalise(rec2);
    
    const res = {
         children : rec2.children
    };  

    if(rec2.top) {
         res.top = `${rec2B.x1 - rec1A.x1}px`;
    }

    if(rec2.left) {
         res.left = `${rec2B.y1 - rec1A.y1}px`;
    }

     if(rec2.bottom) {
         res.bottom = `${rec1A.x2 - rec2B.x2}px`;
    }

    if(rec2.right) {
         res.right = `${rec1A.y2 - rec2B.y2}px`;
    }

     if(rec2.height) {
         res.height = rec2B.height;
    }

    if(rec2.width) {
         res.width = rec2B.width;
    }
    
    return res;
}


const T = 0;
const W = 0;

function normalise(rec) {
    return {
         x1: rec.top ? parseInt(rec.top) : T - parseInt(rec.bottom) + parseInt(rec.height),
         y1: rec.left ? parseInt(rec.left) : W - parseInt(rec.right) + parseInt(rec.width),
         x2: rec.bottom ? T - parseInt(rec.bottom) : parseInt(rec.top) + parseInt(rec.height),
         y2: rec.right ? W - parseInt(rec.right) : parseInt(rec.left) + parseInt(rec.width)
    }
}

module.exports = updateStructure;
 