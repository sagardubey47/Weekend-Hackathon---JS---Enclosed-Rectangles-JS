// // var rec = {
// // 	top: '25px',
// // 	left: '96px',
// // 	width: '64px',
// // 	height: '96px',
// //      children: [] 
// // }

// function updateStructure(rec1,rec2){
// 	//write your code
	
// 	 if(includes(rec1, rec2)) {
//            const relativeDim = relative(rec1, rec2);
//            return { ...rec1, children: [relativeDim]};
//       } else if(includes(rec2, rec1)) {
//            const relativeDim = relative(rec2, rec1);
//            return { ...rec2, children: [relativeDim]};
//       } else {
//            return {...rec1};
//       }
// }

// function includes(rec1, rec2) {
//      const rec1A = normalise(rec1);
//      const rec2B = normalise(rec2);

//      if(
//          rec1A.x1 <= rec2B.x1 &&
//          rec1A.y1 <= rec2B.y1 &&
//          rec1A.x2 >= rec2B.x2 &&
//          rec1A.y2 >= rec2B.y2
//      ) {
//         return true;
//      } else {
//         return false;
//      }
// }

// function relative(rec1, rec2) {
//     const rec1A = normalise(rec1);
//     const rec2B = normalise(rec2);
    
//     const res = {
//          children : rec2.children
//     };  

//     if(rec2.top) {
//          res.top = `${rec2B.x1 - rec1A.x1}px`;
//     }

//     if(rec2.left) {
//          res.left = `${rec2B.y1 - rec1A.y1}px`;
//     }

//      if(rec2.bottom) {
//          res.bottom = `${rec1A.x2 - rec2B.x2}px`;
//     }

//     if(rec2.right) {
//          res.right = `${rec1A.y2 - rec2B.y2}px`;
//     }

//      if(rec2.height) {
//          res.height = rec2B.height;
//     }

//     if(rec2.width) {
//          res.width = rec2B.width;
//     }
    
//     return res;
// }


// const T = 0;
// const W = 0;

// function normalise(rec) {
//     return {
//          x1: rec.top ? parseInt(rec.top) : T - parseInt(rec.bottom) + parseInt(rec.height),
//          y1: rec.left ? parseInt(rec.left) : W - parseInt(rec.right) + parseInt(rec.width),
//          x2: rec.bottom ? T - parseInt(rec.bottom) : parseInt(rec.top) + parseInt(rec.height),
//          y2: rec.right ? W - parseInt(rec.right) : parseInt(rec.left) + parseInt(rec.width)
//     }
// }

// module.exports = updateStructure;
 
const { Children } = require("react");
function isInside(a, b) {
	let ans = {};
	let child = {};
	let t1 = a.top ? parseInt(a.top) : 0;
	let b1 = a.bottom ? parseInt(a.bottom) : 0;
	let l1 = a.left ? parseInt(a.left) : 0;
	let r1 = a.right ? parseInt(a.right) : 0;
	let h1 = a.height ? parseInt(a.height) : 0;
	let w1 = a.width ? parseInt(a.width) : 0;
	let t2 = b.top ? parseInt(b.top) : 0;
	let b2 = b.bottom ? parseInt(b.bottom) : 0;
	let l2 = b.left ? parseInt(b.left) : 0;
	let r2 = b.right ? parseInt(b.right) : 0;
	let h2 = b.height ? parseInt(b.height) : 0;
	let w2 = b.width ? parseInt(b.width) : 0;
	if (t2 >= t1 && l2 >= l1 && r2 >= r1 && b2 >= b1)
	{
	   if ((a.height &&
		(t1 + h1 >= t2 + h2 && b1 + h1 >= b2 + h2) &&
		(l1 + w1 >= l2 + w2 && r1 + w1 >= r2 + w2) )||
		(!a.height))
	   	{
			if (a.top) {
				child.top = `${t2 - t1}px`;
			}
			if (a.left) {
				child.left = `${l2 - l1}px`;
			}
			if (a.bottom) {
				child.bottom = `${b2 - b1}px`;
			}
			if (a.right) {
				child.right = `${r2 - r1}px`;
			}
			if (a.height) {
				child.height = `${h2}px`;
				child.width = `${w2}px`;
			}
			return ans = { ...a, children: [{ ...child, children: [] }] };
		}
	}
	return -1;
}
function updateStructure(rec1, rec2) {
	let res = isInside(rec1, rec2);
	if (res !== -1) {
		return res;
	}
	res = isInside(rec2, rec1);
	if (res !== -1) {
		return res;
	}
	return rec1;
}
module.exports = updateStructure;